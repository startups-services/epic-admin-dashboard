import React from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import SubLabel from '../Labels/SubLabel';
import LiveEditTextArea from '../Inputs/TextArea';
import InputLabel from '../Labels/InputLabel';
import Icon from '../Icons/Icon';
import MessageCard from '../Cards/MessageCard';
import COLORS from '../constants';
import LiveInput from '../Inputs/LiveInput';
import { setProjectField } from '../../redux/projects/actions';
import findProjectIndex from '../../redux/_lib/findProjById';
import Label from '../Labels/Label';
import TagsLiveEdit from '../Tags/TagsLiveEdit';
import { htmlOnlyMsg } from '../../utils/toastActions';
import AssigneeEditorWithDB from './AssigneeEditorWithDB';
import Dates from './Dates';

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

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    id, name, description, tags, subLabel, projectUsers, costs, startDate, dueDate,
  } = useSelector((store) => {
    if (store.projects.items.length > 0) {
      return (store.projects.items[findProjectIndex(router.query.id, store.projects.items)]);
    }
    return {
      id: '', subLabel: '', name: '', description: '', tags: [], startDate, dueDate,
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
          <TextAreaBox>
            <LiveInput label="costs" name="costs" value={costs} onSubmit={updateField} showLabel>
              {`${costs} $`}
            </LiveInput>
          </TextAreaBox>
          <AssigneeBox>
            <InputLabel>
              Members
            </InputLabel>
            <AssigneeEditorWithDB projectUsers={projectUsers} projectId={id} />
          </AssigneeBox>
          <Dates
            firstDate={startDate || undefined}
            secondDate={dueDate || undefined}
            setFirstDate={(val) => { dispatch(setProjectField(id, 'startDate', val)); }}
            setSecondDate={(val) => { dispatch(setProjectField(id, 'dueDate', val)); }}
          />
        </Column>

        <Column>
          <ButtonsBox>
            <div onClick={htmlOnlyMsg} role="button" onKeyPress={htmlOnlyMsg} tabIndex={0}>
              <Icon iconName="attachment" />
              Add attachments
            </div>
            <div onClick={htmlOnlyMsg} role="button" onKeyPress={htmlOnlyMsg} tabIndex={0}>
              <Icon iconName="arrow" />
              Move up
            </div>
            <div onClick={htmlOnlyMsg} role="button" onKeyPress={htmlOnlyMsg} tabIndex={0}>
              <Icon iconName="subscribe" />
              Subscribe
            </div>
            <div onClick={htmlOnlyMsg} role="button" onKeyPress={htmlOnlyMsg} tabIndex={0}>
              <Icon iconName="archive" />
              Archive
            </div>
          </ButtonsBox>
          <MessageBox>
            <InputLabel style={{ marginBottom: '18px' }}>
            Discussion
            </InputLabel>
            <MessageCard email="test1@ya.ru" />
            <MessageCard email="test2@gmail.ru" />
            <MessageCard email="test3@test.ru" />

          </MessageBox>
        </Column>
      </Columns>
    </>
  );
};

export default ProjectDetails;
