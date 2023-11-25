import './App.css';
import ItemListContainer from '../src/Components/ItemListContainer/ItemListContainer';
import NavBar from '../src/Components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar /> 
        <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        
        </Routes>
     
     
     </BrowserRouter>
    

    </div>
  );
}

export default App;
