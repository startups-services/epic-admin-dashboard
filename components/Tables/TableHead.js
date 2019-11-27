import React from 'react';
import styled from '@emotion/styled';
import ThLabel from './ThLabel';

const TrStyled = styled.tr`
  margin-bottom: 23px;
`;

const ThStyled = styled.th`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 1.5px;
  padding-bottom: 21px;
  border-bottom: 1px solid rgba(56, 41, 82, 0.05);
`;

const TableHead = () => (
  <TrStyled>
    <ThStyled />
    <ThStyled>
      <ThLabel label="Project Name" sortable />
    </ThStyled>
    <ThStyled>
      <ThLabel label="Status" sortable />
    </ThStyled>
    <ThStyled>
      <ThLabel label="Progress" sortable />
    </ThStyled>
    <ThStyled>
      <ThLabel label="Users" />
    </ThStyled>
    <ThStyled>
      <ThLabel label="Budget" sortable />
    </ThStyled>
  </TrStyled>
);

export default TableHead;
