import { Ladding, Register, Error } from './pages/index';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Ladding/>}/>
        <Route path='/ladding' element={<Ladding/>}/>
        <Route path='/register' element={<h1>Register </h1>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
