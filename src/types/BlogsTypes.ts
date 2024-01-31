export interface sectionsType {
    title: string;
    caption: string;
    body: sectionBodyType;
    image?: string;
}

export interface sectionBodyType {
    title?: string;
    paragraphs?: string[];
    list?: { title?: string; listItems: string[]; orderedList: boolean };
    order?: string[];
}
export interface userType {
    name: string;
    email?: string;
    // avatar: string;
    _id?: string;
}
export interface blogType {
    mainImg: string;
    timeOfHour: string;
    timeOfDay: string;
    tags: string[];
    title: string;
    caption: string;
    category: string;
    mainText?: string[];
    sections: sectionsType[];
    slug: string;
    createdBy: userType;
}

export interface imageType {
    url: string;
    public_id: string;
}

export interface userType {
    name: string;
    email?: string;
    // avatar: string;
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
