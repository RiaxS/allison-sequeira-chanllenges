export const actions = {
    UPDATE_VALUE: 'UPDATE_VALUE',
    SET: 'SET',
}

export function reducer(state, action) {
    switch (action.type) {
          case actions.UPDATE_VALUE:
            return {
              ...state,
              ...action.payload,
            };
          case actions.SET:
            return {
              ...action.payload,
            };
          default:
            return state;
        }
  }