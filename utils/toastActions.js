import React from 'react';
import { toast } from 'react-toastify';

export const htmlOnlyMsg = () => {
  toast(
    <>
      {'</> It\'s clicked !'}
      <br />
      But it only html now
    </>,
    {
      bodyClassName: 'toast__info',
    },
  );
};

export const tableActionsMsg = () => {
  toast('</> In future table will be sorted after this click :)', {
    bodyClassName: 'toast__info',
  });
};

export const realDataMsg = () => {
  toast.success(
    <>
      {'It\'s real data.'}
      <br />
       Your changes was saved in Graph.cool
    </>,
    {

    },
  );
};
