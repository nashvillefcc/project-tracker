import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Divider,
  Header,
  TextArea,
  Input,
  Message
} from 'semantic-ui-react';
import AddMember from './AddToList';
import AddTech from './AddToList';

function AddProject(props) {
  console.log('props', props);
  const { createProject } = props;
  const blankProject = {
    name: '',
    active: true,
    members: [],
    tech: [],
    description: '',
    projectLeader: 'default leader'
  };
  const [newProject, setNewProject] = useState(blankProject);
  const [errors, setErrors] = useState({});

  const onSubmitHandler = e => {
    e.preventDefault();
    if (newProject.members.length < 1) {
      setErrors({
        ...errors,
        members: { isError: true, errorMsg: 'Must add at least one member.' }
      });
    } else {
      setErrors({});
      // addNewProject(newProject);
      createProject(newProject);
      setNewProject(blankProject);
    }
  };

  const handleChange = (e, { name, value }) => {
    setNewProject({ ...newProject, [name]: value });
  };

  return (
    <Form size="large" onSubmit={e => onSubmitHandler(e)}>
      <Form.Field>
        {/* <Header size="large">Project Name</Header> */}
        <Input
          label="Project Name"
          placeholder="enter name"
          width={6}
          name="name"
          value={newProject.name}
          onChange={handleChange}
          required
        />
      </Form.Field>
      <Divider />
      <Header size="large">Members</Header>
      <AddMember
        type="members"
        handleChange={handleChange}
        listArr={newProject.members}
      />
      {errors.members && errors.members.isError && (
        <Message
          color="red"
          icon="exclamation circle"
          content={errors.members.errorMsg}
        />
      )}
      <Divider />
      <Header size="large">Teck Stack</Header>
      <AddTech
        type="tech"
        handleChange={handleChange}
        listArr={newProject.tech}
      />
      <Divider />
      <TextArea
        required
        placeholder="describe the project"
        name="description"
        onChange={handleChange}
        value={newProject.description}
        required
      />
      <Divider />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default AddProject;
