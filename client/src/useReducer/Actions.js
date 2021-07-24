const LoginState = (usercred) => ({
    type: "LOGIN_STATE"
})

const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
})

const LoginFail = () => ({
    type: "LOGIN_FAIL"
})

const Logout = () => ({
    type: "LOGOUT"
})
export {Logout,LoginState,LoginSuccess,LoginFail};
