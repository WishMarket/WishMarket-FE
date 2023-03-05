export const GetAccessTokenExpiredAt = () => {
  return window.localStorage.getItem("accessTokenExpiredAt");
};
export const GetRefreshTokenExpiredAt = () => {
    return window.localStorage.getItem("refreshTokenExpiredAt");
}
export const SetAccessToken = (accessToken:string, accessTokenExpiredAt:string) => {
  window.localStorage.setItem("accessToken", accessToken);
  window.localStorage.setItem("accessTokenExpiredAt", accessTokenExpiredAt);
};

export const SetRefreshToken = (
  refreshToken: string,
  refreshTokenExpiredAt: string
) => {
  window.localStorage.setItem("refreshToken", refreshToken);
  window.localStorage.setItem("refreshTokenExpiredAt", refreshTokenExpiredAt);
};

export const RemoveTokens = () => {
  window.localStorage.removeItem('accessToken');
  window.localStorage.removeItem('accessTokenExpiredAt');
  window.localStorage.removeItem('refreshToken');
  window.localStorage.removeItem('refreshTokenExpiredAt');
};