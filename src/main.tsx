import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Signal that JavaScript is active for reveal animations
// Crawlers without JS will see all content visible by default
document.documentElement.classList.add('js-loaded');

createRoot(document.getElementById("root")!).render(<App />);
