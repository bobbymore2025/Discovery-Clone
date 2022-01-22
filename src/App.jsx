import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Explore } from './components/explore';
import { Shorts } from './components/shorts';
import { Router } from './routes/router';



function App() {
  return (
    <div className="App">
   <Navbar />
    <Router />
    </div>
  );
}

export default App;

