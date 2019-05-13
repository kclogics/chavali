export default function toolReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_TOOL":
      // debugger;
      return [...state, { ...action.tool }];
    default:
      return state;
  }
}
