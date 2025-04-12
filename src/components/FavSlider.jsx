import "./FavSlider.css";
import { useState } from "react";
import favData from "../favData.js";

export default function FavSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const selectPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const selectNext = () => {
        if (currentIndex < favData.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <div id="fav-slider">
            <h2>Our favorites of the week</h2>
            <div className="fav-image"
                style={{
                    backgroundImage: `url(${favData[currentIndex].pictureUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "20px",

                }}
            >
                <h3>{favData[currentIndex].title}</h3>
                <p>{favData[currentIndex].content}</p>
            </div>

            <div>
                <button onClick={selectPrevious} disabled={currentIndex === 0}>
                    Previous
                </button>
                <button
                    onClick={selectNext}
                    disabled={currentIndex === favData.length - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
}