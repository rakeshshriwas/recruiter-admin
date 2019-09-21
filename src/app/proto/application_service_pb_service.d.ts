// package: app
// file: application_service.proto

import * as application_service_pb from "./application_service_pb";
import * as entities_user_pb from "./entities/user_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AppServicesayHello = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof application_service_pb.HelloRequest;
  readonly responseType: typeof application_service_pb.HelloReply;
};

type AppServicecreateUser = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof entities_user_pb.CreateUserRequest;
  readonly responseType: typeof entities_user_pb.CreateUserResponse;
};

type AppServiceloginUser = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof entities_user_pb.LoginUserRequest;
  readonly responseType: typeof entities_user_pb.LoginUserResponse;
};

type AppServicegetRecruiterDashboard = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof application_service_pb.GetRecruiterDashboardRequest;
  readonly responseType: typeof application_service_pb.GetRecruiterDashboardResponse;
};

export class AppService {
  static readonly serviceName: string;
  static readonly sayHello: AppServicesayHello;
  static readonly createUser: AppServicecreateUser;
  static readonly loginUser: AppServiceloginUser;
  static readonly getRecruiterDashboard: AppServicegetRecruiterDashboard;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AppServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  sayHello(
    requestMessage: application_service_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: application_service_pb.HelloReply|null) => void
  ): UnaryResponse;
  sayHello(
    requestMessage: application_service_pb.HelloRequest,
    callback: (error: ServiceError|null, responseMessage: application_service_pb.HelloReply|null) => void
  ): UnaryResponse;
  createUser(
    requestMessage: entities_user_pb.CreateUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: entities_user_pb.CreateUserResponse|null) => void
  ): UnaryResponse;
  createUser(
    requestMessage: entities_user_pb.CreateUserRequest,
    callback: (error: ServiceError|null, responseMessage: entities_user_pb.CreateUserResponse|null) => void
  ): UnaryResponse;
  loginUser(
    requestMessage: entities_user_pb.LoginUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: entities_user_pb.LoginUserResponse|null) => void
  ): UnaryResponse;
  loginUser(
    requestMessage: entities_user_pb.LoginUserRequest,
    callback: (error: ServiceError|null, responseMessage: entities_user_pb.LoginUserResponse|null) => void
  ): UnaryResponse;
  getRecruiterDashboard(
    requestMessage: application_service_pb.GetRecruiterDashboardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: application_service_pb.GetRecruiterDashboardResponse|null) => void
  ): UnaryResponse;
  getRecruiterDashboard(
    requestMessage: application_service_pb.GetRecruiterDashboardRequest,
    callback: (error: ServiceError|null, responseMessage: application_service_pb.GetRecruiterDashboardResponse|null) => void
  ): UnaryResponse;
}

