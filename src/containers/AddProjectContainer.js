import React from 'react';
import { connect } from 'react-redux';
import { createProject } from '../store/actions/projectActions';
import AddProject from '../components/Projects/AddProject/AddProject';

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => {
      dispatch(createProject(project));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddProject);
