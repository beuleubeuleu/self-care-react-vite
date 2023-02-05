import React, { useState, useEffect }          from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import { Home }                                from "./components/Home";
import { mantras, affirmations, favorites }    from "./data";
import { Favorites }                           from "./components/Favorites";



function App() {
  const title = "beuleubeuleu's SelfCare Center";
  const initialDisplayMsg = "Lets get some self-care!"
  const errorMsg = "Choose your selfcare first";
  const [displayMessage, setDisplayMessage] = useState<String>(initialDisplayMsg);
  const [showAddMessageForm, setShowAddMessageForm] = useState(false);
  const [showFavButton, setShowFavButton] = useState(false);
  const [FavList, setFavList] = useState(favorites)

  const randomItemFromArray = (array: String[]) => array[Math.floor(Math.random() * array.length)]
  const resetMsg = () => {
    setDisplayMessage(initialDisplayMsg);
  }
  const showAddMessage = () => {
    setShowAddMessageForm(true);
  }
  const addMsg = (event: any) => {
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

  const addToFav = (msg: String): void => {
    if ( !FavList.includes(msg) ) {
      setFavList([...FavList, msg])
    }
  }

  useEffect(() => {
    localStorage.setItem("favList", JSON.stringify(FavList.join()))
  }, [FavList]);



  useEffect(() => {
    displayMessage == initialDisplayMsg || displayMessage == errorMsg? setShowFavButton(false): setShowFavButton(true);
  }, [displayMessage]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home title={title} resetMsg={resetMsg} showAddMessage={showAddMessage} displayMsg={ displayMsg } message={ displayMessage } showFavButton={ showFavButton }
                     messageDisplayed={ [displayMessage, initialDisplayMsg] } addToFav={ addToFav }
                     showAddMessageForm={ showAddMessageForm } addMsg={ addMsg } closeAddForm={ closeAddForm }/>
    },
    {
      path: "/favorites",
      element: <Favorites/>
    }
  ]);


  return (
      <div className="main">

        <RouterProvider router={ router }/>
      </div>
  )
}

export default App
