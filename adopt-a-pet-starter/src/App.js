import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route path="/:type/:id">
            <PetDetailsPage />
          </Route>
          <Route path="/search" exact>>
            <SearchPage />
          </Route>
          <Route path="/pet-details-not-found">
            <PetDetailsNotFound />
          </Route>
          <Route path="/:type?">
            <HomePage />
          </Route>
        </Switch>
        <Navigation />
      </Router>
    </div>
  );


}

export default App;
