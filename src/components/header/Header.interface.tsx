export interface Token {
    token: string | null;
}

export interface TabStateType {
    tabNotify: boolean;
    setTabNotify: React.Dispatch<React.SetStateAction<boolean>>;
    notify: number;
    setNotify: React.Dispatch<React.SetStateAction<number>>;
}

export interface NotifyItem {
    item: NotifyType;
    notify: number;
    setNotify: React.Dispatch<React.SetStateAction<number>>;
}

export interface ToggleStateType {
    tabState: boolean;
    setTabState: React.Dispatch<React.SetStateAction<boolean>>;
    token: string | null;
}

export interface NotifyType {
    id: number;
    contents: string;
    read: boolean;
}

export interface HandleToggleType {
    handleToggleMenu: () => void;
    toggleClose: (e: any) => void;
}
