app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/find/', {
            templateUrl: "entidadbancaria/entidadBancaria-List.html",
            controller: "FindController"
        });
         
        $routeProvider.when('/get/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/entidadBancaria-Detail.html",
            controller: "GetController"
        });

        $routeProvider.when('/delete/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/entidadBancaria-Delete.html",
            controller: "DeleteController"
        });

        $routeProvider.when('/insert/', {
            templateUrl: "entidadbancaria/entidadBancaria-Insert.html",
            controller: "InsertController"
        });

        $routeProvider.when('/update/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/entidadBancaria-Update.html",
            controller: "UpdateController"
        });
    }]);