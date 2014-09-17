'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
	$scope.gender="";
	$scope.dob="";

$scope.akanName=function(){
	var mockscope = $scope;
	if(mockscope.gender=="male" && mockscope.dob=="Monday"){
		return "Kojo";

	}else if(mockscope.gender=="female" && mockscope.dob=="Monday"){
		return "Adjoa";
	}

	if(mockscope.gender=="male" && mockscope.dob=="Tuesday"){
		return "Kwabena";

	}else if(mockscope.gender=="female" && mockscope.dob=="Tuesday"){
		return "Abena";
	}

	if(mockscope.gender=="male" && mockscope.dob=="Wednesday"){
		return "Kweku";

	}else if(mockscope.gender=="female" && mockscope.dob=="Wednesday"){
		return "Akua";
	}

	if(mockscope.gender=="male" && mockscope.dob=="Thursday"){
		return "Yaw";

	}else if(mockscope.gender=="female" && mockscope.dob=="Thursday"){
		return "Yaa";
	}

	if(mockscope.gender=="male" && mockscope.dob=="Friday"){
		return "Kofi";

	}else if(mockscope.gender=="female" && mockscope.dob=="Friday"){
		return "Afua";
	}

	if(mockscope.gender=="male" && mockscope.dob=="Saturday"){
		return "Kwame";

	}else if(mockscope.gender=="female" && mockscope.dob=="Saturday"){
		return "Ama";
	}

	if(mockscope.gender=="male" && mockscope.dob=="Sunday"){
		return "Kwesi";

	}else if(mockscope.gender=="female" && mockscope.dob=="Sunday"){
		return "Akosua";
	}
};

	
});

// <script>
//       window.fbAsyncInit = function() {
//         FB.init({
//           appId      : '396744313807976',
//           xfbml      : true,
//           version    : 'v2.0'
//         });
//       };

//       (function(d, s, id){
//          var js, fjs = d.getElementsByTagName(s)[0];
//          if (d.getElementById(id)) {return;}
//          js = d.createElement(s); js.id = id;
//          js.src = "//connect.facebook.net/en_US/sdk.js";
//          fjs.parentNode.insertBefore(js, fjs);
//        }(document, 'script', 'facebook-jssdk'));

//       function testAPI() {
//     console.log('Welcome!  Fetching your information.... ');
//     FB.api('/me', function(response) {
//       console.log('Successful login for: ' + response.name);
//       document.getElementById('status').innerHTML =
//         'Thanks for logging in, ' + response.name + '!';
//     });
//   }
//     </script>