function cachingDecoratorNew(func) {
  let cache = []
  return (...args) => {
    let key = args.toString()
	let idx = cache.findIndex((item) => item.key === key)
	
    if (idx !== -1) {
      console.log("Из кэша: ", cache[idx].value)
      return "Из кэша: " + cache[idx].value
    } 
	
    result = func.call(this, ...args)
    cache.push({key: key, value: result})
	if (cache.length > 5) {
		cache.shift()
	}
    
	console.log("Вычисляем: " + result)
    return "Вычисляем: " + result
  }
}

function debounceDecoratorNew(func, ms) {
    let timeout;
	
	return function (...args) {
		if (!timeout) {
			func.apply(this, args);
		}
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			func.apply(this, args);
		}, ms);
	};
}

function debounceDecorator2(func) {
    let timeout;
	
	function wrapper(...args) {
		wrapper.count++;
		if (!timeout) {
			func.apply(this, args);
		}
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			func.apply(this, args);
		}, ms);
	};
	wrapper.count = 0;
	return wrapper  
}
