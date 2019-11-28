import React from 'react';
import { toast } from 'react-toastify';
import Icon from '../components/Icons/Icon';

export const htmlOnlyMsg = () => {
  toast(
    <>
      <Icon iconName="code" height="12px" />
      {' It\'s clicked!'}
      <br />
      But it&apos;s only html now
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
      {'It\'s a real data.'}
      <br />
      Your changes have been saved successfully
    </>,
    {
      bodyClassName: 'toast__real-data',
      className: 'toast__real-data',
      progressClassName: 'real-data__progressbar',
    },
  );
};
