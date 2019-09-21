// package: admin
// file: admin_service.proto

var admin_service_pb = require("./admin_service_pb");
var entities_company_pb = require("./entities/company_pb");
var entities_datasource_pb = require("./entities/datasource_pb");
var entities_user_pb = require("./entities/user_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AdminService = (function () {
  function AdminService() {}
  AdminService.serviceName = "admin.AdminService";
  return AdminService;
}());

AdminService.createCompany = {
  methodName: "createCompany",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: entities_company_pb.CreateCompanyRequest,
  responseType: entities_company_pb.CreateCompanyResponse
};

AdminService.getCompany = {
  methodName: "getCompany",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: entities_company_pb.GetCompanyRequest,
  responseType: entities_company_pb.GetCompanyResponse
};

AdminService.createDatasource = {
  methodName: "createDatasource",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: entities_datasource_pb.CreateDatasourceRequest,
  responseType: entities_datasource_pb.CreateDatasourceResponse
};

AdminService.getDatasource = {
  methodName: "getDatasource",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: entities_datasource_pb.GetDatasourceRequest,
  responseType: entities_datasource_pb.GetDatasourceResponse
};

AdminService.createCompanyUser = {
  methodName: "createCompanyUser",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: entities_user_pb.CreateUserRequest,
  responseType: entities_user_pb.CreateUserResponse
};

AdminService.getCompanyUsers = {
  methodName: "getCompanyUsers",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: entities_user_pb.GetUserRequest,
  responseType: entities_user_pb.GetUserResponse
};

exports.AdminService = AdminService;

function AdminServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AdminServiceClient.prototype.createCompany = function createCompany(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.createCompany, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AdminServiceClient.prototype.getCompany = function getCompany(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.getCompany, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AdminServiceClient.prototype.createDatasource = function createDatasource(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.createDatasource, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AdminServiceClient.prototype.getDatasource = function getDatasource(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.getDatasource, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AdminServiceClient.prototype.createCompanyUser = function createCompanyUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.createCompanyUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AdminServiceClient.prototype.getCompanyUsers = function getCompanyUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.getCompanyUsers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.AdminServiceClient = AdminServiceClient;

