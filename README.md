# Construction Company Website

A modern, responsive website for a construction company showcasing services, projects, and company information.

## Overview

This project is a multi-page static website for a construction company, featuring:

- Responsive design for all device sizes
- Interactive image sliders
- Demo login/register flow using localStorage (not production authentication)
- Project gallery with interactive project details
- Contact and FAQ forms

## Project Structure

```
Construction/
├── home.html          # Main landing page with hero slider and featured projects
├── company.html       # About the company page
├── services.html      # Construction services offered
├── projects.html    # Project portfolio showcase
├── blog.html        # Company blog/news
├── contact.html     # Contact form and information
├── login.html       # User login page
├── register.html    # User registration page
├── faq.html         # Frequently asked questions
├── styles.css       # Main stylesheet (no media queries)
├── mobile.css       # All @media queries consolidated here
├── script.js        # JavaScript functionality
├── images/          # Image assets
│   └── icon/        # Icons and logos
└── vide0/           # Video assets
    └── video.mp4    # Welcome video
```

## Features

### Pages

- **Home** - Hero slider with 3 slides, featured projects, testimonials, and company stats
- **The Company** - Company history, mission, and team information
- **Services** - Construction services including design, building, remodeling, and painting
- **Projects** - Portfolio of completed construction projects
- **Blog** - Industry news and updates
- **FAQ** - Accordion-style frequently asked questions
- **Contact** - Contact form and office information

### Interactive Elements

- Auto-sliding hero banner with manual controls
- Project gallery with smooth scrolling
- Animated statistics counters
- Testimonial carousel
- Demo sign-in state stored in localStorage only
- Responsive navigation with sticky header

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript** - Interactive functionality and form handling

This is a frontend-only portfolio demo. Login state is stored in the current
browser, and contact/FAQ form submissions are not sent to a server. No backend
or real authentication is included.

## Getting Started

1. Clone or download the project files
2. Open `home.html` in a web browser
3. No build process or server required - it's a static website

## Usage

### Navigation

- Use the navigation bar to browse between pages
- The "Login" button in the header allows user authentication
- After logging in, users see an additional video slide in the hero banner

### User Authentication

- Click "Login" to access the login page
- New users can register via the registration page
- Demo sign-in state is stored in localStorage in the current browser only

## Browser Support

The website is designed to work on modern browsers with responsive support for:

- Desktop browsers
- Tablet devices
- Mobile devices

## Contact

The Contact page uses sample company information for demonstration. Its
embedded map links that sample location and should be updated alongside the
phone and address if the project is adapted for a real business.

## License

© Copyright 2026. All Rights Reserved.
