export interface blogType {
    mainImg: imageType;
    createdBy: userType;
    createdAt: string;
    tags: string[];
    title: string;
    caption: string;
    slug: string;
    body: string;
    category: categoryType;
    comments: commentType[];
    _id: string;
}

interface categoryType {
    _id: string;
    name:string;
}
export interface imageType {
    url: string;
    public_id: string;
}

export interface userType {
    name: string;
    email: string;
    avatar: imageType;
}
export interface commentType {
    _id: string;
    text: string;
    createdBy: userType;
    parent: null | commentType;
}
