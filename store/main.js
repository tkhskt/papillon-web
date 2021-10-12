export const state = () => ({
  windowSize: {
    width: 0,
    height: 0,
  },
  hoverTop: false,
  hoverArtwork: false,
  hoverTopLink: false,
  hoverTrack: false,
  fontLoaded: false,
})

export const actions = {
  onResize({ commit }, size) {
    commit('setWindowSize', size)
  },
  onChangeHoverTop({ commit }, hover) {
    commit('setHoverTop', hover)
  },
  onChangeHoverArtwork({ commit }, hover) {
    commit('setHoverArtwork', hover)
  },
  onChangeHoverTopLink({ commit }, hover) {
    commit('setHoverTopLink', hover)
  },
  onChangeHoverTrack({ commit }, hover) {
    commit('setHoverTrack', hover)
  },
}

export const mutations = {
  setWindowSize(state, value) {
    state.windowSize = value
  },
  setHoverTop(state, value) {
    state.hoverTop = value
  },
  setHoverArtwork(state, value) {
    state.hoverArtwork = value
  },
  setHoverTopLink(state, value) {
    state.hoverTopLink = value
  },
  setHoverTrack(state, value) {
    state.hoverTrack = value
  },
}
