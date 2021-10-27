import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "31b38be55ce59b7b039514536387cf222e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("Hello World");
        }
      },
      rootEl: document.getElementById("alan-btn"),
    });
  }, []);
  return <div>Hello World</div>;
};

export default App;
