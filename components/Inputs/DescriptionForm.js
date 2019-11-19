import React from 'react';
import styled from '@emotion/styled';
import 'react-quill/dist/quill.snow.css';
import InputLabel from '../Labels/InputLabel';
import './DescriptionForm.css';

let ReactQuill;

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  ReactQuill = require('react-quill');
} else {
  ReactQuill = styled.div``;
}


const DescriptionForm = ({ ...props }) => (
  <>
    <InputLabel>{props.label}</InputLabel>
    <ReactQuill
      {...props}
    />
  </>
);

DescriptionForm.propTypes = ReactQuill.propTypes;
DescriptionForm.defaultProps = ReactQuill.defaultProps;

export default DescriptionForm;
