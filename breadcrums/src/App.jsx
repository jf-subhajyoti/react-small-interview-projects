import './App.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Home from './components/Home';
import Electronics from './components/Electronics';
import Kitchen from './components/Kitchen';
import Toys from './components/Toys';
import Fashion from './components/Fashion';
import { removeBreadcrumFromIndex } from './slice/breadcrumSlice';

function App() {
  const breadcrum = useSelector(state => state.breadcrum);
  const dispatch = useDispatch();
  const handleClick = (category) => {
    dispatch(removeBreadcrumFromIndex(category));
  } 
  return (
    <BrowserRouter>
      <div style={{display: 'flex', gap: '1rem'}}>
        {
          breadcrum?.bredcrumList?.length > 1 && breadcrum?.bredcrumList.map((ele, index) => {
            if(breadcrum.bredcrumList.length > index + 1) {
              return <div onClick={() => handleClick(ele)} key={ele.name}>
                <Link to={ele.path}>{ele.name}</Link> /
              </div>
            } else {
              return <span key={ele.name}>{ele.name}</span>
            }
          })
        }
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/electronics' element={<Electronics />}></Route>
        <Route path='/kitchen' element={<Kitchen />}></Route>
        <Route path='/toys' element={<Toys />}></Route>
        <Route path='/fashion' element={<Fashion />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
