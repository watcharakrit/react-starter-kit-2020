;(function (window) {
  // Really basic check for the ios platform
  // https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

  // Get the device pixel ratio
  var ratio = window.devicePixelRatio || 1

  // Define the users device screen dimensions
  var screen = {
    width: window.screen.width * ratio,
    height: window.screen.height * ratio,
  }

  // iPhone X Detection
  if (iOS && screen.width == 1125 && screen.height === 2436) {
    // Set a global variable now we've determined the iPhoneX is true
    window.iphoneX = true

    // Adds a listener for ios devices that checks for orientation changes.
    window.addEventListener('orientationchange', update)
    update()
  }

  // Each time the device orientation changes, run this update function
  function update() {
    notch()
    iphoneXChecker()
  }

  // Notch position checker
  function notch() {
    var _notch = ''

    if ('orientation' in window) {
      // Mobile
      if (window.orientation == 90) {
        _notch = 'left'
      } else if (window.orientation == -90) {
        _notch = 'right'
      }
    } else if ('orientation' in window.screen) {
      // Webkit
      if (screen.orientation.type === 'landscape-primary') {
        _notch = 'left'
      } else if (screen.orientation.type === 'landscape-secondary') {
        _notch = 'right'
      }
    } else if ('mozOrientation' in window.screen) {
      // Firefox
      if (screen.mozOrientation === 'landscape-primary') {
        _notch = 'left'
      } else if (screen.mozOrientation === 'landscape-secondary') {
        _notch = 'right'
      }
    }

    window.notch = _notch
  }
})(window)

// Bespoke functions:
// The above functions have no jQuery Dependencies.
// The below code uses jQuery solely for this quick demo.
if (window.iphoneX === true) {
  var DHtml = document.getElementsByTagName('html')[0]
  DHtml.classList.add('iphoneX')
}

function iphoneXChecker() {
  var DHtml = document.getElementsByTagName('html')[0]
  if (window.notch == 'left') {
    DHtml.classList.remove('notch-right')
    DHtml.classList.add('notch-left')
  } else if (window.notch == 'right') {
    DHtml.classList.remove('notch-left')
    DHtml.classList.add('notch-right')
  } else {
    DHtml.classList.remove('notch-right')
    DHtml.classList.remove('notch-left')
  }
}
