const withTM = require('next-transpile-modules')(['three', '@react-three/drei'])

module.exports = withTM({
    webpack5: false
})