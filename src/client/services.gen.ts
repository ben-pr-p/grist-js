// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { ListOrgsResponse, DescribeOrgData, DescribeOrgResponse, ModifyOrgData, ModifyOrgResponse, ListOrgAccessData, ListOrgAccessResponse, ModifyOrgAccessData, ModifyOrgAccessResponse, ListWorkspacesData, ListWorkspacesResponse, CreateWorkspaceData, CreateWorkspaceResponse, DescribeWorkspaceData, DescribeWorkspaceResponse, ModifyWorkspaceData, ModifyWorkspaceResponse, DeleteWorkspaceData, DeleteWorkspaceResponse, CreateDocData, CreateDocResponse, ListWorkspaceAccessData, ListWorkspaceAccessResponse, ModifyWorkspaceAccessData, ModifyWorkspaceAccessResponse, DescribeDocData, DescribeDocResponse, ModifyDocData, ModifyDocResponse, DeleteDocData, DeleteDocResponse, MoveDocData, MoveDocResponse, ListDocAccessData, ListDocAccessResponse, ModifyDocAccessData, ModifyDocAccessResponse, DownloadDocData, DownloadDocResponse, DownloadDocXlsxData, DownloadDocXlsxResponse, DownloadDocCsvData, DownloadDocCsvResponse, DownloadTableSchemaData, DownloadTableSchemaResponse, GetTableDataData, GetTableDataResponse, AddRowsData, AddRowsResponse, ModifyRowsData, ModifyRowsResponse, DeleteRowsData, DeleteRowsResponse, ListAttachmentsData, ListAttachmentsResponse, UploadAttachmentsData, UploadAttachmentsResponse, GetAttachmentMetadataData, GetAttachmentMetadataResponse, DownloadAttachmentData, DownloadAttachmentResponse, ListRecordsData, ListRecordsResponse, AddRecordsData, AddRecordsResponse, ModifyRecordsData, ModifyRecordsResponse, ReplaceRecordsData, ReplaceRecordsResponse, ListTablesData, ListTablesResponse, AddTablesData, AddTablesResponse, ModifyTablesData, ModifyTablesResponse, ListColumnsData, ListColumnsResponse, AddColumnsData, AddColumnsResponse, ModifyColumnsData, ModifyColumnsResponse, ReplaceColumnsData, ReplaceColumnsResponse, DeleteColumnData, DeleteColumnResponse, GetDocsByDocIdWebhooksData, GetDocsByDocIdWebhooksResponse, PostDocsByDocIdWebhooksData, PostDocsByDocIdWebhooksResponse, PatchDocsByDocIdWebhooksByWebhookIdData, PatchDocsByDocIdWebhooksByWebhookIdResponse, DeleteDocsByDocIdWebhooksByWebhookIdData, DeleteDocsByDocIdWebhooksByWebhookIdResponse, DeleteDocsByDocIdWebhooksQueueData, DeleteDocsByDocIdWebhooksQueueResponse, GetDocsByDocIdSqlData, GetDocsByDocIdSqlResponse, PostDocsByDocIdSqlData, PostDocsByDocIdSqlResponse } from './types.gen';

/**
 * List the orgs you have access to
 * This enumerates all the team sites or personal areas available.
 * @returns Orgs An array of organizations
 * @throws ApiError
 */
export const listOrgs = (): CancelablePromise<ListOrgsResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/orgs'
}); };

/**
 * Describe an org
 * @param data The data for the request.
 * @param data.orgId This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org is implied by the domain in the url
 * @returns Org An organization
 * @throws ApiError
 */
export const describeOrg = (data: DescribeOrgData): CancelablePromise<DescribeOrgResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/orgs/{orgId}',
    path: {
        orgId: data.orgId
    }
}); };

/**
 * Modify an org
 * @param data The data for the request.
 * @param data.orgId This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org is implied by the domain in the url
 * @param data.requestBody the changes to make
 * @returns unknown Success
 * @throws ApiError
 */
