import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import Favoritos from "./views/Favoritos"
import { useEffect, useState } from "react"
import GlobalContext from "./context/GlobalContext"

export default function App() {
  const endpoint = "./src/assets/fotos.json"
  const [photos, setPhotos] = useState([])
  const getData = async (url) => {
    const resp = await fetch(url)
    const data = await resp.json()

    setPhotos(data.photos)
  }

  useEffect(() => {
    getData(endpoint)
  }, [])

  const sharedGlobal = { photos, setPhotos}
  return (
    <div className="App">

      <GlobalContext.Provider value = {sharedGlobal}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}
