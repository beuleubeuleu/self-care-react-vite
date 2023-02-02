import React from "react";
import "./DisplayWindow.css"

type DisplayWindowProps = {
  content: String
};
export const DisplayWindow = ({ content }: DisplayWindowProps) => (
    <div className="display-window">
      <p className={ "display-window__content" }>{ content }</p>
    </div>
)