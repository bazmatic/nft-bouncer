// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  id: Scalars['ID'];
  asERC721?: Maybe<ERC721Contract>;
  ERC721tokens: Array<Maybe<ERC721Token>>;
  ERC721operatorOwner: Array<Maybe<ERC721Operator>>;
  ERC721operatorOperator: Array<Maybe<ERC721Operator>>;
  ERC721transferFromEvent: Array<Maybe<ERC721Transfer>>;
  ERC721transferToEvent: Array<Maybe<ERC721Transfer>>;
};


export type AccountERC721tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Token_filter>;
};


export type AccountERC721operatorOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Operator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Operator_filter>;
};


export type AccountERC721operatorOperatorArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Operator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Operator_filter>;
};


export type AccountERC721transferFromEventArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Transfer_filter>;
};


export type AccountERC721transferToEventArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Transfer_filter>;
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  asERC721?: InputMaybe<Scalars['String']>;
  asERC721_not?: InputMaybe<Scalars['String']>;
  asERC721_gt?: InputMaybe<Scalars['String']>;
  asERC721_lt?: InputMaybe<Scalars['String']>;
  asERC721_gte?: InputMaybe<Scalars['String']>;
  asERC721_lte?: InputMaybe<Scalars['String']>;
  asERC721_in?: InputMaybe<Array<Scalars['String']>>;
  asERC721_not_in?: InputMaybe<Array<Scalars['String']>>;
  asERC721_contains?: InputMaybe<Scalars['String']>;
  asERC721_contains_nocase?: InputMaybe<Scalars['String']>;
  asERC721_not_contains?: InputMaybe<Scalars['String']>;
  asERC721_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asERC721_starts_with?: InputMaybe<Scalars['String']>;
  asERC721_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asERC721_not_starts_with?: InputMaybe<Scalars['String']>;
  asERC721_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asERC721_ends_with?: InputMaybe<Scalars['String']>;
  asERC721_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asERC721_not_ends_with?: InputMaybe<Scalars['String']>;
  asERC721_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asERC721_?: InputMaybe<ERC721Contract_filter>;
  ERC721tokens_?: InputMaybe<ERC721Token_filter>;
  ERC721operatorOwner_?: InputMaybe<ERC721Operator_filter>;
  ERC721operatorOperator_?: InputMaybe<ERC721Operator_filter>;
  ERC721transferFromEvent_?: InputMaybe<ERC721Transfer_filter>;
  ERC721transferToEvent_?: InputMaybe<ERC721Transfer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Account_orderBy =
  | 'id'
  | 'asERC721'
  | 'ERC721tokens'
  | 'ERC721operatorOwner'
  | 'ERC721operatorOperator'
  | 'ERC721transferFromEvent'
  | 'ERC721transferToEvent';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type ERC721Contract = {
  id: Scalars['ID'];
  asAccount: Account;
  supportsMetadata?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  tokens: Array<ERC721Token>;
  operators: Array<ERC721Operator>;
  transfers: Array<ERC721Transfer>;
};


export type ERC721ContracttokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Token_filter>;
};


export type ERC721ContractoperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Operator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Operator_filter>;
};


export type ERC721ContracttransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Transfer_filter>;
};

export type ERC721Contract_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  asAccount?: InputMaybe<Scalars['String']>;
  asAccount_not?: InputMaybe<Scalars['String']>;
  asAccount_gt?: InputMaybe<Scalars['String']>;
  asAccount_lt?: InputMaybe<Scalars['String']>;
  asAccount_gte?: InputMaybe<Scalars['String']>;
  asAccount_lte?: InputMaybe<Scalars['String']>;
  asAccount_in?: InputMaybe<Array<Scalars['String']>>;
  asAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  asAccount_contains?: InputMaybe<Scalars['String']>;
  asAccount_contains_nocase?: InputMaybe<Scalars['String']>;
  asAccount_not_contains?: InputMaybe<Scalars['String']>;
  asAccount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asAccount_starts_with?: InputMaybe<Scalars['String']>;
  asAccount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asAccount_not_starts_with?: InputMaybe<Scalars['String']>;
  asAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asAccount_ends_with?: InputMaybe<Scalars['String']>;
  asAccount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asAccount_not_ends_with?: InputMaybe<Scalars['String']>;
  asAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asAccount_?: InputMaybe<Account_filter>;
  supportsMetadata?: InputMaybe<Scalars['Boolean']>;
  supportsMetadata_not?: InputMaybe<Scalars['Boolean']>;
  supportsMetadata_in?: InputMaybe<Array<Scalars['Boolean']>>;
  supportsMetadata_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokens_?: InputMaybe<ERC721Token_filter>;
  operators_?: InputMaybe<ERC721Operator_filter>;
  transfers_?: InputMaybe<ERC721Transfer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ERC721Contract_orderBy =
  | 'id'
  | 'asAccount'
  | 'supportsMetadata'
  | 'name'
  | 'symbol'
  | 'tokens'
  | 'operators'
  | 'transfers';

