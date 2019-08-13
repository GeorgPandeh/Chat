import { combineReducers } from 'redux'
import { getMessages } from './getMessages';

export default combineReducers({
  messages: getMessages,
})