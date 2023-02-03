import React from "react";
import "./AddMessageFormModal.css"

type AddMessageFormModalProps = {
  showAddMessageFormModal: boolean,
  addMsg: (event: any) => void,
  closeAddForm: () => void
}
export const AddMessageFormModal = ({ showAddMessageFormModal, addMsg, closeAddForm }: AddMessageFormModalProps) => {

  if ( !showAddMessageFormModal ) return null

  return (
      <div className="addMessageForm__container">
        <form onSubmit={ () => addMsg(event) }>
          <div className="addForm__inputs">
            <label htmlFor="add-affirmation">Affirmation</label>
            <label className="switch">
              <input type="checkbox" name="citation-type"/>
              <span className="slider round"></span>
            </label>
            <label htmlFor="add-mantra">Mantra</label>
          </div>
          <label className="userInput">
            <input type="text" name="new-citation" placeholder={ "personalize your selfcare" }/>
          </label>
          <button className="addMessageForm__cancel" onClick={ () => closeAddForm() }>Annuler</button>
          <input type="submit" value="✨Selfcare🌟" id="submit-addBtn"/>
        </form>
      </div>
  )
}