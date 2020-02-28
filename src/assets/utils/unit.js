function getQueryString(href = '', name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
	var index = href.indexOf('?')
	var r = href.substr(index + 1).match(reg)
	if (r != null) {
		return unescape(r[2])
	} else {
		return null
	}
}
function getType(data) {
	return Object.prototype.toString
		.call(data)
		.substring(8)
		.split(/]/)[0]
}
function isObjEq(sourceObj, compareObj) {
	//对象值深度比较
	if (arguments.length < 2) return true
	let sourceType = getType(sourceObj)
	if (sourceType !== getType(compareObj)) return false
	if (
		sourceType !== 'Array' &&
		sourceType !== 'Object' &&
		sourceType !== 'Set' &&
		sourceType !== 'Map'
	) {
		if (sourceType === 'Number' && sourceObj.toString() === 'NaN') {
			return compareObj.toString() === 'NaN'
		}
		if (sourceType === 'Date' || sourceType === 'RegExp') {
			return sourceObj.toString() === compareObj.toString()
		}
		return sourceObj === compareObj
	} else if (sourceType === 'Array') {
		if (sourceObj.length !== compareObj.length) return false
		if (sourceObj.length === 0) return true
		for (let i = 0; i < sourceObj.length; i++) {
			if (!isObjEq(sourceObj[i], compareObj[i])) return false
		}
	} else if (sourceType === 'Object') {
		let sourceKeyList = Reflect.ownKeys(sourceObj)
		let compareKeyList = Reflect.ownKeys(compareObj)
		let key
		if (sourceKeyList.length !== compareKeyList.length) return false
		for (let i = 0; i < sourceKeyList.length; i++) {
			key = sourceKeyList[i]
			if (key !== compareKeyList[i]) return false
			if (!isObjEq(sourceObj[key], compareObj[key])) return false
		}
	} else if (sourceType === 'Set' || sourceType === 'Map') {
		// 把 Set Map 转为 Array
		if (!isObjEq(Array.from(sourceObj), Array.from(compareObj))) return false
	}
	return true
}

const checkreg = str => {
	//ip mac格式验证
	if (str.includes('.')) {
		//ip
		let reg = /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/
		return reg.test(str)
	} else if (str.includes('-') || str.includes(':')) {
		let reg = /^[A-Fa-f0-9]{1,2}[:-][A-Fa-f0-9]{1,2}[:-][A-Fa-f0-9]{1,2}[:-][A-Fa-f0-9]{1,2}[:-][A-Fa-f0-9]{1,2}[:-][A-Fa-f0-9]{1,2}$/
		return reg.test(str)
	} else {
		return false
	}
}

/*
 *量化参数范围以及默认值1105
 *str 判断参数
 *min,max 范围
 *def 默认值
 */
const checkRange = (str, min, max, def = 1) => {
	if (str) {
		let o = parseFloat(str)
		if (o < min) {
			return min
		} else if (o > max) {
			return max
		} else {
			return str
		}
	} else {
		return def //默认值
	}
}

const isEmpty = obj => typeof obj === 'undefined' || obj === null || obj === ''
export { getQueryString, isObjEq, getType, checkreg, isEmpty, checkRange }
