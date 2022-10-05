const imgcategoria0 = [
    'https://image.tmdb.org/t/p/w500/fJbw16AwM59dEhSiCIAfFGgIgOP.jpg', 
    'https://image.tmdb.org/t/p/w500/nn7prZXNz3dgCV5jeShqqfHcU9F.jpg',
    'https://image.tmdb.org/t/p/w500/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg',
    'https://image.tmdb.org/t/p/w500/grEVYkBAVIzQ4JmZ7ydceN9DFQR.jpg',
    
    'https://image.tmdb.org/t/p/w500/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg',
    'https://image.tmdb.org/t/p/w500/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg',
    'https://image.tmdb.org/t/p/w500/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg',
    'https://image.tmdb.org/t/p/w500/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg',
    'https://image.tmdb.org/t/p/w500/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg',
    'https://image.tmdb.org/t/p/w500/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg',
    'https://image.tmdb.org/t/p/w500/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg',
    'https://image.tmdb.org/t/p/w500/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg',
    'https://image.tmdb.org/t/p/w500/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg',
    'https://image.tmdb.org/t/p/w500/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg',
    'https://image.tmdb.org/t/p/w500/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg',
    'https://image.tmdb.org/t/p/w500/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg',
    'https://image.tmdb.org/t/p/w500/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg',
    'https://image.tmdb.org/t/p/w500/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg',
    'https://image.tmdb.org/t/p/w500/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg',

];


async function listadoCategorias(){
    const { data } = await api('genre/movie/list');
    const categorias = data.genres;

    console.log(categorias)

    const divCategorias = document.getElementById('listadoCategorias');
    divCategorias.innerHTML = '';
    
    categorias.forEach((categoria,i) => {
        const categoriaInd = document.createElement('div');
        const categoriaParr = document.createElement('p');
        const categoriaImg = document.createElement('img');
        categoriaImg.src = (imgcategoria0[i]);
        categoriaImg.classList.add('img-fluid','bordeNegro','manito');
        categoriaParr.addEventListener('click', () => {
            location.hash = '#categoria=' + categoria.id + '-' + removeAccents(categoria.name);
        });
        categoriaParr.classList.add('buttonCatInd','bordeNegro');
        categoriaParr.textContent = (categoria.name).toUpperCase();
        categoriaInd.classList.add('col-md-4','col-lg-2', 'col-6' );
        categoriaInd.appendChild(categoriaImg);
        categoriaInd.appendChild(categoriaParr);
        categoriaInd.addEventListener('click', () => {
            location.hash = '#categoria=' + categoria.id + '-' + removeAccents(categoria.name);
        });
        divCategorias.appendChild(categoriaInd);
    });

}

