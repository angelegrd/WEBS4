import './Gallery.css'
import { useMemo } from "react";
import { Link } from "react-router-dom"
import FlowerCard from "./FlowerCard";


export default function GalleryContent({ flowersData, search, flowersSortBy }) {

    const filteredFlowersData = useMemo(() => {
        let result = flowersData.filter((flower) =>
            flower.name.toLowerCase().includes(search.toLowerCase())
        );
        result = result.toSorted((a, b) => {
            if (flowersSortBy === "height_cm") {
                return (a.height_cm) - (b.height_cm);
            } else if (flowersSortBy === "name") {
                return a.name.localeCompare(b.name);
            } else if (flowersSortBy === "random") {
                result = result
                    .map(value => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value);
            }
        });
        return result;
    }, [flowersData, search, flowersSortBy]);

    return (<div id="flower-gallery">
        {filteredFlowersData.map((flower) => (
            <Link to={"/flowers/" + flower.id} key={flower.id}>
                <div className="flower-card-wrapper">
                    <FlowerCard
                        // key={flower.id}
                        name={flower.name}
                        botanical_name={flower.botanical_name}
                        family={flower.family}
                        family_common={flower.family_common}
                        color={flower.color}
                        height_cm={flower.height_cm}
                        informations={flower.informations}
                        pictureUrl={flower.pictureUrl}
                    />
                </div>

            </Link>
        ))}

    </div>);
};
