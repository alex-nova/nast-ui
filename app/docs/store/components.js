
export default {
  namespaced: true,
  state: {
    colors: [
      'default', 'primary', 'secondary', 'tertiary', 'success', 'danger',
    ],
  },
  
  getters: {
    colorsAsText: (state) => {
      return state.colors.join(', ')
    },
  },
}
