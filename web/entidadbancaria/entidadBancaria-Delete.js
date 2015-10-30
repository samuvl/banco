DeleteController.$inject = ['$scope', '$routeParams', 'entidadBancariaService'];

function DeleteController($scope, $routeParams, entidadBancariaService) {
    $scope.identidad = $routeParams.idEntidadBancaria;
    $scope.tipo = "DELETE";
    $scope.borrar = function () {

        var response = entidadBancariaService.delete($routeParams.idEntidadBancaria);

        response.success(function (data, status, headers, config) {
            alert("Borrado Con Éxito");
        });
        response.error(function (data, status, headers, config) {
            alert("Error Borrando la entidad:  " + status);
        });
    };
    /*$scope.cancelarBorrado = function () {
        alert("Ha cancelado la eliminación de: " + $routeParams.idEntidadBancaria);
    };*/
}

app.controller("DeleteController", DeleteController);
