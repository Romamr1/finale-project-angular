var KEYS = {
 		ESCAPE: 27
 	};

export default function () {
	return {
		scope: {
			isEditing: '='
		},
		link: function (scope, element, attrs) {			
			// element.on('blur', function (e){
			// 	console.log('smth');
			// 	scope.isEditing = false;
			// 	scope.$apply();
			// });
				
			element.on('keyup', function (e){
				if (_.isEqual(e.keyCode, KEYS.ESCAPE)){					
					scope.isEditing = false;
					scope.$apply();
				}
			});
		}

	}
}