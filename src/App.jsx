import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Explore } from './components/explore';
import { Shorts } from './components/shorts';
import { Router } from './routes/router';
import {Footer} from"./components/footer";


function App() {
  return (
    <div className="App">

     <Navbar />
      <Router />
    <Footer />

    </div>
  );
}

export default App;

