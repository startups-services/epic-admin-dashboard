import React, { useState } from 'react';
import styled from '@emotion/styled';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import SubLabel from '../Labels/SubLabel';
import LiveEditTextArea from '../Inputs/TextArea';
import AssigneeForm from './AssigneeForm';
import DateInput from '../Inputs/DatePicker';
import InputLabel from '../Labels/InputLabel';
import Icon from '../Icons/Icon';
import MessageCard from '../Cards/MessageCard';
import COLORS from '../constants';
import DefaultAssigneeItem from './DefaultAssigneeItem';
import TagsEditor from '../Tags/TagsEditor';
import LiveInput from '../Inputs/LiveInput';
import { setUserField } from '../../redux/activeUser/actions';
import { setProjectField } from '../../redux/projects/actions';
import findProjectNumber from '../../redux/_lib/findProjById';

const Columns = styled.div`
  display: flex;
`;

const AssigneeBox = styled.div`
  margin-bottom: 35px;
`;

const HeadersBelt = styled.div`
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  & :first-child {
    border-right: 1px solid ${COLORS.gray5};
    padding-right: 40px;
  }

  & :last-child {
    padding-left: 40px;
  }

`;

const LabelBox = styled.div`
  margin-bottom: 15px;
  max-width: 300px;
 
`;

const SubLabelBox = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  & div {
    margin-right: 35px;
  }
`;

const TextAreaBox = styled.div`
  margin-bottom: 34px;
`;

const DateBox = styled.div`
  display: flex;
  align-items: center;
  & div[class*="-IconBox"] {
    margin-right: 10px;
  }
`;

const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  & div[class*="-IconBox"] {
    margin-right: 10px;
  }
  margin-bottom: 30px;

  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const MessageBox = styled.div`
 & > div[class*="-CardStyled"] {
    margin-bottom: 38px;
  }
`;

const TagsEditorBox = styled.div`
  margin-bottom: 24px;
`;

const options = [
  { value: 'null', label: 'unset assignee' },
  { value: 'user0', label: <DefaultAssigneeItem name="Robert Paulson" /> },
  { value: 'user1', label: <DefaultAssigneeItem name="Tom Andersen" /> },
  { value: 'user2', label: <DefaultAssigneeItem name="Alex Simonyan" /> },
  { value: 'user3', label: <DefaultAssigneeItem name="Emanuel Kant" /> },
];

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    id, name, description, tags,
  } = useSelector((store) => {
    debugger;
    if (store.projects.items.length > 0) {
      return (store.projects.items[findProjectNumber(router.query.id, store.projects.items)]);
    }
    return {
      id: '', name: '', description: '', tags: [],
    };
  });


  const [option, setOption] = useState(null);
  const updateField = (name, value) => {
    dispatch(setProjectField(id, name, value));
  };

  return (
    <>
      <HeadersBelt>
        <LabelBox>
          <LiveInput name="name" value={name} onSubmit={updateField} />
        </LabelBox>
        <SubLabelBox>
          <SubLabel>
          department
          </SubLabel>
          <Icon height="16px" iconName="edit" />
        </SubLabelBox>
      </HeadersBelt>

      <Columns>

        <Column>
          <TagsEditorBox>
            <TagsEditor tags={tags} projectId={id} />
          </TagsEditorBox>
          <TextAreaBox>
            <InputLabel>
            Description
            </InputLabel>
            <LiveEditTextArea id={id} defaultValue={description} />
          </TextAreaBox>
          <AssigneeBox>
            <InputLabel>
            Members
            </InputLabel>
            <AssigneeForm size="48px" options={options} onChange={(val) => setOption(val)} value={option} />
            <AssigneeForm size="48px" options={options} onChange={(val) => setOption(val)} value={option} />
            <AssigneeForm size="48px" options={options} onChange={(val) => setOption(val)} value={option} />
          </AssigneeBox>
          <DateBox>
            <Icon iconName="calendarGreen" />
            <DateInput />
            <DateInput />
          </DateBox>
        </Column>

        <Column>
          <ButtonsBox>
            <div>
              <Icon iconName="attachment" />
            Add attachments
            </div>
            <div>
              <Icon iconName="arrow" />
            Move up
            </div>
            <div>
              <Icon iconName="subscribe" />
            Subscribe
            </div>
            <div>
              <Icon iconName="archive" />
            Archive
            </div>
          </ButtonsBox>
          <MessageBox>
            <InputLabel style={{ marginBottom: '18px' }}>
            Discussion
            </InputLabel>
            <MessageCard src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg?s=50" />
            <MessageCard src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg?s=50" />
            <MessageCard src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg?s=50" />

          </MessageBox>
        </Column>
      </Columns>
    </>
  );
};

ProjectDetails.propTypes = {
  props: PropTypes.object.isRequired,
};


export default ProjectDetails;
