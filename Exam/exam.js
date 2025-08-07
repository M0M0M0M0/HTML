document.querySelectorAll("p a").forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const query = this.textContent.trim();
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(googleSearchUrl, "_blank"); 
    });
});
document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', function () {
        const titleElement = card.querySelector('.movie-title');
        if (titleElement) {
        const movieName = titleElement.textContent.trim();
        const searchQuery = `Watch movie ${movieName}`;
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.open(googleSearchUrl, '_blank');
        }
    });
});