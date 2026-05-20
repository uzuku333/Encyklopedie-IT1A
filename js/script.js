document.addEventListener('DOMContentLoaded', () => {
    // Search elements
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Simple alert for search input
    const handleSearch = () => {
        if (searchInput) {
            const query = searchInput.value.trim();
            if (query) {
                alert(`Vyhledávání component: "${query}"\nFunkce vyhledávání bude brzy implementována!`);
            } else {
                alert('Zadejte prosím název komponenty pro vyhledávání.');
            }
        }
    };

    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }

    // Button click animation
    const buttons = document.querySelectorAll('.btn, .nav-link, .back-btn, .card');
    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
            button.style.transition = 'transform 0.1s ease';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = '';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });
});
