import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter/mode';

export default configureStore({
    reducer:{
        mode:counterReducer
    }
}); 