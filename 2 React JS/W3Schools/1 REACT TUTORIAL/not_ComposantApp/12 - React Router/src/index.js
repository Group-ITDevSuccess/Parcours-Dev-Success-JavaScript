import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <Router>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/blogs">Blog Articles</Link>
            </div>
            <div>
                <Link to="/contact">Contact Me</Link>
            </div>

            <hr/>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/blogs">
                    <Blogs />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));