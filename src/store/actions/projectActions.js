export function createProject(project) {
  const {
    name = 'default name',
    projectLeader = 'none assigned',
    description = 'no description',
    members = [],
    tech = []
  } = project;
  //thunk extra argument destructured for firebase and firestore
  //used to connect to firebase and fireStore via store enhaners in index.js
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('projects').add({
      name,
      projectLeader,
      description,
      members,
      tech
    });
    dispatch({ type: 'CREATE_PROJECT', project });
  };
}
