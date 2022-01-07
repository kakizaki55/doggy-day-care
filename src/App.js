import './App.css';
import Header from './components/Header/Header';
import Home from './Views/Home/Home.js';
import DogDetails from './Views/DogDetails/Dogdetails';
import UpdateDog from './Views/UpdateDog/UpdateDog';
import { Route, Switch } from 'react-router-dom';
import AddDog from './Views/AddDog/AddDog';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={AddDog} />
        <Route exact path="/dog/:id" component={DogDetails}></Route>
        <Route exact path="/dog/:id/edit" component={UpdateDog}></Route>
      </Switch>
    </>
  );
}

export default App;
