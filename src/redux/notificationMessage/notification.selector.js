import { createSelector } from "reselect";


export const selectNotification = state=>state.notification;

export const selectNotificationMessage = createSelector(
    [selectNotification],
    notification=>notification.message
);

