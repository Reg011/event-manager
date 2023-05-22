import React from "react";
import DatePicker from "react-datepicker";

const SubDatePickerInput = ({ onChange, name, selected, className }) => {
  return (
    <>
      <DatePicker
        name={name}
        selected={selected}
        onChange={onChange}
        showYearDropdown
        scrollableYearDropdown
        showTimeSelect
        dateFormat="Pp"
        className={className}
      />
    </>
  );
};

export default SubDatePickerInput;
