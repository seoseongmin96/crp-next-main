import Image from "next/image";
import Link from 'next/link'
import styles from '@/styles/Float.module.css'
import { symbolName } from "typescript";

export function Home() {
  return (
    <>
    <main role="main">
      <div class="container">
      <div class="position-relative overflow-hidden p-6 p-md-3 m-md-1 text-center text-light bg-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1530950774950-6376cbdcf385?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzE1fHxtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600')"}}>
      {/* <div class="bg-image" style={{backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg')", height:30+"vh"}}> */}
        <div class="col-md-11 p-lg-5 mx-auto my-4">
          <p class="display-6 font-weight-normal">CRP를 이용해보세요</p>
          <p class="lead font-weight-normal">챗봇으로 악보 표절 검사와 분석, 음원 검색을 할 수 있습니다.</p>
          <a class="btn btn-outline-light" href="#">시작하기</a>
          </div>
          <div class="product-device box-shadow d-none d-md-block"></div>
          <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div> <br/> <br/> <br/>
        <div class="row">
            <h2> CRP 주요 프로그램</h2> <br/><br/> <br/>
            <div class="col-md-4">
              
              <img src="https://cdn.aitimes.com/news/photo/202110/140852_142591_545.jpg" class="card-img-top" alt="..." style={{width: 250, height: 200 +"px", margin: "0 auto"}}/> <br/> <br/>
              <h4>악보 표절 검사 및 분석</h4>
              <p>표절과 분석을 확인할 수 있습니다. </p>
              <p><a class="btn btn-secondary" href="/plagiarism/upload" role="button">시작하기 &raquo;</a></p>
            </div>
            <div class="col-md-4">
            <img src="http://cdn.dtoday.co.kr/news/photo/201712/259123_175143_4232.jpg" class="card-img-top" alt="..." style={{width: 250, height: 200 +"px", margin: "0 auto"}}/>  <br/> <br/>
              <h4>음원 검색 및 추천</h4>
              <p>찾고 싶은 음악을 들려주세요.</p>
              <p><a class="btn btn-secondary" href="/music/musicPlay" role="button">시작하기 &raquo;</a></p>
            </div>
            <div class="col-md-4">
            <img src="https://t1.daumcdn.net/cfile/tistory/9975AD375B78D12B05" class="card-img-top" alt="..." style={{width: 250, height: 200 +"px", margin: "0 auto"}}/>  <br/> <br/>
              <h4>작곡 프로그램</h4>
              <p>누구나 손쉽게 작곡할 수 있어요.</p>
              <p><a class="btn btn-secondary" href="/compose/compose" role="button">시작하기 &raquo;</a></p>
            </div>
        </div>
        <br/><br/>
        <div style={{display: "flex"}}>
          <div class="input-group rounded">
            <input type="search" class="form-control rounded" placeholder="음원 검색" aria-label="Search" aria-describedby="search-addon" />
            <span class="input-group-text border-0" id="search-addon" style={{backgroundColor:"white"}}>
              <a href="/music/musicPlay" style={{color:"black"}}><i class="bi bi-mic-fill"></i></a>
            </span>
          </div>
        </div> <br/><br/>
        <div>
          <section class="mb-4">
            <h2 class="h1-responsive font-weight-bold text-center my-4">문의하기</h2>
            <p class="text-center w-responsive mx-auto mb-5">궁금한 사항은 문의를 주시면 친절하고 신속하게 답변 드리겠습니다.</p>
            <div class="row">
                <div class="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                  <label for="name" class="">성명</label>
                                  <input type="text" id="name" name="name" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                  <label for="email" class=""> 이메일</label>
                                  <input type="text" id="email" name="email" class="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                  <label for="subject" class="">연락처</label>
                                  <input type="text" id="subject" name="subject" class="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form">
                                  <label for="message">문의내용</label>
                                  <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                </div>

                            </div>
                        </div>
                    </form><br/>
                    <div class="text-center text-md-left">
                        <a class="btn btn-dark" onclick="document.getElementById('contact-form').submit();">제출하기</a>
                    </div>
                    <div class="status"></div>
                </div>
                <div class="col-md-3 text-center">
                    <ul class="list-unstyled mb-0">
                        <li><i class="fa fa-map-marker-alt fa"></i>
                            <p style={{fontSize: 15+"px"}}>서울특별시 강남구 819 3 삼오빌딩 5-8층</p>
                        </li>
                        <li><i class="fa fa-phone mt-4 fa"></i>
                            <p>+ 01 234 567 89</p>
                        </li>
                        <li><i class="fa fa-envelope mt-4 fa"></i>
                            <p>crp.kr</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
        
    </div> 
    </main>
    
    <a href="#" className={styles.float}>
      <img src='https://ifh.cc/g/5y48Hl.png' className={styles.my} style={{width:40+"px", height:40+"px"}}/>
    </a>
    </>
  )
}