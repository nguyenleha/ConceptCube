import React from 'react'
import "./form6.scss"
import Issue from './issue/issue'

const Form6 = () => {
    return (
        <div className='content__issue'>
            <img src={require('../../../assets/img/NewsObject_01.png')} alt='' className='issue__icon1' />
            <img src={require('../../../assets/img/NewsObject_02.png')} alt='' className='issue__icon2' />
            <div className='content__issue--top'>
                <p className='issue__title'>HAPPENED'S ISSUE</p>
                <p className='issue__desc'>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.  </p>
                <div className='btn__seemore'>
                    <button>SEE MORE</button>
                </div>
            </div>
            <div className='content__issue--bottom'>
                <div className='issue--bottom__1'>
                    <p className='issue__first--title'>WHPNISSUE</p>
                    <div className="issue__first--img">
                        <img src={require('../../../assets/img/NewsImg_00.png')} alt='' className='' />
                        {/* <img src={require('../../../assets/img/NewsObject_03.png')} alt='' className='issue__first--object' /> */}
                    </div>

                </div>
                <Issue brand={'B BRAND'} brandImg={require('../../../assets/img/NewsImg_01.png')}/>
                <Issue brand={'C BRAND'} brandImg={require('../../../assets/img/NewsImg_02.png')}/>
                <Issue brand={'D BRAND'} brandImg={require('../../../assets/img/NewsImg_03.png')}/>
                <Issue brand={'E BRAND'} brandImg={require('../../../assets/img/NewsImg_04.png')}/>
            </div>
        </div>
    )
}

export default Form6