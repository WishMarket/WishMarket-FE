export const TransformDate = (str: string) => {
    const year = Number(str.substring(0, 3));
    const month = Number(str.substring(5, 6));
    const day = Number(str.substring(8, 9));
    const hour = Number(str.substring(11, 12));

    return new Date(year, month, day, hour, 0, 0, 0);
};

export const testDate = (str: string) => {
    const dateStr = str.substring(0, 8);

    return new Date(dateStr);
};
