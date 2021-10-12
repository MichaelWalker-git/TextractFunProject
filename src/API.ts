/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateOutputTableInput = {
  documentId: string,
  outputType: string,
  raw_text?: string | null,
  src_lang?: string | null,
  translated_text?: string | null,
};

export type OutputTable = {
  __typename: "OutputTable",
  documentId: string,
  outputType: string,
  raw_text?: string | null,
  src_lang?: string | null,
  translated_text?: string | null,
};

export type UpdateOutputTableInput = {
  documentId: string,
  outputType: string,
  raw_text?: string | null,
  src_lang?: string | null,
  translated_text?: string | null,
};

export type DeleteOutputTableInput = {
  documentId: string,
  outputType: string,
};

export type TableOutputTableFilterInput = {
  documentId?: TableStringFilterInput | null,
  outputType?: TableStringFilterInput | null,
  raw_text?: TableStringFilterInput | null,
  src_lang?: TableStringFilterInput | null,
  translated_text?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type OutputTableConnection = {
  __typename: "OutputTableConnection",
  items?:  Array<OutputTable | null > | null,
  nextToken?: string | null,
};

export type CreateOutputTableMutationVariables = {
  input: CreateOutputTableInput,
};

export type CreateOutputTableMutation = {
  createOutputTable?:  {
    __typename: "OutputTable",
    documentId: string,
    outputType: string,
    raw_text?: string | null,
    src_lang?: string | null,
    translated_text?: string | null,
  } | null,
};

export type UpdateOutputTableMutationVariables = {
  input: UpdateOutputTableInput,
};

export type UpdateOutputTableMutation = {
  updateOutputTable?:  {
    __typename: "OutputTable",
    documentId: string,
    outputType: string,
    raw_text?: string | null,
    src_lang?: string | null,
    translated_text?: string | null,
  } | null,
};

export type DeleteOutputTableMutationVariables = {
  input: DeleteOutputTableInput,
};

export type DeleteOutputTableMutation = {
  deleteOutputTable?:  {
    __typename: "OutputTable",
    documentId: string,
    outputType: string,
    raw_text?: string | null,
    src_lang?: string | null,
    translated_text?: string | null,
  } | null,
};

export type GetOutputTableQueryVariables = {
  documentId: string,
  outputType: string,
};

export type GetOutputTableQuery = {
  getOutputTable?:  {
    __typename: "OutputTable",
    documentId: string,
    outputType: string,
    raw_text?: string | null,
    src_lang?: string | null,
    translated_text?: string | null,
  } | null,
};

export type ListOutputTablesQueryVariables = {
  filter?: TableOutputTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOutputTablesQuery = {
  listOutputTables?:  {
    __typename: "OutputTableConnection",
    items?:  Array< {
      __typename: "OutputTable",
      documentId: string,
      outputType: string,
      raw_text?: string | null,
      src_lang?: string | null,
      translated_text?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateOutputTableSubscriptionVariables = {
  documentId?: string | null,
  outputType?: string | null,
  raw_text?: string | null,
  src_lang?: string | null,
  translated_text?: string | null,
};

export type OnCreateOutputTableSubscription = {
  onCreateOutputTable?:  {
    __typename: "OutputTable",
    documentId: string,
    outputType: string,
    raw_text?: string | null,
    src_lang?: string | null,
    translated_text?: string | null,
  } | null,
};

export type OnUpdateOutputTableSubscriptionVariables = {
  documentId?: string | null,
  outputType?: string | null,
  raw_text?: string | null,
  src_lang?: string | null,
  translated_text?: string | null,
};

export type OnUpdateOutputTableSubscription = {
  onUpdateOutputTable?:  {
    __typename: "OutputTable",
    documentId: string,
    outputType: string,
    raw_text?: string | null,
    src_lang?: string | null,
    translated_text?: string | null,
  } | null,
};

export type OnDeleteOutputTableSubscriptionVariables = {
  documentId?: string | null,
  outputType?: string | null,
  raw_text?: string | null,
  src_lang?: string | null,
  translated_text?: string | null,
};

export type OnDeleteOutputTableSubscription = {
  onDeleteOutputTable?:  {
    __typename: "OutputTable",
    documentId: string,
    outputType: string,
    raw_text?: string | null,
    src_lang?: string | null,
    translated_text?: string | null,
  } | null,
};
