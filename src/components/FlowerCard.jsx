import "./FlowerCard.css";
import defaultImage from '../images/defaultflower.png'

export default function FlowerCard({ name, family, botanical_name, color, height_cm, pictureUrl }) {
    return (
        <div id="flower-card">
            <img
                id="flower-picture"
                src={pictureUrl || defaultImage} // Use default image if pictureUrl is not provided
                alt="Flower"
            />
            <div id="flower-description">
                <h3>{name}</h3>
                <p className="flower-description-line">Botanical Name: {botanical_name}</p>
                <p className="flower-description-line">Family: {family}</p>
                {/* <p className="flower-description-line">Family Common Name: {family_common}</p> */}
                <p className="flower-description-line">Color: {color}</p>
                <p className="flower-description-line">Height: {height_cm}</p>
            </div>
        </div>
    );
};