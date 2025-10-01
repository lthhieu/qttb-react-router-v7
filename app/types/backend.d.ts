export interface IBackendRes<T> {
    error?: string | string[];
    message: string;
    success: boolean;
    data?: T;
    meta?: Meta
}
export interface Meta {
    "current": number,
    "pageSize": number,
    "pages": number,
    "total": number
}
export interface IPosts {
    content: string
    slug: string
    thumbnail: string
    title: string
    mimetype: string
    createdAt: Date
    _id: string
}[]

export interface IForms {
    "_id": string,
    "name": string,
    "issueDate": Date,
    "file": string,
    "categoryFormId": {
        "_id": string,
        "name": string
    },
    "createdAt": Date,
    "updatedAt": Date,
    "mimetype": string,
    filelink?: string
}

export interface IFormCategories {
    "_id": string,
    "name": string,
    "createdAt": Date,
    "updatedAt": Date,
}

export interface IRules {
    "_id": string,
    "bio": string,
    "issueDate": Date,
    "file": string,
    "categoryRuleId": {
        "_id": string,
        "name": string
    },
    signNumber: string,
    "createdAt": Date,
    "updatedAt": Date,
    "mimetype": string,
    filelink?: string
}

export interface IRuleCategories {
    "_id": string,
    "name": string,
    "createdAt": Date,
    "updatedAt": Date,
}