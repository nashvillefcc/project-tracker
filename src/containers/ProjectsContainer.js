import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Projects from '../components/Projects/';

const mapStateToProps = state => {
  console.log('state', state);
  return {
    projects: state.firestore
  };
};

//firestoreConnect listens to collection for changes and activates firestoreReducer on changes to the collection
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(Projects);
