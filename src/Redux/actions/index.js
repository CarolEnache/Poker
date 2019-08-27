export function addPlayer() {
  return {
    type: 'ADD_PLAYER',
  }
};

export function removePlayer(id) {
  return {
    type: 'REMOVE_PLAYER',
    id
  }
};
export function editPlayer(id, name) {
  return {
    type: 'EDIT_PLAYER',
    id,
    name
  }
};
export function updatePlayersList(playersList) {
  return {
    type: 'UPDATE_LIST',
    playersList,
  }
};
export function determinWinner(playersList) {
  return {
    type: 'DETERMINE_THE_WINNER',
    playersList,
  }
};
