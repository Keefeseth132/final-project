var app = angular.module('app', ['ngResource']);

app.controller('homeSearch', function($scope){
	$scope.strains = [
	{ name:'Cotton Candy Kush', 
	 type:'indica', 
	 THC:'13.83%', 
	 CBD:'0.5%', 
	 CBN:'0.24%', 
	 effects:'relaxed, happy', 
	 ailments: ['stress', 'pain', 'depression'],
	 image:'images/cckush.jpg'},

	 {name:'Grape Ape', 
	 type:'indica', 
	 THC:'15%-23%', 
	 CBD:'0.07%', 
	 CBN:'0.03%', 
	 effects:'relaxed, happy, sleepy', 
	 ailments: ['pain', 'stress', 'insomnia'],
	 image:'images/grape-ape.jpg'},

	 {name:'Alien OG', 
	 type:'indica', 
	 THC:'20%-28%', 
	 CBD:'0.1%-0.2%', 
	 CBN:'0.04%', 
	 effects:'relaxed, happy, euphoric', 
	 ailments: ['stress', 'pain', 'depression'],
	 image:'images/alien-og.jpg'},

	 {name:'Canna Tsu', 
	 type:'hybrid Cannatonic x sour tsunami', 
	 THC:'7.52%', 
	 CBD:'7.46%', 
	 CBN:'0.16%', 
	 effects:'relaxed, hungry', 
	 ailments: ['pain', 'lack of appetite', 'seizures', 'muscle spasms'],
	 image:'images/canna-tsu.jpg'},

	 {name:'Blue Dream', 
	 type:'hybrid blueberry indica x sativa haze', 
	 THC:'17%-24%', 
	 CBD:'0.1%-0.2%', 
	 CBN:'0.01%', 
	 effects:'happy, euphoric, relaxed', 
	 ailments: ['pain', 'depression', 'nausea'],
	 image:'images/blue-dream.jpg'},

	 {name:'Girl Scout Cookies', 
	 type:'hybrid OG kush x durbin poison', 
	 THC:'17%-28%', 
	 CBD:'0.09%-0.2%', 
	 CBN:'0.5%', 
	 effects:'happy, relaxed, euphoric', 
	 ailments: ['pain', 'nausea', 'lack of appetite'],
	 image:'images/girl-scout-cookies.jpg'},

	 {name:'Sour Diesel', 
	 type:'sativa', 
	 THC:'19%-25%', 
	 CBD:'0.1%-0.3%', 
	 CBN:'0.04%', 
	 effects:'happy, uplifted, euphoric', 
	 ailments: ['stress', 'depression', 'pain'],
	 image:'images/sour-diesel.jpg'},

	 {name:'LA Confidential', 
	 type:'indica', 
	 THC:'19%-25%', 
	 CBD:'0.08%-0.1%', 
	 CBN:'0.01%-0.04%', 
	 effects:'relaxed, sleepy, happy', 
	 ailments: ['pain', 'stress', 'insomnia'],
	 image:'images/la-confidential.jpg'},

	 {name:'Chemdawg', 
	 type:'hybrid unkown origins', 
	 THC:'18%-26%', 
	 CBD:'0.01%-0.1%', 
	 CBN:'0.05%', 
	 effects:'happy, euphoric, uplifted', 
	 ailments: ['stress', 'pain', 'nausea'],
	 image:'images/chemdawg.jpg'},

	 {name:'Skywalker OG', 
	 type:'hybrid skywalker x OG kush', 
	 THC:'18%-30%', 
	 CBD:'0.06%-0.2%', 
	 CBN:'0.01%-0.03%', 
	 effects:'relaxed, happy', 
	 ailments: ['stress', 'pain', 'depression'],
	 image:'images/skywalker-og.jpg'},

	 {name:'Strawberry Cough', 
	 type:'sativa', 
	 THC:'12%-18%', 
	 CBD:'0.17%', 
	 CBN:'0.05%', 
	 effects:'happy, uplifted, euphoric', 
	 ailments: ['fatigue', 'depression', 'anxiety'],
	 image:'images/strawberry-cough.jpg'},

	 {name:'White Rhino', 
	 type:'indica', 
	 THC:'14%-19%', 
	 CBD:'0.19%-0.88%', 
	 CBN:'0.05%-0.74%', 
	 effects:'happy, relaxed, euphoric', 
	 ailments: ['insomnia', 'depression', 'pain'],
	 image:'images/white-rhino.jpg'}
]
$scope.showStrains = false;
$scope.keyUpSearch = function(){
	$scope.showStrains = true;
}
})

app.controller("suggestionBar", function($scope, $http){
	$http.get("/api/suggestion").
		then(function(responseData){

			$scope.suggestions = responseData.data;
			console.log('Page load', $scope.)
		})

	$scope.submitText = function(){
		$http.post("/newsuggestion", {text : $scope.suggestion}).
			then(function(responseData){
				$scope.suggestions = ''
				if (responseData.err) {
					console.log(error)
				}
				else {
					
					$scope.suggestions = responseData.data;
					console.log('Return', $scope.suggestions)
				}
			})
	
	}



})
