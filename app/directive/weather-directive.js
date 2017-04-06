//Directive
app.directive("weatherWidget",function(){

      return {
               restrict:'EA',
               template:'<div class="widget"><div class="location">{{loc}}</div><div class="weather"><span class="temparature">{{temp}}</span><span class="deg">&deg;</span><img ng-src="{{img}}"  class="weather-img" ><span class="condition">{{con}}</span> </div><ul class="forcasts"><li ng-repeat="forcast in forcasts"><span>{{forcast.day}} <br> {{forcast.high}}&deg;/{{forcast.low}} </span></li></ul><div class="clear"></div></div> '
               
      }

});