export const login = (details)=> dispatch =>{
    dispatch({
       type : 'LOGIN',
       payload : details
    })
}

export const logout = ()=> dispatch =>{
    dispatch({
       type : 'LOGOUT'
    })
}