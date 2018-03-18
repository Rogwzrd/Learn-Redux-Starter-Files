function postComments(state = [], action) {

    console.log(state, action);

    switch (action.type){
        case 'ADD_COMMENT':
            console.log('add comment switch activated');
            return [...state,{
                user: action.author,
                text: action.comment,
            }];
        case 'REMOVE_COMMENT':
            console.log('remove comment switch activated');
            return state;
        default:
            console.log('default switch activated');
            return state;
    }
}

function comments(state = [], action){

    if(typeof action.postId !== 'undefined'){
        return{
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    console.log(state, action);
    return state;
}
export default comments;