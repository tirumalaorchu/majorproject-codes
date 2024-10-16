const video = document.querySelector('video');
const playButton = document.querySelector('.play-button');

playButton.addEventListener('click', () => {
  video.play();
  playButton.style.display = 'none';
});
const filterButtons = document.querySelectorAll('.filter-button');
const filteredImage = document.querySelector('.filtered-image');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    filteredImage.style.filter = filter;
  });
});
const animateText = document.querySelector('.animate-text');

setTimeout(() => {
  animateText.classList.add('fade-in');
}, 1000);
const animateText = document.querySelector('.animate-text');

// Navigation link event listeners
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href');
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Filter button event listener
  document.getElementById('filter-btn').addEventListener('click', () => {
    document.getElementById('filter-overlay').classList.remove('hidden');
  });
  
  // Close filter button event listener
  document.getElementById('close-filter-btn').addEventListener('click', () => {
    document.getElementById('filter-overlay').classList.add('hidden');
  });
  
  // Filter overlay link event listeners
  document.querySelectorAll('#filter-overlay ul li a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href');
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
      document.getElementById('filter-overlay').classList.add('hidden');
    });
  });  
  
