import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Chart from './pages/Chart';
import NotFound from './pages/NotFound';

function App() {
  return (
  <Router>
<Routes>
  <Route exact path='/' element={<Home/>}></Route>
  <Route exact path='/chart' element={<Chart/>}></Route>
  <Route exact path='*' element={<NotFound/>}></Route>
</Routes>
  </Router>

  );
}

export default App;