export type ERC721Operator = {
  id: Scalars['ID'];
  contract: ERC721Contract;
  owner: Account;
  operator: Account;
  approved: Scalars['Boolean'];
};

export type ERC721Operator_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<ERC721Contract_filter>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  operator?: InputMaybe<Scalars['String']>;
  operator_not?: InputMaybe<Scalars['String']>;
  operator_gt?: InputMaybe<Scalars['String']>;
  operator_lt?: InputMaybe<Scalars['String']>;
  operator_gte?: InputMaybe<Scalars['String']>;
  operator_lte?: InputMaybe<Scalars['String']>;
  operator_in?: InputMaybe<Array<Scalars['String']>>;
  operator_not_in?: InputMaybe<Array<Scalars['String']>>;
  operator_contains?: InputMaybe<Scalars['String']>;
  operator_contains_nocase?: InputMaybe<Scalars['String']>;
  operator_not_contains?: InputMaybe<Scalars['String']>;
  operator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  operator_starts_with?: InputMaybe<Scalars['String']>;
  operator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  operator_not_starts_with?: InputMaybe<Scalars['String']>;
  operator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  operator_ends_with?: InputMaybe<Scalars['String']>;
  operator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  operator_not_ends_with?: InputMaybe<Scalars['String']>;
  operator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  operator_?: InputMaybe<Account_filter>;
  approved?: InputMaybe<Scalars['Boolean']>;
  approved_not?: InputMaybe<Scalars['Boolean']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ERC721Operator_orderBy =
  | 'id'
  | 'contract'
  | 'owner'
  | 'operator'
  | 'approved';

export type ERC721Token = {
  id: Scalars['ID'];
  contract: ERC721Contract;
  identifier: Scalars['BigInt'];
  owner: Account;
  approval: Account;
  uri?: Maybe<Scalars['String']>;
  transfers: Array<ERC721Transfer>;
};


export type ERC721TokentransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Transfer_filter>;
};

export type ERC721Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<ERC721Contract_filter>;
  identifier?: InputMaybe<Scalars['BigInt']>;
  identifier_not?: InputMaybe<Scalars['BigInt']>;
  identifier_gt?: InputMaybe<Scalars['BigInt']>;
  identifier_lt?: InputMaybe<Scalars['BigInt']>;
  identifier_gte?: InputMaybe<Scalars['BigInt']>;
  identifier_lte?: InputMaybe<Scalars['BigInt']>;
  identifier_in?: InputMaybe<Array<Scalars['BigInt']>>;
  identifier_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  approval?: InputMaybe<Scalars['String']>;
  approval_not?: InputMaybe<Scalars['String']>;
  approval_gt?: InputMaybe<Scalars['String']>;
  approval_lt?: InputMaybe<Scalars['String']>;
  approval_gte?: InputMaybe<Scalars['String']>;
  approval_lte?: InputMaybe<Scalars['String']>;
  approval_in?: InputMaybe<Array<Scalars['String']>>;
  approval_not_in?: InputMaybe<Array<Scalars['String']>>;
  approval_contains?: InputMaybe<Scalars['String']>;
  approval_contains_nocase?: InputMaybe<Scalars['String']>;
  approval_not_contains?: InputMaybe<Scalars['String']>;
  approval_not_contains_nocase?: InputMaybe<Scalars['String']>;
  approval_starts_with?: InputMaybe<Scalars['String']>;
  approval_starts_with_nocase?: InputMaybe<Scalars['String']>;
  approval_not_starts_with?: InputMaybe<Scalars['String']>;
  approval_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  approval_ends_with?: InputMaybe<Scalars['String']>;
  approval_ends_with_nocase?: InputMaybe<Scalars['String']>;
  approval_not_ends_with?: InputMaybe<Scalars['String']>;
  approval_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  approval_?: InputMaybe<Account_filter>;
  uri?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfers_?: InputMaybe<ERC721Transfer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ERC721Token_orderBy =
  | 'id'
  | 'contract'
  | 'identifier'
  | 'owner'
  | 'approval'
  | 'uri'
  | 'transfers';

export type ERC721Transfer = Event & {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  contract: ERC721Contract;
  token: ERC721Token;
  from: Account;
  to: Account;
};

export type ERC721Transfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<ERC721Contract_filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<ERC721Token_filter>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_filter>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ERC721Transfer_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'contract'
  | 'token'
  | 'from'
  | 'to';

export type Event = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
};

