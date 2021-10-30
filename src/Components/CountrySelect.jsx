import React from "react";
import Select from "react-select";

// data
import { countriesData } from "./Countries";

const CountrySelect = ({
  selectedCountry,
  setSelectedCountry,
  year,
  setYear,
}) => {
  const changeHandler = (selected) => {
    setSelectedCountry(selected.value);
  };

  const years = (startYear = 1980, endYear) => {
    var currentYear = endYear || new Date().getFullYear();
    var years = [];
    for (var i = startYear; i <= currentYear; i++) {
      years.push({
        label: i,
        value: i,
      });
    }
    return years;
  };

  return (
    <div className="select__area">
      <Select
        placeholder={"Select Country"}
        options={countriesData}
        value={selectedCountry.value}
        onChange={changeHandler}
      />
      <Select
        placeholder={"Select Year"}
        options={years()}
        value={year.value}
        onChange={(selected) => setYear(selected.value)}
      />
    </div>
  );
};

export default CountrySelect;
