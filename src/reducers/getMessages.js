import notification from '../components/notification';
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

      if (data[0]) {
        notification(data)
      }

      state.unshift(...data);
      return [...state];
    default: return state;
  }
}