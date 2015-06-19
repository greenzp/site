var aplly = function(func){
	return func.aplly(this, [].slice.call(arguments, 1));
}