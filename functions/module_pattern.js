var MakeMoreExciting = (function () {

  	function addStrings(sentence, characters){
		return sentence + characters;
	};
  
	return {
	    excitingify: function (sentence) {
			return addStrings(sentence, '!!!!');
		},
		excitingifyN: function(sentence, n){
			return addStrings(sentence, Array(n+1).join('!'));
		}
	}
})();

var myModule = MakeMoreExciting;
console.log(myModule.excitingify('Cats'));			// Cats!!!!!!!!!!
console.log(myModule.excitingifyN('Cats', 10)); 	// Cats!!!!!!!!!!
console.log(myModule.addStrings('Cats', '!!!!')); 	// Uncaught TypeError: MyModule.addStrings is not a function
