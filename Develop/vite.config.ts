import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000; // Use the port from the environment or default to 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
