export function ContactUs() {
    return(<>
    <div style={{width: 800+"px"}}>
        <form>
            <div class="form-outline mb-4">
                <label class="form-label" for="form4Example1">이름</label>
                <input type="text" id="form4Example1" class="form-control" />
            </div>

            <div class="form-outline mb-4">
                <label class="form-label" for="form4Example2">이메일</label>
                <input type="email" id="form4Example2" class="form-control" />
            </div>
            
            <div class="form-outline mb-4">
                <label class="form-label" for="form4Example3">문의내용</label>
                <textarea class="form-control" id="form4Example3" rows="4"></textarea>
            </div>
            
            <div class="form-check d-flex justify-content-center mb-4">
                <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                <label class="form-check-label" for="form4Example4">
                    문의할 내용을 보내주시기 바랍니다.
                </label>
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-4">제출하기</button>
        </form>
    </div>
    </>)
}