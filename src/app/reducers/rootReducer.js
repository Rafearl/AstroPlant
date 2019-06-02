import { combineReducers } from 'redux'
import { reducer as FromReducer } from 'redux-form'
import testReducer from '../../Components/Test/testReducer'
import reducers from '../../Components/Redux/reducers'
import pieReducer from '../../Components/Redux/pieReducer'
import modalReducer from '../../Components/modals/modalReducer'
import authReducer from '../../Components/auth/authReducer'
import mapsReducer from '../../Components/Redux/mapsReducer'

const rootReducer = combineReducers({
    form: FromReducer,
    test: testReducer,
    data: reducers,
    pieData: pieReducer,
    modals: modalReducer,
    auth: authReducer,
    mapData: mapsReducer
})

export default rootReducer