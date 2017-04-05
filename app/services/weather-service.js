app.factory('postService',['$http','$q',function($http,$q){

               return {

                    submitData:function(url,data,method){
					   
                        if(!angular.isDefined(method))
                        {
                        	method = 'POST';
                        }

                        var deferred = $q.defer();

                        $http({
                        	url:url,
                        	method:method,
                        	data:data
                        }).then(function(data,status){
                              deferred.resolve(data);  
                        },
                           function(data,status){
                             deferred.reject(data);
                           }
                        );

                        return deferred.promise;

                    }

               };    


}]);