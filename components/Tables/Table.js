import React from 'react';
import TableRow from './TableRow';
import TableHead from './TableHead';

const Table = () => (
  <table cellSpacing="0" style={{ width: '100%' }}>
    <thead>
      <TableHead />
    </thead>
    <tbody>
      <TableRow
        userArray={[1, 2, 4]} percent={0} avatarLabel={'PA'} costs={'2000$'} name={'Project A'} status={'progress'}
      />
      <TableRow
        userArray={[1, 2, 3, 4]} percent={45} avatarLabel={'PB'} costs={'999$'} name={'Project B'} status={'completed'}
      />
      <TableRow
        userArray={[1, 2]} percent={100} avatarLabel={'PC'} costs={'69$'} name={'Project C'} status={'pending'}
      />
    </tbody>
  </table>
);

export default Table;
