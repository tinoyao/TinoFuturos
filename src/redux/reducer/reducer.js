import { RESET_USER } from '../actions/actions';

const initialState = {
    estado_inicial: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case RESET_USER:
        return {
          ...state,
          user: {}
        }
      default:
        return {
          ...state,
        };
    }
  }
  