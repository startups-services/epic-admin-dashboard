/* eslint-disable no-console */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import DescriptionForm from './DescriptionForm';
import debounce from '../_Utility/debounce';
import { updateProjectDescription } from '../../data/graphql';
import execQuery from '../../data/graphql/client';

const LiveEditTextArea = ({
  defaultValue, id,
}) => {
  const sendDataToBd = useCallback(async (val) => {
    try {
      console.log(`Data was sent ${val}`);
      const result = await execQuery(updateProjectDescription, { id, description: val });
      console.log(result);
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
  }, []);

  const sendWithDebounce = debounce(sendDataToBd, 600);

  return (
    <div style={{ boxShadow: 'none' }}>
      <DescriptionForm
        placeholder="Set project description..."
        defaultValue={defaultValue}
        onChange={(val, delta, source) => {
          if (source === 'user') {
            sendWithDebounce(val);
          }
        }}
      />
    </div>
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
