import React, { useState } from 'react';
import ProjectsList from './ProjectsList';
import AddProject from '../../containers/AddProjectContainer';
import sampleProjects from './sampleProjects';
import {
  Container,
  Tab,
  Header,
  List,
  Modal,
  Segment,
  Dimmer,
  Loader
} from 'semantic-ui-react';

function Projects({ projects, archiveProject, activateProject }) {
  //hooks
  if (!projects) {
    return (
      <Segment>
        <Dimmer active>
          <Loader size="huge">Loading</Loader>
        </Dimmer>
      </Segment>
    );
  }

  const archivedProjectsList = projects.filter(
    project => project.active === false
  );
  const activeProjectsList = projects.filter(
    project => project.active === true
  );
  const panes = [
    {
      menuItem: `Active (${activeProjectsList.length})`,
      render: () => (
        <Tab.Pane>
          <Header size="huge">Active Projects</Header>
          <List celled selection as="ul" verticalAlign="middle" size="huge">
            <ProjectsList
              projects={activeProjectsList}
              type="Active"
              toggleProject={archiveProject}
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
              type="Archive"
              toggleProject={activateProject}
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
          <AddProject />
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
