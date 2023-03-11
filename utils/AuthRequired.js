import { isAuthActive } from '../constants/config'
import { setCurrentUser, getCurrentUser } from '.'
export default async (to, from, next) => {
  if (isAuthActive){
    next()
  } else {
    const user = getCurrentUser();
    if (user) {
      next()
    } else {
      setCurrentUser(null);
      next('/login')
    }
  }
}
