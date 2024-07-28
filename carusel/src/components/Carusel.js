import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages, nextImage, prevImage } from '../redux/caruselSlice';


const Carousel = () => {
    const dispatch = useDispatch();
    const { images, currentIndex, status, error } = useSelector((state) => state.carusel);

    useEffect(() => {
        dispatch(fetchImages());
    }, [dispatch]);

    const renderImages = () => {
        const displayedImages = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % images.length;
            displayedImages.push(
                <img key={index} src={images[index]} alt={`carousel-${index}`} className="carousel-image" />
            );
        }
        return displayedImages;
    };

    let content;

    if (status === 'loading') {
        content = <p>Loading...</p>;
    } else if (status === 'succeeded') {
        content = (
            <div className="carousel-container">
                <button className="carousel-button" onClick={() => dispatch(prevImage())}>Prev</button>
                <div className="carousel-images">
                    {renderImages()}
                </div>
                <button className="carousel-button" onClick={() => dispatch(nextImage())}>Next</button>
            </div>
        );
    } else if (status === 'failed') {
        content = <p>{error}</p>;
    }

    return <div className="carousel">{content}</div>;
};

export default Carousel;