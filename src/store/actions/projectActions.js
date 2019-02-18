function createProject(project) {
  //thunk extra argument destructured for firebase and firestore
  //used to connect to firebase and fireStore via store enhaners in index.js
  return (dispatch, getState, { getFirebase, getFireStore }) => {
    dispatch({ type: 'CREATE_PROJECT', project });
  };
}
