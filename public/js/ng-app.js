var app = angular.module('app', ['ngResource']);

// app.controller('homeSearch', function($scope){
// 	$scope.strains = [
// 	{ name:'Cotton Candy Kush', 
// 	 type:'indica', 
// 	 THC:'13.83%', 
// 	 CBD:'0.5%', 
// 	 CBN:'0.24%', 
// 	 effects:'relaxed, happy', 
// 	 ailments: ['stress', 'pain', 'depression'],
// 	 image:'images/cckush.jpg'},

// 	 {name:'Grape Ape', 
// 	 type:'indica', 
// 	 THC:'15%-23%', 
// 	 CBD:'0.07%', 
// 	 CBN:'0.03%', 
// 	 effects:'relaxed, happy, sleepy', 
// 	 ailments: ['pain', 'stress', 'insomnia'],
// 	 image:'images/grape-ape.jpg'},

// 	 {name:'Alien OG', 
// 	 type:'indica', 
// 	 THC:'20%-28%', 
// 	 CBD:'0.1%-0.2%', 
// 	 CBN:'0.04%', 
// 	 effects:'relaxed, happy, euphoric', 
// 	 ailments: ['stress', 'pain', 'depression'],
// 	 image:'images/alien-og.jpg'},

// 	 {name:'Canna Tsu', 
// 	 type:'hybrid Cannatonic x Sour Tsunami', 
// 	 THC:'7.52%', 
// 	 CBD:'7.46%', 
// 	 CBN:'0.16%', 
// 	 effects:'relaxed, hungry', 
// 	 ailments: ['pain', 'lack of appetite', 'seizures', 'muscle spasms'],
// 	 image:'images/canna-tsu.jpg'},

// 	 {name:'Blue Dream', 
// 	 type:'hybrid Blueberry Indica x Sativa Haze', 
// 	 THC:'17%-24%', 
// 	 CBD:'0.1%-0.2%', 
// 	 CBN:'0.01%', 
// 	 effects:'happy, euphoric, relaxed', 
// 	 ailments: ['pain', 'depression', 'nausea'],
// 	 image:'images/blue-dream.jpg'},

// 	 {name:'Girl Scout Cookies', 
// 	 type:'hybrid OG Kush x Durban Poison', 
// 	 THC:'17%-28%', 
// 	 CBD:'0.09%-0.2%', 
// 	 CBN:'0.5%', 
// 	 effects:'happy, relaxed, euphoric', 
// 	 ailments: ['pain', 'nausea', 'lack of appetite'],
// 	 image:'images/girl-scout-cookies.jpg'},

// 	 {name:'Sour Diesel', 
// 	 type:'sativa', 
// 	 THC:'19%-25%', 
// 	 CBD:'0.1%-0.3%', 
// 	 CBN:'0.04%', 
// 	 effects:'happy, uplifted, euphoric', 
// 	 ailments: ['stress', 'depression', 'pain'],
// 	 image:'images/sour-diesel.jpg'},

// 	 {name:'LA Confidential', 
// 	 type:'indica', 
// 	 THC:'19%-25%', 
// 	 CBD:'0.08%-0.1%', 
// 	 CBN:'0.01%-0.04%', 
// 	 effects:'relaxed, sleepy, happy', 
// 	 ailments: ['pain', 'stress', 'insomnia'],
// 	 image:'images/la-confidential.jpg'},

// 	 {name:'Chemdawg', 
// 	 type:'hybrid unkown origins', 
// 	 THC:'18%-26%', 
// 	 CBD:'0.01%-0.1%', 
// 	 CBN:'0.05%', 
// 	 effects:'happy, euphoric, uplifted', 
// 	 ailments: ['stress', 'pain', 'nausea'],
// 	 image:'images/chemdawg.jpg'},

// 	 {name:'Skywalker OG', 
// 	 type:'hybrid Skywalker x OG Kush', 
// 	 THC:'18%-30%', 
// 	 CBD:'0.06%-0.2%', 
// 	 CBN:'0.01%-0.03%', 
// 	 effects:'relaxed, happy', 
// 	 ailments: ['stress', 'pain', 'depression'],
// 	 image:'images/skywalker-og.jpg'},

// 	 {name:'Strawberry Cough', 
// 	 type:'sativa', 
// 	 THC:'12%-18%', 
// 	 CBD:'0.17%', 
// 	 CBN:'0.05%', 
// 	 effects:'happy, uplifted, euphoric', 
// 	 ailments: ['fatigue', 'depression', 'anxiety'],
// 	 image:'images/strawberry-cough.jpg'},

