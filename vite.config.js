import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Ensure this matches your project structure
  base: '/crm-system/', // This should match the repository name for GitHub Pages
});
