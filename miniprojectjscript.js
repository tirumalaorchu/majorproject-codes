
JavaScript (script.js)


// Sample portfolio data
const portfolioData = [
    {
        category: "Short-Form Videos",
        title: "Video 1",
        description: "This is a short-form video.",
        imageUrl: "image1.jpg",
        videoUrl: "video1.mp4"
    },
    {
        category: "Long-Form Videos",
        title: "Video 2",
        description: "This is a long-form video.",
        imageUrl: "image2.jpg",
        videoUrl: "video2.mp4"
    },
    // Add more portfolio items...
];

// Function to generate portfolio grid items
function generatePortfolioGrid(category) {
    const portfolioGrid = document.querySelector(`#${category}-videos .portfolio-grid`);
    portfolioGrid.innerHTML = "";
    portfolioData.filter(item => item.category === category).forEach(item => {
        const portfolioItem = document.createElement("div");
        portfolioItem.classList.add("portfolio-item");
        portfolioItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}">
            <h3>${item.title}</h
