/**
 * String.repeat()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	41   	24      (No)	            (Yes)   9       (Yes)
 * -------------------------------------------------------------------------------
 */
if (!String.prototype.repeat) {
  Object.defineProperty(String.prototype, 'repeat', {
    configurable: true,
    writable: true,
    value: function (count: number) {
      if (this == null) {
        throw new TypeError("can't convert " + this + ' to object')
      }
      var str = '' + this
      count = +count
      if (count != count) {
        count = 0
      }
      if (count < 0) {
        throw new RangeError('repeat count must be non-negative')
      }
      if (count == Infinity) {
        throw new RangeError('repeat count must be less than infinity')
      }
      count = Math.floor(count)
      if (str.length == 0 || count == 0) {
        return ''
      }
      if (str.length * count >= 1 << 28) {
        throw new RangeError(
          'repeat count must not overflow maximum string size'
        )
      }
      var rpt = ''
      for (; ;) {
        if ((count & 1) == 1) {
          rpt += str
        }
        count >>>= 1
        if (count == 0) {
          break
        }
        str += str
      }
      return rpt
    },
  })
}

/**
 * String.padStart()
 * version 1.0.1
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	57   	51      (No)	            44   	10      15
 * -------------------------------------------------------------------------------
 */
if (!String.prototype.padStart) {
  Object.defineProperty(String.prototype, 'padStart', {
    configurable: true,
    writable: true,
    value: function (targetLength: number, padString?: string) {
      targetLength = targetLength >> 0 //floor if number or convert non-number to 0;
      padString = String(typeof padString !== 'undefined' ? padString : ' ')
      if (this.length > targetLength) {
        return String(this)
      } else {
        targetLength = targetLength - this.length
        if (targetLength > padString.length) {
          padString += padString.repeat(targetLength / padString.length) //append to original to ensure we are longer than needed
        }
        return padString.slice(0, targetLength) + String(this)
      }
    },
  })
}

