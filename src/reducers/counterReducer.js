export default function counterReducer(state, action) {
    //reducer take in 2 parameters
    //first param is the state object
    //second param is the action object from dispatch

    //switch case matches action.type to set state with a return
    switch (action.type) {
        case "RESET":
            // console.log(action.data)  //"Data!!!"
            return 0 //return sets the state
        case 42:
            return 42
        case 'increment':
            return state + 1 
        case 'decrement':
            //example: decrement does not go negative
            // if (state > 0) {
            //    return state - 1 
            // } 
            // return 0
            //---------
            return state - 1 
        case 'Add':
            // console.log(action.value)
            return state + action.value
        case 'Subtract':
            return state - action.value
        case  'Multiply':
            return state * action.value
        case  'Divide':
            return state / action.value
        case  'Power':
            return state ** action.value
        case  'Remainder':
            return state % action.value
        case 'Square Root':
            return Math.sqrt(state)
            
        default:  //we do not want to get here
            alert('Not a type')
    }
}