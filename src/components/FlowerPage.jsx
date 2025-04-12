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
            setFlower(null);  // Ou gérer un état "not found" pour plus de clarté
        }
        setLoading(false);  // Fin du chargement
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!flower) {
        return <p>Flower not found</p>;
    }

    return (
        <div>
            {flower && (
                <div>
                    <img src={flower.pictureUrl} alt={flower.name} />
                    <h2>{flower.name}</h2>
                    <p>Botanical name: {flower.botanical_name}</p>
                    <p>Family: {flower.family}</p>
                    <p>Family common name: {flower.family_common}</p>
                    <p>Color: {flower.color} & Height : {flower.height_cm} cm</p>
                    <p>{flower.informations}</p>


                </div>
            )}
        </div>
    );
}