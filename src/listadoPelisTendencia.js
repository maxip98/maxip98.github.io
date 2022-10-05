async function listadoPelisTendencia(){
    const { data } = await api('trending/movie/day');
    const movies = data.results;
    
    const divListadoPelisTendencia = document.getElementById('listadoPelisTendencia');

    llamandoPeliculas(movies, divListadoPelisTendencia)

}