export type Event_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Event_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  account?: Maybe<Account>;
  accounts: Array<Account>;
  erc721Contract?: Maybe<ERC721Contract>;
  erc721Contracts: Array<ERC721Contract>;
  erc721Token?: Maybe<ERC721Token>;
  erc721Tokens: Array<ERC721Token>;
  erc721Operator?: Maybe<ERC721Operator>;
  erc721Operators: Array<ERC721Operator>;
  erc721Transfer?: Maybe<ERC721Transfer>;
  erc721Transfers: Array<ERC721Transfer>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  event?: Maybe<Event>;
  events: Array<Event>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryerc721ContractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryerc721ContractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Contract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Contract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryerc721TokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryerc721TokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryerc721OperatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryerc721OperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Operator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Operator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryerc721TransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryerc721TransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  account?: Maybe<Account>;
  accounts: Array<Account>;
  erc721Contract?: Maybe<ERC721Contract>;
  erc721Contracts: Array<ERC721Contract>;
  erc721Token?: Maybe<ERC721Token>;
  erc721Tokens: Array<ERC721Token>;
  erc721Operator?: Maybe<ERC721Operator>;
  erc721Operators: Array<ERC721Operator>;
  erc721Transfer?: Maybe<ERC721Transfer>;
  erc721Transfers: Array<ERC721Transfer>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  event?: Maybe<Event>;
  events: Array<Event>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionerc721ContractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionerc721ContractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Contract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Contract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionerc721TokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionerc721TokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionerc721OperatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionerc721OperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Operator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Operator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionerc721TransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionerc721TransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Transaction = {
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  events: Array<Event>;
};


