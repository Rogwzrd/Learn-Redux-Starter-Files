// a reducer takes in two things

// 1. the action (info about what happened0
// 2. copy of the current state

function posts(state = [], action){
    switch(action.type){
        case 'INCREMENT_LIKES':
            console.log('incrementing likes');
            console.log(state);
            const i = action.index;
            //RETURN THE UPDATED STATE
            return [
                ...state.slice(0,i), //before the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i+1) //after the one we are updating
            ];
        default:
            return state
    }

}

export default posts;