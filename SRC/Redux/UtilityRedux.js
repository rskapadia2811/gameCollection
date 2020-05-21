import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  setLoading: ['loading'],
});
export const UtilityTypes = Types;
const UtilityRedux = Creators
export default UtilityRedux;

/* ------------- Initial State ------------- */

export const INITIAL_STATES = Immutable({
  loading: false,
});

/* ------------- Selectors ------------- */

/* ------------- Reducers ------------- */

const setLoading = (state, {loading}) => state.merge({loading});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATES,{
  [Types.SET_LOADING]: setLoading,
});
