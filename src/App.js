import './App.css';
import { data } from './data'
import { FaAngleDown } from 'react-icons/fa'
import { FaAngleUp } from 'react-icons/fa'
import {RiShoppingCartLine} from 'react-icons/ri'

function App() {
  return (
    <div className="App">
      <h1>GLD Tech Store</h1>
      <RiShoppingCartLine/>
      {data.map((item) => {
        const {id, name, img, price} = item
        return <div>
          <img src={img} alt={name} width='200px' height='200px' />
          <h3>{name}</h3>
          <p>${price}</p>
          <FaAngleUp/> <br />
          <FaAngleDown/>
      </div>
    })}
    </div>
  );
}

export default App;
