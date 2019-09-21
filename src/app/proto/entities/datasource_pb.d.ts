// package: datasource
// file: entities/datasource.proto

import * as jspb from "google-protobuf";

export class CreateDatasourceRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  hasDataSource(): boolean;
  clearDataSource(): void;
  getDataSource(): Datasource | undefined;
  setDataSource(value?: Datasource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasourceRequest): CreateDatasourceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDatasourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasourceRequest;
  static deserializeBinaryFromReader(message: CreateDatasourceRequest, reader: jspb.BinaryReader): CreateDatasourceRequest;
}

export namespace CreateDatasourceRequest {
  export type AsObject = {
    companyId: string,
    dataSource?: Datasource.AsObject,
  }
}

export class CreateDatasourceResponse extends jspb.Message {
  hasDatasourceId(): boolean;
  clearDatasourceId(): void;
  getDatasourceId(): DatasourceId | undefined;
  setDatasourceId(value?: DatasourceId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasourceResponse): CreateDatasourceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDatasourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasourceResponse;
  static deserializeBinaryFromReader(message: CreateDatasourceResponse, reader: jspb.BinaryReader): CreateDatasourceResponse;
}

export namespace CreateDatasourceResponse {
  export type AsObject = {
    datasourceId?: DatasourceId.AsObject,
  }
}

export class GetDatasourceRequest extends jspb.Message {
  getDatasourceId(): string;
  setDatasourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasourceRequest): GetDatasourceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDatasourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasourceRequest;
  static deserializeBinaryFromReader(message: GetDatasourceRequest, reader: jspb.BinaryReader): GetDatasourceRequest;
}

export namespace GetDatasourceRequest {
  export type AsObject = {
    datasourceId: string,
  }
}

export class GetDatasourceResponse extends jspb.Message {
  hasDatasource(): boolean;
  clearDatasource(): void;
  getDatasource(): Datasource | undefined;
  setDatasource(value?: Datasource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasourceResponse): GetDatasourceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDatasourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasourceResponse;
  static deserializeBinaryFromReader(message: GetDatasourceResponse, reader: jspb.BinaryReader): GetDatasourceResponse;
}

export namespace GetDatasourceResponse {
  export type AsObject = {
    datasource?: Datasource.AsObject,
  }
}

export class DatasourceId extends jspb.Message {
  getDatasourceId(): string;
  setDatasourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasourceId.AsObject;
  static toObject(includeInstance: boolean, msg: DatasourceId): DatasourceId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DatasourceId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasourceId;
  static deserializeBinaryFromReader(message: DatasourceId, reader: jspb.BinaryReader): DatasourceId;
}

export namespace DatasourceId {
  export type AsObject = {
    datasourceId: string,
  }
}

export class Datasource extends jspb.Message {
  getType(): Datasource.Type;
  setType(value: Datasource.Type): void;

  hasSourceType(): boolean;
  clearSourceType(): void;
  getSourceType(): SourceType | undefined;
  setSourceType(value?: SourceType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Datasource.AsObject;
  static toObject(includeInstance: boolean, msg: Datasource): Datasource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Datasource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Datasource;
  static deserializeBinaryFromReader(message: Datasource, reader: jspb.BinaryReader): Datasource;
}

export namespace Datasource {
  export type AsObject = {
    type: Datasource.Type,
    sourceType?: SourceType.AsObject,
  }

  export enum Type {
    UNKNOWN = 0,
    CANDIDATE = 1,
    JOB = 2,
  }
}

export class SourceType extends jspb.Message {
  hasDb(): boolean;
  clearDb(): void;
  getDb(): SourceTypeDB | undefined;
  setDb(value?: SourceTypeDB): void;

  hasApi(): boolean;
  clearApi(): void;
  getApi(): SourceTypeAPI | undefined;
  setApi(value?: SourceTypeAPI): void;

  getTypeCase(): SourceType.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceType.AsObject;
  static toObject(includeInstance: boolean, msg: SourceType): SourceType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SourceType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceType;
  static deserializeBinaryFromReader(message: SourceType, reader: jspb.BinaryReader): SourceType;
}

export namespace SourceType {
  export type AsObject = {
    db?: SourceTypeDB.AsObject,
    api?: SourceTypeAPI.AsObject,
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    DB = 1,
    API = 2,
  }
}

export class SourceTypeDB extends jspb.Message {
  hasDataSourceConnection(): boolean;
  clearDataSourceConnection(): void;
  getDataSourceConnection(): DataSourceConnection | undefined;
  setDataSourceConnection(value?: DataSourceConnection): void;

