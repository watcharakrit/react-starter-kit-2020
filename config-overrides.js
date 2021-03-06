const path = require('path')
const { override, addWebpackAlias } = require('customize-cra')
const rewireStyledComponents = require('react-app-rewire-styled-components')

module.exports = override(
  addWebpackAlias({
    '<Routes>': path.resolve(__dirname, 'src/routes'),
    '<Layouts>': path.resolve(__dirname, 'src/layouts'),
    '<Screens>': path.resolve(__dirname, 'src/screens'),
    '<Styles>': path.resolve(__dirname, 'src/styles'),
    '<UI>': path.resolve(__dirname, 'src/shared/base-ui'),
    '<Features>': path.resolve(__dirname, 'src/shared/features'),
    '<Helpers>': path.resolve(__dirname, 'src/helpers'),
    '<State>': path.resolve(__dirname, 'src/state'),
    '<Hooks>': path.resolve(__dirname, 'src/shared/hooks'),
  }),
  (config, env) => {
    config = rewireStyledComponents(config, env, {
      displayName: true,
    })
    return config
  }
)
