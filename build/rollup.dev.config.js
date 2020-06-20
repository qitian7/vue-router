
/** "dev:dist": "rollup -wm -c build/rollup.dev.config.js",
 *     -w 是watch, 监听: 文件改变时 自动打包生成 'dist/vue-router.js'
 */

const { input, output } = require('./configs')[0] // 只生成这个 'dist/vue-router.js'

module.exports = Object.assign({}, input, { output })
