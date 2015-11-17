//UsuarioService.$inject = ['$http'];
//
//function UsuarioService($http) {
//
//    this.get = function (idUsuario) {
//        var response = $http({
//            method: "GET",
//            url: "../banco-api/api/usuario" + idUsuario
//        });
//        return response;
//    };
//
//    this.insert = function (usuario) {
//        var response = $http({
//            method: "POST",
//            url: "../banco-api/api/usuario",
//            data: usuario
//        }
//        );
//        return response;
//    };
//
//    this.update = function (usuario) {
//        var response = $http({
//            method: "PUT",
//            url: "../banco-api/api/usuario" + usuario.idUsuario,
//            data: usuario
//        });
//        return response;
//    };
//
//    this.delete = function (idUsuario) {
//        var response = $http({
//            method: "DELETE",
//            url: "../banco-api/api/usuario" + idUsuario
//        });
//        return response;
//    };
//
//    this.find = function () {
//        var response = $http({
//            method: "GET",
//            url: "../banco-api/api/usuario"
//        });
//        return response;
//    };
//
//    this.findByNombre = function (nombre) {
//        var response = $http({
//            method: "GET",
//            url: "../banco-api/api/usuario/?nombre=" + nombre
//        });
//        return response;
//    };
//
//}
//
//app.service("entidadBancariaService", EntidadBancariaService);