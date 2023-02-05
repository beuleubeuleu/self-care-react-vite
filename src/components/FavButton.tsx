import React         from "react";
import "./FavButton.css"

type FavButtonProps = {
  messageDisplayed: [String, String]
  show: Boolean
  addToFav: (msg: String) => void
}

export const FavButton = ({ messageDisplayed, show, addToFav }:FavButtonProps) => {
  if (!show) return null
  return(
      <button className="fav-button" onClick={() => {addToFav(messageDisplayed[0])}}> ⭐️</button>
  )
}