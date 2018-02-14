/** Vuex Getters
 *
 * A getter is simply a function in your store that takes a state object and returns a value from it.
 * In your components, it can be accessed through this.$store.getters.property as a computed property,
 * not a function. If a getter needs a parameter, it can return a second function which takes a parameter
 *
 **/

export const getters = {
  getLoadingState (state) {
    return state.loading
  }
}
