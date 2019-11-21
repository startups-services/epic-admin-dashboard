import CreatableSelect from 'react-select/creatable';
import React from 'react';
import COLORS from '../constants';

const tagStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'white', borderColor: COLORS.gray2 }),
  placeholder: (styles, { data }) => ({
    ...styles,
    borderRadius: '2px',
    display: 'flex',
    margin: '2px',
    boxSizing: 'border-box',
    border: '1px solid #FDA740',
  }),
  option: (styles, {
    data, isDisabled, isFocused, isSelected,
  }) => ({
    ...styles,
    color: '#ccc',
  }),
  multiValue: (styles, { data }) => ({
    ...styles,
    backgroundColor: 'none',
    border: `1px solid ${COLORS.orange2}`,
  }),
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    fontSize: '10px',
    lineHeight: '12px',
    textAlign: 'center',
    letterSpacing: '1.5px',
    color: COLORS.orange2,
    padding: '7px 8px',
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: COLORS.orange2,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: COLORS.red,
      color: 'white',
    },
  }),
};

const TagsEditorNEW = ({ options }) => {
  const onChange = (props) => {
    debugger;
  };
  debugger;
  const bebe = [{ label: '123', value: '123' }, { label: 'foo@bar.com', value: 'foo@bar.com' }];
  const bebe2 = [...options.map((elem) => ({ label: elem.label, value: elem.value }))];
  console.log(bebe);
  console.log(options.map((elem) => ({ label: elem.label, value: elem.value })));

  return (
    <>
      <CreatableSelect
        isClearable
        isMulti
        onChange={onChange}
        defaultValue={bebe2}
        options={[{ label: 'foo@bar.com', value: 'foo@bar.com' }]}
      />
    </>
  );
};
export default TagsEditorNEW;
