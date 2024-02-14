const chatux = new ChatUx();
const initParam = {
  renderMode: "auto",
  api: {
    endpoint: "https://script.google.com/macros/s/AKfycbwf4V2rz2NPjzZS9-NduCBtyA5YauK32xIRxMLtpm6x2KLb0heCNx5OEdZ77gLkO-Z74A/exec",
    method: "GET",
    dataType: "jsonp",
    errorResponse: {
      output: [{ type: "text", value: "network error" }],
    },
  },
  bot: {
    wakeupText: null,
    botPhoto:
      "https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/chatgpt-icon.svg",
    humanPhoto: null,
    widget: {
      sendLabel: "SEND",
      placeHolder: "Say Something",
    },
  },
  window: {
    title: "ChatGPT-ChatBot",
    infoUrl: null,
  },
  wakeupButton: {
    right: 20,
    bottom: 30,
    size: 60,
    fontSize: 25,
  },
};
chatux.init(initParam);
chatux.start(true);
