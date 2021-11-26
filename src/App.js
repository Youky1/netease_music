import GlobalStyle from './style';
import { BrowserRouter as Router } from 'react-router-dom'
import RouteWrapper from './routes';
import store from './store';
import { Provider } from 'react-redux'
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
