import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter,{history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import LoadingPage from './components/LoadingPage';
import { PersistGate } from 'redux-persist/integration/react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));


