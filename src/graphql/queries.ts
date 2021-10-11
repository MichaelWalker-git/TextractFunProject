/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOutputTable = /* GraphQL */ `
  query GetOutputTable($documentId: String!, $outputType: String!) {
    getOutputTable(documentId: $documentId, outputType: $outputType) {
      documentId
      outputType
      raw_text
      src_lang
      translated_text
    }
  }
`;
export const listOutputTables = /* GraphQL */ `
  query ListOutputTables(
    $filter: TableOutputTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOutputTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        documentId
        outputType
        raw_text
        src_lang
        translated_text
      }
      nextToken
    }
  }
`;
