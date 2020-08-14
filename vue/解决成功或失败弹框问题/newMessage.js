import { Message } from "element-ui";

const showMessage = Symbol("showMessage");

let messageItem = null;

class ResetMessage {
  [showMessage](type, options, only) {
    if (messageItem && only) {
      messageItem.close();
    }

    messageItem = Message[type](options);
  }

  success(options, only = true) {
    this[showMessage]("success", options, only);
  }

  error(options, only = true) {
    this[showMessage]("error", options, only);
  }

  warning(options, only = true) {
    this[showMessage]("warning", options, only);
  }

  info(options, only = true) {
    this[showMessage]("info", options, only);
  }
}

export default new ResetMessage();