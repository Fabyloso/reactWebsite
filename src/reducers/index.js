import {combineReducers} from 'redux';
import ResumeSectionReducer from './reducer_resume_section';
import ActiveSection from './reducer_active_section';

const rootReducer = combineReducers({
    resume_items: ResumeSectionReducer,
    activeSection: ActiveSection
});

export default rootReducer;
