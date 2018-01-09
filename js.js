function bouncer(arr) {
	//Return values that evaluate as true inside the array.
	return arr.filter(function(value) {
		if (value) {
			return (value);
		}
	});
}