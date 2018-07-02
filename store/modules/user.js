const state = {
    user: null
}

const mutations = {
    SET_USER(state, data) {
        state.user = data
        // localStorage.setItem('user', data.user.uid)
    },

    CLEAR_USER(state) {
        state.user = null
        // localStorage.removeItem('user')
    }
}

const actions = {
    setUser: ({commit}, user) => {
        commit('SET_USER', user)
    },

    clearUser: ({commit}) => {
        commit('CLEAR_USER')
    },

    logout: ({commit}) => {
        new Promise((resolve, reject) => {
            commit('CLEAR_USER')
            resolve();
        })
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
