const initialState = {
  auth: {
    isLoggedIn: false,
    user: null,
    loading: false,
    error: null,
  },
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        auth: { ...state.auth, loading: true, error: null },
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          isLoggedIn: true,
          user: payload,
        },
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        auth: { ...state.auth, loading: false, error: payload },
      };
    case "LOGOUT":
      return {
        ...state,
        auth: { ...state.auth, isLoggedIn: false, user: null, error: null },
      };

    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, payload],
      };
    case "REMOVE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter((proj) => proj.id !== payload),
      };
    case "SET_PROJECTS":
      return {
        ...state,
        projects: payload,
      };
    default:
      return state;
  }
}