// 	 {name:'White Rhino', 
// 	 type:'indica', 
// 	 THC:'14%-19%', 
// 	 CBD:'0.19%-0.88%', 
// 	 CBN:'0.05%-0.74%', 
// 	 effects:'happy, relaxed, euphoric', 
// 	 ailments: ['insomnia', 'depression', 'pain'],
// 	 image:'images/white-rhino.jpg'},

// 	 {name:'Chernobyl', 
// 	 type:'sativa', 
// 	 THC:'13.5%-25.8%', 
// 	 CBD:'0.25%', 
// 	 CBN:'0.1%-0.33%', 
// 	 effects:'energetic, euphoric, creative', 
// 	 ailments: ['anxiety', 'depression', 'nausea'],
// 	 image:'images/chernobyl.jpg'},

// 	 {name:'Black Widow', 
// 	 type:'sativa', 
// 	 THC:'21%-28%', 
// 	 CBD:'0.21%', 
// 	 CBN:'0.18%', 
// 	 effects:'euphoric, relaxed, creative', 
// 	 ailments: ['loss of appetite', 'anxiety', 'depression'],
// 	 image:'images/black-widow.jpg'},

// 	 {name:'Acapulco Gold', 
// 	 type:'sativa', 
// 	 THC:'18%-23%', 
// 	 CBD:'0.07%', 
// 	 CBN:'0.01%-0.03%', 
// 	 effects:'happy, creative, uplifted', 
// 	 ailments: ['nausea', 'anxiety', 'PTSD'],
// 	 image:'images/acapulco-gold.jpg'},

// 	 {name:'Chocolope', 
// 	 type:'sativa', 
// 	 THC:'15%-21%', 
// 	 CBD:'0.01%-0.07%', 
// 	 CBN:'0.01%', 
// 	 effects:'creative, euphoric, energetic', 
// 	 ailments: ['depression', 'fatigue', 'focus'],
// 	 image:'images/chocolope.jpg'},

// 	 {name:'Agent Orange', 
// 	 type:'sativa', 
// 	 THC:'14%-15%', 
// 	 CBD:'0.17%-0.19%', 
// 	 CBN:'0.05%-0.17%', 
// 	 effects:'paranoia, euphoric, energetic', 
// 	 ailments: ['pain', 'anxiety', 'nausea'],
// 	 image:'images/agent-orange.jpg'},

// 	 {name:'Timewreck', 
// 	 type:'sativa', 
// 	 THC:'18.36%-24%', 
// 	 CBD:'0.16%', 
// 	 CBN:'0.01%-0.05%', 
// 	 effects:'creative, euphoric, energetic', 
// 	 ailments: ['depression', 'fatigue', 'focus'],
// 	 image:'images/timewreck.jpg'},

// 	 {name:'Cannalope Kush', 
// 	 type:'sativa', 
// 	 THC:'16.5%-22%', 
// 	 CBD:'0.01%-0.03%', 
// 	 CBN:'0.12%', 
// 	 effects:'euphoric, energetic, creative', 
// 	 ailments: ['depression', 'anxiety', 'nausea'],
// 	 image:'images/cannalope-kush.jpg'},

// 	 {name:'Durban Poison', 
// 	 type:'sativa', 
// 	 THC:'15%-24%', 
// 	 CBD:'0.11%', 
// 	 CBN:'0.01%-0.05%', 
// 	 effects:'energetic, creative, focus', 
// 	 ailments: ['depression', 'anxiety', 'pain'],
// 	 image:'images/durban-poison.jpg'},

// 	 {name:'Apollo 13', 
// 	 type:'sativa', 
// 	 THC:'19.93%', 
// 	 CBD:'0.1%-0.26%', 
// 	 CBN:'0.01%-0.05%', 
// 	 effects:'focused, energetic, creative', 
// 	 ailments: ['depression', 'anxiety', 'pain'],
// 	 image:'images/apollo13.jpg'},

// 	 {name:'Juicy Fruit', 
// 	 type:'sativa', 
// 	 THC:'16%-26%', 
// 	 CBD:'0.27%', 
// 	 CBN:'0.01%-0.12%', 
// 	 effects:'euphoric, energetic, creative', 
// 	 ailments: ['anxiety', 'depression', 'nausea'],
// 	 image:'images/juicy-fruit.jpg'},

// 	 {name:'Kings Kush', 
// 	 type:'indica', 
// 	 THC:'14%-20%', 
// 	 CBD:'0.01%-0.05%', 
// 	 CBN:'0.15%', 
// 	 effects:'euphoric, relaxed, sedated', 
// 	 ailments: ['pain', 'insomnia', 'anxiety'],
// 	 image:'images/kings-kush.jpg'},

