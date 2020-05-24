// =========
// VERSION 1
// =========
function myForEach(arr, func){
	for (var i = 0; i < arr.length; i++) {
		func(arr[i],i,arr);
	}
}

var colors = ["red", "orange", "yellow", "green", "blue", "PURPLE"];
myForEach(colors, function(color,index,arr){
	console.log(color,index,arr);
});

// =========
// VERSION 2 
// =========
Array.prototype.myForEach = function(func){
  for(var i = 0; i < this.length; i++) {
   func(this[i],i,this);
  }
};

var colors = ["red", "orange", "yellow", "green", "blue", "PURPLE"];
colors.myForEach(function(color,index,arr){
	console.log(color,index,arr);
});