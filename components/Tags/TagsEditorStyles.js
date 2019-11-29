import COLORS from '../constants';

const tagsEditorStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'white', borderColor: COLORS.gray2 }),
  placeholder: (styles) => ({
    ...styles,
  }),
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: 'none',
    border: `1px solid ${COLORS.orange2}`,
  }),
  clearIndicator: (styles) => ({
    ...styles,
    display: 'none',
  }),
  valueContainer: (styles) => ({
    ...styles,
    paddingRight: '80px',
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    fontSize: '10px',
    lineHeight: '12px',
    textAlign: 'center',
    letterSpacing: '1.5px',
    color: COLORS.orange2,
    padding: '8px 7px 7px 10px',
    paddingLeft: '10px',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: COLORS.orange2,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: COLORS.red,
      color: 'white',
    },
  }),
};

export default tagsEditorStyles;
