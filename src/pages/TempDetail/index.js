import React, { Component,Fragment } from 'react'
import './index.css'
import { Tag } from 'antd-mobile'
import axios from 'axios'
import { async } from 'q'

export default class TempDetail extends Component {
  
     state = {
         detallist:{},
         tuijianlist:[]
     }

     componentDidMount() {
        this.getdatalist(this.props.match.params.t)
     }
      componentWillUnmount(){
        this.setState = (state,callback)=>{
            return;
          }
     }
      
     getdatalist =  async (id) =>{
       
         let res = await  axios({
            method:'post',
            url: "/gjh/designtemplate/getDetailCacheFileUrl.do?_dataType=json&_dataClientType=3",
            headers:{
              'content-type':'application/x-www-form-urlencoded'
            },
            data:`client_type=40&id=${id}`
        })
            
        this.setState({
            detallist:{...res.data.body.currentTemplate},
            tuijianlist:[...res.data.body.recommendedTemplates]
        },()=>{
            console.log(this.state.detallist);
        })

        
         
     }

    //  UNSAFE_componentWillReceiveProps(nextProps) {
    //     // 判断跳转路由不等于当前路由
    //     if (nextProps.location.pathname !== this.props.location.pathname) {
    //         this.getdatalist()
    //         console.log('11111111111111');
    //     }
    //   }



     godatadel = (id)=>{

        this.props.history.push(`/tempDetail/index/${id}/${'deteil/index'}`)
        
        this.getdatalist(id)
      

     }







    render() {

       const {detallist,tuijianlist} = this.state
       
        return (
         
            <Fragment>


           {
              !detallist?'':
             <div className='TempDetail'>
                <div className='showImg'>
                    <div className='showImg_box'>
                     <img src={detallist.designTemplateImageUrl} alt="" />
                    </div>
                </div>

             <div className='textcontent'>
                <h3>{detallist.templateTitle}</h3>
                <p >{detallist.kindTitle}</p>
                <p>图片编号为430580，该手机海报尺寸是1080px*
1920px。点击“立即使用”，《红金风元旦节日手机海报》—键生成，在线编辑图片，简单托拉拽，秒出精美手机海报。
   </p>
             </div>

             <div className="bottomtag">
           <Tag round color='#2db7f5'>元旦</Tag>
           <Tag round color='#2db7f5'>新年</Tag>
           <Tag round color='#2db7f5'>logo</Tag>
           <Tag round color='#2db7f5'>海报</Tag>
           <Tag round color='#2db7f5'>招聘</Tag>
           <Tag round color='#2db7f5'>喜报</Tag>
             </div>
             
             <div className='recommend'>
                 <h3>为你推荐</h3>
                 <ul>

                {
                    tuijianlist.map(res=>{
                        return <li onClick={()=> this.godatadel(res.designTemplateId)} key={res.designTemplateId}>
                   <img src={res.designTemplateImageUrl} alt="" />
                    </li>
                    })
                }
               
             



                 </ul>

             </div>

             <div className="buttonnav">
                  <span>❤</span>
                  <button>立即编辑</button>
             </div>

        
            </div>


           }
            


    </Fragment>

        )
    }
}
