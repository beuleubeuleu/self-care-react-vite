import React, { useState }       from "react";
import "./App.css"
import { Header }                from "./components/Header";
import { DisplayWindow }         from "./components/DisplayWindow";
import { MessageTypeFormModal }  from "./components/MessageTypeFormModal";
import { AddMessageFormModal }   from "./components/AddMessageFormModal";
import { mantras, affirmations } from "./data";



function App() {
  const title = "beuleubeuleu's SelfCare Center";
  const initialDisplayMsg = "Lets get some self-care!"
  const errorMsg = "Choose your selfcare first";
  const [displayMessage, setDisplayMessage] = useState<String>(initialDisplayMsg);
  const [showAddMessageForm, setShowAddMessageForm] = useState(false);

  const randomItemFromArray = (array: String[]) => array[Math.floor(Math.random() * array.length)]
  const resetMsg = () => {
    setDisplayMessage(initialDisplayMsg);
  }
  const showAddMessage = () => {
  setShowAddMessageForm(true);
  }
  const addMsg = (event:any) => {
    event.preventDefault()
    const isMantra = event.target[0].checked
    const message = event.target[1].value
    isMantra? mantras.push(message): affirmations.push(message)
    setDisplayMessage(message)
    setShowAddMessageForm(false)
  }
  const closeAddForm = () => {
    setShowAddMessageForm(false)
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
        <Header title={ title } resetMsg={ resetMsg } showAddMessage={ showAddMessage }></Header>

        <MessageTypeFormModal displayMessage={ displayMsg }/>

        <DisplayWindow content={ displayMessage }/>

        <AddMessageFormModal showAddMessageFormModal={showAddMessageForm} addMsg={addMsg} closeAddForm={closeAddForm}/>
      </div>
  )
}

export default App
