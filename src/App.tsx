import React, { useState }       from "react";
import "./App.css"
import { Header }                from "./components/Header";
import { DisplayWindow }         from "./components/DisplayWindow";
import { MessageTypeFormModal }  from "./components/MessageTypeFormModal";
import { mantras, affirmations } from "./data";



function App() {
  const title = "beuleubeuleu's SelfCare Center";
  const initialDisplayMsg = "Lets get some self-care!"
  const errorMsg = "Choose your selfcare first";
  const [displayMessage, setDisplayMessage] = useState<String>(initialDisplayMsg);

  const randomItemFromArray = (array: String[]) => array[Math.floor(Math.random() * array.length)]
  const resetMsg = () => {
    setDisplayMessage(initialDisplayMsg);
  }
  const addMsg = () => {
    setDisplayMessage(randomItemFromArray(affirmations));
  }

  const displayMsg = (event: any) => {
    event.preventDefault();
    const affirmationBox = event.target.displayMsgForm[0]
    const mantraBox = event.target.displayMsgForm[1]
    affirmationBox.checked? setDisplayMessage(randomItemFromArray(affirmations)):
    mantraBox.checked? setDisplayMessage(randomItemFromArray(mantras)): setDisplayMessage(errorMsg)
  }

  return (
      <div className="main">
        <Header title={ title } resetMsg={ resetMsg } addMsg={ addMsg }></Header>

        <MessageTypeFormModal displayMessage={ displayMsg }/>

        <DisplayWindow content={ displayMessage }/>
      </div>
  )
}

export default App
