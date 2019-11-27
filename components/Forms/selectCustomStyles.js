const customStyles = {
  option: (provided) => ({
    ...provided, cursor: 'pointer',
  }),
  container: (provided) => ({
    ...provided, border: 'none', focusable: 'false',
  }),
  control: (provided) => ({
    ...provided, border: 'none', cursor: 'pointer', padding: 'none', minHeight: 'none', boxShadow: 'unset',
  }),
  clearIndicator: (provided) => ({
    ...provided, display: 'none',
  }),
  indicatorSeparator: (provided) => ({
    ...provided, display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided, display: 'none',
  }),
  placeholder: (provided) => ({
    ...provided, top: 'none', transform: 'none', position: 'none', margin: 0, display: 'flex',
  }),
  menu: (provided) => ({
    ...provided, width: 'none',
  }),
  singleValue: (provided) => ({
    ...provided, top: 'none', transform: 'none', position: 'none', margin: 0, display: 'flex', maxWidth: 'none',
  }),
};

export default customStyles;
