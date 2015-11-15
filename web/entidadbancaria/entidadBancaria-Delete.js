DeleteController.$inject = ['$scope', '$routeParams', 'entidadBancariaService', '$location'];

function DeleteController($scope, $routeParams, entidadBancariaService, $location) {
    $scope.entidadBancaria = {};
    $scope.idEntidadBancaria = $routeParams.idEntidadBancaria;
    $scope.tipo = "DELETE";
    $scope.valorboton = "Borrar";

    var response = entidadBancariaService.get($routeParams.idEntidadBancaria);
        response.success(function (data, status, headers, config) {
            $scope.entidadBancaria = data;
        });

        response.error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });

    $scope.ok = function () {

        var response = entidadBancariaService.delete($routeParams.idEntidadBancaria);

        response.success(function (data, status, headers, config) {
            alert("Borrado Con Éxito");
        });
        response.error(function (data, status, headers, config) {
            alert("Error Borrando la entidad:  " + status);
        });
    };

    $scope.cancel = function () {
        $location.url('/find');
    };
}

app.controller("DeleteController", DeleteController);
