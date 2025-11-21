# Nirajan Acharya - Portfolio

A modern, responsive portfolio website built with React.js and Tailwind CSS. Showcasing projects, achievements, research papers, and blog posts.

## 🚀 Features

- **Modern UI** - Built with React and styled with Tailwind CSS
- **Responsive Design** - Mobile-friendly design that works on all devices
- **Terminal Hero Section** - Animated terminal-style introduction
- **Projects Showcase** - Display of notable projects with links
- **Awards & Recognition** - Honors and achievements section
- **Timeline** - Community leadership journey with animations
- **Gallery** - Photo gallery with filtering and modal view
- **Research & Blogs** - Dedicated section for research papers and blog posts
- **Smooth Animations** - Modern scroll and hover animations

## 📦 Tech Stack

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **FontAwesome** - Icons
- **JavaScript ES6+** - Modern JavaScript

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation bar
│   ├── Hero.js            # Terminal-style hero section
│   ├── About.js           # About me section with achievements
│   ├── Projects.js        # Projects showcase
│   ├── Awards.js          # Awards and honors
│   ├── Timeline.js        # Community leadership timeline
│   ├── Recommendations.js # Recommendations section
│   ├── Gallery.js         # Photo gallery with filters
│   └── Footer.js          # Footer with social links
├── pages/
│   ├── Home.js            # Main portfolio page
│   └── ResearchBlog.js    # Research papers and blogs page
├── App.js                 # Main App component
├── index.js               # React DOM render
└── index.css              # Global styles and animations
```

## 🎨 Customization

### Update Color Scheme
Edit `tailwind.config.js` to change the primary colors:
```javascript
colors: {
  primary: '#ff8ae2',      // Main pink color
  secondary: '#9c4668',    // Secondary color
  dark: '#152028',         // Dark background
  darker: '#0c1117',       // Darker background
}
```

### Update Content
- **Hero Section**: Edit `src/components/Hero.js`
- **About Section**: Edit `src/components/About.js`
- **Projects**: Edit `src/components/Projects.js`
- **Research & Blogs**: Edit `src/pages/ResearchBlog.js`

### Add Your Images
Replace placeholder images with your own:
```javascript
src="./images/profile.jpg"  // Update path in About.js
```

## 🚀 Deployment

Build for production:
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repository-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Deploy:
```bash
npm run deploy
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Nirajan Acharya**
- GitHub: [@nirajanacharya](https://github.com/nirajanacharya)
- LinkedIn: [Nirajan Acharya](https://linkedin.com/in/nirajan)
- Email: nirajan@example.com

## 🙏 Acknowledgments

- Built with React and Tailwind CSS
- Icons from FontAwesome
- Inspired by modern portfolio designs

---

**Made with ❤️ by Nirajan Acharya**