// 	 {name:'Death Star', 
// 	 type:'indica', 
// 	 THC:'13%-26%', 
// 	 CBD:'0.18%', 
// 	 CBN:'0.09%', 
// 	 effects:'relaxed, euphoric, sedated', 
// 	 ailments: ['insomnia', 'pain', 'depression'],
// 	 image:'images/death-star.jpg'},

// 	 {name:'Ghost OG', 
// 	 type:'indica', 
// 	 THC:'15%-24%', 
// 	 CBD:'0.24%', 
// 	 CBN:'0.1%-0.2%', 
// 	 effects:'euphoric, relaxed, sedated', 
// 	 ailments: ['insomnia', 'depression', 'pain'],
// 	 image:'images/ghost-og.jpg'},

// 	 {name:'Fucking Incredible', 
// 	 type:'indica', 
// 	 THC:'15%-22.13%', 
// 	 CBD:'0.16%', 
// 	 CBN:'0.01%-0.02%', 
// 	 effects:'euphoric, relaxed, sleepy', 
// 	 ailments: ['insomnia', 'pain', 'depression'],
// 	 image:'images/fucking-incredible.jpg'},

// 	 {name:'Alien Dawg', 
// 	 type:'indica', 
// 	 THC:'16%-23.81%', 
// 	 CBD:'0.2%', 
// 	 CBN:'0.01%', 
// 	 effects:'euphoric, relaxed, creative', 
// 	 ailments: ['anxiety', 'pain', 'insomnia'],
// 	 image:'images/alien-dawg.jpg'},

// 	 {name:'Kandy Kush', 
// 	 type:'indica', 
// 	 THC:'12%-20%', 
// 	 CBD:'0.1%-0.2%', 
// 	 CBN:'0.01%-0.02%', 
// 	 effects:'relaxed, euphoric, cotton mouth', 
// 	 ailments: ['pain', 'nausea', 'loss of appetite'],
// 	 image:'images/kandy-kush.jpg'},

// 	 {name:'Blue Cheese', 
// 	 type:'indica', 
// 	 THC:'15%-20%', 
// 	 CBD:'0.01%-0.09%', 
// 	 CBN:'0.01%-0.03%', 
// 	 effects:'euphoric, relaxed, creative', 
// 	 ailments: ['pain', 'loss of appetite', 'insomnia'],
// 	 image:'images/blue-cheese.jpg'},

// 	 {name:'Sweet Tooth', 
// 	 type:'indica', 
// 	 THC:'14%-19.9%', 
// 	 CBD:'0.13%', 
// 	 CBN:'0.01%-0.03%', 
// 	 effects:'relaxed, sleepy, sedated', 
// 	 ailments: ['insomnia', 'pain', 'depression'],
// 	 image:'images/sweet-tooth.jpg'},

// 	 {name:'707 Headband', 
// 	 type:'indica', 
// 	 THC:'17%-24%', 
// 	 CBD:'0.15%', 
// 	 CBN:'0.01%-0.06%', 
// 	 effects:'euphoric, relaxed, creative', 
// 	 ailments: ['anxiety', 'depression', 'nausea'],
// 	 image:'images/707-headband.jpg'},

// 	 {name:'Afghan Kush', 
// 	 type:'indica', 
// 	 THC:'13.5%-22.41%', 
// 	 CBD:'0.15%', 
// 	 CBN:'0.16%', 
// 	 effects:'euphoric, relaxed, sedated', 
// 	 ailments: ['pain', 'anxiety', 'insomnia'],
// 	 image:'images/afghan-kush.jpg'},

// 	 {name:'Cannatonic', 
// 	 type:'hybrid MK Ultra x G13 Haze', 
// 	 THC:'6%', 
// 	 CBD:'6%-17%', 
// 	 CBN:'0.01%-0.1%', 
// 	 effects:'relaxed, euphoric, dry eyes', 
// 	 ailments: ['pain'],
// 	 image:'images/cannatonic.jpg'},

// 	 {name:'Lemon OG', 
// 	 type:'hybrid Master Kush x Lemon Joy', 
// 	 THC:'20%-26%', 
// 	 CBD:'0.16%', 
// 	 CBN:'0.01%-0.06%', 
// 	 effects:'euphoric, paranoia, creative', 
// 	 ailments: ['depression', 'pain', 'nausea'],
// 	 image:'images/lemon-og.jpg'},

// 	 {name:'Tahoe OG', 
// 	 type:'hybrid OG Kush x SFV OG', 
// 	 THC:'20%-25%', 
// 	 CBD:'0.07%-0.2%', 
// 	 CBN:'0.01%-0.05%', 
// 	 effects:'euphoric, relaxed, creative', 
// 	 ailments: ['depression', 'insomnia', 'anxiety'],
// 	 image:'images/tahoe-og.jpg'},

