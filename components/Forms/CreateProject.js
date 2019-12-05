import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import CreatableSelect from 'react-select/creatable';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import InputLabel from '../Labels/InputLabel';
import InputField from '../Inputs/InputField';
import tagsEditorStyles from '../Tags/TagsEditorStyles';
import convertToSelectFormat from '../_Utility/convertToSelectFormat';
import { getAllTags } from '../../redux/tags/actions';
import DescriptionForm from '../Inputs/DescriptionForm';
import debounce from '../_Utility/debounce';
import Button from '../Buttons/Button';
import COLORS from '../constants';
import AssigneeEditor from './AssigneeEditor';
import { createProject } from '../../redux/projects/actions';
import Dates from './Dates';

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
  const router = useRouter();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [subLabel, setSubLabel] = useState('');
  const [costs, setCosts] = useState('');
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState('');
  const [users, setUsers] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());

  const addAssignee = (val) => {
    setUsers(((prevState) => ([...prevState, val.user])));
  };

  const removeAssignee = (val) => {
    setUsers((prevState) => {
      const newUsers = [...prevState];
      newUsers.splice(val.projUserKey, 1);
      return newUsers;
    });
  };

  const allTags = useSelector((state) => state.tags.items);

  useEffect(() => {
    dispatch(getAllTags());
  }, []);

  return (
    <CreateProjectContainer>

      <form onSubmit={async (e) => {
        e.preventDefault();
        e.stopPropagation();
        await dispatch(createProject({
          name, description, tags, subLabel, costs, users, startDate, dueDate,
        }));
        await router.push('/projects');
      }}
      >
        <div>
          <FieldBox>
            <InputLabel>Name</InputLabel>
            <InputField
              name="project name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FieldBox>
          <FieldBox>
            <InputLabel>Sublabel</InputLabel>
            <InputField
              name="subLabel"
              type="text"
              value={subLabel}
              onChange={(e) => setSubLabel(e.target.value)}
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
              required
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
              value={costs}
              onChange={(e) => setCosts(e.target.value)}
            />
          </FieldBox>
          <FieldBox>
            <InputLabel>Assignee</InputLabel>
            <AssigneeEditor
              projectUsers={users}
              addAssignee={addAssignee}
              removeAssignee={removeAssignee}
            />
          </FieldBox>
          <FieldBox>
            <InputLabel>Dates</InputLabel>
            <Dates
              firstDate={startDate}
              secondDate={dueDate}
              setFirstDate={setStartDate}
              setSecondDate={setDueDate}
            />
          </FieldBox>
        </div>
        <ButtonBox>
          <Button onClick={() => {}} bordered={false} background={COLORS.green1}>
            Create project
          </Button>
        </ButtonBox>
      </form>
    </CreateProjectContainer>
  );
};

export default CreateProject;
