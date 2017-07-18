import {combineReducers} from 'redux';
import ResumeItemReducer from './reducer_resume_item';

const rootReducer = combineReducers({
    resume_item: ResumeItemReducer
});

export default rootReducer;
