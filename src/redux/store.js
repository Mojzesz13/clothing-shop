import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducers from './root-reducer';

const middleware = [logger];

export  const store = createStore(rootReducers, applyMiddleware(...middleware));

export const persistor = persistStore(store);

export default { store, persistor };
