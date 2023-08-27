import React, { useEffect, useState } from 'react';
import logo from './img/logo.png';
import images from './img/index.js';
import { genres, movies } from './donnees'



function App() {
  const [films, setFilms] = useState([]);
  const [listsave, setListsave] = useState([]);
  const [genrefilms, setGenresfilms] = useState([0]);
  var list_save = []
  var firstInput = ""
  useEffect(() => {
    fetchMovies()
  }, [])
  function fetchMovies() {
    const filmsData = movies[0].results; // Assuming "movies" is the array containing movie data
    const genresData = genres[0].genres; // Assuming "movies" is the array containing movie data


    setFilms(filmsData);
    setGenresfilms(genresData);
  }
  const selectionFilm = (event) => {
    const listGenres = movies[0].results
    const iD = event.target.value
    var listDisplay = []
    listGenres.forEach(Element => {
      var listes_grenres = Element.genre_ids
      listes_grenres.forEach(elt => {
        if (elt == iD) {
          listDisplay.push(Element)
          list_save.push(Element)
        }
      })
    })


    setFilms(listDisplay)
    setListsave(list_save)
  }
  var newSelection = []
  const inputChange = (event) => {
    console.log(listsave)
    firstInput = event.target.value;
    films.forEach(Element => {
      var titre_film = Element.title
      if (titre_film.indexOf(firstInput) == 0) {
        newSelection.push(Element)
      }
    })
    setFilms(newSelection)
    if (firstInput == 0 && listsave == "")
      fetchMovies()
    else if (firstInput == 0 && listsave != 0) { setFilms(listsave) }
  }

  return (
    <div >

      <div className="container-fluid vw-100 mt-3"><img src={logo} alt="" /></div>

      <div className="container-fluid  bg-white h-10 text-white mt-5 taille"></div>
      <div className="containair  d-flex justify-content-evenly align-items-center">



        <select onChange={selectionFilm} className="bg-transparent  border-white" id="movie_choice">

          {genrefilms.map((genre) => (
            <option value={genre.id} className="w-50" key={genre.id}  >{genre.name}</option>
          ))}
        </select>

        <input type="text" className=" my-5 bg-transparent border-white text-white"
          aria-label="Text input with dropdown button" placeholder="" onChange={inputChange} />
      </div>
      <div className=" container  mt-5 ">
        <div className="row mt-5  d-flex justify-content-center align-items-center" id="afficher_film" >
          {films.map((film) => (
            <div className="mx-3 mb-3" alt="" style={{ width: "15rem" }} key={film.id}  >
              <img src={images['.' + film.poster_path]} alt="Image 1" />
              <div className=" text-white ml-5 text-center"> {film.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default App;
