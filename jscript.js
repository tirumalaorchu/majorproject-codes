// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission handler
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea').value;
    console.log(name, email, message);
    // Send data to server or API
});
const form = document.getElementById('email-subscription-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const formData = {
        email: email
    };

    fetch('/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
        // Call API or perform search logic here
        const results = [
            { title: 'Result 1', link: '#' },
            { title: 'Result 2', link: '#' },
            { title: 'Result 3', link: '#' },
        ];
        displaySearchResults(results);
    }
});

function displaySearchResults(results) {
    searchResults.innerHTML = '';
    results.forEach((result) => {
        const resultHTML = `
            <li>
                <a href="${result.link}">${result.title}</a>
            </li>
        `;
        searchResults.innerHTML += resultHTML;
    });
    searchResults.style.display = 'block';
}
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') {
        searchResults.style.display = 'none';
    }
});

