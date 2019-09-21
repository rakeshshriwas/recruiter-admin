// package: company
// file: entities/company.proto

import * as jspb from "google-protobuf";
import * as entities_common_pb from "../entities/common_pb";
import * as entities_user_pb from "../entities/user_pb";

export class CreateCompanyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): entities_common_pb.Address | undefined;
  setAddress(value?: entities_common_pb.Address): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCompanyRequest): CreateCompanyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCompanyRequest;
  static deserializeBinaryFromReader(message: CreateCompanyRequest, reader: jspb.BinaryReader): CreateCompanyRequest;
}

export namespace CreateCompanyRequest {
  export type AsObject = {
    name: string,
    address?: entities_common_pb.Address.AsObject,
  }
}

export class CreateCompanyResponse extends jspb.Message {
  hasCompanyId(): boolean;
  clearCompanyId(): void;
  getCompanyId(): CompanyId | undefined;
  setCompanyId(value?: CompanyId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCompanyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCompanyResponse): CreateCompanyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCompanyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCompanyResponse;
  static deserializeBinaryFromReader(message: CreateCompanyResponse, reader: jspb.BinaryReader): CreateCompanyResponse;
}

export namespace CreateCompanyResponse {
  export type AsObject = {
    companyId?: CompanyId.AsObject,
  }
}

export class GetCompanyRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompanyRequest): GetCompanyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompanyRequest;
  static deserializeBinaryFromReader(message: GetCompanyRequest, reader: jspb.BinaryReader): GetCompanyRequest;
}

export namespace GetCompanyRequest {
  export type AsObject = {
    companyId: string,
  }
}

export class GetCompanyResponse extends jspb.Message {
  hasCompany(): boolean;
  clearCompany(): void;
  getCompany(): Company | undefined;
  setCompany(value?: Company): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompanyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompanyResponse): GetCompanyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCompanyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompanyResponse;
  static deserializeBinaryFromReader(message: GetCompanyResponse, reader: jspb.BinaryReader): GetCompanyResponse;
}

export namespace GetCompanyResponse {
  export type AsObject = {
    company?: Company.AsObject,
  }
}

export class Company extends jspb.Message {
  hasCompanyDetail(): boolean;
  clearCompanyDetail(): void;
  getCompanyDetail(): CompanyDetail | undefined;
  setCompanyDetail(value?: CompanyDetail): void;

  hasCompanyContacts(): boolean;
  clearCompanyContacts(): void;
  getCompanyContacts(): CompanyContacts | undefined;
  setCompanyContacts(value?: CompanyContacts): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Company.AsObject;
  static toObject(includeInstance: boolean, msg: Company): Company.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Company, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Company;
  static deserializeBinaryFromReader(message: Company, reader: jspb.BinaryReader): Company;
}

export namespace Company {
  export type AsObject = {
    companyDetail?: CompanyDetail.AsObject,
    companyContacts?: CompanyContacts.AsObject,
  }
}

export class CompanyDetail extends jspb.Message {
  getCompanyName(): string;
  setCompanyName(value: string): void;

  getCompanyAddress(): string;
  setCompanyAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompanyDetail.AsObject;
  static toObject(includeInstance: boolean, msg: CompanyDetail): CompanyDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompanyDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompanyDetail;
  static deserializeBinaryFromReader(message: CompanyDetail, reader: jspb.BinaryReader): CompanyDetail;
}

export namespace CompanyDetail {
  export type AsObject = {
    companyName: string,
    companyAddress: string,
  }
}

export class CompanyContacts extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<entities_user_pb.User>;
  setUsersList(value: Array<entities_user_pb.User>): void;
  addUsers(value?: entities_user_pb.User, index?: number): entities_user_pb.User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompanyContacts.AsObject;
  static toObject(includeInstance: boolean, msg: CompanyContacts): CompanyContacts.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompanyContacts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompanyContacts;
  static deserializeBinaryFromReader(message: CompanyContacts, reader: jspb.BinaryReader): CompanyContacts;
}

export namespace CompanyContacts {
  export type AsObject = {
    usersList: Array<entities_user_pb.User.AsObject>,
  }
}

export class CompanyId extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompanyId.AsObject;
  static toObject(includeInstance: boolean, msg: CompanyId): CompanyId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompanyId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompanyId;
  static deserializeBinaryFromReader(message: CompanyId, reader: jspb.BinaryReader): CompanyId;
}

export namespace CompanyId {
  export type AsObject = {
    companyId: string,
  }
}

