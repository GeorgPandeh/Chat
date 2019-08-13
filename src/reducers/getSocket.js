let initialState = [];

export const getSocket = (state = initialState, action) => {
  switch (action.type) {
    case 'SOCKET_ACTION':
      return action.payload;
    default: return state;
  }
}