import { atom } from "recoil";

export const EmailSet = atom<string>({
    key: "email",
    default: "example@naver.com",
});

export const SearchKeyword = atom<string>({
    key: "Keyword",
    default: "",
});

export const FindUserId = atom<number>({
    key: "UserId",
    default: -1,
});
