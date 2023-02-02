import React from "react";
import "./Header.css"

type HeaderProps = {
  title: string,
};

export const Header = ({ title }: HeaderProps) => (
    <header>
      <nav className={"navbar"}>
        <h1 className={"navbar__title"}>{title}</h1>
        <ul className={"navbar__links"}>
          <li className="navbar__link"><button>Reset Message</button></li>
          <li className="navbar__link"><button>Add Message</button></li>
        </ul>
      </nav>
    </header>
)