export const modifyOrg = (data: ModifyOrgData): CancelablePromise<ModifyOrgResponse> => { return __request(OpenAPI, {
    method: 'PATCH',
    url: '/orgs/{orgId}',
    path: {
        orgId: data.orgId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * List users with access to org
 * @param data The data for the request.
 * @param data.orgId This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org is implied by the domain in the url
 * @returns OrgAccessRead Users with access to org
 * @throws ApiError
 */
export const listOrgAccess = (data: ListOrgAccessData): CancelablePromise<ListOrgAccessResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/orgs/{orgId}/access',
    path: {
        orgId: data.orgId
    }
}); };

/**
 * Change who has access to org
 * @param data The data for the request.
 * @param data.orgId This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org is implied by the domain in the url
 * @param data.requestBody the changes to make
 * @returns unknown Success
 * @throws ApiError
 */
export const modifyOrgAccess = (data: ModifyOrgAccessData): CancelablePromise<ModifyOrgAccessResponse> => { return __request(OpenAPI, {
    method: 'PATCH',
    url: '/orgs/{orgId}/access',
    path: {
        orgId: data.orgId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * List workspaces and documents within an org
 * @param data The data for the request.
 * @param data.orgId This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org is implied by the domain in the url
 * @returns WorkspaceWithDocsAndDomain An org's workspaces and documents
 * @throws ApiError
 */
export const listWorkspaces = (data: ListWorkspacesData): CancelablePromise<ListWorkspacesResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/orgs/{orgId}/workspaces',
    path: {
        orgId: data.orgId
    }
}); };

/**
 * Create an empty workspace
 * @param data The data for the request.
 * @param data.orgId This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org is implied by the domain in the url
 * @param data.requestBody settings for the workspace
 * @returns number The workspace id
 * @throws ApiError
 */
export const createWorkspace = (data: CreateWorkspaceData): CancelablePromise<CreateWorkspaceResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/orgs/{orgId}/workspaces',
    path: {
        orgId: data.orgId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Describe a workspace
 * @param data The data for the request.
 * @param data.workspaceId An integer id
 * @returns WorkspaceWithDocsAndOrg A workspace
 * @throws ApiError
 */
export const describeWorkspace = (data: DescribeWorkspaceData): CancelablePromise<DescribeWorkspaceResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/workspaces/{workspaceId}',
    path: {
        workspaceId: data.workspaceId
    }
}); };

/**
 * Modify a workspace
 * @param data The data for the request.
 * @param data.workspaceId An integer id
 * @param data.requestBody the changes to make
 * @returns unknown Success
 * @throws ApiError
 */
