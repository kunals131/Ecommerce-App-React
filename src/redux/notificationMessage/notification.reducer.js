import notificationTypes from "./notification.types"

const InitialState={
    message : ''
}

const notificationReducer = (state=InitialState, action)=>{

    switch(action.type) {
        case notificationTypes.SET_NOTIFICATION : 
        return {
            message : action.payload
        }
        default : return state;
    }

}

export default notificationReducer