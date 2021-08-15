module.exports = () => {
  return {
    require: ['./test/helpers/ava.setup.js'],
    ignoredByWatcher: ['!**/*.{js,vue}'],
    babel: true,
    tap: false,
    verbose: true,
    color: true
  }
}
