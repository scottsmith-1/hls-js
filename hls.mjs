import Hls from './node_modules/hls.js/dist/hls.mjs'

const hls = new Hls()

document.getElementById('p').innerHTML = `hls is supported ${Hls.isSupported()}`
