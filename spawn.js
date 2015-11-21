function spawn (generator) {
	return new Promise((resolve, reject) => {
		var onResult = lastPromiseResult => {
			var {value, done} = generator.next(lastPromiseResult);
			if (!done) {
				value.then(onResult, reject);
			}
			else resolve(value);
		}
		onResult();
	})
}