// 	 {name:'Trainwreck', 
// 	 type:'hybrid Mexican x Thai x Afghani', 
// 	 THC:'12%-21%', 
// 	 CBD:'0.02%-0.1%', 
// 	 CBN:'0.01%-0.03%', 
// 	 effects:'happy, euphoric, relaxed', 
// 	 ailments: ['stress', 'pain', 'depression'],
// 	 image:'images/trainwreck.jpg'},

// 	 {name:'Silver Haze', 
// 	 type:'hybrid Haze x Northern Lights x Skunk', 
// 	 THC:'11%-14%', 
// 	 CBD:'0.05%', 
// 	 CBN:'0.01%-0.05%', 
// 	 effects:'euphoric, energetic, creative', 
// 	 ailments: ['anxiety', 'nausea', 'depression'],
// 	 image:'images/silver-haze.jpg'},

// 	 {name:'Mango Kush', 
// 	 type:'hybrid Mango x Hindu Kush', 
// 	 THC:'16%-20%', 
// 	 CBD:'0.19%', 
// 	 CBN:'0.01%-0.03%', 
// 	 effects:'happy, relaxed, sleepy', 
// 	 ailments: ['stress', 'insomnia', 'pain'],
// 	 image:'images/mango-kush.jpg'},

// 	 {name:'Rockstar', 
// 	 type:'hybrid Rock Bud x Sensi Star', 
// 	 THC:'14%-21%', 
// 	 CBD:'0.06%', 
// 	 CBN:'0.01%-0.06%', 
// 	 effects:'euphoric, creative, cotton mouth', 
// 	 ailments: ['pain', 'depression', 'anxiety'],
// 	 image:'images/rockstar.jpg'},

// 	 {name:'Flo', 
// 	 type:'hybrid Purple Thai x Afghani', 
// 	 THC:'12%-18%', 
// 	 CBD:'0.26%', 
// 	 CBN:'0.25%', 
// 	 effects:'relaxed, euphoric, focused', 
// 	 ailments: ['anxiety', 'depression', 'nausea'],
// 	 image:'images/flo.jpg'},

// 	 {name:'Blueberry Haze', 
// 	 type:'hybrid Blueberry x Haze', 
// 	 THC:'18%-23%', 
// 	 CBD:'0.17%', 
// 	 CBN:'0.03%', 
// 	 effects:'euphoric, happy, uplifted', 
// 	 ailments: ['stress', 'depression', 'insomnia'],
// 	 image:'images/blueberry-haze.jpg'},

// 	 {name:'Fruity Pebbles', 
// 	 type:'hybrid Green Ribbon x GDP x Tahoe OG x Alien Kush', 
// 	 THC:'12%-21%', 
// 	 CBD:'0.18%', 
// 	 CBN:'0.01%-0.03%', 
// 	 effects:'euphoric, creative, relaxed', 
// 	 ailments: ['pain', 'depression', 'anxiety'],
// 	 image:'images/fruity-pebbles.jpg'}
// ]


// })

app.controller("suggestionBar", function($scope, $http){
	$http.get("/api/suggestion").
		then(function(responseData){
			$scope.suggestions = responseData.data;
		})

	$scope.submitText = function(){
		$http.post("/newsuggestion", {text : $scope.suggestion}).
			then(function(responseData){
				$scope.suggestion = ''
				if (responseData.err) {
					console.log(error)
				}
				else {
					$scope.suggestions = responseData.data;
				}
			})
	
	}

})

app.controller("homeSearch", function($scope, $http){
	$http.get("/me").
	then(function(responseData){
		$scope.user = responseData.data
		$http.get("/api/strains").
		then(function(responseData){
			$scope.strains = responseData.data;

			for(var i = 0; i < $scope.strains.length; i++){
				
				console.log($scope.user.favorites.indexOf($scope.strains[i]._id))

				if($scope.user.favorites.indexOf($scope.strains[i]._id) > -1){
					$scope.strains[i].favorite = true
				}				
				
			}

		})
	})

	
	$scope.showStrains = false;

	$scope.keyUpSearch = function(){
		$scope.showStrains = true;
	}

	$scope.favorite = (function(strain){
		$http.post("/favorite", strain).
		then(function(responseData){
			strain.favorite = true
		})
	})

	$scope.unfavorite = (function(strain){
		$http.post("/unfavorite", strain).
		then(function(responseData){
			strain.favorite = false
		})
	})
})

app.controller("navbar", function($scope){
	$scope.currentPage = window.location.pathname
	
	$scope.whereAreWe = function(input){
		return input === $scope.currentPage
	}
})