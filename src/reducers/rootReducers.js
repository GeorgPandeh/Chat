import { combineReducers } from 'redux'
import { getMessages } from './getMessages';
import { getSocket } from './getSocket';

export default combineReducers({
  messages: getMessages,
  socket: getSocket
})