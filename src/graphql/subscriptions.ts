/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOutputTable = /* GraphQL */ `
  subscription OnCreateOutputTable(
    $documentId: String
    $outputType: String
    $raw_text: String
    $src_lang: String
    $translated_text: String
  ) {
    onCreateOutputTable(
      documentId: $documentId
      outputType: $outputType
      raw_text: $raw_text
      src_lang: $src_lang
      translated_text: $translated_text
    ) {
      documentId
      outputType
      raw_text
      src_lang
      translated_text
    }
  }
`;
export const onUpdateOutputTable = /* GraphQL */ `
  subscription OnUpdateOutputTable(
    $documentId: String
    $outputType: String
    $raw_text: String
    $src_lang: String
    $translated_text: String
  ) {
    onUpdateOutputTable(
      documentId: $documentId
      outputType: $outputType
      raw_text: $raw_text
      src_lang: $src_lang
      translated_text: $translated_text
    ) {
      documentId
      outputType
      raw_text
      src_lang
      translated_text
    }
  }
`;
export const onDeleteOutputTable = /* GraphQL */ `
  subscription OnDeleteOutputTable(
    $documentId: String
    $outputType: String
    $raw_text: String
    $src_lang: String
    $translated_text: String
  ) {
    onDeleteOutputTable(
      documentId: $documentId
      outputType: $outputType
      raw_text: $raw_text
      src_lang: $src_lang
      translated_text: $translated_text
    ) {
      documentId
      outputType
      raw_text
      src_lang
      translated_text
    }
  }
`;
