import { version } from '../../package.json'
import Cookie from './cookie.js'
import Url from './url.js'
import Image from './img.js'
const BT = {
  version: version,
  test() {
    console.log('BT')
    console.log(arguments)
  }
}
console.log('packageInfo', )
export { BT, Cookie, Url, Image }
