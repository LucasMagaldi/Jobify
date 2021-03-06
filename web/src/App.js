import { Ladding, Register, Error, Dashboard } from './pages/index';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Ladding/>}/>
        <Route path='/ladding' element={<Ladding/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
