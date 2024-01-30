

export interface sectionsType{
    title:string;
    caption:string;
    body:string | {title:string; list:string[]}[] | {paragraphs:string[],title:string};
    image:string;
}
export interface userType {
    name: string;
    email?: string;
    avatar: string;
    _id?: string;
}
export interface blogType {
    mainImg: string;
    timeOfHour: string;
    timeOfDay: string;
    tags: string[];
    title: string;
    category: string;
    sections: sectionsType[],
    slug:string,
    createdBy:userType
}



export interface imageType {
    url: string;
    public_id: string;
}

export interface userType {
    name: string;
    email?: string;
    avatar: string;
    _id?: string;
}
export interface commentType {
    _id: string;
    text: string;
    createdBy: userType;
    parent: null | commentType;
}

export interface suggestedPost {
    title: string;
    mainImg: string;
    timeOfDay: string;
    timeOfHour: string;
    slug: string;
}
