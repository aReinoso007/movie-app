/* eslint-disable react/prop-types */
import { Input } from "reactstrap";

export default function SearchBar({ placeholder, value, onChange }) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ width: "90%", padding: "10px" }}
    />
  );
}
