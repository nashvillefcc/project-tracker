import React from 'react';
import Projects from '../components/Projects';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {
  archiveProject,
  activateProject
} from '../store/actions/projectActions';
const mapStateToProps = state => {
  // console.log('state', state);
  return {
    projects: state.firestore.ordered.projects,
    task: 'test'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    archiveProject: projectId => {
      dispatch(archiveProject(projectId));
    },
    activateProject: projectId => {
      dispatch(activateProject(projectId));
    }
  };
};

//firestoreConnect listens to collection for changes and activates firestoreReducer on changes to the collection
export default compose(
  firestoreConnect([{ collection: 'projects' }]),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Projects);