export const modifyWorkspace = (data: ModifyWorkspaceData): CancelablePromise<ModifyWorkspaceResponse> => { return __request(OpenAPI, {
    method: 'PATCH',
    url: '/workspaces/{workspaceId}',
    path: {
        workspaceId: data.workspaceId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Delete a workspace
 * @param data The data for the request.
 * @param data.workspaceId An integer id
 * @returns unknown Success
 * @throws ApiError
 */
export const deleteWorkspace = (data: DeleteWorkspaceData): CancelablePromise<DeleteWorkspaceResponse> => { return __request(OpenAPI, {
    method: 'DELETE',
    url: '/workspaces/{workspaceId}',
    path: {
        workspaceId: data.workspaceId
    }
}); };

/**
 * Create an empty document
 * @param data The data for the request.
 * @param data.workspaceId An integer id
 * @param data.requestBody settings for the document
 * @returns string The document id
 * @throws ApiError
 */
export const createDoc = (data: CreateDocData): CancelablePromise<CreateDocResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/workspaces/{workspaceId}/docs',
    path: {
        workspaceId: data.workspaceId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * List users with access to workspace
 * @param data The data for the request.
 * @param data.workspaceId An integer id
 * @returns WorkspaceAccessRead Users with access to workspace
 * @throws ApiError
 */
export const listWorkspaceAccess = (data: ListWorkspaceAccessData): CancelablePromise<ListWorkspaceAccessResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/workspaces/{workspaceId}/access',
    path: {
        workspaceId: data.workspaceId
    }
}); };

/**
 * Change who has access to workspace
 * @param data The data for the request.
 * @param data.workspaceId An integer id
 * @param data.requestBody the changes to make
 * @returns unknown Success
 * @throws ApiError
 */
export const modifyWorkspaceAccess = (data: ModifyWorkspaceAccessData): CancelablePromise<ModifyWorkspaceAccessResponse> => { return __request(OpenAPI, {
    method: 'PATCH',
    url: '/workspaces/{workspaceId}/access',
    path: {
        workspaceId: data.workspaceId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Describe a document
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @returns DocWithWorkspace A document's metadata
 * @throws ApiError
 */
export const describeDoc = (data: DescribeDocData): CancelablePromise<DescribeDocResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/docs/{docId}',
    path: {
        docId: data.docId
    }
}); };

/**
 * Modify document metadata (but not its contents)
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.requestBody the changes to make
 * @returns unknown Success
 * @throws ApiError
 */
export const modifyDoc = (data: ModifyDocData): CancelablePromise<ModifyDocResponse> => { return __request(OpenAPI, {
    method: 'PATCH',
    url: '/docs/{docId}',
    path: {
        docId: data.docId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Delete a document
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @returns unknown Success
 * @throws ApiError
 */
export const deleteDoc = (data: DeleteDocData): CancelablePromise<DeleteDocResponse> => { return __request(OpenAPI, {
    method: 'DELETE',
    url: '/docs/{docId}',
    path: {
        docId: data.docId
    }
}); };

/**
 * Move document to another workspace in the same org.
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.requestBody the target workspace
 * @returns unknown Success
 * @throws ApiError
 */
export const moveDoc = (data: MoveDocData): CancelablePromise<MoveDocResponse> => { return __request(OpenAPI, {
    method: 'PATCH',
    url: '/docs/{docId}/move',
    path: {
        docId: data.docId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * List users with access to document
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @returns WorkspaceAccessRead Users with access to document
 * @throws ApiError
 */
export const listDocAccess = (data: ListDocAccessData): CancelablePromise<ListDocAccessResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/docs/{docId}/access',
    path: {
        docId: data.docId
    }
}); };

/**
 * Change who has access to document
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.requestBody the changes to make
 * @returns unknown Success
 * @throws ApiError
 */
export const modifyDocAccess = (data: ModifyDocAccessData): CancelablePromise<ModifyDocAccessResponse> => { return __request(OpenAPI, {
    method: 'PATCH',
    url: '/docs/{docId}/access',
    path: {
        docId: data.docId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Content of document, as an Sqlite file
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.nohistory
 * @param data.template
 * @returns binary A document's content in Sqlite form
 * @throws ApiError
 */
export const downloadDoc = (data: DownloadDocData): CancelablePromise<DownloadDocResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/docs/{docId}/download',
    path: {
        docId: data.docId
    },
    query: {
        nohistory: data.nohistory,
        template: data.template
    }
}); };

/**
 * Content of document, as an Excel file
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.header Format for headers. Labels tend to be more human-friendly while colIds are more normalized.
 * @returns binary A document's content in Excel form
 * @throws ApiError
 */
export const downloadDocXlsx = (data: DownloadDocXlsxData): CancelablePromise<DownloadDocXlsxResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/docs/{docId}/download/xlsx',
    path: {
        docId: data.docId
    },
    query: {
        header: data.header
    }
}); };

/**
 * Content of table, as a CSV file
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.tableId
 * @param data.header Format for headers. Labels tend to be more human-friendly while colIds are more normalized.
 * @returns string A table's content in CSV form
 * @throws ApiError
 */
export const downloadDocCsv = (data: DownloadDocCsvData): CancelablePromise<DownloadDocCsvResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/docs/{docId}/download/csv',
    path: {
        docId: data.docId
    },
    query: {
        tableId: data.tableId,
        header: data.header
    }
}); };

/**
 * The schema of a table
 * The schema follows [frictionlessdata's table-schema standard](https://specs.frictionlessdata.io/table-schema/).
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.tableId
 * @param data.header Format for headers. Labels tend to be more human-friendly while colIds are more normalized.
 * @returns TableSchemaResult A table's table-schema in JSON format.
 * @throws ApiError
 */
export const downloadTableSchema = (data: DownloadTableSchemaData): CancelablePromise<DownloadTableSchemaResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/docs/{docId}/download/table-schema',
    path: {
        docId: data.docId
    },
    query: {
        tableId: data.tableId,
        header: data.header
    }
}); };

