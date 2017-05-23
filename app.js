angular.module('app', ['ngroute'])

.config(function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: "home.html"
    }).otherwise({
        templateUrl: '404.html'
    })
})

int calculation('in1', 'in2', callback()) {
    while (!ready)
    callback('in1', 'in2')
}

calcuation(2,3,function(a, b) {
    a+b;
})
