import React from "react";
import "./MessageTypeFormModal.css"

type MessageTypeFormModalProp = {
  displayMessage: (event: any) => void
}

export const MessageTypeFormModal = ({ displayMessage }: MessageTypeFormModalProp) => {
  return (
      <div className="message-type-form__container">
        <form onSubmit={ () => displayMessage(event) }>
          <label htmlFor="affirmation-option">Affirmation</label>
          <input type="radio" name="displayMsgForm" id="affirmation-option"/>
          <label htmlFor="mantra-option">Mantra</label>
          <input type="radio" name="displayMsgForm" id="mantra-option"/>
          <input type="submit" value="Receive selfcare" id= "submit-bouton"/>
        </form>
      </div>
  )
}