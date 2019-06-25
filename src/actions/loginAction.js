export const login = (username,password)=> dispatch =>{
    dispatch({
       type : 'LOGIN',
       payload1 : username,
       payload2 : password
    })
}

export const logout = ()=> dispatch =>{
    dispatch({
       type : 'LOGOUT'
    })
}