import React from 'react';
import {
  List,
  Icon,
  Label,
  Grid,
  Segment,
  Table,
  Header,
  Modal,
  Divider,
  Popup
} from 'semantic-ui-react';

const ProjectsList = ({ projects, toggleProject, type }) => {
  // console.log('projects', projects);
  return (
    <>
      {projects.map(project => {
        return (
          <Modal
            key={project.name}
            trigger={
              <List.Item key={project.id}>
                <Grid>
                  <Grid.Column width={3} textAlign="left">
                    <Header size="large">{project.name}</Header>
                  </Grid.Column>
                  <Grid.Column
                    width={3}
                    textAlign="left"
                    verticalAlign="middle"
                  >
                    <Popup
                      trigger={
                        <Icon
                          color="blue"
                          name="user"
                          circular
                          inverted
                          size={'small'}
                        />
                      }
                      size="large"
                      position="right center"
                      content={
                        <List vertical>
                          {project.members.map(member => (
                            <List.Item key={member}>{member}</List.Item>
                          ))}
                        </List>
                      }
                    />
                    {project.members.length}
                  </Grid.Column>
                  <Grid.Column width={8} textAlign="left">
                    <Icon name="code" circular inverted size={'small'} />
                    <List horizontal>
                      {project.tech.map(tech => (
                        <List.Item key={tech}>{tech}</List.Item>
                      ))}
                    </List>
                  </Grid.Column>
                  <Grid.Column
                    width={2}
                    textAlign="left"
                    verticalAlign="middle"
                  >
                    {type === 'Active' ? (
                      <Icon
                        onClick={() => toggleProject(project.id)}
                        color="red"
                        name="trash"
                        circular
                      />
                    ) : (
                      <Icon
                        onClick={() => toggleProject(project.id)}
                        color="blue"
                        name="undo"
                        circular
                      />
                    )}
                  </Grid.Column>
                </Grid>
              </List.Item>
            }
          >
            <Modal.Content>
              <Modal.Description>
                <Header>{project.name}</Header>
              </Modal.Description>
              <p>Tech</p>
              <List horizontal>
                {project.tech.map(tech => (
                  <List.Item key={tech}>{tech}</List.Item>
                ))}
              </List>
              <Divider inverted />
              <p>Members {project.members.length}</p>
              <List horizontal>
                {project.members.map(member => (
                  <List.Item key={member}>{member}</List.Item>
                ))}
              </List>
              <Divider inverted />
              <p>Description</p>
              <p>{project.description}</p>
            </Modal.Content>
          </Modal>
        );
      })}
    </>
  );
};

export default ProjectsList;
