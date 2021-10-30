import { useState, useEffect } from "react";
import axios from "axios";

// components
import Navbar from "./Components/Navbar";
import BigCalandar from "./Components/BigCalendar";
import CountrySelect from "./Components/CountrySelect";
import Loading from "./Components/Loading";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getHolidays } from "./redux/actions/calenderActions";

const App = () => {
  const { loading } = useSelector((state) => state.holidaysReducer);
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [year, setYear] = useState("2021");

  useEffect(() => {
    const body = {
      country: selectedCountry,
      year,
    };
    dispatch(getHolidays(body));
  }, [selectedCountry, year]);

  return (
    <>
      {loading && <Loading />}
      <Navbar />
      <div className="container">
        <h1>Lets Find the Holidays</h1>
        <CountrySelect
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          year={year}
          setYear={setYear}
        />
        <BigCalandar selectedCountry={selectedCountry} />
      </div>
    </>
  );
};

export default App;
