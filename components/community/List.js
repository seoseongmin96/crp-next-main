import style from '@/styles/Float.module.css'
export function List() {
    return(<>
        <div class="shadow p-3 mb-5 bg-white rounded">
            <h6 class="border-bottom border-gray pb-2 mb-0">자유게시판</h6>
            <div class="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" class="mr-2 rounded"/>
            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">@서성민</strong>
                
                작곡 프로그램으로 다양한 작곡을 했습니다.
            </p>
            </div>
            <div class="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1" alt="" class="mr-2 rounded"/>
            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">@권혜민</strong>
                프로그램을 유용하게 잘 쓰고 있습니다.
            </p>
            </div>
            <div class="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=6f42c1&fg=6f42c1&size=1" alt="" class="mr-2 rounded"/>
            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">@최은아</strong>
                저희 회사 프로그램 추천 많이 해주세요.
            </p>
            </div>
            <small class="d-block text-right mt-3">
            <a href="#">업데이트</a>
            </small>
        </div>
        <a href="/community/board"><button type="submit" class="btn btn-outline-dark">글쓰기</button></a>
        <a href="#" className={style.float}>
            <img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
        </a>
    </>)
}