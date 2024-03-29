import Layout from "containers/common/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "pages/home";
import News from "pages/news";
import Contact from "pages/contact";

const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
