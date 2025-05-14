
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// This ensures our app renders correctly whether accessed via / or /index.html
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found. Check if the HTML has an element with id 'root'");
}
