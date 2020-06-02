import { apiCall } from "../../services/api.js";
import { addError } from "./errors.js"
import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes.js";

export const loadMessages = (messages) => ({
  type: LOAD_MESSAGES,
  messages
});

export const getMessages = () => {
  return dispatch => {
    return apiCall("get", "/api/messages")
      .then(res => dispatch(loadMessages(res)))
      .catch(err => addError(err.message));
  }
}