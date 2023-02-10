import React                 from "react";
import "./AddMessageFormModal.css"
import OutsideClickHandler   from "react-outside-click-handler";
import { MessageTypeToggle } from "./MessageTypeToggle";

type AddMessageFormModalProps = {
  showAddMessageFormModal: boolean,
  addMsg: (event: any) => void,
  closeAddForm: () => void
}
export const AddMessageFormModal = ({ showAddMessageFormModal, addMsg, closeAddForm }: AddMessageFormModalProps) => {

  if ( !showAddMessageFormModal ) return null

  return (
      <div className="addMessageForm__container">
        <OutsideClickHandler onOutsideClick={()=> closeAddForm()}>
          <form onSubmit={ () => addMsg(event) }>
              <MessageTypeToggle/>
            <label className="userInput">
              <input type="text" name="new-citation" placeholder={ "personalize your selfcare" }/>
            </label>
            <button className="addMessageForm__cancel" onClick={ () => closeAddForm() }>Annuler</button>
            <input type="submit" value="✨Selfcare🌟" id="submit-addBtn"/>
          </form>
        </OutsideClickHandler>
      </div>
  )
}