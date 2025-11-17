// VoidVerse - Homepage JavaScript

domReady(async () => {
    const comics = await loadComics();

    // Initialize Swiper carousel
    const swiper = new Swiper('.hero-carousel', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Load comic of the week (featured comic - let's pick the first one or a random one)
    const comicOfWeek = comics[Math.floor(Math.random() * comics.length)];
    const comicOfWeekContainer = document.getElementById('comic-of-week');
    comicOfWeekContainer.innerHTML = createComicCard(comicOfWeek);

    // Load new releases (latest 4 comics)
    const newReleases = comics.slice(-4).reverse();
    const newReleasesContainer = document.getElementById('new-releases');
    newReleasesContainer.innerHTML = newReleases.map(createComicCard).join('');

    // Load popular series (random selection of 4 comics)
    const shuffled = [...comics].sort(() => 0.5 - Math.random());
    const popularSeries = shuffled.slice(0, 4);
    const popularSeriesContainer = document.getElementById('popular-series');
    popularSeriesContainer.innerHTML = popularSeries.map(createComicCard).join('');
});
