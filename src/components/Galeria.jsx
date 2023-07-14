import { useContext } from "react"
import "../assets/css/galeria.css"
import Heart from "./Heart"
import GlobalContext from "../context/GlobalContext"

export default function Galeria({ propFavoritos = false }) {
  const { photos, setPhotos } = useContext(GlobalContext)

  const setFavorito = (id) => {
    const photosIndex = photos.findIndex((f) => f.id === id)
    photos[photosIndex].liked = !photos[photosIndex].liked

    setPhotos([...photos])
  }
  return (
    <div className="galeria grid-columns-5 p-3">
      {photos.filter(({ liked }) => propFavoritos ? liked : true).map(({ id, src, liked, alt }) => (
        <div 
          onClick={() => setFavorito(id)}
          key={id}
          className="foto" 
          style={{ backgroundImage: `url(${src.tiny})` }}>
          <Heart filled={liked} />
          <p> {alt} </p>
        </div>
      ))}
    </div>
  );
}
