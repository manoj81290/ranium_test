var	application = angular.module("myapp", []);

$( function() {
	$( "#datepicker1" ).datepicker({ dateFormat: 'yy-mm-dd' });
	$( "#datepicker2" ).datepicker({ dateFormat: 'yy-mm-dd' });
} );
  

application.controller("formcontroller", function($scope, $http) {

	$scope.insert = {};
	$scope.insertData = function() {
		 start_date = $scope.start_date;
		 end_date = $scope.end_date;
		 
		$http({
			method : "GET", 
			url : "https://api.nasa.gov/neo/rest/v1/feed?start_date="+start_date+"&end_date="+end_date+"&detailed=false&api_key=WegOSxggnyy9Ym61JHXGsFjMKdAoNbJIpQoxpiEM",
			data: $scope.insert,
		}).then(function (response){
			$scope.links = response.data.near_earth_objects;
			$scope.rtg=JSON.stringify($scope.links);
			
			console.log(location);
			

			
		});


		console.log('start_date',start_date);
		console.log('start_date',end_date);
	}
});


