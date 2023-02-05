import React from "react";
import "./DisplayWindow.css"

type DisplayWindowProps = {
  content: String
  children: React.ReactNode

};
export const DisplayWindow = ({ content, children }: DisplayWindowProps) => (
    <div className="display-window">
      <p className={ "display-window__content" }>{ content }</p>
      {children}
    </div>
)