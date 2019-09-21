// package: app
// file: application_service.proto

import * as jspb from "google-protobuf";
import * as entities_user_pb from "./entities/user_pb";

export class HelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    name: string,
  }
}

export class HelloReply extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloReply.AsObject;
  static toObject(includeInstance: boolean, msg: HelloReply): HelloReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloReply;
  static deserializeBinaryFromReader(message: HelloReply, reader: jspb.BinaryReader): HelloReply;
}

export namespace HelloReply {
  export type AsObject = {
    message: string,
  }
}

export class GetRecruiterDashboardRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecruiterDashboardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecruiterDashboardRequest): GetRecruiterDashboardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRecruiterDashboardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecruiterDashboardRequest;
  static deserializeBinaryFromReader(message: GetRecruiterDashboardRequest, reader: jspb.BinaryReader): GetRecruiterDashboardRequest;
}

export namespace GetRecruiterDashboardRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetRecruiterDashboardResponse extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  clearJobSimilarityList(): void;
  getJobSimilarityList(): Array<JobSimilarity>;
  setJobSimilarityList(value: Array<JobSimilarity>): void;
  addJobSimilarity(value?: JobSimilarity, index?: number): JobSimilarity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecruiterDashboardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecruiterDashboardResponse): GetRecruiterDashboardResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRecruiterDashboardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecruiterDashboardResponse;
  static deserializeBinaryFromReader(message: GetRecruiterDashboardResponse, reader: jspb.BinaryReader): GetRecruiterDashboardResponse;
}

export namespace GetRecruiterDashboardResponse {
  export type AsObject = {
    companyId: string,
    jobSimilarityList: Array<JobSimilarity.AsObject>,
  }
}

export class JobSimilarity extends jspb.Message {
  hasJobInfo(): boolean;
  clearJobInfo(): void;
  getJobInfo(): JobInfo | undefined;
  setJobInfo(value?: JobInfo): void;

  clearCandidateInfoList(): void;
  getCandidateInfoList(): Array<CandidateInfo>;
  setCandidateInfoList(value: Array<CandidateInfo>): void;
  addCandidateInfo(value?: CandidateInfo, index?: number): CandidateInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobSimilarity.AsObject;
  static toObject(includeInstance: boolean, msg: JobSimilarity): JobSimilarity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobSimilarity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobSimilarity;
  static deserializeBinaryFromReader(message: JobSimilarity, reader: jspb.BinaryReader): JobSimilarity;
}

export namespace JobSimilarity {
  export type AsObject = {
    jobInfo?: JobInfo.AsObject,
    candidateInfoList: Array<CandidateInfo.AsObject>,
  }
}

export class JobInfo extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  getJobDescription(): string;
  setJobDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobInfo.AsObject;
  static toObject(includeInstance: boolean, msg: JobInfo): JobInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobInfo;
  static deserializeBinaryFromReader(message: JobInfo, reader: jspb.BinaryReader): JobInfo;
}

export namespace JobInfo {
  export type AsObject = {
    jobId: string,
    jobDescription: string,
  }
}

export class CandidateInfo extends jspb.Message {
  getCandidateId(): string;
  setCandidateId(value: string): void;

  getCandidateDescription(): string;
  setCandidateDescription(value: string): void;

  clearSimilarityList(): void;
  getSimilarityList(): Array<Similarity>;
  setSimilarityList(value: Array<Similarity>): void;
  addSimilarity(value?: Similarity, index?: number): Similarity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandidateInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CandidateInfo): CandidateInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CandidateInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandidateInfo;
  static deserializeBinaryFromReader(message: CandidateInfo, reader: jspb.BinaryReader): CandidateInfo;
}

export namespace CandidateInfo {
  export type AsObject = {
    candidateId: string,
    candidateDescription: string,
    similarityList: Array<Similarity.AsObject>,
  }
}

export class Similarity extends jspb.Message {
  getJobFeatureType(): Similarity.FeatureType;
  setJobFeatureType(value: Similarity.FeatureType): void;

  getCandidateFeatureType(): Similarity.FeatureType;
  setCandidateFeatureType(value: Similarity.FeatureType): void;

  getSimilarity(): number;
  setSimilarity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Similarity.AsObject;
  static toObject(includeInstance: boolean, msg: Similarity): Similarity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Similarity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Similarity;
  static deserializeBinaryFromReader(message: Similarity, reader: jspb.BinaryReader): Similarity;
}

export namespace Similarity {
  export type AsObject = {
    jobFeatureType: Similarity.FeatureType,
    candidateFeatureType: Similarity.FeatureType,
    similarity: number,
  }

  export enum FeatureType {
    UNKNOWN = 0,
    CNP = 1,
    RNP = 2,
  }
}

