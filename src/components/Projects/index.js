import React, { useState } from 'react';
import ProjectsList from './ProjectsList';
import AddProject from '../../containers/AddProjectContainer';
import sampleProjects from './sampleProjects';
import { Container, Tab, Header, List, Modal } from 'semantic-ui-react';

function Projects() {
  //hooks
  const [projectsList, setProjects] = useState(sampleProjects);

  const activeProjectsList = projectsList.filter(
    project => project.active === true
  );
  const archivedProjectsList = projectsList.filter(
    project => project.active === false
  );
  const addNewProject = newProject => {
    newProject.id = projectsList.length + 1;
    setProjects([...projectsList, newProject]);
  };
  const deleteProject = id => {
    let projects = projectsList.filter(project => project.id !== id);
    setProjects([...projects]);
  };
  const toggleProject = id => {
    let projects = projectsList.map(project => {
      return project.id !== id
        ? project
        : { ...project, active: !project.active };
    });
    setProjects([...projects]);
  };
  const panes = [
    {
      menuItem: `Active (${activeProjectsList.length})`,
      render: () => (
        <Tab.Pane>
          <Header size="huge">Active Projects</Header>
          <List celled selection as="ul" verticalAlign="middle" size="huge">
            <ProjectsList
              projects={activeProjectsList}
              toggleProject={toggleProject}
              type="Active"
            />
          </List>
        </Tab.Pane>
      )
    },
    {
      menuItem: `Archived (${archivedProjectsList.length})`,
      render: () => (
        <Tab.Pane>
          <Header size="huge" color="grey">
            Archived Projects
          </Header>
          <List celled selection as="ul" verticalAlign="middle" size="huge">
            <ProjectsList
              projects={archivedProjectsList}
              toggleProject={toggleProject}
              type="Archive"
            />
          </List>
        </Tab.Pane>
      )
    },
    {
      menuItem: `Add New Project`,
      render: () => (
        <Tab.Pane>
          <Header size="huge" color="grey">
            Add Projects
          </Header>
          <AddProject
            addNewProject={addNewProject}
            numOfProjects={projectsList.length}
          />
        </Tab.Pane>
      )
    }
  ];

  return (
    <Container>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </Container>
  );
}

export default Projects;
