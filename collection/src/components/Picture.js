import { useParams, useOutletContext } from "react-router-dom";

const Picture = () => {
    const [pictures] = useOutletContext();
    let { id } = useParams();
    let picture = pictures.find(p => p.id === parseInt(id));

    if (!picture) {
        return <p>Picture not found</p>;
    }

    return (
        <>
            <div>
                <h1>{picture.name} ({picture.year})</h1>
                <p>{picture.description}</p>
                <p>Genre: {picture.genre}</p>
                <p>Author: Claude Monet</p>
            </div>
        </>
    )
}
export default Picture;
