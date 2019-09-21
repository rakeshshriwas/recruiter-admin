// package: admin
// file: admin_service.proto

import * as admin_service_pb from "./admin_service_pb";
import * as entities_company_pb from "./entities/company_pb";
import * as entities_datasource_pb from "./entities/datasource_pb";
import * as entities_user_pb from "./entities/user_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AdminServicecreateCompany = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof entities_company_pb.CreateCompanyRequest;
  readonly responseType: typeof entities_company_pb.CreateCompanyResponse;
};

type AdminServicegetCompany = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof entities_company_pb.GetCompanyRequest;
  readonly responseType: typeof entities_company_pb.GetCompanyResponse;
};

type AdminServicecreateDatasource = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof entities_datasource_pb.CreateDatasourceRequest;
  readonly responseType: typeof entities_datasource_pb.CreateDatasourceResponse;
};

type AdminServicegetDatasource = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof entities_datasource_pb.GetDatasourceRequest;
  readonly responseType: typeof entities_datasource_pb.GetDatasourceResponse;
};

type AdminServicecreateCompanyUser = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof entities_user_pb.CreateUserRequest;
  readonly responseType: typeof entities_user_pb.CreateUserResponse;
};

type AdminServicegetCompanyUsers = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof entities_user_pb.GetUserRequest;
  readonly responseType: typeof entities_user_pb.GetUserResponse;
};

export class AdminService {
  static readonly serviceName: string;
  static readonly createCompany: AdminServicecreateCompany;
  static readonly getCompany: AdminServicegetCompany;
  static readonly createDatasource: AdminServicecreateDatasource;
  static readonly getDatasource: AdminServicegetDatasource;
  static readonly createCompanyUser: AdminServicecreateCompanyUser;
  static readonly getCompanyUsers: AdminServicegetCompanyUsers;
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

export class AdminServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createCompany(
    requestMessage: entities_company_pb.CreateCompanyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: entities_company_pb.CreateCompanyResponse|null) => void
  ): UnaryResponse;
  createCompany(
    requestMessage: entities_company_pb.CreateCompanyRequest,
    callback: (error: ServiceError|null, responseMessage: entities_company_pb.CreateCompanyResponse|null) => void
  ): UnaryResponse;
  getCompany(
    requestMessage: entities_company_pb.GetCompanyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: entities_company_pb.GetCompanyResponse|null) => void
  ): UnaryResponse;
  getCompany(
    requestMessage: entities_company_pb.GetCompanyRequest,
    callback: (error: ServiceError|null, responseMessage: entities_company_pb.GetCompanyResponse|null) => void
  ): UnaryResponse;
  createDatasource(
    requestMessage: entities_datasource_pb.CreateDatasourceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: entities_datasource_pb.CreateDatasourceResponse|null) => void
  ): UnaryResponse;
  createDatasource(
    requestMessage: entities_datasource_pb.CreateDatasourceRequest,
    callback: (error: ServiceError|null, responseMessage: entities_datasource_pb.CreateDatasourceResponse|null) => void
  ): UnaryResponse;
  getDatasource(
    requestMessage: entities_datasource_pb.GetDatasourceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: entities_datasource_pb.GetDatasourceResponse|null) => void
  ): UnaryResponse;
  getDatasource(
    requestMessage: entities_datasource_pb.GetDatasourceRequest,
    callback: (error: ServiceError|null, responseMessage: entities_datasource_pb.GetDatasourceResponse|null) => void
  ): UnaryResponse;
  createCompanyUser(
    requestMessage: entities_user_pb.CreateUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: entities_user_pb.CreateUserResponse|null) => void
  ): UnaryResponse;
  createCompanyUser(
    requestMessage: entities_user_pb.CreateUserRequest,
    callback: (error: ServiceError|null, responseMessage: entities_user_pb.CreateUserResponse|null) => void
  ): UnaryResponse;
  getCompanyUsers(
    requestMessage: entities_user_pb.GetUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: entities_user_pb.GetUserResponse|null) => void
  ): UnaryResponse;
  getCompanyUsers(
    requestMessage: entities_user_pb.GetUserRequest,
    callback: (error: ServiceError|null, responseMessage: entities_user_pb.GetUserResponse|null) => void
  ): UnaryResponse;
}

