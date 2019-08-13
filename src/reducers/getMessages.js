let initialState = [];

export const getMessages = (state = initialState, action) => {
  switch (action.type) {
    case 'MESSAGES_ACTION':
      let data = JSON.parse(action.payload);
      if (state.length) {
        data = data.filter(dataItem => {
          return !state.some(stateItem => {
            return dataItem.id === stateItem.id;
          });
        });
      }
      state.unshift(...data);
      return [...state];
    default: return state;
  }
}