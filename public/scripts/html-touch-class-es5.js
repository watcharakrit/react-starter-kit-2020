'use strict'

// TouchClass ( ES5 )
// v1.0.0
// 2016
// Author: Watcharakrit Phantu (WPH.)
// Description
// - Vanilla Js
// - Check browser has touch event.
// - Touch class for touch device state *use instead :active.
// - Add & remove when touchstart & touchend.
//   - Add & Remove on base user event. (user is using touch or mouse on the while).
// ====================================================
;(function () {
  // Detect touch & no-touch base on Event.
  // ----------------------------------------------------
  var html = document.documentElement
  var touchTimer
  var isTouchEvent
  var isNoTouchEvent

  if ('ontouchstart' in window || 'ontouchstart' in document.documentElement) {
    html.classList.add('touch')
    isTouchEvent = true
    isNoTouchEvent = false
  } else {
    html.classList.add('no-touch')
    isTouchEvent = false
    isNoTouchEvent = true
  }

  document.addEventListener(
    'touchstart',
    function () {
      html.classList.remove('no-touch')
      html.classList.add('touch')
      isTouchEvent = true
      isNoTouchEvent = false
      clearTimeout(touchTimer)
      touchTimer = setTimeout(function () {
        isTouchEvent = false
      }, 400)
    },
    true
  )
  document.addEventListener('mousemove', function () {
    if (!isTouchEvent && !isNoTouchEvent) {
      html.classList.remove('touch')
      html.classList.add('no-touch')
      isNoTouchEvent = true
    }
  }) // ----------------------------------------------------
  // Detect to addClass touch on Element that have basic class button.
  // ----------------------------------------------------
  // Pattern

  var patternContext = /(^body$|^html$)/i
  var patternTag = /^a$|^button$/i
  var patternClass = /button|^bt-|^btn-/ // Recusive Function to find Parent Element which match Context.

  var recFindUpElement = function recFindUpElement(self, type) {
    var _self = self

    while (_self) {
      if (patternContext.test(_self.tagName)) {
        break
      } else if (patternTag.test(_self.tagName) || patternClass.test(_self.getAttribute('class'))) {
        // cancle with disabled.
        if (_self.hasAttribute('disabled')) {
          return false
        }

        if (type === 'ADD_TOUCH') {
          _self.classList.add('touch')
        } else {
          _self.classList.remove('touch')
        }

        break
      } else {
        _self = _self.parentNode
      }
    }

    return false
  } // add touch class

  document.addEventListener('touchstart', function (event) {
    recFindUpElement(event.target, 'ADD_TOUCH')
  }) // remove touch class

  document.addEventListener('touchend', function (event) {
    recFindUpElement(event.target, 'REMOVE_TOUCH')
  }) // ----------------------------------------------------
})()
