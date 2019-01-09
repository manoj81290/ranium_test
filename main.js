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
			rtg = $scope.links;
			count = Object.keys(rtg).length;
			console.log(rtg);

			for (var i = 0; i <= count; i++) {
				//console.log(i);
				console.log(rtg[i]);
				
			}
			

			/*for (i in rtg) {
				dates = rtg[i];
				console.log(dates);
			  x += "<h2>" + myObj.cars[i].name + "</h2>";
			  for (j in myObj.cars[i].models) {
			    x += myObj.cars[i].models[j] + "<br>";
			  }
			}	*/


		});



		/*console.log('start_date',start_date);
		console.log('start_date',end_date);*/
	}
});


