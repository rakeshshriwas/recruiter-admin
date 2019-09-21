// package: app
// file: application_service.proto

var application_service_pb = require("./application_service_pb");
var entities_user_pb = require("./entities/user_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AppService = (function () {
  function AppService() {}
  AppService.serviceName = "app.AppService";
  return AppService;
}());

AppService.sayHello = {
  methodName: "sayHello",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: application_service_pb.HelloRequest,
  responseType: application_service_pb.HelloReply
};

AppService.createUser = {
  methodName: "createUser",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: entities_user_pb.CreateUserRequest,
  responseType: entities_user_pb.CreateUserResponse
};

AppService.loginUser = {
  methodName: "loginUser",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: entities_user_pb.LoginUserRequest,
  responseType: entities_user_pb.LoginUserResponse
};

AppService.getRecruiterDashboard = {
  methodName: "getRecruiterDashboard",
  service: AppService,
  requestStream: false,
  responseStream: false,
  requestType: application_service_pb.GetRecruiterDashboardRequest,
  responseType: application_service_pb.GetRecruiterDashboardResponse
};

exports.AppService = AppService;

function AppServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AppServiceClient.prototype.sayHello = function sayHello(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.sayHello, {
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

AppServiceClient.prototype.createUser = function createUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.createUser, {
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

AppServiceClient.prototype.loginUser = function loginUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.loginUser, {
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

AppServiceClient.prototype.getRecruiterDashboard = function getRecruiterDashboard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppService.getRecruiterDashboard, {
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

exports.AppServiceClient = AppServiceClient;

