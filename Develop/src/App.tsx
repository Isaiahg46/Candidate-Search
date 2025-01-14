 import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use the port from the environment or default to 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