/**
 * @deprecated
 * Fetch data from a table
 * Deprecated in favor of `records` endpoints. We have no immediate plans to remove these endpoints, but consider `records` a better starting point for new projects.
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.tableId normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables`
 * @param data.filter This is a JSON object mapping column names to arrays of allowed values.  For example, to filter column `pet` for values `cat` and `dog`, the filter would be `{"pet": ["cat", "dog"]}`. JSON contains characters that are not safe to place in a URL, so it is important to url-encode them.  For this example, the url-encoding is `%7B%22pet%22%3A%20%5B%22cat%22%2C%20%22dog%22%5D%7D`. See https://rosettacode.org/wiki/URL_encoding for how to url-encode a string, or https://www.urlencoder.org/ to try some examples. Multiple columns can be filtered. For example the filter for `pet` being either `cat` or `dog`, AND `size` being either `tiny` or `outrageously small`, would be `{"pet": ["cat", "dog"], "size": ["tiny", "outrageously small"]}`.
 * @param data.sort Order in which to return results. If a single column name is given (e.g. `pet`), results are placed in ascending order of values in that column. To get results in an order that was previously prepared manually in Grist, use the special `manualSort` column name. Multiple columns can be specified, separated by commas (e.g. `pet,age`). For descending order, prefix a column name with a `-` character (e.g. `pet,-age`). To include additional sorting options append them after a colon (e.g. `pet,-age:naturalSort;emptyFirst,owner`). Available options are: `choiceOrder`, `naturalSort`, `emptyFirst`. Without the `sort` parameter, the order of results is unspecified.
 * @param data.limit Return at most this number of rows.  A value of 0 is equivalent to having no limit.
 * @param data.xSort Same as `sort` query parameter.
 * @param data.xLimit Same as `limit` query parameter.
 * @returns Data Cells from the table
 * @throws ApiError
 */
export const getTableData = (data: GetTableDataData): CancelablePromise<GetTableDataResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/docs/{docId}/tables/{tableId}/data',
    path: {
        docId: data.docId,
        tableId: data.tableId
    },
    headers: {
        'X-Sort': data.xSort,
        'X-Limit': data.xLimit
    },
    query: {
        filter: data.filter,
        sort: data.sort,
        limit: data.limit
    }
}); };

/**
 * @deprecated
 * Add rows to a table
 * Deprecated in favor of `records` endpoints. We have no immediate plans to remove these endpoints, but consider `records` a better starting point for new projects.
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.tableId normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables`
 * @param data.requestBody the data to add
 * @param data.noparse Set to true to prohibit parsing strings according to the column type.
 * @returns RowIds IDs of rows added
 * @throws ApiError
 */
