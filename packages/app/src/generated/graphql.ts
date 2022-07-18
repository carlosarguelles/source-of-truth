import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateCategory = {
  __typename?: 'AggregateCategory';
  _count?: Maybe<CategoryCountAggregate>;
  _max?: Maybe<CategoryMaxAggregate>;
  _min?: Maybe<CategoryMinAggregate>;
};

export type AggregateReport = {
  __typename?: 'AggregateReport';
  _count?: Maybe<ReportCountAggregate>;
  _max?: Maybe<ReportMaxAggregate>;
  _min?: Maybe<ReportMinAggregate>;
};

export type AggregateSource = {
  __typename?: 'AggregateSource';
  _avg?: Maybe<SourceAvgAggregate>;
  _count?: Maybe<SourceCountAggregate>;
  _max?: Maybe<SourceMaxAggregate>;
  _min?: Maybe<SourceMinAggregate>;
  _sum?: Maybe<SourceSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateUserSubscribedToReport = {
  __typename?: 'AggregateUserSubscribedToReport';
  _count?: Maybe<UserSubscribedToReportCountAggregate>;
  _max?: Maybe<UserSubscribedToReportMaxAggregate>;
  _min?: Maybe<UserSubscribedToReportMinAggregate>;
};

export type AggregateVerifiedReport = {
  __typename?: 'AggregateVerifiedReport';
  _count?: Maybe<VerifiedReportCountAggregate>;
  _max?: Maybe<VerifiedReportMaxAggregate>;
  _min?: Maybe<VerifiedReportMinAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Category = {
  __typename?: 'Category';
  Report: Array<Report>;
  Source: Array<Source>;
  _count?: Maybe<CategoryCount>;
  name: Scalars['String'];
};


export type CategoryReportArgs = {
  cursor?: InputMaybe<ReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReportWhereInput>;
};


export type CategorySourceArgs = {
  cursor?: InputMaybe<SourceWhereUniqueInput>;
  distinct?: InputMaybe<Array<SourceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SourceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SourceWhereInput>;
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  Report: Scalars['Int'];
  Source: Scalars['Int'];
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  _all: Scalars['Int'];
  name: Scalars['Int'];
};

export type CategoryCountOrderByAggregateInput = {
  name?: InputMaybe<SortOrder>;
};

export type CategoryCreateInput = {
  Report?: InputMaybe<ReportCreateNestedManyWithoutCategoryInput>;
  Source?: InputMaybe<SourceCreateNestedManyWithoutCategoryInput>;
  name: Scalars['String'];
};

export type CategoryCreateManyInput = {
  name: Scalars['String'];
};

export type CategoryCreateNestedOneWithoutReportInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutReportInput>;
  create?: InputMaybe<CategoryCreateWithoutReportInput>;
};

export type CategoryCreateNestedOneWithoutSourceInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutSourceInput>;
  create?: InputMaybe<CategoryCreateWithoutSourceInput>;
};

