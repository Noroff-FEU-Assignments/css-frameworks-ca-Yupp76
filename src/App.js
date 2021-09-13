import Layout from "containers/common/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "pages/home";

const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          {/* <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route> */}
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
