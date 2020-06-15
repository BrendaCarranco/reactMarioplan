import authReducer from '../reducers/authReducer';
import projectReducer from '../reducers/projectReducer';
import { combineReducers } from 'redux';

//esta const es lo que le vamos a pasar a la store
const rootReducer = combineReducers({
//en un obj le decimos que reducers queremos combinar y como le vamos a llamar
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;