import { Link, useOutletContext } from "react-router-dom";

const PicturesList = () => {
    const [pictures, setPictures] = useOutletContext();
    const deletePicturesById = (id) => {
        setPictures(pictures.filter(picture => picture.id !== id));
    };
    return (
        <ol>
            {
                pictures.map(p => (
                    <li key={p.id}>
                        <Link to={`/pictures/${p.id}`}>{p.id}. {p.name} ({p.year})</Link>
                        <button onClick={() => deletePicturesById(p.id)}>Delete</button>
                    </li>
                ))
            }
        </ol>
    )
}
export default PicturesList;
