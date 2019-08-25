export function addPlayer() {
  return {
    type: 'ADD_PLAYER'
  }
};

export function removePlayer(id) {
  return {
    type: 'REMOVE_PLAYER',
    id
  }
};
export function editPlayer(id, name) {
  // console.log('say hey', name, id)

  return {
    type: 'EDIT_PLAYER',
    id,
    name
  }
};
