import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { route } from "./Route";
import { Tv } from "./Routes/Tv";
import { Search } from "./Routes/Search";
import { Movies } from "./Routes/Movies";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./GlobalStyle";
import { useRecoilValue } from "recoil";
import { isDetail } from "./atom";

library.add(fas);

function App() {
  const detail = useRecoilValue(isDetail);
  return (
    <>
      <GlobalStyle detail={detail} />
      <Router>
        <Header />
        <Switch>
          <Route path={[route.tv, route.tvDetail]}>
            <Tv />
          </Route>
          <Route path={[route.search, route.searchDetail]}>
            <Search />
          </Route>
          <Route path={[route.home, route.movieDetail]}>
            <Movies />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
