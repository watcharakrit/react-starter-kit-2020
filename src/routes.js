import React, { lazy, useEffect, useContext } from 'react'
import { matchPath, useHistory, Link } from 'react-router-dom'
import { AppContext } from '<State>/AppProvider'

const ReactLazyPreload = (importStatement) => {
  const Component = lazy(importStatement)
  Component.preload = importStatement
  return Component
}

// Multi Store Pages
const Home = ReactLazyPreload(() => import('<Screens>/Home'))
const About = ReactLazyPreload(() => import('<Screens>/About'))

export const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/about', exact: true, component: About },
]

const findComponentForRoute = (path, routes) => {
  const matchingRoute = routes.find((route) =>
    matchPath(path, {
      path: route.path,
      exact: route.exact,
    })
  )
  return matchingRoute ? matchingRoute.component : null
}

const preloadRouteComponent = (path) => {
  const component = findComponentForRoute(path, routes)
  if (component && component.preload) {
    component.preload()
  }
}

export const LinkWithPreload = ({ to, ...rest }) => {
  const { setReferrerUrl } = useContext(AppContext)
  useEffect(() => {
    preloadRouteComponent(to)
  }, [])

  return (
    <Link
      to={to}
      {...rest}
      onClick={() => {
        setReferrerUrl(window.location.href)
      }}
    />
  )
}

export const useNavigate = () => {
  const { setReferrerUrl } = useContext(AppContext)
  const history = useHistory()

  return (url) => {
    setReferrerUrl(window.location.href)
    history.push(url)
  }
}
