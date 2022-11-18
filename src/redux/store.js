import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactReducer } from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';

const contactPersistCfg = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};
const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
const persistContactReducer = persistReducer(contactPersistCfg, rootReducer);

const store = configureStore({
  reducer: {
    phoneBook: persistContactReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);

export { store, persistor };
