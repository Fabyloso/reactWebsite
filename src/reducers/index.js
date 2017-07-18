import {combineReducers} from 'redux';
import ResumeItemReducer from './reducer_resume_section';

const rootReducer = combineReducers({
    resume_items: ResumeItemReducer
});

export default rootReducer;
