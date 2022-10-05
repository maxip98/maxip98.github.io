
async function listadoPelisPorBusqueda(query){
    const { data } = await api('search/movie', {
        params: {
            query,
        },
    });
    const movies = data.results;

    buscadorPag.innerHTML = (palabraBuscada).toUpperCase();

    const listadoPelisPorBusqueda = document.getElementById('listadoPelisPorBusqueda');

    llamandoPeliculas(movies,listadoPelisPorBusqueda)
}
