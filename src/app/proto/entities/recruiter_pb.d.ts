// package: recruiter
// file: entities/recruiter.proto

import * as jspb from "google-protobuf";

export class GetRequiterDashboardRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequiterDashboardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequiterDashboardRequest): GetRequiterDashboardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRequiterDashboardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequiterDashboardRequest;
  static deserializeBinaryFromReader(message: GetRequiterDashboardRequest, reader: jspb.BinaryReader): GetRequiterDashboardRequest;
}

export namespace GetRequiterDashboardRequest {
  export type AsObject = {
  }
}

export class GetRequiterDashboardResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequiterDashboardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequiterDashboardResponse): GetRequiterDashboardResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRequiterDashboardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequiterDashboardResponse;
  static deserializeBinaryFromReader(message: GetRequiterDashboardResponse, reader: jspb.BinaryReader): GetRequiterDashboardResponse;
}

export namespace GetRequiterDashboardResponse {
  export type AsObject = {
  }
}

