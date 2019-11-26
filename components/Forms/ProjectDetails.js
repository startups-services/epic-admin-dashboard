import React, { useState } from 'react';
import styled from '@emotion/styled';
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
import AssigneeItem from './AssigneeItem';
import LiveInput from '../Inputs/LiveInput';
import { setProjectField } from '../../redux/projects/actions';
import findProjectNumber from '../../redux/_lib/findProjById';
import Label from '../Labels/Label';
import TagsLiveEdit from '../Tags/TagsLiveEdit';
import AssigneeEditor from './AssigneeEditor';

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
  { value: 'user0', label: <AssigneeItem name="Robert Paulson" /> },
  { value: 'user1', label: <AssigneeItem name="Tom Andersen" /> },
  { value: 'user2', label: <AssigneeItem name="Alex Simonyan" /> },
  { value: 'user3', label: <AssigneeItem name="Emanuel Kant" /> },
];

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    id, name, description, tags, subLabel, users,
  } = useSelector((store) => {
    if (store.projects.items.length > 0) {
      return (store.projects.items[findProjectNumber(router.query.id, store.projects.items)]);
    }
    return {
      id: '', subLabel: '', name: '', description: '', tags: [],
    };
  });

  const updateField = (fieldName, fieldValue) => {
    dispatch(setProjectField(id, fieldName, fieldValue));
  };
  return (
    <>
      <HeadersBelt>
        <LabelBox>
          <LiveInput label="enter project name" name="name" value={name} onSubmit={updateField}>
            <Label>
              {name}
            </Label>
          </LiveInput>
        </LabelBox>
        <LabelBox>
          <LiveInput label="enter project sub label" name="subLabel" value={subLabel} onSubmit={updateField}>
            <SubLabel>
              {subLabel}
            </SubLabel>
          </LiveInput>
        </LabelBox>
      </HeadersBelt>

      <Columns>
        <Column>
          <TagsEditorBox>
            <TagsLiveEdit tags={tags} projectId={id} />
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
            <AssigneeEditor projectUsers={users}/>
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

export default ProjectDetails;
