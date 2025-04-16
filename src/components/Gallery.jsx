import './Gallery.css'

import { useState, useMemo, useEffect } from "react";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import flowersData from '../flowersData.js';
import FavSlider from './FavSlider.jsx';
import GalleryOptions from "./GalleryOptions.jsx";
import GalleryContent from "./GalleryContent.jsx";


export default function Gallery() {
  const [search, setSearch] = useState(localStorage.getItem("search") || "");
  const [flowersSortBy, setFlowersSortBy] = useState(localStorage.getItem("flowersSortBy") || "random");

  useEffect(() => {
    localStorage.setItem("search", search)
  }, [search])

  useEffect(() => {
    localStorage.setItem("flowersSortBy", flowersSortBy)
  }, [flowersSortBy])


  return (
    <div>
      <Header />

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

      <Footer />

    </div>
  );
}