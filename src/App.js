import './App.css';
import Home from './pages/Home';
import CategoryMovies from './pages/CategoryMovies';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { routePath } from './constants/route';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={routePath.home} element={<Home/>}/>
          <Route path={routePath.categories} element={<CategoryMovies/>}/>
          <Route path={routePath.invalid} element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
