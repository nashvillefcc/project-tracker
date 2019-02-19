import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import auth from './authReducer';
import project from './projectReducer';
//syncs firestore with state in the background
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth,
  project,
  firestore: firestoreReducer
  // firebase: firebaseReducer
});

export default rootReducer;
