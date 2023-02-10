import React from "react";
import "./MessageTypeFormModal.css"
import { MessageTypeToggle } from "./MessageTypeToggle";

type MessageTypeFormModalProp = {
  displayMessage: (event: any) => void
}

export const MessageTypeFormModal = ({ displayMessage }: MessageTypeFormModalProp) => {
  return (
      <div className="message-type-form__container">
        <form onSubmit={ () => displayMessage(event) }>
          <MessageTypeToggle/>
          <input type="submit" value="✨Selfcare🌟" id="submit-bouton"/>
        </form>
      </div>
  )
}