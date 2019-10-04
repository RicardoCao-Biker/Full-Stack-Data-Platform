const musicReducer = (state={}, action) => {
    switch (action.type) {
        case 'musicAction':
            return {
                nickName: action.userInfo.nickName,
                avatarUrl: action.userInfo.avatarUrl,
                userId: action.userInfo.userId
            }
        default:
            return state
    }
}

export default musicReducer