export const addRows = (data: AddRowsData): CancelablePromise<AddRowsResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/docs/{docId}/tables/{tableId}/data',
    path: {
        docId: data.docId,
        tableId: data.tableId
    },
    query: {
        noparse: data.noparse
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * @deprecated
 * Modify rows of a table
 * Deprecated in favor of `records` endpoints. We have no immediate plans to remove these endpoints, but consider `records` a better starting point for new projects.
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.tableId normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables`
 * @param data.requestBody the data to change, with ids
 * @param data.noparse Set to true to prohibit parsing strings according to the column type.
 * @returns RowIds IDs of rows modified
 * @throws ApiError
 */
export const modifyRows = (data: ModifyRowsData): CancelablePromise<ModifyRowsResponse> => { return __request(OpenAPI, {
    method: 'PATCH',
    url: '/docs/{docId}/tables/{tableId}/data',
    path: {
        docId: data.docId,
        tableId: data.tableId
    },
    query: {
        noparse: data.noparse
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Delete rows of a table
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.tableId normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables`
 * @param data.requestBody the IDs of rows to remove
 * @returns unknown Nothing returned
 * @throws ApiError
 */
export const deleteRows = (data: DeleteRowsData): CancelablePromise<DeleteRowsResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/docs/{docId}/tables/{tableId}/data/delete',
    path: {
        docId: data.docId,
        tableId: data.tableId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * List metadata of all attachments in a doc
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.filter This is a JSON object mapping column names to arrays of allowed values.  For example, to filter column `pet` for values `cat` and `dog`, the filter would be `{"pet": ["cat", "dog"]}`. JSON contains characters that are not safe to place in a URL, so it is important to url-encode them.  For this example, the url-encoding is `%7B%22pet%22%3A%20%5B%22cat%22%2C%20%22dog%22%5D%7D`. See https://rosettacode.org/wiki/URL_encoding for how to url-encode a string, or https://www.urlencoder.org/ to try some examples. Multiple columns can be filtered. For example the filter for `pet` being either `cat` or `dog`, AND `size` being either `tiny` or `outrageously small`, would be `{"pet": ["cat", "dog"], "size": ["tiny", "outrageously small"]}`.
 * @param data.sort Order in which to return results. If a single column name is given (e.g. `pet`), results are placed in ascending order of values in that column. To get results in an order that was previously prepared manually in Grist, use the special `manualSort` column name. Multiple columns can be specified, separated by commas (e.g. `pet,age`). For descending order, prefix a column name with a `-` character (e.g. `pet,-age`). To include additional sorting options append them after a colon (e.g. `pet,-age:naturalSort;emptyFirst,owner`). Available options are: `choiceOrder`, `naturalSort`, `emptyFirst`. Without the `sort` parameter, the order of results is unspecified.
 * @param data.limit Return at most this number of rows.  A value of 0 is equivalent to having no limit.
 * @param data.xSort Same as `sort` query parameter.
 * @param data.xLimit Same as `limit` query parameter.
 * @returns AttachmentMetadataList List of attachment metadata records. Note that the list may temporarily include records for attachments that are stored in the document but not referenced by any Attachments type cell.
 * @throws ApiError
 */
export const listAttachments = (data: ListAttachmentsData): CancelablePromise<ListAttachmentsResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/docs/{docId}/attachments',
    path: {
        docId: data.docId
    },
    headers: {
        'X-Sort': data.xSort,
        'X-Limit': data.xLimit
    },
    query: {
        filter: data.filter,
        sort: data.sort,
        limit: data.limit
    }
}); };

/**
 * Upload attachments to a doc
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.formData the files to add to the doc
 * @returns RowIds IDs of attachments added, one per file.
 * @throws ApiError
 */
export const uploadAttachments = (data: UploadAttachmentsData): CancelablePromise<UploadAttachmentsResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/docs/{docId}/attachments',
    path: {
        docId: data.docId
    },
    formData: data.formData,
    mediaType: 'multipart/form-data'
}); };

/**
 * Get the metadata for an attachment
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.attachmentId
 * @returns AttachmentMetadata Attachment metadata
 * @throws ApiError
 */
export const getAttachmentMetadata = (data: GetAttachmentMetadataData): CancelablePromise<GetAttachmentMetadataResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/docs/{docId}/attachments/{attachmentId}',
    path: {
        docId: data.docId,
        attachmentId: data.attachmentId
    }
}); };

