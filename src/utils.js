function llamandoPeliculas(movies, contenedor){
    contenedor.innerHTML = '';
    movies.forEach( pelicula => {
        const divPelicula = document.createElement('div');
        divPelicula.classList.add("col-xxl-3", "col-md-6", "my-2");
        divPelicula.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w300${pelicula.poster_path}" class="imagen manito sombra">
        `;
        divPelicula.addEventListener('click', () => { location.hash = '#pelicula=' + pelicula.id});
        contenedor.appendChild(divPelicula);
    });
}

function llamandoPreviewPeliculas(movies, contenedor){
    contenedor.innerHTML = '';

    const pelicula0 = document.createElement('div');

    pelicula0.classList.add('carousel-item','active')
    pelicula0.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w300${movies[0].poster_path}" class="imagen manito">
    `
    pelicula0.addEventListener('click', () => { location.hash = '#pelicula=' + movies[0].id});
    contenedor.appendChild(pelicula0)

    for (let i = 1; i < 4; i++) {
        const pelicula = document.createElement('div');
        pelicula.classList.add('carousel-item');
        pelicula.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w300${movies[i].poster_path}" class="imagen manito">
        `
        pelicula.addEventListener('click', () => { location.hash = '#pelicula=' + movies[i].id});
        contenedor.appendChild(pelicula)
    }
}

function removeAccents(text) {
    const sustitutions = {
      àáâãäå: "a",
      ÀÁÂÃÄÅ: "A",
      èéêë: "e",
      ÈÉÊË: "E",
      ìíîï: "i",
      ÌÍÎÏ: "I",
      òóôõö: "o",
      ÒÓÔÕÖ: "O",
      ùúûü: "u",
      ÙÚÛÜ: "U",
      ýÿ: "y",
      ÝŸ: "Y",
      ß: "ss",
      ñ: "n",
      Ñ: "N",
      " ": "_"
    };
    // Devuelve un valor si 'letter' esta incluido en la clave
    function getLetterReplacement(letter, replacements) {
      const findKey = Object.keys(replacements).reduce(
        (origin, item, index) => (item.includes(letter) ? item : origin),
        false
      );
      return findKey !== false ? replacements[findKey] : letter;
    }
    // Recorre letra por letra en busca de una sustitución
    return text
      .split("")
      .map((letter) => getLetterReplacement(letter, sustitutions))
      .join("");
  }
