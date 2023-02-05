import { MessageTypeFormModal } from "./MessageTypeFormModal";
import { DisplayWindow }        from "./DisplayWindow";
import { FavButton }            from "./FavButton";
import { AddMessageFormModal }  from "./AddMessageFormModal";
import React                    from "react";
import { Header }               from "./Header";
import { favList }              from "../data";

type HomeProps = {
  title: String
  resetMsg: () => void
  showAddMessage: () => void,
  displayMsg: (event: any) => void
  message: String
  showFavButton: boolean
  showAddMessageForm: boolean
  messageDisplayed: [String, String]
  addToFav: (msg: String) => void
  addMsg: (event: any) => void
  closeAddForm: () => void
}

export const Home = ({
  title,
  resetMsg,
  showAddMessage,
  displayMsg,
  message,
  showFavButton,
  messageDisplayed,
  addToFav,
  showAddMessageForm,
  addMsg,
  closeAddForm
}: HomeProps) => {
  return (
      <div className="home-container">
        <Header title={ title } resetMsg={ resetMsg } showAddMessage={ showAddMessage } FavList={ favList }></Header>

        <MessageTypeFormModal displayMessage={ displayMsg }/>

        <DisplayWindow content={ message }>
          <FavButton show={ showFavButton }
                     messageDisplayed={ messageDisplayed }
                     addToFav={ addToFav }/>
        </DisplayWindow>

        <AddMessageFormModal showAddMessageFormModal={ showAddMessageForm } addMsg={ addMsg }
                             closeAddForm={ closeAddForm }/>
      </div>
  )
}