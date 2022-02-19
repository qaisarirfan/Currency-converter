import get from 'lodash/get';
import { reducerName } from './actions';

export const selectLanguage = (state) => get(state, `${reducerName}.language`, 'en');
