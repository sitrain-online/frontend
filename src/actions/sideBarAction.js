import { OPEN_DRAWER, CLOSE_DRAWE } from './types';



export const showDrawer = ()=> dispatch =>{
    dispatch({
       type : OPEN_DRAWER
    })
}