export type TransactioneventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_filter>;
};

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Transaction_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'events';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>;
  Account_filter: Account_filter;
  Account_orderBy: Account_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  ERC721Contract: ResolverTypeWrapper<ERC721Contract>;
  ERC721Contract_filter: ERC721Contract_filter;
  ERC721Contract_orderBy: ERC721Contract_orderBy;
  ERC721Operator: ResolverTypeWrapper<ERC721Operator>;
  ERC721Operator_filter: ERC721Operator_filter;
  ERC721Operator_orderBy: ERC721Operator_orderBy;
  ERC721Token: ResolverTypeWrapper<ERC721Token>;
  ERC721Token_filter: ERC721Token_filter;
  ERC721Token_orderBy: ERC721Token_orderBy;
  ERC721Transfer: ResolverTypeWrapper<ERC721Transfer>;
  ERC721Transfer_filter: ERC721Transfer_filter;
  ERC721Transfer_orderBy: ERC721Transfer_orderBy;
  Event: ResolversTypes['ERC721Transfer'];
  Event_filter: Event_filter;
  Event_orderBy: Event_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  OrderDirection: OrderDirection;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Transaction: ResolverTypeWrapper<Transaction>;
  Transaction_filter: Transaction_filter;
  Transaction_orderBy: Transaction_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  Account_filter: Account_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  ERC721Contract: ERC721Contract;
  ERC721Contract_filter: ERC721Contract_filter;
  ERC721Operator: ERC721Operator;
  ERC721Operator_filter: ERC721Operator_filter;
  ERC721Token: ERC721Token;
  ERC721Token_filter: ERC721Token_filter;
  ERC721Transfer: ERC721Transfer;
  ERC721Transfer_filter: ERC721Transfer_filter;
  Event: ResolversParentTypes['ERC721Transfer'];
  Event_filter: Event_filter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Query: {};
  String: Scalars['String'];
  Subscription: {};
  Transaction: Transaction;
  Transaction_filter: Transaction_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  asERC721?: Resolver<Maybe<ResolversTypes['ERC721Contract']>, ParentType, ContextType>;
  ERC721tokens?: Resolver<Array<Maybe<ResolversTypes['ERC721Token']>>, ParentType, ContextType, RequireFields<AccountERC721tokensArgs, 'skip' | 'first'>>;
  ERC721operatorOwner?: Resolver<Array<Maybe<ResolversTypes['ERC721Operator']>>, ParentType, ContextType, RequireFields<AccountERC721operatorOwnerArgs, 'skip' | 'first'>>;
  ERC721operatorOperator?: Resolver<Array<Maybe<ResolversTypes['ERC721Operator']>>, ParentType, ContextType, RequireFields<AccountERC721operatorOperatorArgs, 'skip' | 'first'>>;
  ERC721transferFromEvent?: Resolver<Array<Maybe<ResolversTypes['ERC721Transfer']>>, ParentType, ContextType, RequireFields<AccountERC721transferFromEventArgs, 'skip' | 'first'>>;
  ERC721transferToEvent?: Resolver<Array<Maybe<ResolversTypes['ERC721Transfer']>>, ParentType, ContextType, RequireFields<AccountERC721transferToEventArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type ERC721ContractResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ERC721Contract'] = ResolversParentTypes['ERC721Contract']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  asAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  supportsMetadata?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['ERC721Token']>, ParentType, ContextType, RequireFields<ERC721ContracttokensArgs, 'skip' | 'first'>>;
  operators?: Resolver<Array<ResolversTypes['ERC721Operator']>, ParentType, ContextType, RequireFields<ERC721ContractoperatorsArgs, 'skip' | 'first'>>;
  transfers?: Resolver<Array<ResolversTypes['ERC721Transfer']>, ParentType, ContextType, RequireFields<ERC721ContracttransfersArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ERC721OperatorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ERC721Operator'] = ResolversParentTypes['ERC721Operator']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contract?: Resolver<ResolversTypes['ERC721Contract'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ERC721TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ERC721Token'] = ResolversParentTypes['ERC721Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contract?: Resolver<ResolversTypes['ERC721Contract'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  approval?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transfers?: Resolver<Array<ResolversTypes['ERC721Transfer']>, ParentType, ContextType, RequireFields<ERC721TokentransfersArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ERC721TransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ERC721Transfer'] = ResolversParentTypes['ERC721Transfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  contract?: Resolver<ResolversTypes['ERC721Contract'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['ERC721Token'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ERC721Transfer', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  erc721Contract?: Resolver<Maybe<ResolversTypes['ERC721Contract']>, ParentType, ContextType, RequireFields<Queryerc721ContractArgs, 'id' | 'subgraphError'>>;
  erc721Contracts?: Resolver<Array<ResolversTypes['ERC721Contract']>, ParentType, ContextType, RequireFields<Queryerc721ContractsArgs, 'skip' | 'first' | 'subgraphError'>>;
  erc721Token?: Resolver<Maybe<ResolversTypes['ERC721Token']>, ParentType, ContextType, RequireFields<Queryerc721TokenArgs, 'id' | 'subgraphError'>>;
  erc721Tokens?: Resolver<Array<ResolversTypes['ERC721Token']>, ParentType, ContextType, RequireFields<Queryerc721TokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  erc721Operator?: Resolver<Maybe<ResolversTypes['ERC721Operator']>, ParentType, ContextType, RequireFields<Queryerc721OperatorArgs, 'id' | 'subgraphError'>>;
  erc721Operators?: Resolver<Array<ResolversTypes['ERC721Operator']>, ParentType, ContextType, RequireFields<Queryerc721OperatorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  erc721Transfer?: Resolver<Maybe<ResolversTypes['ERC721Transfer']>, ParentType, ContextType, RequireFields<Queryerc721TransferArgs, 'id' | 'subgraphError'>>;
  erc721Transfers?: Resolver<Array<ResolversTypes['ERC721Transfer']>, ParentType, ContextType, RequireFields<Queryerc721TransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryeventArgs, 'id' | 'subgraphError'>>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryeventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  erc721Contract?: SubscriptionResolver<Maybe<ResolversTypes['ERC721Contract']>, "erc721Contract", ParentType, ContextType, RequireFields<Subscriptionerc721ContractArgs, 'id' | 'subgraphError'>>;
  erc721Contracts?: SubscriptionResolver<Array<ResolversTypes['ERC721Contract']>, "erc721Contracts", ParentType, ContextType, RequireFields<Subscriptionerc721ContractsArgs, 'skip' | 'first' | 'subgraphError'>>;
  erc721Token?: SubscriptionResolver<Maybe<ResolversTypes['ERC721Token']>, "erc721Token", ParentType, ContextType, RequireFields<Subscriptionerc721TokenArgs, 'id' | 'subgraphError'>>;
  erc721Tokens?: SubscriptionResolver<Array<ResolversTypes['ERC721Token']>, "erc721Tokens", ParentType, ContextType, RequireFields<Subscriptionerc721TokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  erc721Operator?: SubscriptionResolver<Maybe<ResolversTypes['ERC721Operator']>, "erc721Operator", ParentType, ContextType, RequireFields<Subscriptionerc721OperatorArgs, 'id' | 'subgraphError'>>;
  erc721Operators?: SubscriptionResolver<Array<ResolversTypes['ERC721Operator']>, "erc721Operators", ParentType, ContextType, RequireFields<Subscriptionerc721OperatorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  erc721Transfer?: SubscriptionResolver<Maybe<ResolversTypes['ERC721Transfer']>, "erc721Transfer", ParentType, ContextType, RequireFields<Subscriptionerc721TransferArgs, 'id' | 'subgraphError'>>;
  erc721Transfers?: SubscriptionResolver<Array<ResolversTypes['ERC721Transfer']>, "erc721Transfers", ParentType, ContextType, RequireFields<Subscriptionerc721TransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: SubscriptionResolver<Maybe<ResolversTypes['Transaction']>, "transaction", ParentType, ContextType, RequireFields<SubscriptiontransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: SubscriptionResolver<Array<ResolversTypes['Transaction']>, "transactions", ParentType, ContextType, RequireFields<SubscriptiontransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  event?: SubscriptionResolver<Maybe<ResolversTypes['Event']>, "event", ParentType, ContextType, RequireFields<SubscriptioneventArgs, 'id' | 'subgraphError'>>;
  events?: SubscriptionResolver<Array<ResolversTypes['Event']>, "events", ParentType, ContextType, RequireFields<SubscriptioneventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type TransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<TransactioneventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  ERC721Contract?: ERC721ContractResolvers<ContextType>;
  ERC721Operator?: ERC721OperatorResolvers<ContextType>;
  ERC721Token?: ERC721TokenResolvers<ContextType>;
  ERC721Transfer?: ERC721TransferResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace Eip721Types {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  id: Scalars['ID'];
  asERC721?: Maybe<ERC721Contract>;
  ERC721tokens: Array<Maybe<ERC721Token>>;
  ERC721operatorOwner: Array<Maybe<ERC721Operator>>;
  ERC721operatorOperator: Array<Maybe<ERC721Operator>>;
  ERC721transferFromEvent: Array<Maybe<ERC721Transfer>>;
  ERC721transferToEvent: Array<Maybe<ERC721Transfer>>;
};


export type AccountERC721tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Token_filter>;
};


