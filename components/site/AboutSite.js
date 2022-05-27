import React from "react";
import styles from "@/styles/Profile.module.css"
import style from '@/styles/Float.module.css'

export function AboutSite(){
     return(<>
      <div class="row">
        <div class="col-sm-4">
          <div class="card"> 
            <img src="https://ifh.cc/g/ZfTlKK.png" class="card-img-top" alt="악보나라" style={{width: 200+"px", margin: "0 auto"}}/>
            <div class="card-body">
              <h5 class="card-title">악보나라</h5> 
              <p class="card-text">피아노 악보, 기타, 베이스, 드럼 등 전문 악보 판매 사이트</p>
              <a href="https://www.akbonara.co.kr/" class="btn btn-dark">바로가기</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
        <div class="card">
            <img src="https://cdn.loud.kr/prod/public/thumb/ORDER_SUB_22676_1_121113205154.jpg" class="card-img-top" alt="악보나라" style={{width: 200+"px", margin: "0 auto"}}/>
            <div class="card-body">
              <h5 class="card-title">악보바다</h5> 
              <p class="card-text">피아노 악보, 기타, 베이스, 드럼 등 전문 악보 판매 사이트</p>
              <a href="http://www.akbobada.com/" class="btn btn-dark">바로가기</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img src="https://contents.nextunicorn.kr/company/cfbd46f249c119b7/rep-d02b17520e03871f1b041f7d31e51d17f38d.jpg?s=640x&t=cover&f=jpg" class="card-img-top" alt="악보나라" style={{width: 240+"px", margin: "0 auto"}}/>
            <div class="card-body">
              <h5 class="card-title">사운드리더</h5>
              <p class="card-text">피아노 악보, 기타, 베이스, 드럼 등 전문 악보 판매 사이트</p>
              <a href="https://www.soundleader.co.kr/?gclid=CjwKCAjwp7eUBhBeEiwAZbHwkZBSAwVFYT0A_zz9ILb-rsxJGVOVdn0y_ZUeqM5YLe9nLO_68mVwCRoCS3wQAvD_BwE" class="btn btn-dark">바로가기</a>
            </div>
          </div>
        </div>
      </div><br/><br/>
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <img src="https://lh3.googleusercontent.com/p/AF1QipNUc4T4BX7WtETCzMG_E36k9CWFAHUyl2vNgusY=w1080-h608-p-no-v0" class="card-img-top" alt="악보나라" style={{width: 350+"px", margin: "0 auto"}}/>
            <div class="card-body">
              <h5 class="card-title">악보세상</h5>
              <p class="card-text">피아노 악보, 기타, 베이스, 드럼 등 전문 악보 판매 사이트</p>
              <a href="https://www.akbosesang.co.kr/home/" class="btn btn-dark">바로가기</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img src="https://blog.kakaocdn.net/dn/ch8uwl/btq3q7JdPST/a5ZxmU44nDaM2YiiCY8Ayk/img.png" class="card-img-top" alt="악보나라" style={{width: 300+"px", margin: "0 auto"}}/>
            <div class="card-body">
              <h5 class="card-title">크몽</h5>
              <p class="card-text">피아노 악보, 기타, 베이스, 드럼 등 전문 악보 판매 사이트</p>
              <a href="https://kmong.com/category/718?utm_source=google&utm_medium=cpc&utm_campaign=7&utm_content=2category&utm_group=718&utm_term=%EB%B0%B4%EB%93%9C%EC%95%85%EB%B3%B4&gclid=CjwKCAjwp7eUBhBeEiwAZbHwkUMegTZ80NsMlM2MrWDLGiudqA-dk__z6yS_Pv97dZWGUNQAmWsAVRoCd1sQAvD_BwE" class="btn btn-dark">바로가기</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img src="https://pbs.twimg.com/profile_images/654078067900481536/MMaVvFCM_400x400.jpg" class="card-img-top" alt="악보나라" style={{width: 200+"px", margin: "0 auto"}}/>
            <div class="card-body">
              <h5 class="card-title">smppress</h5>
              <p class="card-text">피아노 악보, 기타, 베이스, 드럼 등 전문 악보 판매 사이트</p>
              <a href="https://smppress.sheetmusicplus.com/" class="btn btn-dark">바로가기</a>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className={style.float}>
            <img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
        </a>
      </>)
}