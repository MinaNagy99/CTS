import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type MyContextType = {
    currentLng: string;
    setcurrentLng: Dispatch<SetStateAction<string>>;
};

export const MyContext = createContext<MyContextType>({
    currentLng: 'ar',
    setcurrentLng: () => {},
});

type MyContextProviderProps = {
    children: ReactNode;
};

function MyContextProvider(props: MyContextProviderProps) {
    const [currentLng, setcurrentLng] = useState<string>('ar');

    const contextValue: MyContextType = {
        currentLng,
        setcurrentLng,
    };

    return <MyContext.Provider value={contextValue}>{props.children}</MyContext.Provider>;
}

export default MyContextProvider;
