import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import CreatableSelect from 'react-select/creatable';
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '../Labels/InputLabel';
import InputField from '../Inputs/InputField';
import tagsEditorStyles from '../Tags/TagsEditorStyles';
import convertToSelectFormat from '../_Utility/convertToSelectFormat';
import { getAllTags } from '../../redux/tags/actions';
import DescriptionForm from '../Inputs/DescriptionForm';
import debounce from '../_Utility/debounce';
import Button from '../Buttons/Button';
import COLORS from '../constants';
import { htmlOnlyMsg } from '../../utils/toastActions';
import AssigneeEditor from './AssigneeEditor';
import {addUserToProject, deleteUserFromProject, setProjectField} from '../../redux/projects/actions';

const FieldBox = styled.div`
  margin-bottom: 20px;
`;

const CreateProjectContainer = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ButtonBox = styled.div`

`;

const CreateProject = () => {
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState('');
  const [users, setUsers] = useState([]);
  
  const updateAssignee = (val) => {
    if (val.value) {
      const newUsers = [...projectUsers];
      newUsers[val.projUserKey] = val.user;
      dispatch(setProjectField(projectId, 'users', newUsers));
      dispatch(addUserToProject(projectId, val.user.id));
      if (projectUsers[val.projUserKey]) {
        dispatch(deleteUserFromProject(projectId, projectUsers[val.projUserKey].id));
      }
    } else {
      const newUsers = [...projectUsers];
      newUsers.splice(val.projUserKey, 1);
      dispatch(setProjectField(projectId, 'users', newUsers));
      dispatch(deleteUserFromProject(projectId, projectUsers[val.projUserKey].id));
    }
  };
  
  const allTags = useSelector((state) => state.tags.items);

  useEffect(() => {
    dispatch(getAllTags());
  }, []);

  return (
    <CreateProjectContainer>
      <div>
        <FieldBox>
          <InputLabel>Name</InputLabel>
          <InputField
            name="project name"
            type="text"
          />
        </FieldBox>
        <FieldBox>
          <InputLabel>Sublabel</InputLabel>
          <InputField
            name="project name"
            type="text"
          />
        </FieldBox>
        <FieldBox>
          <InputLabel>Tags</InputLabel>
          <CreatableSelect
            isClearable
            isMulti
            onChange={setTags}
            value={tags}
            options={convertToSelectFormat(allTags || [])}
            styles={tagsEditorStyles}
          />
        </FieldBox>
        <FieldBox>
          <InputLabel>Description</InputLabel>
          <DescriptionForm
            placeholder="Set project description..."
            defaultValue=""
            onChange={(val, delta, source) => {
              if (source === 'user') {
                debounce(setDescription, 600)(val);
              }
            }}
          />
        </FieldBox>
        <FieldBox>
          <InputLabel>Costs</InputLabel>
          <InputField
            name="project name"
            type="text"
          />
        </FieldBox>
        <FieldBox>
          <InputLabel>Assignee</InputLabel>
          <AssigneeEditor projectUsers={users} onChange={setUsers} />
        </FieldBox>
      </div>
      <ButtonBox>
        <form onSubmit={(e) => { e.preventDefault(); e.stopPropagation(); }}>
          <Button onClick={htmlOnlyMsg} bordered={false} background={COLORS.green1}>
            Create project
          </Button>
        </form>
      </ButtonBox>
    </CreateProjectContainer>
  );
};

export default CreateProject;
