import style from '@/styles/Float.module.css'
export function Register() {
    return(<>
<h2 class="text-uppercase text-center mb-5">무료로 가입하고 이용해보세요</h2>

<form>

  <div class="form-outline mb-4">
    <label class="form-label" for="form3Example1cg">이름</label>
    <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
  </div>

  <div class="form-outline mb-4">
    <label class="form-label" for="form3Example3cg">이메일</label>
    <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
  </div>

  <div class="form-outline mb-4">
    <label class="form-label" for="form3Example4cg">비밀번호</label>
    <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
  </div>

  <div class="form-outline mb-4">
  <label class="form-label" for="form3Example4cdg">비밀번호 재확인</label>
    <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
  </div>

  <div class="form-check d-flex justify-content-center mb-5">
    <input class="form-check-input me-2"    type="checkbox" value="" id="form2Example3cg" />
    <label class="form-check-label" for="form2Example3g">
    모든 서비스 이용약관에 동의합니다. <a href="#!" class="text-body"></a>
    </label>
  </div>

  <div class="d-flex justify-content-center">
  <button type="button" class="btn btn-dark btn-block mb-4" style={{width: 600+"px"}}>가입하기</button>  
  </div>

  <p class="text-center text-muted mt-5 mb-0">이미 회원이신가요? <a href="/user/login"
      class="fw-bold text-body"><u>로그인</u></a></p>

</form>
<a href="#" className={style.float}>
            <img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
        </a>
    </>)
   
}