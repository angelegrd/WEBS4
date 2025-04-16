import "./FlowerPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import flowersData from "../flowersData";


export default function FlowerPage() {
    const [flower, setFlower] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const foundFlower = flowersData.find(flower => String(flower.id) === String(id));
        if (foundFlower) {
            setFlower(foundFlower);
        } else {
            setFlower(null);
        }
        setLoading(false);
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!flower) {
        return <p>Flower not found</p>;
    }

    return (
        <div className="flower-page-container">
            {flower && (
                <div className="flower-details">
                    <img
                        src={flower.pictureUrl}
                        alt={flower.name}
                        style={{
                            width: '400px',
                            height: '300px',
                            objectFit: 'cover',
                        }}
                    />
                    <div className="flower-text">
                        <h2>{flower.name}</h2>
                        <p>Botanical name: {flower.botanical_name}</p>
                        <p>Family: {flower.family}</p>
                        <p>Family common name: {flower.family_common}</p>
                        <p>Color: {flower.color}</p>
                        <p>Height : {flower.height_cm} cm</p>
                        <p>{flower.informations}</p>

                    </div>
                </div>
            )}
        </div>
    );
}