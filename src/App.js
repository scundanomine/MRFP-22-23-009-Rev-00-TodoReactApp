import './App.css';
import Footer from './mycomponents/Footer';
import NavBar from './mycomponents/NavBar';
import TodosList from './mycomponents/TodosList';

function App() {
  return (
    <div className="App text-left">
      <NavBar flag={true}></NavBar>
      <TodosList></TodosList>
      <Footer></Footer>
    </div>
  );
}

export default App;
