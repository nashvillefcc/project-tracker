const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('creating:', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('creating error: ', action.err);
      return state;
    case 'EDIT_PROJECT':
      console.log('creating:', action.projectId);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
