export const changeActiveRoute = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_ACTIVE_ROUTE',
       payload : d
    })
}