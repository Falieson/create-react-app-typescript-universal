import { keaReducer, keaSaga } from 'kea';
import { routerMiddleware as createRouterMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
// import logger from 'redux-logger'
import createSagaMiddleware, { END } from 'redux-saga';

declare var window: {
  __REDUX_DEVTOOLS_EXTENSION__: {},
  __INITIAL_STATE__: {},
  devToolsExtension: any // tslint:disable-line no-any
};

import { RootReducer, RouterHistory } from './';
const finalReducer = combineReducers({
  router: routerReducer,
  scenes: keaReducer('scenes'),
  ...RootReducer,
});

function configureStore(initialState: any) { // tslint:disable-line no-any
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = createRouterMiddleware(RouterHistory);
  
  // tslint:disable-next-line no-string-literal
  const enhancedStore = window['devToolsExtension']
    ? window.devToolsExtension()(createStore)
    : createStore;
  const store = enhancedStore(
    finalReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware, routerMiddleware)) // logger
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}

const finalStore = configureStore(window.__INITIAL_STATE__);
finalStore.runSaga(keaSaga);

export default finalStore;
