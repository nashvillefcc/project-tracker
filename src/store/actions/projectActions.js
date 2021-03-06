export function createProject(project) {
  //thunk extra argument destructured for firebase and firestore
  //used to connect to firebase and fireStore via store enhaners in index.js
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        createdAt: new Date(),
        active: true
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
}

export function archiveProject(projectId) {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .doc(projectId)
      .update({ active: false })
      .then(() => {
        dispatch({ type: 'EDIT_PROJECT', projectId });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
}

export function activateProject(projectId) {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .doc(projectId)
      .update({ active: true })
      .then(() => {
        dispatch({ type: 'EDIT_PROJECT', projectId });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
}
