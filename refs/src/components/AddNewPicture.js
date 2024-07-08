import React, { useRef, useState } from 'react';

const AddNewPicture = () => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const genreRef = useRef(null);
    const authorRef = useRef(null);
    const yearRef = useRef(null);

    const [pictures, setPictures] = useState([]);

    const handleAddPicture = (e) => {
        e.preventDefault();

        const newPicture = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            genre: genreRef.current.value,
            author: authorRef.current.value,
            year: yearRef.current.value
        };

        setPictures([...pictures, newPicture]);

        titleRef.current.value = '';
        descriptionRef.current.value = '';
        genreRef.current.value = '';
        authorRef.current.value = '';
        yearRef.current.value = '';
    }

    return (
        <>
            <h1>Add New Picture</h1>
            <form className='form-style' onSubmit={handleAddPicture}>
                <div>
                    <label>Title:</label>
                    <input placeholder='Title' ref={titleRef} type='text' required />
                </div>

                <div>
                    <label>Description:</label>
                    {/* <input ref={descriptionRef} type='text'/> */}
                    <textarea ref={descriptionRef} placeholder='Description' required></textarea>
                </div>

                <div>
                    <label>Genre:</label>
                    <input placeholder='Genre' ref={genreRef} type='text' required />
                </div>

                <div>
                    <label>Author:</label>
                    <input placeholder='Author' ref={authorRef} type='text' required />
                </div>

                <div>
                    <label>Year:</label>
                    <input placeholder='Year' ref={yearRef} type='number' required />
                </div>
                <button type='submit'>Add Picture</button>
            </form>

            <h1>Gallery</h1>
            <div className='gallery'>
                {pictures.map((picture, index) => (
                    <div key={index} className='picture-card'>
                        <h2>{picture.title}</h2>
                        <p><strong>Description:</strong> {picture.description}</p>
                        <p><strong>Genre:</strong> {picture.genre}</p>
                        <p><strong>Author:</strong> {picture.author}</p>
                        <p><strong>Year:</strong> {picture.year}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AddNewPicture;
