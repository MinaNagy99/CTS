import { createContext } from "react";
import { valueOfContextType } from "../../../types/BlogsTypes";

export const blogContext = createContext<valueOfContextType | null>(null);
