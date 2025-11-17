# VoidVerse
<<<<<<< HEAD

A dynamic online comic store simulation built with HTML, CSS, and JavaScript. This project showcases advanced front-end design and client-side interactivity without any backend dependencies.

## Features

### Multi-Page Application
- **Homepage (index.html)**: Hero carousel, new releases, popular series, and publisher spotlights
- **Browse Page (browse.html)**: Full catalog with filtering and sorting capabilities
- **Comic Detail Page (comic-detail.html)**: Dynamic content based on URL parameters
- **Shopping Cart (cart.html)**: Persistent cart with localStorage

### Client-Side Functionality
- **Hero Carousel**: Auto-playing slideshow using Swiper.js
- **Filtering & Sorting**: Real-time filtering by publisher/genre and sorting by various criteria
- **Dynamic Content**: Comic details populated via URL parameters
- **Shopping Cart**: Add, remove, update quantities with localStorage persistence
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

### Design & UX
- Dark comic book theme with bold typography
- Smooth transitions and hover effects
- Fully responsive across all device sizes
- Professional aesthetic comparable to major comic publishers

## Technical Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Client-side logic and interactivity
- **Swiper.js**: Carousel functionality (CDN)
- **localStorage**: Cart persistence

## Project Structure

```
VoidVerse/
├── index.html              # Homepage
├── browse.html             # Browse all comics
├── comic-detail.html       # Individual comic details
├── cart.html               # Shopping cart
├── css/
│   └── styles.css          # Global styles
├── js/
│   ├── common.js           # Shared utilities and cart class
│   ├── index.js            # Homepage functionality
│   ├── browse.js           # Browse page filtering/sorting
│   ├── comic-detail.js     # Detail page population
│   └── cart.js             # Cart management
├── data/
│   └── comics.js           # Static comic data
├── images/                 # Comic cover images (placeholders)
│   ├── spiderman.jpg
│   ├── batman.jpg
│   ├── watchmen.jpg
│   ├── xmen.jpg
│   ├── walkingdead.jpg
│   ├── saga.jpg
│   ├── superman.jpg
│   ├── captainamerica.jpg
│   ├── sandman.jpg
│   ├── invincible.jpg
│   ├── hero1.jpg
│   ├── hero2.jpg
│   └── hero3.jpg
├── README.md               # This file
└── TODO.md                 # Development progress
```

## Data Structure

Comic data is stored statically in `data/comics.js` as an array of objects:

```javascript
{
    id: 1,
    title: "Comic Title",
    cover: "images/cover.jpg",
    synopsis: "Brief description...",
    creators: "Creator Names",
    price: 19.99,
    publisher: "Marvel",
    genre: "Superhero",
    releaseDate: "2023-05-15"
}
```

## Installation & Setup

1. Clone or download the project files
2. Ensure all files are in the same directory structure
3. Open `index.html` in a modern web browser
4. No build process or server required - fully static

## Browser Compatibility

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Deployment

The site is designed for static hosting services like GitHub Pages:

1. Upload all files to your repository
2. Enable GitHub Pages in repository settings
3. Set source to main branch
4. Access via `https://username.github.io/repository-name/`

## Future Enhancements

- Image optimization and lazy loading
- Search functionality
- User accounts (simulated)
- Wishlist feature
- Advanced animations with CSS/JS libraries

## License

This project is for educational and portfolio purposes. Comic data and images are placeholders and should be replaced with appropriate licensed content for production use.

## Credits

- Swiper.js for carousel functionality
- Placeholder images from various free sources
- Comic data inspired by real publications (fictionalized for demo)
=======
Your Ultimate destination for Comic Books
>>>>>>> 09d056f164a443805e025ddaea3339cbdd3bfb8a