/**
 * Download the contents of an attachment
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.attachmentId
 * @returns unknown Attachment contents, with suitable Content-Type.
 * @throws ApiError
 */
export const downloadAttachment = (data: DownloadAttachmentData): CancelablePromise<DownloadAttachmentResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/docs/{docId}/attachments/{attachmentId}/download',
    path: {
        docId: data.docId,
        attachmentId: data.attachmentId
    }
}); };

/**
 * Fetch records from a table
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.tableId normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables`
 * @param data.filter This is a JSON object mapping column names to arrays of allowed values.  For example, to filter column `pet` for values `cat` and `dog`, the filter would be `{"pet": ["cat", "dog"]}`. JSON contains characters that are not safe to place in a URL, so it is important to url-encode them.  For this example, the url-encoding is `%7B%22pet%22%3A%20%5B%22cat%22%2C%20%22dog%22%5D%7D`. See https://rosettacode.org/wiki/URL_encoding for how to url-encode a string, or https://www.urlencoder.org/ to try some examples. Multiple columns can be filtered. For example the filter for `pet` being either `cat` or `dog`, AND `size` being either `tiny` or `outrageously small`, would be `{"pet": ["cat", "dog"], "size": ["tiny", "outrageously small"]}`.
 * @param data.sort Order in which to return results. If a single column name is given (e.g. `pet`), results are placed in ascending order of values in that column. To get results in an order that was previously prepared manually in Grist, use the special `manualSort` column name. Multiple columns can be specified, separated by commas (e.g. `pet,age`). For descending order, prefix a column name with a `-` character (e.g. `pet,-age`). To include additional sorting options append them after a colon (e.g. `pet,-age:naturalSort;emptyFirst,owner`). Available options are: `choiceOrder`, `naturalSort`, `emptyFirst`. Without the `sort` parameter, the order of results is unspecified.
 * @param data.limit Return at most this number of rows.  A value of 0 is equivalent to having no limit.
 * @param data.xSort Same as `sort` query parameter.
 * @param data.xLimit Same as `limit` query parameter.
 * @param data.hidden Set to true to include the hidden columns (like "manualSort")
 * @returns RecordsList Records from the table
 * @throws ApiError
 */
export const listRecords = (data: ListRecordsData): CancelablePromise<ListRecordsResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/docs/{docId}/tables/{tableId}/records',
    path: {
        docId: data.docId,
        tableId: data.tableId
    },
    headers: {
        'X-Sort': data.xSort,
        'X-Limit': data.xLimit
    },
    query: {
        filter: data.filter,
        sort: data.sort,
        limit: data.limit,
        hidden: data.hidden
    }
}); };

/**
 * Add records to a table
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.tableId normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables`
 * @param data.requestBody the records to add
 * @param data.noparse Set to true to prohibit parsing strings according to the column type.
 * @returns RecordsWithoutFields IDs of records added
 * @throws ApiError
 */
