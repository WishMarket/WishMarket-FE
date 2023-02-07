export const CopyClipBoard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log("복사성공");
    } catch (e) {
        console.log("복사실패");
    }
};
