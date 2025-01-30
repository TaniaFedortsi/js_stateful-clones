'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const history = [];
  let copyState = { ...state };

  actions.forEach((action) => {
    if (action.type === 'addProperties') {
      copyState = { ...copyState, ...action.extraData };
    } else if (action.type === 'removeProperties') {
      action.keysToRemove.forEach((key) => delete copyState[key]);
    } else if (action.type === 'clear') {
      copyState = {};
    }
    history.push({ ...copyState });
  });

  return history;
}

module.exports = transformStateWithClones;
