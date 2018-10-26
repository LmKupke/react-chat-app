const messages = (state = [], action) => {
    switch(action.type) {
        case 'ADD_MESSAGE':
            return [
                ...state,
                {
                    user: action.user,
                    message: action.message,
                }
            ]
        default:
            return state;
    }
}

export default messages;