import React from "react";
import Select from "react-select";

// data
import { countriesData } from "./Countries";

const CountrySelect = ({ selectedCountry, setSelectedCountry }) => {
  const changeHandler = (selected) => {
    setSelectedCountry(selected.value);
  };

  return (
    <div>
      <Select
        placeholder={"Select Country"}
        options={countriesData}
        value={selectedCountry.value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default CountrySelect;
