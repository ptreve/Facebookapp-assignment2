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

// This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);

    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '396978570451217',
      xfbml      : true,
      version    : 'v2.1'
    });

FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      //console.log(response.gender);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });   

  }


