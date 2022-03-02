import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';

<<<<<<< HEAD
const reducer = combineReducers({
  missionsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, thunk)),
);

export default store;
=======
// export const store = configureStore({
//     reducer: {

//     },
// });
>>>>>>> development
