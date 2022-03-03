import apiGetElements, { GET_ROCKETS } from '../../api/api';

const BOOK_ROCKET = 'space-travellers/rockets/BOOK_ROCKET';
const CANCEL_BOOKING = 'space-travellers/rockets/LEAVE_ROCKET';

const initialState = {
  rockets: [],
};

function getRockets(payload) {
  return { type: GET_ROCKETS, rockets: payload };
}

export const bookRocket = (id) => ({
  type: BOOK_ROCKET,
  id,
});

export const cancelBooking = (id) => ({
  type: CANCEL_BOOKING,
  id,
});

