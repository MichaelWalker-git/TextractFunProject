export const onCreateOutputTableSubscription = /* GraphQL */ `
    subscription OnCreateOutputTable {
        onCreateOutputTable {
            raw_text
            src_lang
            translated_text
            outputType
            documentId
        }
    }
`;