import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { route } from "./Route";
import { Tv } from "./Routes/Tv";
import { Search } from "./Routes/Search";
import { Movies } from "./Routes/Movies";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./GlobalStyle";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDetail, GlobalSearchClose } from "./atom";
import styled from "styled-components";

library.add(fas);

const Container = styled.div``;

function App() {
  const detail = useRecoilValue(isDetail);
  const setCloseSearch = useSetRecoilState(GlobalSearchClose);

  const closeSearch = () => {
    setCloseSearch(true);
  };
  return (
    <>
      <GlobalStyle detail={detail} />
      <Router>
        <Header />
        <Container onClick={closeSearch}>
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
        </Container>
      </Router>
    </>
  );
}

export default App;
