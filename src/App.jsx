import './App.css'

import { useState, useMemo } from "react";
import flowersData from './flowersData.js';
import FlowerCard from './components/FlowerCard';
// import favData from './favData.js';
import FavSlider from './components/FavSlider';

export default function App() {
  const [search, setSearch] = useState("");
  const [flowersSortBy, setFlowersSortBy] = useState("name");

  const filteredFlowersData = useMemo(() => {
    let result = flowersData.filter((flower) =>
      flower.name.toLowerCase().includes(search.toLowerCase())
    );
    result = result.toSorted((a, b) => {
      if (flowersSortBy === "height_cm") {
        return (a.height_cm) - (b.height_cm);
      } else {
        return a.name.localeCompare(b.name);
      }
    });
    return result;
  }, [flowersData, search, flowersSortBy]);

  return (
    <div>
      <h1>Bloomy</h1>
      <div id="flower-fav">
        <FavSlider />
      </div >

      <div id="gallery-options">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search a flower"
        />
        <label htmlFor="flower-sort">Sort by : </label>
        <select
          id="flower-sort"
          value={flowersSortBy}
          onChange={(e) => setFlowersSortBy(e.target.value)}
        >
          <option value="height_cm">Height</option>
          <option value="name">Name</option>
        </select>
      </div>

      <div id="flower-gallery">
        {filteredFlowersData.map((flower) => (
          <FlowerCard
            key={flower.id}
            name={flower.name}
            botanical_name={flower.botanical_name}
            family={flower.family}
            family_common={flower.family_common}
            color={flower.color}
            height_cm={flower.height_cm}
            informations={flower.informations}
            pictureUrl={flower.pictureUrl}
          />
        ))}

      </div>
    </div>
  );
}