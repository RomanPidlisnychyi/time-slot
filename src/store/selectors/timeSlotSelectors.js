export const getWeek = state =>
  state.week ? state.week.map((hour, index) => ({ id: index, hour })) : null;
