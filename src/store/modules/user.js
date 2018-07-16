const state = {
    user: null
}

const mutations = {
    SET_USER(state, data) {
        state.user = data
    },

    CLEAR_USER(state) {
        state.user = null
    }
}

const actions = {
    setUser: ({commit}, user) => {
        commit('SET_USER', user)
    },

    clearUser: ({commit}) => {
        commit('CLEAR_USER')
    }
}

const getters = {
    isLoggedIn: state => {
        return (state.user != null && state.user != undefined)
    },

    getUser: state => {
        return state.user
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
