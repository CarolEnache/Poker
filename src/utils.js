export const values = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
export const suits = ["♦", "♥", "♠", "♣"];

let player = {
  name: 'player ',
  id: ''
}

export function create_UUID() {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

export const addPlayer = (state) => {
  const { players } = state;
  const newList = [...players];
  if (players.length <= 5) {
    player = {
      name: 'player',
      id: create_UUID()
    }
    newList.push(player)
  }
  return {
    ...state,
    players: newList,
  };
}

export const removePlayer = (state, action) => {
  const { players } = state;
  const { id } = action;
  console.log(id, action)
  const newList = [...players].filter(f => f.id !== id);
  return {
    ...state,
    players: newList,
  }
}





const allCards = values.flatMap(v => suits.map(s => v + s));
const shuffle = allCards.sort(() => Math.random() - 0.5);
const numberOfPlayers = 5;

const eachPlayersSetOfCards = Array(numberOfPlayers).fill(" ").map(() => shuffle.splice(0, 5));

export const getColourForSuit = suit => suit === "♦" || suit === "♥" ? "red" : "black";