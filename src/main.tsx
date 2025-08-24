import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('App starting...');

const rootElement = document.getElementById("root");
console.log('Root element:', rootElement);

if (!rootElement) {
  console.error('Root element not found!');
  document.body.innerHTML = '<div style="padding: 20px; text-align: center;"><h1>Error: Root element not found</h1><p>Please check the HTML structure.</p></div>';
} else {
  try {
    const root = createRoot(rootElement);
    console.log('Root created successfully');
    root.render(<App />);
    console.log('App rendered successfully');
  } catch (error) {
    console.error('Error rendering app:', error);
    rootElement.innerHTML = '<div style="padding: 20px; text-align: center;"><h1>Error Rendering App</h1><p>Please check the console for details.</p></div>';
  }
}
