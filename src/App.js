import './App.css';
import Footer from './mycomponents/Footer';
import NavBar from './mycomponents/NavBar';
import TodosList from './mycomponents/TodosList';

function App() {

  let todosObject=[
    {
      sno:1,
      title:"Go to the market",
      desc:"You need to go the market to get job done."
    },
    {
      sno:2,
      title:"Go to the Shopping",
      desc:"You need to go the Shopping mall to get job done."
    },
    {
      sno:3,
      title:"Go to the Gym",
      desc:"You need to go the Gym for fitness."
    }
  ]

  return (
    <div className="App text-left">
        <NavBar flag={false}></NavBar>
        <TodosList item={todosObject}></TodosList>
        <Footer></Footer>
    </div>
  );
}

export default App;
