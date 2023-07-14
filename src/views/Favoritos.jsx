import Galeria from "../components/Galeria"
export default function Favoritos() {
  
  return (
    <>
      <div id="favoritos">
        <h1>Fotos favoritas</h1>
        <Galeria propFavoritos = { true } />
      </div>
    </>
  );
}
