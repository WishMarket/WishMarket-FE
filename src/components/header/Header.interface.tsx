export interface Token {
    token: string | null;
}

export interface TabStateType {
    tabNotify: boolean;
}

export interface ToggleStateType {
    tabState: boolean;
    setTabState: React.Dispatch<React.SetStateAction<boolean>>;
    token: string | null;
}

export interface HandleToggleType {
    handleToggleMenu: () => void;
    toggleClose: (e: any) => void;
}
