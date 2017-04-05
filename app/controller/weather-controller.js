//Controller
app.controller("cventController",["$scope","postService",function($scope,postService){


     //Consume API
    var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22fairfax%2C%20va%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithke';

  	 postService.submitData(url,'','GET').then(
	 function(data){ 
	 
	//console.log(data.data.query.results.channel.item.forecast);
	 
	$scope.loc  = data.data.query.results.channel.title;
	$scope.temp = data.data.query.results.channel.item.condition.temp; 
	$scope.con  = data.data.query.results.channel.item.condition.text; 
	
	var m,
    imgUrls = [], 
    str = data.data.query.results.channel.item.description,
    rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;
    while ( m = rex.exec( str ) ) {
    imgUrls.push( m[1] );
    }
	$scope.img  = imgUrls[0];
	
	$scope.forcasts  = data.data.query.results.channel.item.forecast;
	 
	 },
	 function(data){ console.log('error' + data);});


}]);

