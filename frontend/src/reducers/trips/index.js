const iniaialState = {
    trips: [],
  };
  
  const trips = (state = iniaialState, { type, payload }) => {
    switch (type) {
      case "SET_TRIPS":
        return { ...state, trips: trips };
      case "ADD_TRIPS":
        return { ...state, trips: [...state.trips, payload] };
      case "UPDATE_TRIPS":
        return {
          ...state,
          trips: state.trips.map((element) => {
            if (payload.id === element.id) {
              return element;
            }
          }),
        };
      case "DELETE_TRIP":
        return {
          ...state,
          trips: state.trips.filter((element) => {
            return element.id != payload;
          }),
        };
      default:
        return state;
    }
  };
  
  export const setTrips = (trips) => {
    return { type: "SET_TRIPS", payload: trips };
  };
  
  export const addTrips = (trips) => {
    return { type: "ADD_TRIPS", payload: trips };
  };
  export const updateTrip = (updatedTrip) => {
    return { type: "UPDATE_TRIP", payload: updatedTrip };
  };
  
  export const deleteTrip = (id) => {
    return { type: "DELETE_TRIP", payload: id };
  };
  export default trips;
  