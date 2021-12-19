import { SET_ADMIN_SESSION } from './utils/actionTypes'

export function setAdminSession(adminSession){
    return {
        type: SET_ADMIN_SESSION,
        adminSession
    }
}