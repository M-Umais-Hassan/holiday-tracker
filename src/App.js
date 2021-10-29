import { useState, useEffect } from "react";
import axios from "axios";

// components
import Navbar from "./Components/Navbar";
import BigCalandar from "./Components/BigCalendar";
import CountrySelect from "./Components/CountrySelect";
import Loading from "./Components/Loading";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  holidaysRequest,
  holidaysSuccess,
  holidaysFailure,
} from "./redux/actions/calenderActions";

const App = () => {
  const apiKey = "31f3fc99343c3a84802ec02f40342c154220d093";
  const apiEndPoint = "https://calendarific.com/api/v2/holidays";

  const { loading } = useSelector((state) => state.holidaysReducer);
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const getData = async () => {
      let eventsList = [];
      dispatch(holidaysRequest());
      await axios
        .get(
          `${apiEndPoint}?&api_key=${apiKey}&country=${selectedCountry}&year=2021`
        )
        .then((res) => {
          res.data.response &&
            res.data.response.holidays &&
            res.data.response.holidays.forEach((data) => {
              eventsList.push({
                allDay: true,
                start: data.date.iso,
                end: data.date.iso,
                title: data.name,
              });
            });
          dispatch(holidaysSuccess(eventsList));
        })
        .catch((err) => {
          dispatch(holidaysFailure(err));
        });
    };

    getData();
  }, [selectedCountry]);

  return (
    <>
      {loading && <Loading />}
      <Navbar />
      <div className="container">
        <CountrySelect
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <BigCalandar selectedCountry={selectedCountry} />
      </div>
    </>
  );
};

export default App;