export type AccountERC721operatorOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Operator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Operator_filter>;
};


export type AccountERC721operatorOperatorArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Operator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Operator_filter>;
};


export type AccountERC721transferFromEventArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Transfer_filter>;
};


export type AccountERC721transferToEventArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Transfer_filter>;
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  asERC721?: InputMaybe<Scalars['String']>;
  asERC721_not?: InputMaybe<Scalars['String']>;
  asERC721_gt?: InputMaybe<Scalars['String']>;
  asERC721_lt?: InputMaybe<Scalars['String']>;
  asERC721_gte?: InputMaybe<Scalars['String']>;
  asERC721_lte?: InputMaybe<Scalars['String']>;
  asERC721_in?: InputMaybe<Array<Scalars['String']>>;
  asERC721_not_in?: InputMaybe<Array<Scalars['String']>>;
  asERC721_contains?: InputMaybe<Scalars['String']>;
  asERC721_contains_nocase?: InputMaybe<Scalars['String']>;
  asERC721_not_contains?: InputMaybe<Scalars['String']>;
  asERC721_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asERC721_starts_with?: InputMaybe<Scalars['String']>;
  asERC721_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asERC721_not_starts_with?: InputMaybe<Scalars['String']>;
  asERC721_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asERC721_ends_with?: InputMaybe<Scalars['String']>;
  asERC721_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asERC721_not_ends_with?: InputMaybe<Scalars['String']>;
  asERC721_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asERC721_?: InputMaybe<ERC721Contract_filter>;
  ERC721tokens_?: InputMaybe<ERC721Token_filter>;
  ERC721operatorOwner_?: InputMaybe<ERC721Operator_filter>;
  ERC721operatorOperator_?: InputMaybe<ERC721Operator_filter>;
  ERC721transferFromEvent_?: InputMaybe<ERC721Transfer_filter>;
  ERC721transferToEvent_?: InputMaybe<ERC721Transfer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Account_orderBy =
  | 'id'
  | 'asERC721'
  | 'ERC721tokens'
  | 'ERC721operatorOwner'
  | 'ERC721operatorOperator'
  | 'ERC721transferFromEvent'
  | 'ERC721transferToEvent';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type ERC721Contract = {
  id: Scalars['ID'];
  asAccount: Account;
  supportsMetadata?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  tokens: Array<ERC721Token>;
  operators: Array<ERC721Operator>;
  transfers: Array<ERC721Transfer>;
};


export type ERC721ContracttokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Token_filter>;
};


export type ERC721ContractoperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Operator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Operator_filter>;
};


export type ERC721ContracttransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Transfer_filter>;
};

export type ERC721Contract_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  asAccount?: InputMaybe<Scalars['String']>;
  asAccount_not?: InputMaybe<Scalars['String']>;
  asAccount_gt?: InputMaybe<Scalars['String']>;
  asAccount_lt?: InputMaybe<Scalars['String']>;
  asAccount_gte?: InputMaybe<Scalars['String']>;
  asAccount_lte?: InputMaybe<Scalars['String']>;
  asAccount_in?: InputMaybe<Array<Scalars['String']>>;
  asAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  asAccount_contains?: InputMaybe<Scalars['String']>;
  asAccount_contains_nocase?: InputMaybe<Scalars['String']>;
  asAccount_not_contains?: InputMaybe<Scalars['String']>;
  asAccount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asAccount_starts_with?: InputMaybe<Scalars['String']>;
  asAccount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asAccount_not_starts_with?: InputMaybe<Scalars['String']>;
  asAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asAccount_ends_with?: InputMaybe<Scalars['String']>;
  asAccount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asAccount_not_ends_with?: InputMaybe<Scalars['String']>;
  asAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asAccount_?: InputMaybe<Account_filter>;
  supportsMetadata?: InputMaybe<Scalars['Boolean']>;
  supportsMetadata_not?: InputMaybe<Scalars['Boolean']>;
  supportsMetadata_in?: InputMaybe<Array<Scalars['Boolean']>>;
  supportsMetadata_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokens_?: InputMaybe<ERC721Token_filter>;
  operators_?: InputMaybe<ERC721Operator_filter>;
  transfers_?: InputMaybe<ERC721Transfer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ERC721Contract_orderBy =
  | 'id'
  | 'asAccount'
  | 'supportsMetadata'
  | 'name'
  | 'symbol'
  | 'tokens'
  | 'operators'
  | 'transfers';

