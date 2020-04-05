export const lockBodyScroll = (domContext) => {
  const $doc = document.documentElement
  const $body = document.body
  const $bodyContent = domContext
  if ($doc.scrollTop) {
    $bodyContent.style.top = -$doc.scrollTop + 'px'
    $bodyContent.style.position = 'relative'
  }

  window.scrollTo(0, 0)
  $doc.style.height = '100%'
  $doc.style.overflow = 'hidden'
  $body.style.height = '100%'
  $body.style.overflow = 'hidden'
}

export const unlockBodyScroll = (domContext) => {
  const $doc = document.documentElement
  const $body = document.body
  const $bodyContent = domContext

  const _currentScrollTop = $bodyContent.style.top

  $doc.style.height = ''
  $doc.style.overflow = ''
  $body.style.height = ''
  $body.style.overflow = ''
  $bodyContent.style.top = ''
  $bodyContent.style.position = ''

  window.scrollTo(0, -parseFloat(_currentScrollTop))
}
