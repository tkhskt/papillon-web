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
  hoverLink: false,
  fontLoaded: false,
  artworkLoaded: false,
  loadCompleted: false,
  modalOpened: false,
  containerWidth: 0,
  scrollOffsetX: 0,
  translateX: 0,
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
  onChangeHoverLink({ commit }, hover) {
    commit('setHoverLink', hover)
  },
  onLoadFontCompleted({ commit }, load) {
    commit('setFontLoaded', load)
  },
  onLoadArtworkCompleted({ commit }, load) {
    commit('setArtworkLoaded', load)
  },
  onChangeModal({ commit }, opened) {
    commit('setModalOpened', opened)
  },
  onResizeContainer({ commit }, size) {
    commit('setContainerWidth', size)
  },
  onHorizontalScroll({ commit }, offset) {
    commit('setScrollOffsetX', offset)
  },
  onTranslate({ commit }, offset) {
    commit('setTranslateX', offset)
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
  setHoverLink(state, value) {
    state.hoverLink = value
  },
  setFontLoaded(state, value) {
    state.fontLoaded = value
  },
  setArtworkLoaded(state, value) {
    state.artworkLoaded = value
  },
  setModalOpened(state, value) {
    state.modalOpened = value
  },
  setContainerWidth(state, value) {
    state.containerWidth = value
  },
  setScrollOffsetX(state, value) {
    state.scrollOffsetX = value
  },
  setTranslateX(state, value) {
    state.translateX = value
  },
}
