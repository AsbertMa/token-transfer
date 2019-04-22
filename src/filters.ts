import { Vue } from 'vue-property-decorator'
import BigNumber from 'bignumber.js'
import { toChecksumAddress } from 'thor-devkit/es6/cry/address'

Vue.filter('shortAddress', (v: string) => {
  return v.substring(0, 6) + '......' + v.substring(v.length - 5, v.length)
})

Vue.filter('balance', (val: number) => {
  return Number(val).toLocaleString(undefined, {style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2})
})

Vue.filter('valToHex', (val: string, decimals?: number) => {
  const x = new BigNumber('1e+' + decimals || 18)
  const temp = new BigNumber(val)
  return '0x' + temp.multipliedBy(x).toString(16)
})

Vue.filter('toChecksumAddress', (val: string) => {
  return toChecksumAddress(val)
})
