import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import TagsEditor from './TagsEditor';
import Tags from './Tags';
import Icon from '../Icons/Icon';
import COLORS from '../constants';

const TagsLiveEditContainer = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 10px;
  width: 40px;
  min-width: 30px;
  &:hover {
   border: 1px solid ${COLORS.gray2};
  border-radius: 4px;
  }
`;

const ConfirmContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 40px;
  min-width: 30px;
  border: 1px solid ${COLORS.gray2};
  border-radius: 4px;
  margin-left: 10px;
`;

const TagsLiveEdit = ({ tags, projectId }) => {
  const [isEdited, setIsEdited] = useState(false);
  const toggleLiveEdit = () => {
    setIsEdited(!isEdited);
  };

  return (
    <TagsLiveEditContainer>
      {isEdited && (
        <>
          <TagsEditor tags={tags} projectId={projectId} />
          <ConfirmContainer onClick={toggleLiveEdit} onKeyPress={toggleLiveEdit} tabIndex={0}>
            <Icon iconName="check" />
          </ConfirmContainer>
        </>
      )}
      {!isEdited && (
        <>
          <div>
            <Tags tags={tags} color={COLORS.orange2} />
          </div>
          <ButtonContainer onClick={toggleLiveEdit} onKeyPress={toggleLiveEdit} tabIndex={0}>
            <Icon iconName="addTag" />
          </ButtonContainer>
        </>
      )}

    </TagsLiveEditContainer>
  );
};

TagsLiveEdit.propTypes = {
  tags: PropTypes.array.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default TagsLiveEdit;
