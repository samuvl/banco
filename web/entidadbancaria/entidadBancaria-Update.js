UpdateController.$inject = ['$scope', '$routeParams' ,'entidadBancariaService'];
function UpdateController($scope, $routeParams, entidadBancariaService) {
    $scope.tipo = "UPDATE";
    $scope.entidadBancaria = {};
    $scope.entidadBancaria.idEntidadBancaria = $routeParams.idEntidadBancaria;

    $scope.actualizar = function () {
        
        var response = entidadBancariaService.update($scope.entidadBancaria.idEntidadBancaria, $scope.entidadBancaria);
        
        
        response.success(function (data, status, headers, config) {
            alert("Actualizado con Éxito la Entidad Bancaria: " + $scope.entidadBancaria.idEntidadBancaria);
        });
        
        response.error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });
    };
}
app.controller("UpdateController", UpdateController);
