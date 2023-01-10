
import './App.css';
import Register from './components/Register/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <div>
          <Routes>
             <Route path='/' element={<Login />} />
             <Route path='/register' element={<Register />} />
             <Route path='/home' element={<Home />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
