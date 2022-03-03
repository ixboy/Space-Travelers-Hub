export const GET_ROCKETS = 'missions/rocketsAdded';
const ROCKETS_API = 'https://api.spacexdata.com/v3/rockets';

const apiGetElements = async (action) => {
  let response;
  let missions;
  let rockets;
  switch (action.type) {
    case GET_MISSIONS:
      response = await fetch(MISSIONS_API);
      missions = await response.json();
      return missions;
    case GET_ROCKETS:
      response = await fetch(ROCKETS_API);
      rockets = await response.json();
      return rockets;
    default:
      return 'Unrecognized action';
  }
};

export default apiGetElements;