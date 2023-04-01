import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/homePage';
import NavBar from './Components/navBar';
import Feature from './Pages/Features';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/navBar" element={<NavBar/>}/>
        <Route path="/feature" element={<Feature/>}/>
      </Routes>
    </div>
  );
}

export default App;
