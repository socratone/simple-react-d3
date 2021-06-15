import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Rect from './pages/Rect';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50px',
              borderBottom: '1px solid gainsboro',
            }}
          >
            <li>
              <Link to="/rect">Rect</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/rect">
            <Rect />
          </Route>
          <Route path="/">
            <Redirect to="/rect" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
