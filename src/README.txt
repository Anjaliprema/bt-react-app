# Better Tomorrow Training Institute - Enhanced Cinematic Website

A stunning, cinematic single-page application with advanced 3D animations, scroll-triggered effects, and interactive elements that make browsing feel like watching a movie.

## 🎬 New Cinematic Features

### Visual Effects
- **3D Animated Background**: Particle system with floating book/education-themed shapes
- **Parallax Mouse Tracking**: Hero content responds to mouse movement
- **Scroll-Triggered Animations**: Elements smoothly animate into view as you scroll
- **Glitch Text Effect**: Dynamic hero title with subtle glitch animation
- **Shimmer Effects**: Cards with light-sweep animations
- **Pulse Glow**: Breathing glow effects on key sections

### Interactive Elements
- **Magnetic Buttons**: Buttons that follow your cursor
- **Flip Cards**: Program cards that rotate on hover
- **Tilt Cards**: 3D tilt effect on pillar cards
- **Morph Cards**: Cards that transform on hover
- **Count-Up Animation**: Stats numbers animate from 0 to target
- **Bounce Arrow**: Animated transformation arrow
- **Rotate Icons**: Icons that rotate 360° on hover

### Typography & Design
- **Orbitron Font**: Modern, tech-inspired headings
- **Poppins Font**: Clean, readable body text
- **Gradient Text**: Vibrant gradient effects on titles
- **Text Shadows**: Subtle glow effects
- **Smooth Transitions**: Cubic-bezier easing for fluid motion

## 🚀 Installation

1. **Install Dependencies**:
```bash
npm install react-icons
```

2. **Copy Files to Your Project**:
   - `Home_Enhanced.jsx` → Replace your `Home.jsx`
   - `Home_Enhanced.css` → Replace your `Home.css`
   - `animations.js` → Add to your project root or utils folder
   - Keep your existing `StudentPlacements.jsx` and `StudentPlacements.css`

3. **Import Animations** (Optional for extra effects):
```javascript
// Add to Home_Enhanced.jsx at the top
import { initAllAnimations } from './animations';

// Add inside useEffect
useEffect(() => {
  initAllAnimations();
}, []);
```

## 📂 File Structure

```
src/
├── Home_Enhanced.jsx          # Main component with 3D canvas
├── Home_Enhanced.css          # Enhanced styles with animations
├── StudentPlacements.jsx      # Your existing carousel
├── StudentPlacements.css      # Your existing carousel styles
├── RoadMap.jsx               # Your roadmap component
├── RoadMap.css               # Roadmap styles
├── animations.js             # Additional JS animations (optional)
└── assets/
    ├── download.png          # Light theme logo
    └── altimg.png            # Dark theme logo
```

## 🎨 Animation Classes Available

### Scroll Animations
- `.animate-on-scroll` - Fade and slide up when visible
- `.slide-in-text` - Slide in from left
- `.fade-in-up` - Fade in from bottom

### Interactive Classes
- `.magnetic-btn` - Magnetic cursor effect
- `.tilt-card` - 3D tilt on hover
- `.flip-card` - Card flip animation
- `.morph-card` - Shape morphing on hover
- `.shimmer-card` - Light sweep effect
- `.pulse-glow` - Breathing glow
- `.rotate-on-hover` - 360° rotation
- `.bounce-arrow` - Bouncing animation

### Text Effects
- `.glitch-text` - Glitch animation
- `.count-up` - Number count animation
- `.scramble-text` - Text scramble effect (via animations.js)

## 🎭 3D Background System

The hero section features a custom Canvas-based particle system:

- **150 Particles**: 3D space with depth perspective
- **8 Floating Shapes**: Book/education themed shapes
- **Theme Aware**: Colors change with light/dark theme
- **Performance Optimized**: RequestAnimationFrame for smooth 60fps

## 🎯 Key Features

