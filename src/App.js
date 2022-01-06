import './App.css';
import Header from './components/Header/Header';
import Home from './Views/Home/Home.js';
import DogDetails from './Views/DogDetails/Dogdetails';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dog/:id" component={DogDetails}></Route>
      </Switch>
    </>
  );
}

export default App;
