const form = document.getElementById("form")

form.addEventListener("submit", function(event){
    event.preventDefault() // 새로고침 차단

    let userId = event.target.id.value
    let userPw1 = event.target.pw1.value
    let userPw2 = event.target.pw2.value
    let userName = event.target.name.value
    let userPhone = event.target.phone.value
    let userPosition = event.target.position.value
    let userGender = event.target.gender.value
    let userEmail = event.target.email_id.value
    let userIntro = event.target.intro.value

    if(userId.length < 6){
        alert("아이다 짧습니다 6자 이상입력해 주세요")
        return
    }

    if(userPw1 !== userPw2){
        alert("비밀번호를 일치하지 않습니다")
        return
    }

    

    document,ReportBody.inneerHTML = ""
    document.write(`
        <p>
        {userId}님 환영합니다<br>
        회원가입시 입력하신 내역은 다음과 같습니다<br>
        아이디 : inu9431<br>
        이름 : 김오즈<br>
        전화번호 : 010-1111-1111<br>
        원하는 직무 : 개발자<br>
        </p>`)

    
})