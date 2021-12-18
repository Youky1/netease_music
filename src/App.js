import GlobalStyle from './style';
import { HashRouter as Router } from 'react-router-dom'
import RouteWrapper from './routes';
import store from './store';
import { Provider } from 'react-redux';
import 'animate.css';
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Router>
        <RouteWrapper/>
      </Router>
    </Provider>
  );
}

export default App;
