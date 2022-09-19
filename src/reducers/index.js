import { combineReducers } from 'redux'

import auth from './auth'
import global from './global'
import produk from './produk'

export default combineReducers({
    auth,
    global,
    produk,
})