import React from "react";
import DatePicker from "react-datepicker";

const DatePickerInput = ({ onChange, name, selected }) => {
  return (
    <>
      <DatePicker
        name={name}
        selected={selected}
        onChange={onChange}
        dateFormat="MMMM d, yyyy"
        showYearDropdown
        scrollableYearDropdown
      />
    </>
  );
};

export default DatePickerInput;
