/** Vuex Mutations
 *
 * Direct modification of state in Vuex is done by calling a function called a mutation.
 * A mutation is passed the current state and an optional payload. The payload can be any object.
 * Mutations must be synchronous and shouldn’t return a value. They can be used directly by running
 * this.$store.commit(‘mutationName’, payload).
 *
 **/

export const mutations = {
  UPDATE_LOADING_STATE (state, payload) {
    state.loading = payload
  }
}
