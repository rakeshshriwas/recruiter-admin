// package: candidate
// file: entities/candidate.proto

import * as jspb from "google-protobuf";
import * as entities_common_pb from "../entities/common_pb";
import * as entities_user_pb from "../entities/user_pb";

export class Candidate extends jspb.Message {
  hasCandidateDetail(): boolean;
  clearCandidateDetail(): void;
  getCandidateDetail(): CandidateDetail | undefined;
  setCandidateDetail(value?: CandidateDetail): void;

  getTextResume(): string;
  setTextResume(value: string): void;

  clearCompanyIdsList(): void;
  getCompanyIdsList(): Array<string>;
  setCompanyIdsList(value: Array<string>): void;
  addCompanyIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Candidate.AsObject;
  static toObject(includeInstance: boolean, msg: Candidate): Candidate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Candidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Candidate;
  static deserializeBinaryFromReader(message: Candidate, reader: jspb.BinaryReader): Candidate;
}

export namespace Candidate {
  export type AsObject = {
    candidateDetail?: CandidateDetail.AsObject,
    textResume: string,
    companyIdsList: Array<string>,
  }
}

export class CandidateDetail extends jspb.Message {
  hasUserDetail(): boolean;
  clearUserDetail(): void;
  getUserDetail(): entities_user_pb.UserDetail | undefined;
  setUserDetail(value?: entities_user_pb.UserDetail): void;

  clearExperienceList(): void;
  getExperienceList(): Array<Experience>;
  setExperienceList(value: Array<Experience>): void;
  addExperience(value?: Experience, index?: number): Experience;

  clearEducationList(): void;
  getEducationList(): Array<entities_common_pb.Education>;
  setEducationList(value: Array<entities_common_pb.Education>): void;
  addEducation(value?: entities_common_pb.Education, index?: number): entities_common_pb.Education;

  clearNotesList(): void;
  getNotesList(): Array<Notes>;
  setNotesList(value: Array<Notes>): void;
  addNotes(value?: Notes, index?: number): Notes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandidateDetail.AsObject;
  static toObject(includeInstance: boolean, msg: CandidateDetail): CandidateDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CandidateDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandidateDetail;
  static deserializeBinaryFromReader(message: CandidateDetail, reader: jspb.BinaryReader): CandidateDetail;
}

export namespace CandidateDetail {
  export type AsObject = {
    userDetail?: entities_user_pb.UserDetail.AsObject,
    experienceList: Array<Experience.AsObject>,
    educationList: Array<entities_common_pb.Education.AsObject>,
    notesList: Array<Notes.AsObject>,
  }
}

export class Notes extends jspb.Message {
  clearNotesList(): void;
  getNotesList(): Array<string>;
  setNotesList(value: Array<string>): void;
  addNotes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notes.AsObject;
  static toObject(includeInstance: boolean, msg: Notes): Notes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Notes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notes;
  static deserializeBinaryFromReader(message: Notes, reader: jspb.BinaryReader): Notes;
}

export namespace Notes {
  export type AsObject = {
    notesList: Array<string>,
  }
}

export class Experience extends jspb.Message {
  getStartDate(): string;
  setStartDate(value: string): void;

  getEndDate(): string;
  setEndDate(value: string): void;

  getCompanyName(): string;
  setCompanyName(value: string): void;

  getDesignation(): string;
  setDesignation(value: string): void;

  getDetails(): string;
  setDetails(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Experience.AsObject;
  static toObject(includeInstance: boolean, msg: Experience): Experience.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Experience, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Experience;
  static deserializeBinaryFromReader(message: Experience, reader: jspb.BinaryReader): Experience;
}

export namespace Experience {
  export type AsObject = {
    startDate: string,
    endDate: string,
    companyName: string,
    designation: string,
    details: string,
  }
}

export class CandidateId extends jspb.Message {
  getCandidateId(): string;
  setCandidateId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandidateId.AsObject;
  static toObject(includeInstance: boolean, msg: CandidateId): CandidateId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CandidateId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandidateId;
  static deserializeBinaryFromReader(message: CandidateId, reader: jspb.BinaryReader): CandidateId;
}

export namespace CandidateId {
  export type AsObject = {
    candidateId: string,
  }
}

