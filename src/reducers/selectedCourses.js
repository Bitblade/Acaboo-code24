import { COURSE_SELECTED } from '../actions/paymentFlow'

export default (state = [], { type, payload }) => {
    switch (type) {
      case COURSE_SELECTED:
        // return [...state].push(payload)
        return [...state, payload]
       

        
      default:
        return state
    }
  }