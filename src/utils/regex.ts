export const validatePhone = (phone: string) => {
    const regex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    return phone.replace(regex, "");
};

export const validateNickname = (nickname: string) => {
    const regex = /^.{3,8}$/;
    return nickname.replace(regex, "");
};

export const validateEmail = (email: string) => {
    const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
};

export const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
};

export const removeWhitespace = (text: string) => {
    const regex = /\s/g;
    return text.replace(regex, "");
};
