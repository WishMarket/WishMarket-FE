export function SignUpError(errorCode: number) {
  if (errorCode == 1) {
    return <div>두 비밀번호가 일치하지 않습니다.</div>;
  } else if (errorCode == 2) {
    return <div>비밀번호 길이는 8글자 이상 이어야 합니다.</div>;
  }
}

export function FindPasswdError(errorCode: number) {
  if (errorCode ==0) {
    return <div>인증 코드가 이메일로 발송되었습니다.</div>
  }
  else if (errorCode == 1) {
    return <div>빈 항목이 있습니다.</div>
  } else if (errorCode == 2) {
    return <div>일치하는 계정이 없습니다.</div>
  }
}