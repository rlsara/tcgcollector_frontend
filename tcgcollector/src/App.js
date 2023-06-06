import './App.css';
import Navbar from './nav/nav';
import Cards from './cards/cards';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='container mx-auto'>
        <Cards></Cards>
      </div>
      
    </div>
    
  );
}

export default App;