export type ERC721Operator = {
  id: Scalars['ID'];
  contract: ERC721Contract;
  owner: Account;
  operator: Account;
  approved: Scalars['Boolean'];
};

export type ERC721Operator_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<ERC721Contract_filter>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  operator?: InputMaybe<Scalars['String']>;
  operator_not?: InputMaybe<Scalars['String']>;
  operator_gt?: InputMaybe<Scalars['String']>;
  operator_lt?: InputMaybe<Scalars['String']>;
  operator_gte?: InputMaybe<Scalars['String']>;
  operator_lte?: InputMaybe<Scalars['String']>;
  operator_in?: InputMaybe<Array<Scalars['String']>>;
  operator_not_in?: InputMaybe<Array<Scalars['String']>>;
  operator_contains?: InputMaybe<Scalars['String']>;
  operator_contains_nocase?: InputMaybe<Scalars['String']>;
  operator_not_contains?: InputMaybe<Scalars['String']>;
  operator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  operator_starts_with?: InputMaybe<Scalars['String']>;
  operator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  operator_not_starts_with?: InputMaybe<Scalars['String']>;
  operator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  operator_ends_with?: InputMaybe<Scalars['String']>;
  operator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  operator_not_ends_with?: InputMaybe<Scalars['String']>;
  operator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  operator_?: InputMaybe<Account_filter>;
  approved?: InputMaybe<Scalars['Boolean']>;
  approved_not?: InputMaybe<Scalars['Boolean']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ERC721Operator_orderBy =
  | 'id'
  | 'contract'
  | 'owner'
  | 'operator'
  | 'approved';

export type ERC721Token = {
  id: Scalars['ID'];
  contract: ERC721Contract;
  identifier: Scalars['BigInt'];
  owner: Account;
  approval: Account;
  uri?: Maybe<Scalars['String']>;
  transfers: Array<ERC721Transfer>;
};


export type ERC721TokentransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Transfer_filter>;
};

export type ERC721Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<ERC721Contract_filter>;
  identifier?: InputMaybe<Scalars['BigInt']>;
  identifier_not?: InputMaybe<Scalars['BigInt']>;
  identifier_gt?: InputMaybe<Scalars['BigInt']>;
  identifier_lt?: InputMaybe<Scalars['BigInt']>;
  identifier_gte?: InputMaybe<Scalars['BigInt']>;
  identifier_lte?: InputMaybe<Scalars['BigInt']>;
  identifier_in?: InputMaybe<Array<Scalars['BigInt']>>;
  identifier_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  approval?: InputMaybe<Scalars['String']>;
  approval_not?: InputMaybe<Scalars['String']>;
  approval_gt?: InputMaybe<Scalars['String']>;
  approval_lt?: InputMaybe<Scalars['String']>;
  approval_gte?: InputMaybe<Scalars['String']>;
  approval_lte?: InputMaybe<Scalars['String']>;
  approval_in?: InputMaybe<Array<Scalars['String']>>;
  approval_not_in?: InputMaybe<Array<Scalars['String']>>;
  approval_contains?: InputMaybe<Scalars['String']>;
  approval_contains_nocase?: InputMaybe<Scalars['String']>;
  approval_not_contains?: InputMaybe<Scalars['String']>;
  approval_not_contains_nocase?: InputMaybe<Scalars['String']>;
  approval_starts_with?: InputMaybe<Scalars['String']>;
  approval_starts_with_nocase?: InputMaybe<Scalars['String']>;
  approval_not_starts_with?: InputMaybe<Scalars['String']>;
  approval_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  approval_ends_with?: InputMaybe<Scalars['String']>;
  approval_ends_with_nocase?: InputMaybe<Scalars['String']>;
  approval_not_ends_with?: InputMaybe<Scalars['String']>;
  approval_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  approval_?: InputMaybe<Account_filter>;
  uri?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfers_?: InputMaybe<ERC721Transfer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ERC721Token_orderBy =
  | 'id'
  | 'contract'
  | 'identifier'
  | 'owner'
  | 'approval'
  | 'uri'
  | 'transfers';

export type ERC721Transfer = Event & {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  contract: ERC721Contract;
  token: ERC721Token;
  from: Account;
  to: Account;
};

