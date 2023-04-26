import {createStore} from 'redux'
import { tokenReducer } from './tokens/TokensReducer';

const store = createStore(tokenReducer)

export default store