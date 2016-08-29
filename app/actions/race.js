export const ADD_RACE = 'ADD_RACE';

let staticId = 0;

export function addRace(bikeRacerMap) {
  return {
    type: ADD_RACE,
    race: {
      id: staticId++,
      bikeRacerMap
    }
  };
}
