const CHAT_BUTTON_SIZE = 60;
const CHAT_BUTTON_RADIUS = CHAT_BUTTON_SIZE / 2;
const CHAT_BUTTON_BACKGROUND_COLOR = "#000";
const scriptTag = document.currentScript;
let ICON_COLOR = "#fff";

const styleElement = document.createElement("style");
styleElement.textContent = `
  * {
    box-sizing: border-box;
  }
`;
document.head.appendChild(styleElement);

// Chat Button Start
var buttondiv = document.createElement("div");
document.body.appendChild(buttondiv);

var chatButton = document.createElement("button");
chatButton.id = "chat-button";
chatButton.style.position = "fixed";
chatButton.style.bottom = "20px";
chatButton.style.right = "20px";
chatButton.style.height = CHAT_BUTTON_SIZE + "px";
chatButton.style.width = CHAT_BUTTON_SIZE + "px";
chatButton.style.border = "none";
chatButton.style.borderRadius = CHAT_BUTTON_RADIUS + "px";
chatButton.style.backgroundColor = CHAT_BUTTON_BACKGROUND_COLOR;
chatButton.style.color = "white";
chatButton.style.cursor = "pointer";
chatButton.style.display = "flex";
chatButton.style.justifyContent = "center";
chatButton.style.alignItems = "center";
chatButton.style.zIndex = "2147483647";
chatButton.innerHTML = `<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
id="chat"
fill="${ICON_COLOR}"
height="30px"
>
<path
    d="M20.61,19.19A7,7,0,0,0,17.87,8.62,8,8,0,1,0,3.68,14.91L2.29,16.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,18H8.69A7,7,0,0,0,15,22h6a1,1,0,0,0,.92-.62,1,1,0,0,0-.21-1.09ZM8,15a6.63,6.63,0,0,0,.08,1H5.41l.35-.34a1,1,0,0,0,0-1.42A5.93,5.93,0,0,1,4,10a6,6,0,0,1,6-6,5.94,5.94,0,0,1,5.65,4c-.22,0-.43,0-.65,0A7,7,0,0,0,8,15ZM18.54,20l.05.05H15a5,5,0,1,1,3.54-1.46,1,1,0,0,0-.3.7A1,1,0,0,0,18.54,20Z"
></path>
</svg>
</button>`;
buttondiv.append(chatButton);
// Chat Button End

// Chat Modal Start
var chatModalContainer = document.createElement("div");
chatModalContainer.id = "chat-modal-container";
chatModalContainer.style.display = "none";
chatModalContainer.style.minWidth = "300px";
chatModalContainer.style.width = "350px";
chatModalContainer.style.background = "white";
chatModalContainer.style.height = "500px";
chatModalContainer.style.maxHeight = "500px";
chatModalContainer.style.border = "2px solid #bbb";
chatModalContainer.style.borderRadius = "5px";
chatModalContainer.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.4)";
chatModalContainer.style.flexDirection = "column";
chatModalContainer.style.overflow = "hidden";
chatModalContainer.style.position = "fixed";
chatModalContainer.style.right = "10px";
chatModalContainer.style.bottom = "100px";
chatButton.style.zIndex = "2147483647";
chatModalContainer.innerHTML = `<iframe src="https://actiongpt.miraiminds.co/chat-screen/${scriptTag?.id}" width="100%" height="100%" frameborder="0" />`;
document.body.append(chatModalContainer);

var hideShowModal = document.getElementById("chat-modal-container");
var buttonClick = document.getElementById("chat-button");
buttonClick.addEventListener("click", () => {
  if (hideShowModal.style.display === "flex") {
    hideShowModal.style.display = "none";
  } else {
    hideShowModal.style.display = "flex";
  }
});
