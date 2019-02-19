import React from 'react';
import Projects from '../components/Projects';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const mapStateToProps = state => {
  // console.log('state', state);
  return {
    projects: state.firestore.ordered.projects,
    task: 'test'
  };
};

//firestoreConnect listens to collection for changes and activates firestoreReducer on changes to the collection
export default compose(
  firestoreConnect([{ collection: 'projects' }]),
  connect(mapStateToProps)
)(Projects);
