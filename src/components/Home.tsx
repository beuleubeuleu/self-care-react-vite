import { MessageTypeFormModal } from "./MessageTypeFormModal";
import { DisplayWindow }        from "./DisplayWindow";
import { FavButton }            from "./FavButton";
import { AddMessageFormModal }  from "./AddMessageFormModal";
import React                    from "react";
import "./Home.css"

type HomeProps = {
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

        <div className="homepage-content">
          <MessageTypeFormModal displayMessage={ displayMsg }/>

          <DisplayWindow content={ message }>
            <FavButton show={ showFavButton }
                       messageDisplayed={ messageDisplayed }
                       addToFav={ addToFav }/>
          </DisplayWindow>
        </div>

        <AddMessageFormModal showAddMessageFormModal={ showAddMessageForm } addMsg={ addMsg }
                             closeAddForm={ closeAddForm }/>
      </div>
  )
}