export type CategoryCreateOrConnectWithoutReportInput = {
  create: CategoryCreateWithoutReportInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutSourceInput = {
  create: CategoryCreateWithoutSourceInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutReportInput = {
  Source?: InputMaybe<SourceCreateNestedManyWithoutCategoryInput>;
  name: Scalars['String'];
};

export type CategoryCreateWithoutSourceInput = {
  Report?: InputMaybe<ReportCreateNestedManyWithoutCategoryInput>;
  name: Scalars['String'];
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  _count?: Maybe<CategoryCountAggregate>;
  _max?: Maybe<CategoryMaxAggregate>;
  _min?: Maybe<CategoryMinAggregate>;
  name: Scalars['String'];
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  name?: Maybe<Scalars['String']>;
};

export type CategoryMaxOrderByAggregateInput = {
  name?: InputMaybe<SortOrder>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  name?: Maybe<Scalars['String']>;
};

export type CategoryMinOrderByAggregateInput = {
  name?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<CategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<CategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<CategoryMinOrderByAggregateInput>;
  name?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  Report?: InputMaybe<ReportOrderByRelationAggregateInput>;
  Source?: InputMaybe<SourceOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
};

export type CategoryRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export enum CategoryScalarFieldEnum {
  Name = 'name'
}

export type CategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type CategoryUpdateInput = {
  Report?: InputMaybe<ReportUpdateManyWithoutCategoryInput>;
  Source?: InputMaybe<SourceUpdateManyWithoutCategoryInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateOneRequiredWithoutReportInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutReportInput>;
  create?: InputMaybe<CategoryCreateWithoutReportInput>;
  update?: InputMaybe<CategoryUpdateWithoutReportInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutReportInput>;
};

export type CategoryUpdateOneRequiredWithoutSourceInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutSourceInput>;
  create?: InputMaybe<CategoryCreateWithoutSourceInput>;
  update?: InputMaybe<CategoryUpdateWithoutSourceInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutSourceInput>;
};

export type CategoryUpdateWithoutReportInput = {
  Source?: InputMaybe<SourceUpdateManyWithoutCategoryInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutSourceInput = {
  Report?: InputMaybe<ReportUpdateManyWithoutCategoryInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithoutReportInput = {
  create: CategoryCreateWithoutReportInput;
  update: CategoryUpdateWithoutReportInput;
};

export type CategoryUpsertWithoutSourceInput = {
  create: CategoryCreateWithoutSourceInput;
  update: CategoryUpdateWithoutSourceInput;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  Report?: InputMaybe<ReportListRelationFilter>;
  Source?: InputMaybe<SourceListRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type CategoryWhereUniqueInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumStateFieldUpdateOperationsInput = {
  set?: InputMaybe<State>;
};

export type EnumStateFilter = {
  equals?: InputMaybe<State>;
  in?: InputMaybe<Array<State>>;
  not?: InputMaybe<NestedEnumStateFilter>;
  notIn?: InputMaybe<Array<State>>;
};

export type EnumStateWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStateFilter>;
  _min?: InputMaybe<NestedEnumStateFilter>;
  equals?: InputMaybe<State>;
  in?: InputMaybe<Array<State>>;
  not?: InputMaybe<NestedEnumStateWithAggregatesFilter>;
  notIn?: InputMaybe<Array<State>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createManyCategory: AffectedRowsOutput;
  createManyReport: AffectedRowsOutput;
  createManySource: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserSubscribedToReport: AffectedRowsOutput;
  createManyVerifiedReport: AffectedRowsOutput;
  createReport: Report;
  createSource: Source;
  createUser: User;
  createUserSubscribedToReport: UserSubscribedToReport;
  createVerifiedReport: VerifiedReport;
  deleteCategory?: Maybe<Category>;
  deleteManyCategory: AffectedRowsOutput;
  deleteManyReport: AffectedRowsOutput;
  deleteManySource: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserSubscribedToReport: AffectedRowsOutput;
  deleteManyVerifiedReport: AffectedRowsOutput;
  deleteReport?: Maybe<Report>;
  deleteSource?: Maybe<Source>;
  deleteUser?: Maybe<User>;
  deleteUserSubscribedToReport?: Maybe<UserSubscribedToReport>;
  deleteVerifiedReport?: Maybe<VerifiedReport>;
  updateCategory?: Maybe<Category>;
  updateManyCategory: AffectedRowsOutput;
  updateManyReport: AffectedRowsOutput;
  updateManySource: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserSubscribedToReport: AffectedRowsOutput;
  updateManyVerifiedReport: AffectedRowsOutput;
  updateReport?: Maybe<Report>;
  updateSource?: Maybe<Source>;
  updateUser?: Maybe<User>;
  updateUserSubscribedToReport?: Maybe<UserSubscribedToReport>;
  updateVerifiedReport?: Maybe<VerifiedReport>;
  upsertCategory: Category;
  upsertReport: Report;
  upsertSource: Source;
  upsertUser: User;
  upsertUserSubscribedToReport: UserSubscribedToReport;
  upsertVerifiedReport: VerifiedReport;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateManyCategoryArgs = {
  data: Array<CategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyReportArgs = {
  data: Array<ReportCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySourceArgs = {
  data: Array<SourceCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserSubscribedToReportArgs = {
  data: Array<UserSubscribedToReportCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyVerifiedReportArgs = {
  data: Array<VerifiedReportCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateReportArgs = {
  data: ReportCreateInput;
};


export type MutationCreateSourceArgs = {
  data: SourceCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserSubscribedToReportArgs = {
  data: UserSubscribedToReportCreateInput;
};


export type MutationCreateVerifiedReportArgs = {
  data: VerifiedReportCreateInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteManyCategoryArgs = {
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationDeleteManyReportArgs = {
  where?: InputMaybe<ReportWhereInput>;
};


export type MutationDeleteManySourceArgs = {
  where?: InputMaybe<SourceWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyUserSubscribedToReportArgs = {
  where?: InputMaybe<UserSubscribedToReportWhereInput>;
};


export type MutationDeleteManyVerifiedReportArgs = {
  where?: InputMaybe<VerifiedReportWhereInput>;
};


export type MutationDeleteReportArgs = {
  where: ReportWhereUniqueInput;
};


export type MutationDeleteSourceArgs = {
  where: SourceWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUserSubscribedToReportArgs = {
  where: UserSubscribedToReportWhereUniqueInput;
};


export type MutationDeleteVerifiedReportArgs = {
  where: VerifiedReportWhereUniqueInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateManyCategoryArgs = {
  data: CategoryUpdateManyMutationInput;
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationUpdateManyReportArgs = {
  data: ReportUpdateManyMutationInput;
  where?: InputMaybe<ReportWhereInput>;
};


export type MutationUpdateManySourceArgs = {
  data: SourceUpdateManyMutationInput;
  where?: InputMaybe<SourceWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyUserSubscribedToReportArgs = {
  data: UserSubscribedToReportUpdateManyMutationInput;
  where?: InputMaybe<UserSubscribedToReportWhereInput>;
};


export type MutationUpdateManyVerifiedReportArgs = {
  data: VerifiedReportUpdateManyMutationInput;
  where?: InputMaybe<VerifiedReportWhereInput>;
};


export type MutationUpdateReportArgs = {
  data: ReportUpdateInput;
  where: ReportWhereUniqueInput;
};


export type MutationUpdateSourceArgs = {
  data: SourceUpdateInput;
  where: SourceWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserSubscribedToReportArgs = {
  data: UserSubscribedToReportUpdateInput;
  where: UserSubscribedToReportWhereUniqueInput;
};


export type MutationUpdateVerifiedReportArgs = {
  data: VerifiedReportUpdateInput;
  where: VerifiedReportWhereUniqueInput;
};


export type MutationUpsertCategoryArgs = {
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertReportArgs = {
  create: ReportCreateInput;
  update: ReportUpdateInput;
  where: ReportWhereUniqueInput;
};


export type MutationUpsertSourceArgs = {
  create: SourceCreateInput;
  update: SourceUpdateInput;
  where: SourceWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertUserSubscribedToReportArgs = {
  create: UserSubscribedToReportCreateInput;
  update: UserSubscribedToReportUpdateInput;
  where: UserSubscribedToReportWhereUniqueInput;
};


export type MutationUpsertVerifiedReportArgs = {
  create: VerifiedReportCreateInput;
  update: VerifiedReportUpdateInput;
  where: VerifiedReportWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumStateFilter = {
  equals?: InputMaybe<State>;
  in?: InputMaybe<Array<State>>;
  not?: InputMaybe<NestedEnumStateFilter>;
  notIn?: InputMaybe<Array<State>>;
};

export type NestedEnumStateWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStateFilter>;
  _min?: InputMaybe<NestedEnumStateFilter>;
  equals?: InputMaybe<State>;
  in?: InputMaybe<Array<State>>;
  not?: InputMaybe<NestedEnumStateWithAggregatesFilter>;
  notIn?: InputMaybe<Array<State>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCategory: AggregateCategory;
  aggregateReport: AggregateReport;
  aggregateSource: AggregateSource;
  aggregateUser: AggregateUser;
  aggregateUserSubscribedToReport: AggregateUserSubscribedToReport;
  aggregateVerifiedReport: AggregateVerifiedReport;
  categories: Array<Category>;
  category?: Maybe<Category>;
  findFirstCategory?: Maybe<Category>;
  findFirstReport?: Maybe<Report>;
  findFirstSource?: Maybe<Source>;
  findFirstUser?: Maybe<User>;
  findFirstUserSubscribedToReport?: Maybe<UserSubscribedToReport>;
  findFirstVerifiedReport?: Maybe<VerifiedReport>;
  groupByCategory: Array<CategoryGroupBy>;
  groupByReport: Array<ReportGroupBy>;
  groupBySource: Array<SourceGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserSubscribedToReport: Array<UserSubscribedToReportGroupBy>;
  groupByVerifiedReport: Array<VerifiedReportGroupBy>;
  myUser: Array<User>;
  report?: Maybe<Report>;
  reports: Array<Report>;
  source?: Maybe<Source>;
  sources: Array<Source>;
  user?: Maybe<User>;
  userSubscribedToReport?: Maybe<UserSubscribedToReport>;
  userSubscribedToReports: Array<UserSubscribedToReport>;
  users: Array<User>;
  verifiedReport?: Maybe<VerifiedReport>;
  verifiedReports: Array<VerifiedReport>;
};


export type QueryAggregateCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryAggregateReportArgs = {
  cursor?: InputMaybe<ReportWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReportWhereInput>;
};


export type QueryAggregateSourceArgs = {
  cursor?: InputMaybe<SourceWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SourceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SourceWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateUserSubscribedToReportArgs = {
  cursor?: InputMaybe<UserSubscribedToReportWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserSubscribedToReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserSubscribedToReportWhereInput>;
};


export type QueryAggregateVerifiedReportArgs = {
  cursor?: InputMaybe<VerifiedReportWhereUniqueInput>;
  orderBy?: InputMaybe<Array<VerifiedReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VerifiedReportWhereInput>;
};


export type QueryCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryFindFirstCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryFindFirstReportArgs = {
  cursor?: InputMaybe<ReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReportWhereInput>;
};


export type QueryFindFirstSourceArgs = {
  cursor?: InputMaybe<SourceWhereUniqueInput>;
  distinct?: InputMaybe<Array<SourceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SourceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SourceWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserSubscribedToReportArgs = {
  cursor?: InputMaybe<UserSubscribedToReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserSubscribedToReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserSubscribedToReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserSubscribedToReportWhereInput>;
};


export type QueryFindFirstVerifiedReportArgs = {
  cursor?: InputMaybe<VerifiedReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerifiedReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerifiedReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VerifiedReportWhereInput>;
};


export type QueryGroupByCategoryArgs = {
  by: Array<CategoryScalarFieldEnum>;
  having?: InputMaybe<CategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryGroupByReportArgs = {
  by: Array<ReportScalarFieldEnum>;
  having?: InputMaybe<ReportScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ReportOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReportWhereInput>;
};


export type QueryGroupBySourceArgs = {
  by: Array<SourceScalarFieldEnum>;
  having?: InputMaybe<SourceScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SourceOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SourceWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByUserSubscribedToReportArgs = {
  by: Array<UserSubscribedToReportScalarFieldEnum>;
  having?: InputMaybe<UserSubscribedToReportScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserSubscribedToReportOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserSubscribedToReportWhereInput>;
};


export type QueryGroupByVerifiedReportArgs = {
  by: Array<VerifiedReportScalarFieldEnum>;
  having?: InputMaybe<VerifiedReportScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<VerifiedReportOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VerifiedReportWhereInput>;
};


export type QueryReportArgs = {
  where: ReportWhereUniqueInput;
};


export type QueryReportsArgs = {
  cursor?: InputMaybe<ReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReportWhereInput>;
};


export type QuerySourceArgs = {
  where: SourceWhereUniqueInput;
};


export type QuerySourcesArgs = {
  cursor?: InputMaybe<SourceWhereUniqueInput>;
  distinct?: InputMaybe<Array<SourceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SourceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SourceWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserSubscribedToReportArgs = {
  where: UserSubscribedToReportWhereUniqueInput;
};


export type QueryUserSubscribedToReportsArgs = {
  cursor?: InputMaybe<UserSubscribedToReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserSubscribedToReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserSubscribedToReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserSubscribedToReportWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryVerifiedReportArgs = {
  where: VerifiedReportWhereUniqueInput;
};


export type QueryVerifiedReportsArgs = {
  cursor?: InputMaybe<VerifiedReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerifiedReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerifiedReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VerifiedReportWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Report = {
  __typename?: 'Report';
  _count?: Maybe<ReportCount>;
  category: Category;
  categoryName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  keywords: Array<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  usersSubscribed: Array<UserSubscribedToReport>;
  verified: Array<VerifiedReport>;
};


export type ReportUsersSubscribedArgs = {
  cursor?: InputMaybe<UserSubscribedToReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserSubscribedToReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserSubscribedToReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserSubscribedToReportWhereInput>;
};


export type ReportVerifiedArgs = {
  cursor?: InputMaybe<VerifiedReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerifiedReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerifiedReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VerifiedReportWhereInput>;
};

export type ReportCount = {
  __typename?: 'ReportCount';
  usersSubscribed: Scalars['Int'];
  verified: Scalars['Int'];
};

export type ReportCountAggregate = {
  __typename?: 'ReportCountAggregate';
  _all: Scalars['Int'];
  categoryName: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  keywords: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ReportCountOrderByAggregateInput = {
  categoryName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ReportCreateInput = {
  category: CategoryCreateNestedOneWithoutReportInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<ReportCreatekeywordsInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutReportsInput;
  usersSubscribed?: InputMaybe<UserSubscribedToReportCreateNestedManyWithoutReportInput>;
  verified?: InputMaybe<VerifiedReportCreateNestedManyWithoutReportInput>;
};

export type ReportCreateManyCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<ReportCreatekeywordsInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ReportCreateManyCategoryInputEnvelope = {
  data: Array<ReportCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ReportCreateManyInput = {
  categoryName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<ReportCreatekeywordsInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ReportCreateManyUserInput = {
  categoryName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<ReportCreatekeywordsInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ReportCreateManyUserInputEnvelope = {
  data: Array<ReportCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ReportCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<ReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReportCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<ReportCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<ReportCreateManyCategoryInputEnvelope>;
};

export type ReportCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReportCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReportCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReportCreateManyUserInputEnvelope>;
};

export type ReportCreateNestedOneWithoutUsersSubscribedInput = {
  connect?: InputMaybe<ReportWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ReportCreateOrConnectWithoutUsersSubscribedInput>;
  create?: InputMaybe<ReportCreateWithoutUsersSubscribedInput>;
};

export type ReportCreateNestedOneWithoutVerifiedInput = {
  connect?: InputMaybe<ReportWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ReportCreateOrConnectWithoutVerifiedInput>;
  create?: InputMaybe<ReportCreateWithoutVerifiedInput>;
};

export type ReportCreateOrConnectWithoutCategoryInput = {
  create: ReportCreateWithoutCategoryInput;
  where: ReportWhereUniqueInput;
};

export type ReportCreateOrConnectWithoutUserInput = {
  create: ReportCreateWithoutUserInput;
  where: ReportWhereUniqueInput;
};

export type ReportCreateOrConnectWithoutUsersSubscribedInput = {
  create: ReportCreateWithoutUsersSubscribedInput;
  where: ReportWhereUniqueInput;
};

export type ReportCreateOrConnectWithoutVerifiedInput = {
  create: ReportCreateWithoutVerifiedInput;
  where: ReportWhereUniqueInput;
};

export type ReportCreateWithoutCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<ReportCreatekeywordsInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutReportsInput;
  usersSubscribed?: InputMaybe<UserSubscribedToReportCreateNestedManyWithoutReportInput>;
  verified?: InputMaybe<VerifiedReportCreateNestedManyWithoutReportInput>;
};

export type ReportCreateWithoutUserInput = {
  category: CategoryCreateNestedOneWithoutReportInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<ReportCreatekeywordsInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  usersSubscribed?: InputMaybe<UserSubscribedToReportCreateNestedManyWithoutReportInput>;
  verified?: InputMaybe<VerifiedReportCreateNestedManyWithoutReportInput>;
};

export type ReportCreateWithoutUsersSubscribedInput = {
  category: CategoryCreateNestedOneWithoutReportInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<ReportCreatekeywordsInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutReportsInput;
  verified?: InputMaybe<VerifiedReportCreateNestedManyWithoutReportInput>;
};

export type ReportCreateWithoutVerifiedInput = {
  category: CategoryCreateNestedOneWithoutReportInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<ReportCreatekeywordsInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutReportsInput;
  usersSubscribed?: InputMaybe<UserSubscribedToReportCreateNestedManyWithoutReportInput>;
};

export type ReportCreatekeywordsInput = {
  set: Array<Scalars['String']>;
};

export type ReportGroupBy = {
  __typename?: 'ReportGroupBy';
  _count?: Maybe<ReportCountAggregate>;
  _max?: Maybe<ReportMaxAggregate>;
  _min?: Maybe<ReportMinAggregate>;
  categoryName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  keywords?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type ReportListRelationFilter = {
  every?: InputMaybe<ReportWhereInput>;
  none?: InputMaybe<ReportWhereInput>;
  some?: InputMaybe<ReportWhereInput>;
};

export type ReportMaxAggregate = {
  __typename?: 'ReportMaxAggregate';
  categoryName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ReportMaxOrderByAggregateInput = {
  categoryName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ReportMinAggregate = {
  __typename?: 'ReportMinAggregate';
  categoryName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ReportMinOrderByAggregateInput = {
  categoryName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ReportOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReportOrderByWithAggregationInput = {
  _count?: InputMaybe<ReportCountOrderByAggregateInput>;
  _max?: InputMaybe<ReportMaxOrderByAggregateInput>;
  _min?: InputMaybe<ReportMinOrderByAggregateInput>;
  categoryName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ReportOrderByWithRelationInput = {
  category?: InputMaybe<CategoryOrderByWithRelationInput>;
  categoryName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  usersSubscribed?: InputMaybe<UserSubscribedToReportOrderByRelationAggregateInput>;
  verified?: InputMaybe<VerifiedReportOrderByRelationAggregateInput>;
};

export type ReportRelationFilter = {
  is?: InputMaybe<ReportWhereInput>;
  isNot?: InputMaybe<ReportWhereInput>;
};

export enum ReportScalarFieldEnum {
  CategoryName = 'categoryName',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Keywords = 'keywords',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ReportScalarWhereInput = {
  AND?: InputMaybe<Array<ReportScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReportScalarWhereInput>>;
  OR?: InputMaybe<Array<ReportScalarWhereInput>>;
  categoryName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ReportScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ReportScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ReportScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ReportScalarWhereWithAggregatesInput>>;
  categoryName?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ReportUpdateInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutReportInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<ReportUpdatekeywordsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutReportsInput>;
  usersSubscribed?: InputMaybe<UserSubscribedToReportUpdateManyWithoutReportInput>;
  verified?: InputMaybe<VerifiedReportUpdateManyWithoutReportInput>;
};

export type ReportUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<ReportUpdatekeywordsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReportUpdateManyWithWhereWithoutCategoryInput = {
  data: ReportUpdateManyMutationInput;
  where: ReportScalarWhereInput;
};

export type ReportUpdateManyWithWhereWithoutUserInput = {
  data: ReportUpdateManyMutationInput;
  where: ReportScalarWhereInput;
};

export type ReportUpdateManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<ReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReportCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<ReportCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<ReportCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<ReportWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReportScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReportWhereUniqueInput>>;
  set?: InputMaybe<Array<ReportWhereUniqueInput>>;
  update?: InputMaybe<Array<ReportUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<ReportUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<ReportUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type ReportUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<ReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReportCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReportCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReportCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ReportWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReportScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReportWhereUniqueInput>>;
  set?: InputMaybe<Array<ReportWhereUniqueInput>>;
  update?: InputMaybe<Array<ReportUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ReportUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ReportUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ReportUpdateOneRequiredWithoutUsersSubscribedInput = {
  connect?: InputMaybe<ReportWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ReportCreateOrConnectWithoutUsersSubscribedInput>;
  create?: InputMaybe<ReportCreateWithoutUsersSubscribedInput>;
  update?: InputMaybe<ReportUpdateWithoutUsersSubscribedInput>;
  upsert?: InputMaybe<ReportUpsertWithoutUsersSubscribedInput>;
};

export type ReportUpdateOneRequiredWithoutVerifiedInput = {
  connect?: InputMaybe<ReportWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ReportCreateOrConnectWithoutVerifiedInput>;
  create?: InputMaybe<ReportCreateWithoutVerifiedInput>;
  update?: InputMaybe<ReportUpdateWithoutVerifiedInput>;
  upsert?: InputMaybe<ReportUpsertWithoutVerifiedInput>;
};

export type ReportUpdateWithWhereUniqueWithoutCategoryInput = {
  data: ReportUpdateWithoutCategoryInput;
  where: ReportWhereUniqueInput;
};

export type ReportUpdateWithWhereUniqueWithoutUserInput = {
  data: ReportUpdateWithoutUserInput;
  where: ReportWhereUniqueInput;
};

export type ReportUpdateWithoutCategoryInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<ReportUpdatekeywordsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutReportsInput>;
  usersSubscribed?: InputMaybe<UserSubscribedToReportUpdateManyWithoutReportInput>;
  verified?: InputMaybe<VerifiedReportUpdateManyWithoutReportInput>;
};

export type ReportUpdateWithoutUserInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutReportInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<ReportUpdatekeywordsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  usersSubscribed?: InputMaybe<UserSubscribedToReportUpdateManyWithoutReportInput>;
  verified?: InputMaybe<VerifiedReportUpdateManyWithoutReportInput>;
};

export type ReportUpdateWithoutUsersSubscribedInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutReportInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<ReportUpdatekeywordsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutReportsInput>;
  verified?: InputMaybe<VerifiedReportUpdateManyWithoutReportInput>;
};

export type ReportUpdateWithoutVerifiedInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutReportInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<ReportUpdatekeywordsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutReportsInput>;
  usersSubscribed?: InputMaybe<UserSubscribedToReportUpdateManyWithoutReportInput>;
};

export type ReportUpdatekeywordsInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type ReportUpsertWithWhereUniqueWithoutCategoryInput = {
  create: ReportCreateWithoutCategoryInput;
  update: ReportUpdateWithoutCategoryInput;
  where: ReportWhereUniqueInput;
};

export type ReportUpsertWithWhereUniqueWithoutUserInput = {
  create: ReportCreateWithoutUserInput;
  update: ReportUpdateWithoutUserInput;
  where: ReportWhereUniqueInput;
};

export type ReportUpsertWithoutUsersSubscribedInput = {
  create: ReportCreateWithoutUsersSubscribedInput;
  update: ReportUpdateWithoutUsersSubscribedInput;
};

export type ReportUpsertWithoutVerifiedInput = {
  create: ReportCreateWithoutVerifiedInput;
  update: ReportUpdateWithoutVerifiedInput;
};

export type ReportWhereInput = {
  AND?: InputMaybe<Array<ReportWhereInput>>;
  NOT?: InputMaybe<Array<ReportWhereInput>>;
  OR?: InputMaybe<Array<ReportWhereInput>>;
  category?: InputMaybe<CategoryRelationFilter>;
  categoryName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  usersSubscribed?: InputMaybe<UserSubscribedToReportListRelationFilter>;
  verified?: InputMaybe<VerifiedReportListRelationFilter>;
};

export type ReportWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Source = {
  __typename?: 'Source';
  _count?: Maybe<SourceCount>;
  category: Category;
  categoryName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  timesViewed: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
  user: User;
  userId: Scalars['String'];
  verifiedReports: Array<VerifiedReport>;
};


export type SourceVerifiedReportsArgs = {
  cursor?: InputMaybe<VerifiedReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerifiedReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerifiedReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VerifiedReportWhereInput>;
};

export type SourceAvgAggregate = {
  __typename?: 'SourceAvgAggregate';
  timesViewed?: Maybe<Scalars['Float']>;
};

export type SourceAvgOrderByAggregateInput = {
  timesViewed?: InputMaybe<SortOrder>;
};

export type SourceCount = {
  __typename?: 'SourceCount';
  verifiedReports: Scalars['Int'];
};

export type SourceCountAggregate = {
  __typename?: 'SourceCountAggregate';
  _all: Scalars['Int'];
  categoryName: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  timesViewed: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
  url: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SourceCountOrderByAggregateInput = {
  categoryName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  timesViewed?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SourceCreateInput = {
  category: CategoryCreateNestedOneWithoutSourceInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  timesViewed?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutSourcesInput;
  verifiedReports?: InputMaybe<VerifiedReportCreateNestedManyWithoutSourceInput>;
};

export type SourceCreateManyCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  timesViewed?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type SourceCreateManyCategoryInputEnvelope = {
  data: Array<SourceCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SourceCreateManyInput = {
  categoryName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  timesViewed?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type SourceCreateManyUserInput = {
  categoryName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  timesViewed?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type SourceCreateManyUserInputEnvelope = {
  data: Array<SourceCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SourceCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<SourceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SourceCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<SourceCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<SourceCreateManyCategoryInputEnvelope>;
};

export type SourceCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SourceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SourceCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SourceCreateWithoutUserInput>>;
  createMany?: InputMaybe<SourceCreateManyUserInputEnvelope>;
};

export type SourceCreateNestedOneWithoutVerifiedReportsInput = {
  connect?: InputMaybe<SourceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SourceCreateOrConnectWithoutVerifiedReportsInput>;
  create?: InputMaybe<SourceCreateWithoutVerifiedReportsInput>;
};

export type SourceCreateOrConnectWithoutCategoryInput = {
  create: SourceCreateWithoutCategoryInput;
  where: SourceWhereUniqueInput;
};

export type SourceCreateOrConnectWithoutUserInput = {
  create: SourceCreateWithoutUserInput;
  where: SourceWhereUniqueInput;
};

export type SourceCreateOrConnectWithoutVerifiedReportsInput = {
  create: SourceCreateWithoutVerifiedReportsInput;
  where: SourceWhereUniqueInput;
};

export type SourceCreateWithoutCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  timesViewed?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutSourcesInput;
  verifiedReports?: InputMaybe<VerifiedReportCreateNestedManyWithoutSourceInput>;
};

export type SourceCreateWithoutUserInput = {
  category: CategoryCreateNestedOneWithoutSourceInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  timesViewed?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
  verifiedReports?: InputMaybe<VerifiedReportCreateNestedManyWithoutSourceInput>;
};

export type SourceCreateWithoutVerifiedReportsInput = {
  category: CategoryCreateNestedOneWithoutSourceInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  timesViewed?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutSourcesInput;
};

export type SourceGroupBy = {
  __typename?: 'SourceGroupBy';
  _avg?: Maybe<SourceAvgAggregate>;
  _count?: Maybe<SourceCountAggregate>;
  _max?: Maybe<SourceMaxAggregate>;
  _min?: Maybe<SourceMinAggregate>;
  _sum?: Maybe<SourceSumAggregate>;
  categoryName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  timesViewed: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type SourceListRelationFilter = {
  every?: InputMaybe<SourceWhereInput>;
  none?: InputMaybe<SourceWhereInput>;
  some?: InputMaybe<SourceWhereInput>;
};

export type SourceMaxAggregate = {
  __typename?: 'SourceMaxAggregate';
  categoryName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  timesViewed?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type SourceMaxOrderByAggregateInput = {
  categoryName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  timesViewed?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SourceMinAggregate = {
  __typename?: 'SourceMinAggregate';
  categoryName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  timesViewed?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type SourceMinOrderByAggregateInput = {
  categoryName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  timesViewed?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SourceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SourceOrderByWithAggregationInput = {
  _avg?: InputMaybe<SourceAvgOrderByAggregateInput>;
  _count?: InputMaybe<SourceCountOrderByAggregateInput>;
  _max?: InputMaybe<SourceMaxOrderByAggregateInput>;
  _min?: InputMaybe<SourceMinOrderByAggregateInput>;
  _sum?: InputMaybe<SourceSumOrderByAggregateInput>;
  categoryName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  timesViewed?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SourceOrderByWithRelationInput = {
  category?: InputMaybe<CategoryOrderByWithRelationInput>;
  categoryName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  timesViewed?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  verifiedReports?: InputMaybe<VerifiedReportOrderByRelationAggregateInput>;
};

export type SourceRelationFilter = {
  is?: InputMaybe<SourceWhereInput>;
  isNot?: InputMaybe<SourceWhereInput>;
};

export enum SourceScalarFieldEnum {
  CategoryName = 'categoryName',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  TimesViewed = 'timesViewed',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  Url = 'url',
  UserId = 'userId'
}

export type SourceScalarWhereInput = {
  AND?: InputMaybe<Array<SourceScalarWhereInput>>;
  NOT?: InputMaybe<Array<SourceScalarWhereInput>>;
  OR?: InputMaybe<Array<SourceScalarWhereInput>>;
  categoryName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  timesViewed?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SourceScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SourceScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SourceScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SourceScalarWhereWithAggregatesInput>>;
  categoryName?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  timesViewed?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  url?: InputMaybe<StringNullableWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SourceSumAggregate = {
  __typename?: 'SourceSumAggregate';
  timesViewed?: Maybe<Scalars['Int']>;
};

export type SourceSumOrderByAggregateInput = {
  timesViewed?: InputMaybe<SortOrder>;
};

export type SourceUpdateInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutSourceInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  timesViewed?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSourcesInput>;
  verifiedReports?: InputMaybe<VerifiedReportUpdateManyWithoutSourceInput>;
};

export type SourceUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  timesViewed?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SourceUpdateManyWithWhereWithoutCategoryInput = {
  data: SourceUpdateManyMutationInput;
  where: SourceScalarWhereInput;
};

export type SourceUpdateManyWithWhereWithoutUserInput = {
  data: SourceUpdateManyMutationInput;
  where: SourceScalarWhereInput;
};

export type SourceUpdateManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<SourceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SourceCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<SourceCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<SourceCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<SourceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SourceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SourceWhereUniqueInput>>;
  set?: InputMaybe<Array<SourceWhereUniqueInput>>;
  update?: InputMaybe<Array<SourceUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<SourceUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<SourceUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type SourceUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<SourceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SourceCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SourceCreateWithoutUserInput>>;
  createMany?: InputMaybe<SourceCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SourceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SourceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SourceWhereUniqueInput>>;
  set?: InputMaybe<Array<SourceWhereUniqueInput>>;
  update?: InputMaybe<Array<SourceUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SourceUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SourceUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SourceUpdateOneRequiredWithoutVerifiedReportsInput = {
  connect?: InputMaybe<SourceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SourceCreateOrConnectWithoutVerifiedReportsInput>;
  create?: InputMaybe<SourceCreateWithoutVerifiedReportsInput>;
  update?: InputMaybe<SourceUpdateWithoutVerifiedReportsInput>;
  upsert?: InputMaybe<SourceUpsertWithoutVerifiedReportsInput>;
};

export type SourceUpdateWithWhereUniqueWithoutCategoryInput = {
  data: SourceUpdateWithoutCategoryInput;
  where: SourceWhereUniqueInput;
};

export type SourceUpdateWithWhereUniqueWithoutUserInput = {
  data: SourceUpdateWithoutUserInput;
  where: SourceWhereUniqueInput;
};

export type SourceUpdateWithoutCategoryInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  timesViewed?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSourcesInput>;
  verifiedReports?: InputMaybe<VerifiedReportUpdateManyWithoutSourceInput>;
};

export type SourceUpdateWithoutUserInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutSourceInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  timesViewed?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  verifiedReports?: InputMaybe<VerifiedReportUpdateManyWithoutSourceInput>;
};

export type SourceUpdateWithoutVerifiedReportsInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutSourceInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  timesViewed?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSourcesInput>;
};

export type SourceUpsertWithWhereUniqueWithoutCategoryInput = {
  create: SourceCreateWithoutCategoryInput;
  update: SourceUpdateWithoutCategoryInput;
  where: SourceWhereUniqueInput;
};

export type SourceUpsertWithWhereUniqueWithoutUserInput = {
  create: SourceCreateWithoutUserInput;
  update: SourceUpdateWithoutUserInput;
  where: SourceWhereUniqueInput;
};

export type SourceUpsertWithoutVerifiedReportsInput = {
  create: SourceCreateWithoutVerifiedReportsInput;
  update: SourceUpdateWithoutVerifiedReportsInput;
};

export type SourceWhereInput = {
  AND?: InputMaybe<Array<SourceWhereInput>>;
  NOT?: InputMaybe<Array<SourceWhereInput>>;
  OR?: InputMaybe<Array<SourceWhereInput>>;
  category?: InputMaybe<CategoryRelationFilter>;
  categoryName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  timesViewed?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  verifiedReports?: InputMaybe<VerifiedReportListRelationFilter>;
};

export type SourceWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum State {
  False = 'FALSE',
  NotVerified = 'NOT_VERIFIED',
  True = 'TRUE'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isVerified: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profilePic?: Maybe<Scalars['String']>;
  reports: Array<Report>;
  sources: Array<Source>;
  subscribedReports: Array<UserSubscribedToReport>;
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
};


export type UserReportsArgs = {
  cursor?: InputMaybe<ReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReportWhereInput>;
};


export type UserSourcesArgs = {
  cursor?: InputMaybe<SourceWhereUniqueInput>;
  distinct?: InputMaybe<Array<SourceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SourceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SourceWhereInput>;
};


export type UserSubscribedReportsArgs = {
  cursor?: InputMaybe<UserSubscribedToReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserSubscribedToReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserSubscribedToReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserSubscribedToReportWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  reports: Scalars['Int'];
  sources: Scalars['Int'];
  subscribedReports: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  isVerified: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
  profilePic: Scalars['Int'];
  updatedAt: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVerified?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  profilePic?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  profilePic?: InputMaybe<Scalars['String']>;
  reports?: InputMaybe<ReportCreateNestedManyWithoutUserInput>;
  sources?: InputMaybe<SourceCreateNestedManyWithoutUserInput>;
  subscribedReports?: InputMaybe<UserSubscribedToReportCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  profilePic?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateNestedOneWithoutReportsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReportsInput>;
  create?: InputMaybe<UserCreateWithoutReportsInput>;
};

export type UserCreateNestedOneWithoutSourcesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSourcesInput>;
  create?: InputMaybe<UserCreateWithoutSourcesInput>;
};

export type UserCreateNestedOneWithoutSubscribedReportsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSubscribedReportsInput>;
  create?: InputMaybe<UserCreateWithoutSubscribedReportsInput>;
};

export type UserCreateOrConnectWithoutReportsInput = {
  create: UserCreateWithoutReportsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSourcesInput = {
  create: UserCreateWithoutSourcesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSubscribedReportsInput = {
  create: UserCreateWithoutSubscribedReportsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutReportsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  profilePic?: InputMaybe<Scalars['String']>;
  sources?: InputMaybe<SourceCreateNestedManyWithoutUserInput>;
  subscribedReports?: InputMaybe<UserSubscribedToReportCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutSourcesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  profilePic?: InputMaybe<Scalars['String']>;
  reports?: InputMaybe<ReportCreateNestedManyWithoutUserInput>;
  subscribedReports?: InputMaybe<UserSubscribedToReportCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutSubscribedReportsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  profilePic?: InputMaybe<Scalars['String']>;
  reports?: InputMaybe<ReportCreateNestedManyWithoutUserInput>;
  sources?: InputMaybe<SourceCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isVerified: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profilePic?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profilePic?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVerified?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  profilePic?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profilePic?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVerified?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  profilePic?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVerified?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  profilePic?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVerified?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  profilePic?: InputMaybe<SortOrder>;
  reports?: InputMaybe<ReportOrderByRelationAggregateInput>;
  sources?: InputMaybe<SourceOrderByRelationAggregateInput>;
  subscribedReports?: InputMaybe<UserSubscribedToReportOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  IsVerified = 'isVerified',
  Name = 'name',
  Password = 'password',
  ProfilePic = 'profilePic',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isVerified?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  password?: InputMaybe<StringNullableWithAggregatesFilter>;
  profilePic?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  username?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type UserSubscribedToReport = {
  __typename?: 'UserSubscribedToReport';
  createdAt: Scalars['DateTime'];
  report: Report;
  reportId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type UserSubscribedToReportCountAggregate = {
  __typename?: 'UserSubscribedToReportCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  reportId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type UserSubscribedToReportCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reportId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserSubscribedToReportCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  report: ReportCreateNestedOneWithoutUsersSubscribedInput;
  user: UserCreateNestedOneWithoutSubscribedReportsInput;
};

export type UserSubscribedToReportCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  reportId: Scalars['String'];
  userId: Scalars['String'];
};

export type UserSubscribedToReportCreateManyReportInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type UserSubscribedToReportCreateManyReportInputEnvelope = {
  data: Array<UserSubscribedToReportCreateManyReportInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserSubscribedToReportCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  reportId: Scalars['String'];
};

export type UserSubscribedToReportCreateManyUserInputEnvelope = {
  data: Array<UserSubscribedToReportCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserSubscribedToReportCreateNestedManyWithoutReportInput = {
  connect?: InputMaybe<Array<UserSubscribedToReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserSubscribedToReportCreateOrConnectWithoutReportInput>>;
  create?: InputMaybe<Array<UserSubscribedToReportCreateWithoutReportInput>>;
  createMany?: InputMaybe<UserSubscribedToReportCreateManyReportInputEnvelope>;
};

export type UserSubscribedToReportCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserSubscribedToReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserSubscribedToReportCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserSubscribedToReportCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserSubscribedToReportCreateManyUserInputEnvelope>;
};

export type UserSubscribedToReportCreateOrConnectWithoutReportInput = {
  create: UserSubscribedToReportCreateWithoutReportInput;
  where: UserSubscribedToReportWhereUniqueInput;
};

export type UserSubscribedToReportCreateOrConnectWithoutUserInput = {
  create: UserSubscribedToReportCreateWithoutUserInput;
  where: UserSubscribedToReportWhereUniqueInput;
};

export type UserSubscribedToReportCreateWithoutReportInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutSubscribedReportsInput;
};

export type UserSubscribedToReportCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  report: ReportCreateNestedOneWithoutUsersSubscribedInput;
};

export type UserSubscribedToReportGroupBy = {
  __typename?: 'UserSubscribedToReportGroupBy';
  _count?: Maybe<UserSubscribedToReportCountAggregate>;
  _max?: Maybe<UserSubscribedToReportMaxAggregate>;
  _min?: Maybe<UserSubscribedToReportMinAggregate>;
  createdAt: Scalars['DateTime'];
  reportId: Scalars['String'];
  userId: Scalars['String'];
};

export type UserSubscribedToReportListRelationFilter = {
  every?: InputMaybe<UserSubscribedToReportWhereInput>;
  none?: InputMaybe<UserSubscribedToReportWhereInput>;
  some?: InputMaybe<UserSubscribedToReportWhereInput>;
};

export type UserSubscribedToReportMaxAggregate = {
  __typename?: 'UserSubscribedToReportMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  reportId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserSubscribedToReportMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reportId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserSubscribedToReportMinAggregate = {
  __typename?: 'UserSubscribedToReportMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  reportId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserSubscribedToReportMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reportId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserSubscribedToReportOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserSubscribedToReportOrderByWithAggregationInput = {
  _count?: InputMaybe<UserSubscribedToReportCountOrderByAggregateInput>;
  _max?: InputMaybe<UserSubscribedToReportMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserSubscribedToReportMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  reportId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserSubscribedToReportOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  report?: InputMaybe<ReportOrderByWithRelationInput>;
  reportId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserSubscribedToReportScalarFieldEnum {
  CreatedAt = 'createdAt',
  ReportId = 'reportId',
  UserId = 'userId'
}

export type UserSubscribedToReportScalarWhereInput = {
  AND?: InputMaybe<Array<UserSubscribedToReportScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserSubscribedToReportScalarWhereInput>>;
  OR?: InputMaybe<Array<UserSubscribedToReportScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  reportId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserSubscribedToReportScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserSubscribedToReportScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserSubscribedToReportScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserSubscribedToReportScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  reportId?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserSubscribedToReportUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  report?: InputMaybe<ReportUpdateOneRequiredWithoutUsersSubscribedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSubscribedReportsInput>;
};

export type UserSubscribedToReportUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserSubscribedToReportUpdateManyWithWhereWithoutReportInput = {
  data: UserSubscribedToReportUpdateManyMutationInput;
  where: UserSubscribedToReportScalarWhereInput;
};

export type UserSubscribedToReportUpdateManyWithWhereWithoutUserInput = {
  data: UserSubscribedToReportUpdateManyMutationInput;
  where: UserSubscribedToReportScalarWhereInput;
};

export type UserSubscribedToReportUpdateManyWithoutReportInput = {
  connect?: InputMaybe<Array<UserSubscribedToReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserSubscribedToReportCreateOrConnectWithoutReportInput>>;
  create?: InputMaybe<Array<UserSubscribedToReportCreateWithoutReportInput>>;
  createMany?: InputMaybe<UserSubscribedToReportCreateManyReportInputEnvelope>;
  delete?: InputMaybe<Array<UserSubscribedToReportWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserSubscribedToReportScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserSubscribedToReportWhereUniqueInput>>;
  set?: InputMaybe<Array<UserSubscribedToReportWhereUniqueInput>>;
  update?: InputMaybe<Array<UserSubscribedToReportUpdateWithWhereUniqueWithoutReportInput>>;
  updateMany?: InputMaybe<Array<UserSubscribedToReportUpdateManyWithWhereWithoutReportInput>>;
  upsert?: InputMaybe<Array<UserSubscribedToReportUpsertWithWhereUniqueWithoutReportInput>>;
};

export type UserSubscribedToReportUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserSubscribedToReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserSubscribedToReportCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserSubscribedToReportCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserSubscribedToReportCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserSubscribedToReportWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserSubscribedToReportScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserSubscribedToReportWhereUniqueInput>>;
  set?: InputMaybe<Array<UserSubscribedToReportWhereUniqueInput>>;
  update?: InputMaybe<Array<UserSubscribedToReportUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserSubscribedToReportUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserSubscribedToReportUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserSubscribedToReportUpdateWithWhereUniqueWithoutReportInput = {
  data: UserSubscribedToReportUpdateWithoutReportInput;
  where: UserSubscribedToReportWhereUniqueInput;
};

export type UserSubscribedToReportUpdateWithWhereUniqueWithoutUserInput = {
  data: UserSubscribedToReportUpdateWithoutUserInput;
  where: UserSubscribedToReportWhereUniqueInput;
};

export type UserSubscribedToReportUpdateWithoutReportInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSubscribedReportsInput>;
};

export type UserSubscribedToReportUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  report?: InputMaybe<ReportUpdateOneRequiredWithoutUsersSubscribedInput>;
};

export type UserSubscribedToReportUpsertWithWhereUniqueWithoutReportInput = {
  create: UserSubscribedToReportCreateWithoutReportInput;
  update: UserSubscribedToReportUpdateWithoutReportInput;
  where: UserSubscribedToReportWhereUniqueInput;
};

export type UserSubscribedToReportUpsertWithWhereUniqueWithoutUserInput = {
  create: UserSubscribedToReportCreateWithoutUserInput;
  update: UserSubscribedToReportUpdateWithoutUserInput;
  where: UserSubscribedToReportWhereUniqueInput;
};

export type UserSubscribedToReportUserIdReportIdCreatedAtCompoundUniqueInput = {
  createdAt: Scalars['DateTime'];
  reportId: Scalars['String'];
  userId: Scalars['String'];
};

export type UserSubscribedToReportWhereInput = {
  AND?: InputMaybe<Array<UserSubscribedToReportWhereInput>>;
  NOT?: InputMaybe<Array<UserSubscribedToReportWhereInput>>;
  OR?: InputMaybe<Array<UserSubscribedToReportWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  report?: InputMaybe<ReportRelationFilter>;
  reportId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserSubscribedToReportWhereUniqueInput = {
  userId_reportId_createdAt?: InputMaybe<UserSubscribedToReportUserIdReportIdCreatedAtCompoundUniqueInput>;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profilePic?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reports?: InputMaybe<ReportUpdateManyWithoutUserInput>;
  sources?: InputMaybe<SourceUpdateManyWithoutUserInput>;
  subscribedReports?: InputMaybe<UserSubscribedToReportUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profilePic?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutReportsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReportsInput>;
  create?: InputMaybe<UserCreateWithoutReportsInput>;
  update?: InputMaybe<UserUpdateWithoutReportsInput>;
  upsert?: InputMaybe<UserUpsertWithoutReportsInput>;
};

export type UserUpdateOneRequiredWithoutSourcesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSourcesInput>;
  create?: InputMaybe<UserCreateWithoutSourcesInput>;
  update?: InputMaybe<UserUpdateWithoutSourcesInput>;
  upsert?: InputMaybe<UserUpsertWithoutSourcesInput>;
};

export type UserUpdateOneRequiredWithoutSubscribedReportsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSubscribedReportsInput>;
  create?: InputMaybe<UserCreateWithoutSubscribedReportsInput>;
  update?: InputMaybe<UserUpdateWithoutSubscribedReportsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSubscribedReportsInput>;
};

export type UserUpdateWithoutReportsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profilePic?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sources?: InputMaybe<SourceUpdateManyWithoutUserInput>;
  subscribedReports?: InputMaybe<UserSubscribedToReportUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSourcesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profilePic?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reports?: InputMaybe<ReportUpdateManyWithoutUserInput>;
  subscribedReports?: InputMaybe<UserSubscribedToReportUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSubscribedReportsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profilePic?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reports?: InputMaybe<ReportUpdateManyWithoutUserInput>;
  sources?: InputMaybe<SourceUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutReportsInput = {
  create: UserCreateWithoutReportsInput;
  update: UserUpdateWithoutReportsInput;
};

export type UserUpsertWithoutSourcesInput = {
  create: UserCreateWithoutSourcesInput;
  update: UserUpdateWithoutSourcesInput;
};

export type UserUpsertWithoutSubscribedReportsInput = {
  create: UserCreateWithoutSubscribedReportsInput;
  update: UserUpdateWithoutSubscribedReportsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isVerified?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringNullableFilter>;
  profilePic?: InputMaybe<StringNullableFilter>;
  reports?: InputMaybe<ReportListRelationFilter>;
  sources?: InputMaybe<SourceListRelationFilter>;
  subscribedReports?: InputMaybe<UserSubscribedToReportListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type VerifiedReport = {
  __typename?: 'VerifiedReport';
  createdAt: Scalars['DateTime'];
  report: Report;
  reportId: Scalars['String'];
  source: Source;
  sourceId: Scalars['String'];
  state: State;
};

export type VerifiedReportCountAggregate = {
  __typename?: 'VerifiedReportCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  reportId: Scalars['Int'];
  sourceId: Scalars['Int'];
  state: Scalars['Int'];
};

export type VerifiedReportCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reportId?: InputMaybe<SortOrder>;
  sourceId?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
};

export type VerifiedReportCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  report: ReportCreateNestedOneWithoutVerifiedInput;
  source: SourceCreateNestedOneWithoutVerifiedReportsInput;
  state: State;
};

export type VerifiedReportCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  reportId: Scalars['String'];
  sourceId: Scalars['String'];
  state: State;
};

export type VerifiedReportCreateManyReportInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  sourceId: Scalars['String'];
  state: State;
};

export type VerifiedReportCreateManyReportInputEnvelope = {
  data: Array<VerifiedReportCreateManyReportInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type VerifiedReportCreateManySourceInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  reportId: Scalars['String'];
  state: State;
};

export type VerifiedReportCreateManySourceInputEnvelope = {
  data: Array<VerifiedReportCreateManySourceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type VerifiedReportCreateNestedManyWithoutReportInput = {
  connect?: InputMaybe<Array<VerifiedReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VerifiedReportCreateOrConnectWithoutReportInput>>;
  create?: InputMaybe<Array<VerifiedReportCreateWithoutReportInput>>;
  createMany?: InputMaybe<VerifiedReportCreateManyReportInputEnvelope>;
};

export type VerifiedReportCreateNestedManyWithoutSourceInput = {
  connect?: InputMaybe<Array<VerifiedReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VerifiedReportCreateOrConnectWithoutSourceInput>>;
  create?: InputMaybe<Array<VerifiedReportCreateWithoutSourceInput>>;
  createMany?: InputMaybe<VerifiedReportCreateManySourceInputEnvelope>;
};

export type VerifiedReportCreateOrConnectWithoutReportInput = {
  create: VerifiedReportCreateWithoutReportInput;
  where: VerifiedReportWhereUniqueInput;
};

export type VerifiedReportCreateOrConnectWithoutSourceInput = {
  create: VerifiedReportCreateWithoutSourceInput;
  where: VerifiedReportWhereUniqueInput;
};

export type VerifiedReportCreateWithoutReportInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  source: SourceCreateNestedOneWithoutVerifiedReportsInput;
  state: State;
};

export type VerifiedReportCreateWithoutSourceInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  report: ReportCreateNestedOneWithoutVerifiedInput;
  state: State;
};

export type VerifiedReportGroupBy = {
  __typename?: 'VerifiedReportGroupBy';
  _count?: Maybe<VerifiedReportCountAggregate>;
  _max?: Maybe<VerifiedReportMaxAggregate>;
  _min?: Maybe<VerifiedReportMinAggregate>;
  createdAt: Scalars['DateTime'];
  reportId: Scalars['String'];
  sourceId: Scalars['String'];
  state: State;
};

export type VerifiedReportListRelationFilter = {
  every?: InputMaybe<VerifiedReportWhereInput>;
  none?: InputMaybe<VerifiedReportWhereInput>;
  some?: InputMaybe<VerifiedReportWhereInput>;
};

export type VerifiedReportMaxAggregate = {
  __typename?: 'VerifiedReportMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  reportId?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['String']>;
  state?: Maybe<State>;
};

export type VerifiedReportMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reportId?: InputMaybe<SortOrder>;
  sourceId?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
};

export type VerifiedReportMinAggregate = {
  __typename?: 'VerifiedReportMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  reportId?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['String']>;
  state?: Maybe<State>;
};

export type VerifiedReportMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reportId?: InputMaybe<SortOrder>;
  sourceId?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
};

export type VerifiedReportOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type VerifiedReportOrderByWithAggregationInput = {
  _count?: InputMaybe<VerifiedReportCountOrderByAggregateInput>;
  _max?: InputMaybe<VerifiedReportMaxOrderByAggregateInput>;
  _min?: InputMaybe<VerifiedReportMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  reportId?: InputMaybe<SortOrder>;
  sourceId?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
};

export type VerifiedReportOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  report?: InputMaybe<ReportOrderByWithRelationInput>;
  reportId?: InputMaybe<SortOrder>;
  source?: InputMaybe<SourceOrderByWithRelationInput>;
  sourceId?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
};

export enum VerifiedReportScalarFieldEnum {
  CreatedAt = 'createdAt',
  ReportId = 'reportId',
  SourceId = 'sourceId',
  State = 'state'
}

export type VerifiedReportScalarWhereInput = {
  AND?: InputMaybe<Array<VerifiedReportScalarWhereInput>>;
  NOT?: InputMaybe<Array<VerifiedReportScalarWhereInput>>;
  OR?: InputMaybe<Array<VerifiedReportScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  reportId?: InputMaybe<StringFilter>;
  sourceId?: InputMaybe<StringFilter>;
  state?: InputMaybe<EnumStateFilter>;
};

export type VerifiedReportScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VerifiedReportScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VerifiedReportScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VerifiedReportScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  reportId?: InputMaybe<StringWithAggregatesFilter>;
  sourceId?: InputMaybe<StringWithAggregatesFilter>;
  state?: InputMaybe<EnumStateWithAggregatesFilter>;
};

export type VerifiedReportSourceIdReportIdCreatedAtCompoundUniqueInput = {
  createdAt: Scalars['DateTime'];
  reportId: Scalars['String'];
  sourceId: Scalars['String'];
};

export type VerifiedReportUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  report?: InputMaybe<ReportUpdateOneRequiredWithoutVerifiedInput>;
  source?: InputMaybe<SourceUpdateOneRequiredWithoutVerifiedReportsInput>;
  state?: InputMaybe<EnumStateFieldUpdateOperationsInput>;
};

export type VerifiedReportUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  state?: InputMaybe<EnumStateFieldUpdateOperationsInput>;
};

export type VerifiedReportUpdateManyWithWhereWithoutReportInput = {
  data: VerifiedReportUpdateManyMutationInput;
  where: VerifiedReportScalarWhereInput;
};

export type VerifiedReportUpdateManyWithWhereWithoutSourceInput = {
  data: VerifiedReportUpdateManyMutationInput;
  where: VerifiedReportScalarWhereInput;
};

export type VerifiedReportUpdateManyWithoutReportInput = {
  connect?: InputMaybe<Array<VerifiedReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VerifiedReportCreateOrConnectWithoutReportInput>>;
  create?: InputMaybe<Array<VerifiedReportCreateWithoutReportInput>>;
  createMany?: InputMaybe<VerifiedReportCreateManyReportInputEnvelope>;
  delete?: InputMaybe<Array<VerifiedReportWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<VerifiedReportScalarWhereInput>>;
  disconnect?: InputMaybe<Array<VerifiedReportWhereUniqueInput>>;
  set?: InputMaybe<Array<VerifiedReportWhereUniqueInput>>;
  update?: InputMaybe<Array<VerifiedReportUpdateWithWhereUniqueWithoutReportInput>>;
  updateMany?: InputMaybe<Array<VerifiedReportUpdateManyWithWhereWithoutReportInput>>;
  upsert?: InputMaybe<Array<VerifiedReportUpsertWithWhereUniqueWithoutReportInput>>;
};

export type VerifiedReportUpdateManyWithoutSourceInput = {
  connect?: InputMaybe<Array<VerifiedReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VerifiedReportCreateOrConnectWithoutSourceInput>>;
  create?: InputMaybe<Array<VerifiedReportCreateWithoutSourceInput>>;
  createMany?: InputMaybe<VerifiedReportCreateManySourceInputEnvelope>;
  delete?: InputMaybe<Array<VerifiedReportWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<VerifiedReportScalarWhereInput>>;
  disconnect?: InputMaybe<Array<VerifiedReportWhereUniqueInput>>;
  set?: InputMaybe<Array<VerifiedReportWhereUniqueInput>>;
  update?: InputMaybe<Array<VerifiedReportUpdateWithWhereUniqueWithoutSourceInput>>;
  updateMany?: InputMaybe<Array<VerifiedReportUpdateManyWithWhereWithoutSourceInput>>;
  upsert?: InputMaybe<Array<VerifiedReportUpsertWithWhereUniqueWithoutSourceInput>>;
};

export type VerifiedReportUpdateWithWhereUniqueWithoutReportInput = {
  data: VerifiedReportUpdateWithoutReportInput;
  where: VerifiedReportWhereUniqueInput;
};

export type VerifiedReportUpdateWithWhereUniqueWithoutSourceInput = {
  data: VerifiedReportUpdateWithoutSourceInput;
  where: VerifiedReportWhereUniqueInput;
};

export type VerifiedReportUpdateWithoutReportInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  source?: InputMaybe<SourceUpdateOneRequiredWithoutVerifiedReportsInput>;
  state?: InputMaybe<EnumStateFieldUpdateOperationsInput>;
};

export type VerifiedReportUpdateWithoutSourceInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  report?: InputMaybe<ReportUpdateOneRequiredWithoutVerifiedInput>;
  state?: InputMaybe<EnumStateFieldUpdateOperationsInput>;
};

export type VerifiedReportUpsertWithWhereUniqueWithoutReportInput = {
  create: VerifiedReportCreateWithoutReportInput;
  update: VerifiedReportUpdateWithoutReportInput;
  where: VerifiedReportWhereUniqueInput;
};

export type VerifiedReportUpsertWithWhereUniqueWithoutSourceInput = {
  create: VerifiedReportCreateWithoutSourceInput;
  update: VerifiedReportUpdateWithoutSourceInput;
  where: VerifiedReportWhereUniqueInput;
};

export type VerifiedReportWhereInput = {
  AND?: InputMaybe<Array<VerifiedReportWhereInput>>;
  NOT?: InputMaybe<Array<VerifiedReportWhereInput>>;
  OR?: InputMaybe<Array<VerifiedReportWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  report?: InputMaybe<ReportRelationFilter>;
  reportId?: InputMaybe<StringFilter>;
  source?: InputMaybe<SourceRelationFilter>;
  sourceId?: InputMaybe<StringFilter>;
  state?: InputMaybe<EnumStateFilter>;
};

export type VerifiedReportWhereUniqueInput = {
  sourceId_reportId_createdAt?: InputMaybe<VerifiedReportSourceIdReportIdCreatedAtCompoundUniqueInput>;
};

export type ReportFragmentFragment = { __typename?: 'Report', id: string, title: string, description: string, keywords: Array<string>, createdAt: any, updatedAt: any };

export type SourceFragmentFragment = { __typename?: 'Source', id: string, title: string, description: string, url?: string | null, createdAt: any, updatedAt: any, user: { __typename?: 'User', id: string, username?: string | null, createdAt: any, updatedAt: any, name?: string | null, profilePic?: string | null } };

export type UserFragmentFragment = { __typename?: 'User', id: string, username?: string | null, createdAt: any, updatedAt: any, name?: string | null, profilePic?: string | null };

export type CreateReportMutationVariables = Exact<{
  data: ReportCreateInput;
}>;


export type CreateReportMutation = { __typename?: 'Mutation', createReport: { __typename?: 'Report', id: string, title: string, description: string, keywords: Array<string>, createdAt: any, updatedAt: any } };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', name: string }> };

export type ReportsQueryVariables = Exact<{ [key: string]: never; }>;


export type ReportsQuery = { __typename?: 'Query', reports: Array<{ __typename?: 'Report', id: string, title: string, description: string, keywords: Array<string>, userId: string, createdAt: any, updatedAt: any }> };

export type VerifiedReportsQueryVariables = Exact<{ [key: string]: never; }>;


export type VerifiedReportsQuery = { __typename?: 'Query', verifiedReports: Array<{ __typename?: 'VerifiedReport', createdAt: any, state: State, report: { __typename?: 'Report', id: string, title: string, description: string, keywords: Array<string>, createdAt: any, updatedAt: any }, source: { __typename?: 'Source', id: string, title: string, description: string, url?: string | null, createdAt: any, updatedAt: any, user: { __typename?: 'User', id: string, username?: string | null, createdAt: any, updatedAt: any, name?: string | null, profilePic?: string | null } } }> };

export const ReportFragmentFragmentDoc = gql`
    fragment ReportFragment on Report {
  id
  title
  description
  keywords
  createdAt
  updatedAt
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  username
  createdAt
  updatedAt
  name
  profilePic
}
    `;
export const SourceFragmentFragmentDoc = gql`
    fragment SourceFragment on Source {
  id
  title
  description
  url
  createdAt
  updatedAt
  user {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export const CreateReportDocument = gql`
    mutation CreateReport($data: ReportCreateInput!) {
  createReport(data: $data) {
    ...ReportFragment
  }
}
    ${ReportFragmentFragmentDoc}`;

export function useCreateReportMutation() {
  return Urql.useMutation<CreateReportMutation, CreateReportMutationVariables>(CreateReportDocument);
};
export const CategoriesDocument = gql`
    query Categories {
  categories {
    name
  }
}
    `;

export function useCategoriesQuery(options?: Omit<Urql.UseQueryArgs<CategoriesQueryVariables>, 'query'>) {
  return Urql.useQuery<CategoriesQuery>({ query: CategoriesDocument, ...options });
};
export const ReportsDocument = gql`
    query Reports {
  reports {
    id
    title
    description
    keywords
    userId
    createdAt
    updatedAt
  }
}
    `;

export function useReportsQuery(options?: Omit<Urql.UseQueryArgs<ReportsQueryVariables>, 'query'>) {
  return Urql.useQuery<ReportsQuery>({ query: ReportsDocument, ...options });
};
export const VerifiedReportsDocument = gql`
    query VerifiedReports {
  verifiedReports {
    createdAt
    state
    report {
      ...ReportFragment
    }
    source {
      ...SourceFragment
    }
  }
}
    ${ReportFragmentFragmentDoc}
${SourceFragmentFragmentDoc}`;

export function useVerifiedReportsQuery(options?: Omit<Urql.UseQueryArgs<VerifiedReportsQueryVariables>, 'query'>) {
  return Urql.useQuery<VerifiedReportsQuery>({ query: VerifiedReportsDocument, ...options });
};