import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducers from './root-reducer';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export const store = createStore(rootReducers, applyMiddleware(...middleware));

export const persistor = persistStore(store);

export default { store, persistor };
