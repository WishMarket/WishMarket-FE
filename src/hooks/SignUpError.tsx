export function SignUpError(errorCode:number) {
    if (errorCode==1) {
        return (
            <div>
                두 비밀번호가 일치하지 않습니다.
            </div>
        )
    } else if (errorCode == 2) {
         return <div>비밀번호 길이는 8글자 이상 이어야 합니다.</div>;
    }
}
