/* eslint-disable */

export default function ({ app, store }, inject) {
  const adobeFonts = (d) => {
    var config = {
        kitId: 'ytp1iqt',
        scriptTimeout: 3000,
        async: true,
        active: function () {
          store.dispatch('main/onLoadFontCompleted', true)
        },
        inactive: function () {
          store.dispatch('main/onLoadFontCompleted', true)
        },
      },
      h = d.documentElement,
      t = setTimeout(function () {
        h.className =
          h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive'
      }, config.scriptTimeout),
      tk = d.createElement('script'),
      f = false,
      s = d.getElementsByTagName('script')[0],
      a
    h.className += ' wf-loading'
    tk.src = 'https://use.typekit.net/' + config.kitId + '.js'
    tk.async = true
    tk.onload = tk.onreadystatechange = function () {
      a = this.readyState
      if (f || (a && a != 'complete' && a != 'loaded')) return
      f = true
      clearTimeout(t)
      try {
        Typekit.load(config)
      } catch (e) {}
    }
    s.parentNode.insertBefore(tk, s)
  }

  inject('adobeFonts', adobeFonts)
}
