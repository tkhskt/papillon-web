export const state = () => ({
  windowSize: {
    width: 0,
    height: 0,
  },
  isMobile: false,
  hoverTop: false,
  hoverArtwork: false,
  hoverTopLink: false,
  hoverTrack: false,
  xfdStarted: false,
  xfdAnimationRunning: false,
  hoverLink: false,
  fontLoaded: false,
  videoLoaded: false,
  artworkLoaded: false,
  loadCompleted: false,
})

export const actions = {
  onResize({ commit }, size) {
    commit('setIsMobile', size)
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
  onChangeXfdStarted({ commit }, started) {
    commit('setXfdStarted', started)
  },
  onChangeXfdAnimationRunning({ commit }, running) {
    commit('setXfdAnimationRunning', running)
  },
  onChangeHoverLink({ commit }, hover) {
    commit('setHoverLink', hover)
  },
  onLoadFontCompleted({ commit }, load) {
    commit('setFontLoaded', load)
  },
  onLoadVideoCompleted({ commit }, load) {
    commit('setVideoLoaded', load)
  },
  onLoadArtworkCompleted({ commit }, load) {
    commit('setArtworkLoaded', load)
  },
}

export const mutations = {
  setWindowSize(state, value) {
    state.windowSize = value
  },
  setIsMobile(state, value) {
    state.isMobile = value.width < 1025
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
  setXfdStarted(state, value) {
    if (state.isMobile) {
      state.xfdStarted = false
      return
    }
    state.xfdStarted = value
  },
  setXfdAnimationRunning(state, value) {
    state.xfdAnimationRunning = value
  },
  setHoverLink(state, value) {
    state.hoverLink = value
  },
  setFontLoaded(state, value) {
    state.fontLoaded = value
  },
  setVideoLoaded(state, value) {
    state.videoLoaded = value
  },
  setArtworkLoaded(state, value) {
    state.artworkLoaded = value
  },
}