1. **Cinematic Page Load**: Staggered animations create a movie-like intro
2. **Smooth Scrolling**: All navigation uses smooth scroll behavior
3. **Responsive**: Fully responsive with mobile optimizations
4. **Theme Toggle**: Seamless dark/light mode switching
5. **Interactive Stats**: Count-up animations when scrolled into view
6. **Dynamic Cards**: Multiple card interaction styles
7. **Scroll Indicator**: Animated mouse scroll indicator
8. **Footer Animations**: Staggered fade-in for footer sections

## 🎨 Color Palette

### Dark Theme
- Background: `#0B0B0B`
- Primary Accent: `#f7c651` (Gold)
- Secondary: `#e0a419` (Dark Gold)
- Text: `#ffffff`

### Light Theme
- Background: `#fafafa`
- Primary: `#053859` (Navy Blue)
- Accent: `#f7c651` (Gold)
- Text: `#053859`

## ⚡ Performance Tips

1. **Canvas Optimization**: The 3D background automatically pauses when not visible
2. **Animation Delay**: Cards use staggered delays to prevent overwhelming animations
3. **Intersection Observer**: Scroll animations only trigger once when elements come into view
4. **CSS-First**: Most animations use CSS for better performance

## 🛠️ Customization

### Adjust Animation Speed
```css
/* In Home_Enhanced.css */
.animate-on-scroll {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); /* Change duration */
}
```

### Modify 3D Background
```javascript
// In Home_Enhanced.jsx, adjust these values:
const particles = Array.from({ length: 150 }, () => new Particle()); // Particle count
const shapes = Array.from({ length: 8 }, () => new FloatingShape()); // Shape count
```

### Change Fonts
```css
/* In Home_Enhanced.css */
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');

body {
  font-family: 'YourFont', sans-serif;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above - Full animations
- **Tablet**: 768px - 1199px - Optimized animations
- **Mobile**: Below 768px - Simplified animations, hidden nav menu

## 🎬 Animation Timeline

**Page Load (0-2s)**:
1. Header slides in (0.8s)
2. Hero title glitches in (1s)
3. Subtitle fades up (1.3s)
4. CTA button appears (1.6s)
5. 3D background starts

**Scroll Triggered**:
- Stats cards scale in when visible
- Pillar cards slide up with stagger
- Program cards flip on hover
- College cards cascade in
- Footer sections fade in sequence

## 🔧 Troubleshooting

### Animations not playing?
- Check browser console for errors
- Ensure React and React Icons are installed
- Verify all CSS files are imported

### 3D background not showing?
- Canvas might not be supported in older browsers
- Check if canvas ref is properly set
- Ensure useEffect dependencies are correct

### Performance issues?
- Reduce particle count in canvas
- Disable cursor trail effect
- Simplify animation durations

## 🌟 Optional Enhancements

Uncomment these in `animations.js` for extra effects:

```javascript
// Cursor trail effect
initCursorTrail();

// Text scramble on headings
initTextScramble();
```

## 📄 Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (some effects may vary)
- Mobile browsers: Optimized experience

## 🎓 What's Different from Basic Version?

| Feature | Basic | Enhanced |
|---------|-------|----------|
| Animations | Static | 20+ animation types |
| Background | Solid color | 3D particle system |
| Buttons | Simple hover | Magnetic + ripple |
| Cards | Basic hover | Flip, tilt, morph |
| Scroll | None | Progressive reveal |
| Typography | System fonts | Custom web fonts |
| Stats | Static | Count-up animation |
| Loading | Instant | Cinematic sequence |

## 🚀 Going Live

1. Build your project: `npm run build`
2. Deploy to Vercel, Netlify, or your hosting service
3. Ensure all assets are uploaded
4. Test on multiple devices

## 📞 Contact

**Better Tomorrow Training Institute**
- Phone: +91 9750503595 / +91 8300287195
- Email: training@thebettertomorrow.in

---

Made with ❤️ and lots of CSS animations
