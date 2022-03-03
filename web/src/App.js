import Ladding from './pages/Ladding';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Ladding/>}/>
        <Route path='/ladding' element={<Ladding/>}/>
        <Route path='*' element={<h1>Error </h1>}/>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