export type ERC721Transfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<ERC721Contract_filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<ERC721Token_filter>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_filter>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ERC721Transfer_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'contract'
  | 'token'
  | 'from'
  | 'to';

export type Event = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
};

export type Event_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Event_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  account?: Maybe<Account>;
  accounts: Array<Account>;
  erc721Contract?: Maybe<ERC721Contract>;
  erc721Contracts: Array<ERC721Contract>;
  erc721Token?: Maybe<ERC721Token>;
  erc721Tokens: Array<ERC721Token>;
  erc721Operator?: Maybe<ERC721Operator>;
  erc721Operators: Array<ERC721Operator>;
  erc721Transfer?: Maybe<ERC721Transfer>;
  erc721Transfers: Array<ERC721Transfer>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  event?: Maybe<Event>;
  events: Array<Event>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryerc721ContractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryerc721ContractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Contract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Contract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryerc721TokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryerc721TokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryerc721OperatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryerc721OperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Operator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Operator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryerc721TransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryerc721TransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  account?: Maybe<Account>;
  accounts: Array<Account>;
  erc721Contract?: Maybe<ERC721Contract>;
  erc721Contracts: Array<ERC721Contract>;
  erc721Token?: Maybe<ERC721Token>;
  erc721Tokens: Array<ERC721Token>;
  erc721Operator?: Maybe<ERC721Operator>;
  erc721Operators: Array<ERC721Operator>;
  erc721Transfer?: Maybe<ERC721Transfer>;
  erc721Transfers: Array<ERC721Transfer>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  event?: Maybe<Event>;
  events: Array<Event>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionerc721ContractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionerc721ContractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Contract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Contract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionerc721TokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionerc721TokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionerc721OperatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionerc721OperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Operator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Operator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionerc721TransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionerc721TransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ERC721Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ERC721Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Transaction = {
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  events: Array<Event>;
};


export type TransactioneventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_filter>;
};

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Transaction_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'events';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

    }
    export type QueryEip721Sdk = {
  /** undefined **/
  account: InContextSdkMethod<Eip721Types.Query['account'], Eip721Types.QueryaccountArgs, MeshContext>,
  /** undefined **/
  accounts: InContextSdkMethod<Eip721Types.Query['accounts'], Eip721Types.QueryaccountsArgs, MeshContext>,
  /** undefined **/
  erc721Contract: InContextSdkMethod<Eip721Types.Query['erc721Contract'], Eip721Types.Queryerc721ContractArgs, MeshContext>,
  /** undefined **/
  erc721Contracts: InContextSdkMethod<Eip721Types.Query['erc721Contracts'], Eip721Types.Queryerc721ContractsArgs, MeshContext>,
  /** undefined **/
  erc721Token: InContextSdkMethod<Eip721Types.Query['erc721Token'], Eip721Types.Queryerc721TokenArgs, MeshContext>,
  /** undefined **/
  erc721Tokens: InContextSdkMethod<Eip721Types.Query['erc721Tokens'], Eip721Types.Queryerc721TokensArgs, MeshContext>,
  /** undefined **/
  erc721Operator: InContextSdkMethod<Eip721Types.Query['erc721Operator'], Eip721Types.Queryerc721OperatorArgs, MeshContext>,
  /** undefined **/
  erc721Operators: InContextSdkMethod<Eip721Types.Query['erc721Operators'], Eip721Types.Queryerc721OperatorsArgs, MeshContext>,
  /** undefined **/
  erc721Transfer: InContextSdkMethod<Eip721Types.Query['erc721Transfer'], Eip721Types.Queryerc721TransferArgs, MeshContext>,
  /** undefined **/
  erc721Transfers: InContextSdkMethod<Eip721Types.Query['erc721Transfers'], Eip721Types.Queryerc721TransfersArgs, MeshContext>,
  /** undefined **/
  transaction: InContextSdkMethod<Eip721Types.Query['transaction'], Eip721Types.QuerytransactionArgs, MeshContext>,
  /** undefined **/
  transactions: InContextSdkMethod<Eip721Types.Query['transactions'], Eip721Types.QuerytransactionsArgs, MeshContext>,
  /** undefined **/
  event: InContextSdkMethod<Eip721Types.Query['event'], Eip721Types.QueryeventArgs, MeshContext>,
  /** undefined **/
  events: InContextSdkMethod<Eip721Types.Query['events'], Eip721Types.QueryeventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Eip721Types.Query['_meta'], Eip721Types.Query_metaArgs, MeshContext>
};

export type MutationEip721Sdk = {

};

