import React    from "react";
import "./Header.css"

type HeaderProps = {
  title: String,
  resetMsg: () => void
  showAddMessage: () => void
  FavList: String[]
};

export const Header = ({ title, resetMsg, showAddMessage, FavList }: HeaderProps) => {
  return (
      < header >
      < nav
  className = { "navbar" } >
      < h1
  className = { "navbar__title" } > { title }
</h1>
  <ul className={ "navbar__links" }>
    <li className="navbar__link">
      <a onClick={ () => resetMsg() }>Reset Message</a>
    </li>
    <li className="navbar__link">
      <a onClick={ () => showAddMessage() }>Add Message</a>
    </li>
    <li className="navbar__link">
      <a href="/favorites" onClick={ () => console.log(FavList) }>Show Favorites</a>
    </li>
  </ul>
</nav>
</header>
)
}