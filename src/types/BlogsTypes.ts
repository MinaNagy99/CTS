import { createContext } from "react";

export interface sectionsType {
    title: string;
    caption: string;
    body: sectionBodyType;
    image?: string;
}
export const blogContext = createContext<valueOfContextType | null>(null);

export type valueOfContextType = {
    Blogs: blogType[];
};

export interface sectionBodyType {
    title?: string;
    paragraphs?: string[];
    list?: listType[];
    order?: string[];
}
export interface listType {
    title?: string;
    listItems: string[];
    orderedList: boolean;
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
