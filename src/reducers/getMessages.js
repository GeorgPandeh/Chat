let initialState = [];

const match = (item, i) => {
  if (initialState[i]) {
    return item.id !== initialState[i].id
  } else return true;
}

export const getMessages = (state = initialState, action) => {
  switch (action.type) {
    case 'MESSAGES_ACTION':
      const data = JSON.parse(action.payload);
      const checker = data.some(match);
      if (checker) {
        initialState.unshift(...data);
      }
      return [...initialState];
    default: return state;
  }
}