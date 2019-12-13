/* eslint-disable no-console */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import DescriptionForm from './DescriptionForm';
import debounce from '../_Utility/debounce';
import fetchQuery from '../../data/graphql/client';
import { realDataMsg } from '../../utils/toastActions';
import { updateProjectDescriptionQ } from '../../data/graphql/Project';

const LiveEditTextArea = ({
  defaultValue, id,
}) => {
  const sendDataToBd = useCallback(async (val) => {
    try {
      realDataMsg();
      console.log(`Data was sent ${val}`);
      const result = await fetchQuery(updateProjectDescriptionQ, { id, value: val });
      console.log(result);
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
  }, []);

  const sendWithDebounce = debounce(sendDataToBd, 600);

  return (
    <>
      <DescriptionForm
        placeholder="Set project description..."
        defaultValue={defaultValue}
        onChange={(val, delta, source) => {
          if (source === 'user') {
            sendWithDebounce(val);
          }
        }}
      />
    </>
  );
};

LiveEditTextArea.propTypes = {
  defaultValue: PropTypes.string,
  id: PropTypes.string.isRequired,
};

LiveEditTextArea.defaultProps = {
  defaultValue: '',
};

export default LiveEditTextArea;
