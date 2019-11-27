import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import breakPoints from '../breakPoints';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 25px;
  & :last-child {
    margin-right: 0;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const getColNumber = (width) => {
  if (width >= breakPoints.xl) {
    return 4;
  }
  if (breakPoints.lg <= width && width < breakPoints.xl) {
    return 3;
  }
  if (breakPoints.md <= width && width < breakPoints.lg) {
    return 2;
  }
  if (width <= breakPoints.md) {
    return 1;
  }
  return 1;
};

const Masonry = ({ children, width }) => (
  <>
    {children && (
      <ColumnContainer>
        {[...Array(getColNumber(width))].map((elem, colIndex) => (
        // eslint-disable-next-line react/no-array-index-key
          <Column key={colIndex}>
            {children.length ? (
              children.filter((element, index) => (index % getColNumber(width) === colIndex))
            ) : (
              colIndex === 0 && children
            )}
          </Column>
        ))}
      </ColumnContainer>
    )}
  </>
);

Masonry.propTypes = {
  children: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
};

export default Masonry;
