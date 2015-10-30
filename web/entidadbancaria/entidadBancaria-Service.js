EntidadBancariaService.$inject = ['$http'];

function EntidadBancariaService($http) {

    this.delete = function (idEntidadBancaria) {
        var response = $http({
            method: "DELETE",
            url: "../banco-api/api/entidadbancaria/" + idEntidadBancaria
        });
        return response;
    };

    this.get = function (idEntidadBancaria) {

        var response = $http({
            method: "GET",
            url: "../banco-api/api/entidadbancaria/" + idEntidadBancaria
        });
        return response;
    };

    this.insert = function (entidadBancaria) {
        var response = $http({
            method: "POST",
            url: "../banco-api/api/entidadbancaria",
            data: entidadBancaria
        });
        return response;
    };

    this.find = function () {
        var response = $http({
            method: "GET",
            url: "../banco-api/api/entidadbancaria"
        });
        return response;
    };

    this.findByNombre = function (nombre) {
        var response = $http({
            method: "GET",
            url: "../banco-api/api/entidadbancaria/?nombre=" + nombre
        });
        return response;
    };

    this.update = function (idEntidadBancaria, entidadBancaria) {
        var response = $http({
            method: "PUT",
            url: "../banco-api/api/entidadbancaria/" + idEntidadBancaria,
            data: entidadBancaria
        });
        return response;
    };

}
app.service("entidadBancariaService", EntidadBancariaService);