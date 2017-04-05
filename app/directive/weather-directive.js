//Directive
app.directive("weatherWidget",function(){

      return {
               restrict:'EA',
               template:'<div id="widget"><div id="location">{{loc}}</div><div id="weather"><span id="temparature">{{temp}}</span><span class="deg">&deg;</span><img ng-src="{{img}}"  class="weather-img" ><span id="condition">{{con}}</span> </div><ul id="forcasts"><li ng-repeat="forcast in forcasts"><span>{{forcast.day}} <br> {{forcast.high}}&deg;/{{forcast.low}} </span></li></ul><div class="clear"></div></div> '
               
      }

});