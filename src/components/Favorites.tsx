import React from "react";
import "./Favorites.css"

export const Favorites = () => {
  const storedFavList = localStorage.getItem("favList")

  let favList: any = ["no favorites"];
  if (storedFavList) {
    try {
      favList = JSON.parse(storedFavList).split(",");
    } catch (error) {
      console.error(error);
    }
  }


  const getFavItems = (list: string[]): any => {
          return list.map((item: string) => (
              <li key={ list.indexOf(item) } className="favorites__element">{ item }</li>
          ))
        }
  ;
  return (
      <div className="favorites">
        <div className="favorites__header">
          <a href="/" className="favorites__go-back"> Back</a>
          <h1 className="favorites__title">Favorites</h1>
        </div>
        <ul>
          { getFavItems(favList) }
        </ul>
      </div>
  )
}