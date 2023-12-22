import { Input } from "reactstrap";
import { PropTypes } from "prop-types";
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

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};
