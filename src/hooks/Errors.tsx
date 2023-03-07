export function SignUpError(errorCode: string) {
  return <div>{errorCode}</div>;
}

export function EmailCheckError(errorCode: string) {
  return <div>{errorCode}</div>;
}

export function FindPasswdError(errorCode: string) {
  return <div>{errorCode}</div>;
}

export function LoginError(errorCode: number) {
  if (errorCode == 400) {
    return <div>존재하지 않는 Email 입니다.</div>;
  }
}
export function FundingStartError(errorCode: number) {
  if (errorCode == 1) {
    return <div>펀딩 마감 기간이 설정되지 않았습니다.</div>;
  } else if (errorCode == 2) {
    return <div>펀딩 받을 친구가 설정되지 않았습니다.</div>;
  } else if (errorCode == 3) {
    return <div>펀딩 최소금액은 10원 이상이어야 합니다.</div>;
  }
}

export function FriendsError(errorCode: number, name: string) {
  if (errorCode == 0) {
    return <div>"{name}"님을 친구추가 하였습니다.</div>;
  } else if (errorCode == 1) {
    return <div>"{name}"님을 친구삭제 하였습니다.</div>;
  }
}
