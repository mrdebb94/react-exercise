import {MODIFY_NUMBERS} from '../actions'

const initialState = {

 numbers: [],
 sums:[]

}


export function numbers(state = initialState, action) {

   switch(action.type) {
     
     case MODIFY_NUMBERS:
         
         let numbers = action.numbers.slice()
         let sums = action.sums.slice()     
         
         return Object.assign({}, state, { numbers: numbers, sums:sums  });
   
     default:
       return state;
   }

}