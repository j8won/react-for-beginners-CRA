import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//React-app이 업데이트되며 기존의 Render가 아닌 createRoot으로 변경됨
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode> <= 개발 과정 중 안전을 위해 켜는 기능인데 console.log가 두 번씩 실행됨 ㅠㅠ
  <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
