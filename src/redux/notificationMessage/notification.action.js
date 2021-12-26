import notificationTypes from "./notification.types"

export const setNotification = (message)=>{
    return {
        type  : notificationTypes.SET_NOTIFICATION,
        payload : message
    }
}