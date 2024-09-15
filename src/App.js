import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter"
import Login from "./components/login"
import Navbar from "./components/NAVBAR"

function App() {
  return (
    <div>
        <Navbar/>
      <Counter/>
    
       {/* <Login/>  */}
    </div>
  );
}

export default App;