export type SubscriptionEip721Sdk = {
  /** undefined **/
  account: InContextSdkMethod<Eip721Types.Subscription['account'], Eip721Types.SubscriptionaccountArgs, MeshContext>,
  /** undefined **/
  accounts: InContextSdkMethod<Eip721Types.Subscription['accounts'], Eip721Types.SubscriptionaccountsArgs, MeshContext>,
  /** undefined **/
  erc721Contract: InContextSdkMethod<Eip721Types.Subscription['erc721Contract'], Eip721Types.Subscriptionerc721ContractArgs, MeshContext>,
  /** undefined **/
  erc721Contracts: InContextSdkMethod<Eip721Types.Subscription['erc721Contracts'], Eip721Types.Subscriptionerc721ContractsArgs, MeshContext>,
  /** undefined **/
  erc721Token: InContextSdkMethod<Eip721Types.Subscription['erc721Token'], Eip721Types.Subscriptionerc721TokenArgs, MeshContext>,
  /** undefined **/
  erc721Tokens: InContextSdkMethod<Eip721Types.Subscription['erc721Tokens'], Eip721Types.Subscriptionerc721TokensArgs, MeshContext>,
  /** undefined **/
  erc721Operator: InContextSdkMethod<Eip721Types.Subscription['erc721Operator'], Eip721Types.Subscriptionerc721OperatorArgs, MeshContext>,
  /** undefined **/
  erc721Operators: InContextSdkMethod<Eip721Types.Subscription['erc721Operators'], Eip721Types.Subscriptionerc721OperatorsArgs, MeshContext>,
  /** undefined **/
  erc721Transfer: InContextSdkMethod<Eip721Types.Subscription['erc721Transfer'], Eip721Types.Subscriptionerc721TransferArgs, MeshContext>,
  /** undefined **/
  erc721Transfers: InContextSdkMethod<Eip721Types.Subscription['erc721Transfers'], Eip721Types.Subscriptionerc721TransfersArgs, MeshContext>,
  /** undefined **/
  transaction: InContextSdkMethod<Eip721Types.Subscription['transaction'], Eip721Types.SubscriptiontransactionArgs, MeshContext>,
  /** undefined **/
  transactions: InContextSdkMethod<Eip721Types.Subscription['transactions'], Eip721Types.SubscriptiontransactionsArgs, MeshContext>,
  /** undefined **/
  event: InContextSdkMethod<Eip721Types.Subscription['event'], Eip721Types.SubscriptioneventArgs, MeshContext>,
  /** undefined **/
  events: InContextSdkMethod<Eip721Types.Subscription['events'], Eip721Types.SubscriptioneventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Eip721Types.Subscription['_meta'], Eip721Types.Subscription_metaArgs, MeshContext>
};

export type Eip721Context = {
      ["eip721"]: { Query: QueryEip721Sdk, Mutation: MutationEip721Sdk, Subscription: SubscriptionEip721Sdk },
      
    };

export type MeshContext = Eip721Context & BaseMeshContext;


import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';

import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/eip721/introspectionSchema":
      return import("./sources/eip721/introspectionSchema");
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetchFactory } from 'fetchache';
import { fetch, Request, Response } from '@whatwg-node/fetch';

import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)
const fetchFn = fetchFactory({ cache, fetch, Request, Response });
const sources = [];
const transforms = [];
const additionalEnvelopPlugins = [];
const eip721Transforms = [];
const additionalTypeDefs = [] as any[];
const eip721Handler = new GraphqlHandler({
              name: "eip721",
              config: {"endpoint":"https://gateway.thegraph.com/api/96b3535b7cd52ad0f12e10cbdd5333d2/subgraphs/id/AVZ1dGwmRGKsbDAbwvxNmXzeEkD48voB3LfGqj5w7FUS"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("eip721"),
              logger: logger.child("eip721"),
              importFn,
              fetchFn,
            });
sources[0] = {
          name: 'eip721',
          handler: eip721Handler,
          transforms: eip721Transforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: OwnedNftsDocument,
        get rawSDL() {
          return printWithCache(OwnedNftsDocument);
        },
        location: 'OwnedNftsDocument.graphql'
      }
    ];
    },
  };
}

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltGraphClient(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type OwnedNftsQueryVariables = Exact<{ [key: string]: never; }>;


export type OwnedNftsQuery = { erc721Tokens: Array<(
    Pick<ERC721Token, 'id'>
    & { owner: Pick<Account, 'id'>, contract: Pick<ERC721Contract, 'name'> }
  )> };


export const OwnedNftsDocument = gql`
    query OwnedNfts {
  erc721Tokens(
    first: 10
    where: {owner: "0xbfca4318f4d47f8a8e49e16c0f2b466c46eac184"}
  ) {
    owner {
      id
    }
    id
    contract {
      name
    }
  }
}
    ` as unknown as DocumentNode<OwnedNftsQuery, OwnedNftsQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    OwnedNfts(variables?: OwnedNftsQueryVariables, options?: C): Promise<OwnedNftsQuery> {
      return requester<OwnedNftsQuery, OwnedNftsQueryVariables>(OwnedNftsDocument, variables, options) as Promise<OwnedNftsQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;