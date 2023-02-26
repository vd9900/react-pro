const reducer2 = (initialState, action) => {
  switch (action.type) {
    case "ADDEDITVALUE":
      return action.payload;

    case "CLEAREDIT":
      return "";
    default:
      return initialState;
  }
};

export { reducer2 };
