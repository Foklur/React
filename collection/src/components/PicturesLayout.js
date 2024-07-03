import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const PicturesLayout = () => {
    const picturesArray = [
        { id: 1, name: "Impression, Sunrise", description: "This painting gave the name to the Impressionist movement, depicting the port of Le Havre at sunrise.", genre: "Impressionism", year: 1872 },
        { id: 2, name: "Water Lilies", description: "Part of a series of approximately 250 oil paintings depicting Monet's flower garden at Giverny.", genre: "Impressionism", year: 1919 },
        { id: 3, name: "Woman with a Parasol", description: "This painting features Monet's first wife, Camille, and their son, Jean, on a windy summer's day.", genre: "Impressionism", year: 1875 },
        { id: 4, name: "The Japanese Bridge", description: "This painting is part of a series that depicts the Japanese-style bridge in Monet's garden.", genre: "Impressionism", year: 1899 },
        { id: 5, name: "Rouen Cathedral Series", description: "A series of paintings capturing the façade of Rouen Cathedral at different times of the day and year.", genre: "Impressionism", year: 1894 },
        { id: 6, name: "Houses of Parliament Series", description: "A series of paintings of the Houses of Parliament in London, showing different light and weather conditions.", genre: "Impressionism", year: 1900 }
    ];
    let [pictures, setPictures] = useState(picturesArray);
    return (
        <>
            <div>
                <Outlet context={[pictures, setPictures]} />
            </div>
        </>
    )
}

export default PicturesLayout;
