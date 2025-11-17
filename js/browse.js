// VoidVerse - Browse Page JavaScript

domReady(async () => {
    const comics = await loadComics();
    let filteredComics = [...comics];

    const comicGrid = document.getElementById('comic-grid');
    const publisherFilter = document.getElementById('publisher-filter');
    const genreFilter = document.getElementById('genre-filter');
    const sortSelect = document.getElementById('sort-select');

    // Function to render comics
    function renderComics(comicsToRender) {
        comicGrid.innerHTML = comicsToRender.map(createComicCard).join('');
    }

    // Function to filter comics
    function filterComics() {
        const publisher = publisherFilter.value;
        const genre = genreFilter.value;

        filteredComics = comics.filter(comic => {
            const matchesPublisher = !publisher || comic.publisher === publisher;
            const matchesGenre = !genre || comic.genre === genre;
            return matchesPublisher && matchesGenre;
        });

        sortComics();
    }

    // Function to sort comics
    function sortComics() {
        const sortBy = sortSelect.value;

        filteredComics.sort((a, b) => {
            switch (sortBy) {
                case 'title':
                    return a.title.localeCompare(b.title);
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'date':
                    return new Date(b.releaseDate) - new Date(a.releaseDate);
                default:
                    return 0;
            }
        });

        renderComics(filteredComics);
    }

    // Event listeners
    publisherFilter.addEventListener('change', filterComics);
    genreFilter.addEventListener('change', filterComics);
    sortSelect.addEventListener('change', sortComics);

    // Check for URL parameters (e.g., from publisher spotlights)
    const urlParams = new URLSearchParams(window.location.search);
    const publisherParam = urlParams.get('publisher');
    if (publisherParam) {
        publisherFilter.value = publisherParam;
    }

    // Initial render
    filterComics();
});
