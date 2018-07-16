const state = {
    loginDialog: false
}

const mutations = {
    SET_SHOW_LOGIN_DIALOG(state, data) {
        state.loginDialog = data
    }
}

const actions = {
    setLoginDialog: ({commit}, value) => {
        commit('SET_SHOW_LOGIN_DIALOG', value)
    }
}

const getters = {
    showLoginDialog: state => {
        return state.loginDialog
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
