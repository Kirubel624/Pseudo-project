import Carousel from 'react-bootstrap/Carousel'
import { Button } from 'react-bootstrap';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import { useSelector } from 'react-redux';
// import {useSelector} from ''

function App() {
  const light = useSelector(state=>state.mode.light)
  // console.log(val)
  return (
    <div className={light?'App':'App__dark'} >
      <div className='app__con'>
        <Home/>
      </div>
     
    </div>
  );
}

export default App;
