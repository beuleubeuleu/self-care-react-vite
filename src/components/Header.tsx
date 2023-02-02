import React from "react";
import "./Header.css"

type HeaderProps = {
  title: string,
  resetMsg: () => void
  addMsg: () => void
};

export const Header = ({ title, resetMsg, addMsg }: HeaderProps) => (
    <header>
      <nav className={ "navbar" }>
        <h1 className={ "navbar__title" }>{ title }</h1>
        <ul className={ "navbar__links" }>
          <li className="navbar__link">
            <button onClick={() => resetMsg()}>Reset Message</button>
          </li>
          <li className="navbar__link">
            <button onClick={()=>addMsg()}>Add Message</button>
          </li>
        </ul>
      </nav>
    </header>
)