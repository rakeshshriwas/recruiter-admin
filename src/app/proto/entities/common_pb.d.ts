// package: common
// file: entities/common.proto

import * as jspb from "google-protobuf";

export class Education extends jspb.Message {
  getStartDate(): string;
  setStartDate(value: string): void;

  getEndDate(): string;
  setEndDate(value: string): void;

  getDegreeName(): string;
  setDegreeName(value: string): void;

  getCollegeName(): string;
  setCollegeName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Education.AsObject;
  static toObject(includeInstance: boolean, msg: Education): Education.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Education, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Education;
  static deserializeBinaryFromReader(message: Education, reader: jspb.BinaryReader): Education;
}

export namespace Education {
  export type AsObject = {
    startDate: string,
    endDate: string,
    degreeName: string,
    collegeName: string,
  }
}

export class Address extends jspb.Message {
  getAdress(): string;
  setAdress(value: string): void;

  getState(): string;
  setState(value: string): void;

  getZipcode(): string;
  setZipcode(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    adress: string,
    state: string,
    zipcode: string,
    country: string,
  }
}

