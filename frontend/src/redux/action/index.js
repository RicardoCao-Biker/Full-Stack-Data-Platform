export const musicAction = userInfo => {
    return dispatch => {
        dispatch({
            type: 'musicAction',
            userInfo
        });
    }
}