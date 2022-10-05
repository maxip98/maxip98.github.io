async function listadoPelisPorCategoria(id, nombreDeCategoria){
    const { data } = await api('discover/movie', {
        params: {
            with_genres: id,
        },
    });
    const movies = data.results;
    console.log(movies)

    const nombreCategoria = document.getElementById('nombreCategoria');
    nombreCategoria.innerHTML = '';
    nombreCategoria.innerHTML = `<i class="bi bi-arrow-left-circle fs-2 flecha" onclick="busquedaAnterior()"></i> ${nombreDeCategoria}`;


    const divListadoPelisPorCategorias = document.getElementById('listadoPelisPorCategorias');
    divListadoPelisPorCategorias.innerHTML = '';

    movies.forEach(pelicula => {
        const peliPorCategoria = document.createElement('div');
        peliPorCategoria.classList.add("col-xxl-3", "col-md-6", "my-2");
        peliPorCategoria.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w300${pelicula.poster_path}" class="imagen manito">
        `;
        peliPorCategoria.addEventListener('click', () => { location.hash = '#pelicula=' + pelicula.id});
        divListadoPelisPorCategorias.appendChild(peliPorCategoria);
    });
}