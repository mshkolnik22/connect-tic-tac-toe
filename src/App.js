import './App.css';
import Game from './Game'
import Game25 from './Game25'
import Game400 from './Game400'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Game} />
        <Route exact path="/5by5" component={Game25} />
        <Route exact path="/20by20" component={Game400} />
    </Switch>
  </Router>
  )
}

