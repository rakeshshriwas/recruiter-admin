// package: job
// file: entities/job.proto

import * as jspb from "google-protobuf";
import * as entities_common_pb from "../entities/common_pb";

export class Job extends jspb.Message {
  hasJobDetail(): boolean;
  clearJobDetail(): void;
  getJobDetail(): JobDetail | undefined;
  setJobDetail(value?: JobDetail): void;

  getTextJob(): string;
  setTextJob(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    jobDetail?: JobDetail.AsObject,
    textJob: string,
  }
}

export class JobDetail extends jspb.Message {
  hasEducation(): boolean;
  clearEducation(): void;
  getEducation(): entities_common_pb.Education | undefined;
  setEducation(value?: entities_common_pb.Education): void;

  getExperienceYears(): number;
  setExperienceYears(value: number): void;

  clearSkillsList(): void;
  getSkillsList(): Array<string>;
  setSkillsList(value: Array<string>): void;
  addSkills(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobDetail.AsObject;
  static toObject(includeInstance: boolean, msg: JobDetail): JobDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobDetail;
  static deserializeBinaryFromReader(message: JobDetail, reader: jspb.BinaryReader): JobDetail;
}

export namespace JobDetail {
  export type AsObject = {
    education?: entities_common_pb.Education.AsObject,
    experienceYears: number,
    skillsList: Array<string>,
  }
}

