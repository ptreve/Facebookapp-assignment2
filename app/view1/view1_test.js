'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var mockScope={},
       view1Ctrl = $controller('View1Ctrl', {$scope:mockScope});
      expect(view1Ctrl).toBeDefined();
    }));

    it('should display the akanname in the scope', inject(function($controller){
    	var mockScope={},
    	akanNameCtrl= $controller('View1Ctrl', {$scope:mockScope});
    	expect(mockScope.akanName).toBeDefined();
    }))
  });
});