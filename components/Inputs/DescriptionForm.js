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

const DescriptionFormContainer = styled.div`
  box-shadow: none;
`;


const DescriptionForm = ({ ...props }) => (
  <DescriptionFormContainer>
    <InputLabel>{props.label}</InputLabel>  {/* eslint-disable-line */}
    <ReactQuill
      {...props} // eslint-disable-line
    />
  </DescriptionFormContainer>
);

DescriptionForm.propTypes = ReactQuill.propTypes;
DescriptionForm.defaultProps = ReactQuill.defaultProps;

export default DescriptionForm;
