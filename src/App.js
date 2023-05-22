
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConnnectToGoogle from './Component/ConnnectToGoogle';

import EditDocs from './Component/EditDocs';
import Home from './Component/Home';


function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/editdoc' element = {<EditDocs/>}></Route>
        <Route exact path='/google' element = {<ConnnectToGoogle/>}></Route>
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
