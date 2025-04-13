export const initialFilterState = {
  severity: "",
  devId: "",
  timeRange: { from: 0, to: Infinity },
};

export function filterReducer(state, action) {
  switch (action.type) {
    case "SET_SEVERITY":
      return { ...state, severity: action.payload };
    case "SET_DEVID":
      return { ...state, devId: action.payload };
    case "SET_TIMERANGE":
      return { ...state, timeRange: action.payload };
    default:
      return state;
  }
}
