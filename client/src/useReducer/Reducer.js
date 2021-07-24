
const Reducer = (state,action) => {
    switch (action.type) {
        case "LOGIN_STATE":
            return {
                user: null,
                isLoading: true,
                error: false,
            };

        case "LOGIN_SUCCESS":
                return {
                    user: action.payload,
                    isLoading: false,
                    error: false,
                };

        case "LOGIN_FAIL":
                    return {
                        user: null,
                        isLoading: false,
                        error: true,
                    };

         case "LOGOUT":
                return {
                     user: null,
                 isLoading: false,
                     error: false,
                        };

        default:   return state;
    }
};

export default Reducer;