import React, { useState } from 'react';
import styled from '@emotion/styled';
import CreatableSelect from 'react-select/creatable';

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
import { setProjectField } from '../../redux/projects/actions';
import findProjectNumber from '../../redux/_lib/findProjById';
import Label from '../Labels/Label';
import TagsEditorNEW from '../Tags/TagsEditorNEW';
import withRedux from '../../redux/_lib/withRedux';

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

export const colourOptions = [
  {
    value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true, myTestProp: 'test',
  },
  {
    value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true,
  },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  {
    value: 'red', label: 'Red', color: '#FF5630', isFixed: true,
  },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];


const options = [
  { value: 'null', label: 'unset assignee' },
  { value: 'user0', label: <DefaultAssigneeItem name="Robert Paulson" /> },
  { value: 'user1', label: <DefaultAssigneeItem name="Tom Andersen" /> },
  { value: 'user2', label: <DefaultAssigneeItem name="Alex Simonyan" /> },
  { value: 'user3', label: <DefaultAssigneeItem name="Emanuel Kant" /> },
];

const ProjectDetails = (prop1,prop2,prop3) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    id, name, description, tags, subLabel,
  } = useSelector((store) => {
    debugger;
    if (store.projects.items.length > 0) {
      return (store.projects.items[findProjectNumber(router.query.id, store.projects.items)]);
    }
    return {
      id: '', subLabel: '', name: '', description: '', tags: [],
    };
  });

  const [option, setOption] = useState(null);
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
            <TagsEditorNEW options={tags} />
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

export default withRedux(ProjectDetails);
