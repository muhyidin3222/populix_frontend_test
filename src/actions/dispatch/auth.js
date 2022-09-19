import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, VERIFY_REQUEST, VERIFY_SUCCESS } from 'actions'

export const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    };
};

export const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};

export const loginError = () => {
    return {
        type: LOGIN_FAILURE
    };
};

export const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    };
};

export const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

export const logoutError = () => {
    return {
        type: LOGOUT_FAILURE
    };
};

export const verifyRequest = () => {
    return {
        type: VERIFY_REQUEST
    };
};

export const verifySuccess = () => {
    return {
        type: VERIFY_SUCCESS
    };
};






export const requestGet = (type) => {
    return {
        type: type
    }
}

export const receiveGet = (data, type) => {
    return {
        type: type,
        data
    }
}

export const getError = (type) => {
    return {
        type: type
    }
}

export const requestSaving = (type) => {
    return {
        type: type
    }
}

export const receiveSaving = (data, type) => {
    return {
        type: type,
        data
    }
}

export const savingError = (type) => {
    return {
        type: type
    }
}

export const requestDeleting = (type) => {
    return {
        type: type
    }
}

export const receiveDeleting = (data, type) => {
    return {
        type: type,
        data
    }
}

export const deletingError = (type) => {
    return {
        type: type
    }
}