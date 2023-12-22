/* eslint-disable no-unused-vars */
import { Input } from "reactstrap";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
export default function SearchBar({ placeholder, value, onChange}) {
  const [val, setVal] = useState('');

  const debouncedOnChange = useDebouncedCallback(
    (event) => {
      setVal(event.target.value);
      onChange(event.target.value);
    },
    500
  );


  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={debouncedOnChange}
      style={{ width: "85%", padding: "10px"}}
    />
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};