  getQueryString(): string;
  setQueryString(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceTypeDB.AsObject;
  static toObject(includeInstance: boolean, msg: SourceTypeDB): SourceTypeDB.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SourceTypeDB, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceTypeDB;
  static deserializeBinaryFromReader(message: SourceTypeDB, reader: jspb.BinaryReader): SourceTypeDB;
}

export namespace SourceTypeDB {
  export type AsObject = {
    dataSourceConnection?: DataSourceConnection.AsObject,
    queryString: string,
  }
}

export class SourceTypeAPI extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceTypeAPI.AsObject;
  static toObject(includeInstance: boolean, msg: SourceTypeAPI): SourceTypeAPI.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SourceTypeAPI, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceTypeAPI;
  static deserializeBinaryFromReader(message: SourceTypeAPI, reader: jspb.BinaryReader): SourceTypeAPI;
}

export namespace SourceTypeAPI {
  export type AsObject = {
  }
}

export class DataSourceConnection extends jspb.Message {
  hasConnection(): boolean;
  clearConnection(): void;
  getConnection(): Connection | undefined;
  setConnection(value?: Connection): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceConnection.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceConnection): DataSourceConnection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataSourceConnection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceConnection;
  static deserializeBinaryFromReader(message: DataSourceConnection, reader: jspb.BinaryReader): DataSourceConnection;
}

export namespace DataSourceConnection {
  export type AsObject = {
    connection?: Connection.AsObject,
  }
}

export class Connection extends jspb.Message {
  hasFileConnection(): boolean;
  clearFileConnection(): void;
  getFileConnection(): FileConnection | undefined;
  setFileConnection(value?: FileConnection): void;

  hasCockroachDbConnection(): boolean;
  clearCockroachDbConnection(): void;
  getCockroachDbConnection(): CockroachDBConnection | undefined;
  setCockroachDbConnection(value?: CockroachDBConnection): void;

  hasGenericSqlConnection(): boolean;
  clearGenericSqlConnection(): void;
  getGenericSqlConnection(): GenericSQLConnection | undefined;
  setGenericSqlConnection(value?: GenericSQLConnection): void;

  getTypeCase(): Connection.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Connection.AsObject;
  static toObject(includeInstance: boolean, msg: Connection): Connection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Connection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Connection;
  static deserializeBinaryFromReader(message: Connection, reader: jspb.BinaryReader): Connection;
}

export namespace Connection {
  export type AsObject = {
    fileConnection?: FileConnection.AsObject,
    cockroachDbConnection?: CockroachDBConnection.AsObject,
    genericSqlConnection?: GenericSQLConnection.AsObject,
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    FILE_CONNECTION = 1,
    COCKROACH_DB_CONNECTION = 2,
    GENERIC_SQL_CONNECTION = 3,
  }
}

export class FileConnection extends jspb.Message {
  getUri(): string;
  setUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileConnection.AsObject;
  static toObject(includeInstance: boolean, msg: FileConnection): FileConnection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileConnection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileConnection;
  static deserializeBinaryFromReader(message: FileConnection, reader: jspb.BinaryReader): FileConnection;
}

export namespace FileConnection {
  export type AsObject = {
    uri: string,
  }
}

export class CockroachDBConnection extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CockroachDBConnection.AsObject;
  static toObject(includeInstance: boolean, msg: CockroachDBConnection): CockroachDBConnection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CockroachDBConnection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CockroachDBConnection;
  static deserializeBinaryFromReader(message: CockroachDBConnection, reader: jspb.BinaryReader): CockroachDBConnection;
}

export namespace CockroachDBConnection {
  export type AsObject = {
  }
}

export class GenericSQLConnection extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenericSQLConnection.AsObject;
  static toObject(includeInstance: boolean, msg: GenericSQLConnection): GenericSQLConnection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenericSQLConnection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenericSQLConnection;
  static deserializeBinaryFromReader(message: GenericSQLConnection, reader: jspb.BinaryReader): GenericSQLConnection;
}

export namespace GenericSQLConnection {
  export type AsObject = {
  }
}