export const addRecords = (data: AddRecordsData): CancelablePromise<AddRecordsResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/docs/{docId}/tables/{tableId}/records',
    path: {
        docId: data.docId,
        tableId: data.tableId
    },
    query: {
        noparse: data.noparse
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Modify records of a table
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.tableId normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables`
 * @param data.requestBody the records to change, with ids
 * @param data.noparse Set to true to prohibit parsing strings according to the column type.
 * @returns unknown Success
 * @throws ApiError
 */
export const modifyRecords = (data: ModifyRecordsData): CancelablePromise<ModifyRecordsResponse> => { return __request(OpenAPI, {
    method: 'PATCH',
    url: '/docs/{docId}/tables/{tableId}/records',
    path: {
        docId: data.docId,
        tableId: data.tableId
    },
    query: {
        noparse: data.noparse
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Add or update records of a table
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.tableId normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables`
 * @param data.requestBody The records to add or update. Instead of an id, a `require` object is provided, with the same structure as `fields`. If no query parameter options are set, then the operation is as follows. First, we check if a record exists matching the values specified for columns in `require`. If so, we update it by setting the values specified for columns in `fields`. If not, we create a new record with a combination of the values in `require` and `fields`, with `fields` taking priority if the same column is specified in both. The query parameters allow for variations on this behavior.
 *
 * @param data.noparse Set to true to prohibit parsing strings according to the column type.
 * @param data.onmany
 * @param data.noadd
 * @param data.noupdate
 * @param data.allowEmptyRequire
 * @returns unknown Success
 * @throws ApiError
 */
export const replaceRecords = (data: ReplaceRecordsData): CancelablePromise<ReplaceRecordsResponse> => { return __request(OpenAPI, {
    method: 'PUT',
    url: '/docs/{docId}/tables/{tableId}/records',
    path: {
        docId: data.docId,
        tableId: data.tableId
    },
    query: {
        noparse: data.noparse,
        onmany: data.onmany,
        noadd: data.noadd,
        noupdate: data.noupdate,
        allow_empty_require: data.allowEmptyRequire
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * List tables in a document
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @returns TablesList The tables in a document
 * @throws ApiError
 */
export const listTables = (data: ListTablesData): CancelablePromise<ListTablesResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/docs/{docId}/tables',
    path: {
        docId: data.docId
    }
}); };

/**
 * Add tables to a document
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.requestBody the tables to add
 * @returns TablesWithoutFields The table created
 * @throws ApiError
 */
export const addTables = (data: AddTablesData): CancelablePromise<AddTablesResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/docs/{docId}/tables',
    path: {
        docId: data.docId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Modify tables of a document
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.requestBody the tables to change, with ids
 * @returns unknown Success
 * @throws ApiError
 */
export const modifyTables = (data: ModifyTablesData): CancelablePromise<ModifyTablesResponse> => { return __request(OpenAPI, {
    method: 'PATCH',
    url: '/docs/{docId}/tables',
    path: {
        docId: data.docId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * List columns in a table
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.tableId normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables`
 * @param data.hidden Set to true to include the hidden columns (like "manualSort")
 * @returns ColumnsList The columns in a table
 * @throws ApiError
 */
export const listColumns = (data: ListColumnsData): CancelablePromise<ListColumnsResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/docs/{docId}/tables/{tableId}/columns',
    path: {
        docId: data.docId,
        tableId: data.tableId
    },
    query: {
        hidden: data.hidden
    }
}); };

/**
 * Add columns to a table
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.tableId normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables`
 * @param data.requestBody the columns to add
 * @returns ColumnsWithoutFields The columns created
 * @throws ApiError
 */
export const addColumns = (data: AddColumnsData): CancelablePromise<AddColumnsResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/docs/{docId}/tables/{tableId}/columns',
    path: {
        docId: data.docId,
        tableId: data.tableId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Modify columns of a table
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.tableId normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables`
 * @param data.requestBody the columns to change, with ids
 * @returns unknown Success
 * @throws ApiError
 */
export const modifyColumns = (data: ModifyColumnsData): CancelablePromise<ModifyColumnsResponse> => { return __request(OpenAPI, {
    method: 'PATCH',
    url: '/docs/{docId}/tables/{tableId}/columns',
    path: {
        docId: data.docId,
        tableId: data.tableId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Add or update columns of a table
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.tableId normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables`
 * @param data.requestBody The columns to add or update. We check whether the specified column ID exists: if so, the column is updated with the provided data, otherwise a new column is created.
 * Also note that some query parameters alter this behavior.
 *
 * @param data.noadd
 * @param data.noupdate
 * @param data.replaceall
 * @returns unknown Success
 * @throws ApiError
 */
export const replaceColumns = (data: ReplaceColumnsData): CancelablePromise<ReplaceColumnsResponse> => { return __request(OpenAPI, {
    method: 'PUT',
    url: '/docs/{docId}/tables/{tableId}/columns',
    path: {
        docId: data.docId,
        tableId: data.tableId
    },
    query: {
        noadd: data.noadd,
        noupdate: data.noupdate,
        replaceall: data.replaceall
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Delete a column of a table
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.tableId normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables`
 * @param data.colId The column id (without the starting `$`) as shown in the column configuration below the label
 * @returns unknown Success
 * @throws ApiError
 */
export const deleteColumn = (data: DeleteColumnData): CancelablePromise<DeleteColumnResponse> => { return __request(OpenAPI, {
    method: 'DELETE',
    url: '/docs/{docId}/tables/{tableId}/columns/{colId}',
    path: {
        docId: data.docId,
        tableId: data.tableId,
        colId: data.colId
    }
}); };

/**
 * Webhooks associated with a document
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @returns unknown A list of webhooks.
 * @throws ApiError
 */
export const getDocsByDocIdWebhooks = (data: GetDocsByDocIdWebhooksData): CancelablePromise<GetDocsByDocIdWebhooksResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/docs/{docId}/webhooks',
    path: {
        docId: data.docId
    }
}); };

/**
 * Create new webhooks for a document
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.requestBody an array of webhook settings
 * @returns unknown Success
 * @throws ApiError
 */
export const postDocsByDocIdWebhooks = (data: PostDocsByDocIdWebhooksData): CancelablePromise<PostDocsByDocIdWebhooksResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/docs/{docId}/webhooks',
    path: {
        docId: data.docId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Modify a webhook
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.webhookId
 * @param data.requestBody the changes to make
 * @returns unknown Success.
 * @throws ApiError
 */
export const patchDocsByDocIdWebhooksByWebhookId = (data: PatchDocsByDocIdWebhooksByWebhookIdData): CancelablePromise<PatchDocsByDocIdWebhooksByWebhookIdResponse> => { return __request(OpenAPI, {
    method: 'PATCH',
    url: '/docs/{docId}/webhooks/{webhookId}',
    path: {
        docId: data.docId,
        webhookId: data.webhookId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Remove a webhook
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.webhookId
 * @returns unknown Success.
 * @throws ApiError
 */
export const deleteDocsByDocIdWebhooksByWebhookId = (data: DeleteDocsByDocIdWebhooksByWebhookIdData): CancelablePromise<DeleteDocsByDocIdWebhooksByWebhookIdResponse> => { return __request(OpenAPI, {
    method: 'DELETE',
    url: '/docs/{docId}/webhooks/{webhookId}',
    path: {
        docId: data.docId,
        webhookId: data.webhookId
    }
}); };

/**
 * Empty a document's queue of undelivered payloads
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @returns unknown Success.
 * @throws ApiError
 */
export const deleteDocsByDocIdWebhooksQueue = (data: DeleteDocsByDocIdWebhooksQueueData): CancelablePromise<DeleteDocsByDocIdWebhooksQueueResponse> => { return __request(OpenAPI, {
    method: 'DELETE',
    url: '/docs/{docId}/webhooks/queue',
    path: {
        docId: data.docId
    }
}); };

/**
 * Run an SQL query against a document
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.q
 * @returns SqlResultSet The result set for the query.
 * @throws ApiError
 */
export const getDocsByDocIdSql = (data: GetDocsByDocIdSqlData): CancelablePromise<GetDocsByDocIdSqlResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/docs/{docId}/sql',
    path: {
        docId: data.docId
    },
    query: {
        q: data.q
    }
}); };

/**
 * Run an SQL query against a document, with options or parameters
 * @param data The data for the request.
 * @param data.docId A string id (UUID)
 * @param data.requestBody Query options
 * @returns SqlResultSet The result set for the query.
 * @throws ApiError
 */
export const postDocsByDocIdSql = (data: PostDocsByDocIdSqlData): CancelablePromise<PostDocsByDocIdSqlResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/docs/{docId}/sql',
    path: {
        docId: data.docId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };