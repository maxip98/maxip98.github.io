const peliIndividualTitulo = document.getElementById('peliIndividualTitulo');
const peliIndividualTagline = document.getElementById('peliIndividualTagline');
const peliIndividualDescripcion = document.getElementById('peliIndividualDescripcion');
const peliIndividualDuracion = document.getElementById('peliIndividualDuracion');
const peliIndividualPuntaje = document.getElementById('peliIndividualPuntaje');
const peliIndividualPais = document.getElementById('peliIndividualPais');
const peliIndividualFecha = document.getElementById('peliIndividualFecha');
const peliIndividualImagen = document.getElementById('peliIndividualImagen');
const peliIndividualCategorias = document.getElementById('peliIndividualCategorias')

async function cargarPelicula(id){
    const { data: pelicula } = await api('movie/' + id);

    peliIndividualTitulo.innerHTML = `<i class="bi bi-arrow-left-circle fs-2 flecha" onclick="busquedaAnterior()"></i> ` + pelicula.title;
    peliIndividualTagline.textContent = pelicula.tagline;
    peliIndividualDescripcion.textContent = pelicula.overview;
    peliIndividualDuracion.textContent = pelicula.runtime
    peliIndividualPuntaje.innerHTML = `${pelicula.vote_average}`;
    pelicula.production_countries.forEach(pais => {
        const paisPelicula = document.createElement('span');
        paisPelicula.textContent = ` ${pais.name}, `
        peliIndividualPais.appendChild(paisPelicula);
    });
    peliIndividualFecha.textContent = pelicula.release_date;
    peliIndividualImagen.src = `https://image.tmdb.org/t/p/w400${pelicula.poster_path}`;

    pelicula.genres.forEach(categoria => {
        const peliPorCategoria = document.createElement('div');
        const categoriaParr = document.createElement('p');
        categoriaParr.classList.add('buttonCat');
        categoriaParr.textContent = (categoria.name).toUpperCase();
        peliPorCategoria.classList.add("col-6", "col-lg-4");
        peliPorCategoria.appendChild(categoriaParr);
        peliPorCategoria.addEventListener('click', () => {
            location.hash = '#categoria=' + categoria.id + '-' + categoria.name;
        });
        peliIndividualCategorias.appendChild(peliPorCategoria);
    });
}

async function listadoPelisRelacionadas(id){
    const { data } = await api(`movie/${id}/recommendations`);
    const movies = data.results;
    const divListadoPelisRelacionadas = document.getElementById('listadoPeliculasRelacionadas');

    llamandoPeliculas(movies, divListadoPelisRelacionadas)
}