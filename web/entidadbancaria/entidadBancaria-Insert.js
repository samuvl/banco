InsertController.$inject = ['$scope', 'entidadBancariaService', '$location'];
function InsertController($scope, entidadBancariaService, $location) {
    $scope.tipo = "INSERT";
    $scope.valorboton = "Insertar";
    $scope.entidadBancaria = {};

    $scope.insertar = function () {

        var response = entidadBancariaService.insert($scope.entidadBancaria);

        response.success(function (data, status, headers, config) {
            alert("Entidad Insertada con Éxito con el nombre: " + $scope.entidadBancaria.nombre);
        });

        response.error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });
    };
    $scope.cancel = function () {
        $location.url('/');
    }

}
app.controller("InsertController", InsertController);