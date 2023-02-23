export function SignUpError(errorCode: string) {
  return <div>{errorCode}</div>;
}

export function EmailCheckError(errorCode: string) {
  return <div>{errorCode}</div>
}

export function FindPasswdError(errorCode: number) {
  if (errorCode == 0) {
    return <div>인증 코드가 이메일로 발송되었습니다.</div>;
  } else if (errorCode == 1) {
    return <div>빈 항목이 있습니다.</div>;
  } else if (errorCode == 2) {
    return <div>일치하는 계정이 없습니다.</div>;
  } else if (errorCode == 3) {
    return <div>인증 시간이 초과되었습니다.</div>;
  }
}

export function LoginError(errorCode: number) {
  if (errorCode == 400) {
    return <div>존재하지 않는 Email 입니다.</div>
  }
}
export function FundingStartError(errorCode: number) {
  if (errorCode ==0) {
    return <div>펀딩을 시작합니다!</div>
  }
  else if (errorCode == 1) {
    return <div>펀딩 마감 기간이 설정되지 않았습니다.</div>
  } else if (errorCode == 2) {
    return <div>펀딩 받을 친구가 설정되지 않았습니다.</div>
  }else if (errorCode == 3) {
    return <div>펀딩 최소금액은 1000원 이상이어야 합니다.</div>
  }
}

export function FriendsError(errorCode: number,name:string) {
  if (errorCode == 0) {
    return <div>"{name}"님을 친구추가 하였습니다.</div>
  } else if (errorCode == 1) {
    return <div>"{name}"님을 친구삭제 하였습니다.</div>
  }
}
