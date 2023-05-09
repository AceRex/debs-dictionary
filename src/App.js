import './Sass/main.css'
import Quotes from './quotes/Quotes'

function App() {
  return (
    <div className="container">
      <div className='text-3'>Welcome</div>
      <div className='text-1'>What word do you want to search?</div>
      <div className='search-input'>
        <input/>
        <button>Search</button>
      </div>
      <Quotes/>

    </div>
  );
}

export default App;
