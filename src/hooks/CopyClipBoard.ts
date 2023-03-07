export const CopyClipBoard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
    } catch (e) {
    }
};
