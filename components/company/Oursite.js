import React from 'react'
import style from '@/styles/Float.module.css'
export function Oursite() {
  return (
    <div>CRP 사이트를 소개합니다. <br/> <br/>
    <img src = "https://www.crp-group.com/wp-content/uploads/2017/09/logo-crp.jpg"/> <br/> <br/> <br/>
    <p> 저희 사이트는 국내 최고의 표절 및 악보 분석 프로그램을 가진 회사로 자리잡고 있습니다. 또한 챗봇을 기반으로 한 사이트이기 때문에 실시간으로 원하는
        채팅을 할 수 있고 표절 및 악보 분석 프로그램에서는 보이스 봇이 도입되어서 봇에게 필요한 정보를 물어보게 되면 소리를 인식하여 원하는 정보를
        알려주는 기능이 있습니다. 또한 찾고 싶은 음원을 들려주거나 누구나 손쉽게 작곡을 할 수 있는 작곡 프로그램이 있습니다.</p>
    <a href="#" className={style.float}>
            <img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
        </a>
        </div>
    
  )
}
