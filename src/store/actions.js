/** Vuex Actions
 *
 * In more complicated apps, it’s likely that you will need to perform some asynchronous actions that modify the state.
 * Vuex handles this with actions. They are defined on your state object as well, and are passed the entire state context,
 * which allows them to access getters and commit mutations. They are expected (but not required) to return a promise
 * indicating completion status.
 *
 **/

export const actions = {
  updateLoadingState ({
    commit
  }, state) {
    commit('UPDATE_LOADING_STATE', state)
  }
}
