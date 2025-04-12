import './Gallery.css'

import { useState, useMemo, useEffect } from "react";
import flowersData from '../flowersData.js';
// import FlowerCard from './components/FlowerCard';
// import favData from './favData.js';
import FavSlider from './FavSlider.jsx';
import GalleryOptions from "./GalleryOptions.jsx";
import GalleryContent from "./GalleryContent.jsx";


export default function Gallery() {
  const [search, setSearch] = useState(localStorage.getItem("search") || "");
  const [flowersSortBy, setFlowersSortBy] = useState(localStorage.getItem("flowersSortBy") || "name");

  useEffect(() => {
    localStorage.setItem("search", search)
  }, [search])

  useEffect(() => {
    localStorage.setItem("flowersSortBy", flowersSortBy)
  }, [flowersSortBy])


  return (
    <div>
      <h1>Bloomy</h1>
      <div id="flower-fav">
        <FavSlider />
      </div >
      <GalleryOptions
        search={search}
        flowersSortBy={flowersSortBy}
        onSearchChange={setSearch}
        onFlowersSortByChange={setFlowersSortBy}
      />
      <GalleryContent
        flowersData={flowersData}
        search={search}
        flowersSortBy={flowersSortBy}
      />

    </div>
  );
}