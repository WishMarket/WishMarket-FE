import { atom } from "recoil";

export const EmailSet = atom<string>({
    key: 'email',
    default: 'example@naver.com',
});