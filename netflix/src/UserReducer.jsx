export const actionStates = {
  DISPATCH_USER: "DISPATCH_USER",
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case actionStates.DISPATCH_USER: {
      return {
        ...state,
        username: action.username,
        password: action.password,
        image: action.image,
      };
    }
    default: {
      return state;
    }
  }
};
