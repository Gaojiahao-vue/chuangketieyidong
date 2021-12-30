import axios from 'axios'
import React, { Component } from 'react'
import './index.css'
import Showitem from './Showitem/index.js'

// import 'antd/dist/antd.css';
// import { Button,DatePicker,Icon } from 'antd';
// import {UpCircleFilled} from '@ant-design/icons'






export default class Home extends Component {
    
    state = {
        datalist:{},
        tuijianlist:[],
        itemdatalist:[]

}
    componentDidMount() {

      this.getdatalist()
       
    }

    
    // componentDidMount 卸载组件 有异步请求时要清除异步才能卸载组件否则会报错  无法给state 赋值
    componentWillUnmount = () => {
    this.setState = (state,callback)=>{
      return;
    }
}



     getdatalist = async ()=>{
      let res =   await axios.get('/ck/mobile/main/getMainMiniProgramHomeInfo.do?_dataType=json&_dataClientType=3&client_type=40')
              
      this.setState({datalist:res.data.body.data})
   
       let res2 = await axios.get('/ck/solutionSubject/theme.do?_dataType=json&_dataClientType=3&client_type=40&solutionSubjectId=1&pageNum=1&pageSize=6&templatePageSize=6&type=3&device=2')
         this.setState({tuijianlist:res2.data.body.data.themes})

     }


    handelckickgetlist = (data)=>{
      
             
        // this.props.history.push(`/pages/sceneDetails/index`,{kid:data.designKindId,name:data.name})
        this.props.history.push(`/pages/sceneDetails/index/${data.designKindId}/${data.name}`)
    }

    gotuijiandatel= (data) =>{
        this.props.history.push(`/pages/themeDetails/index/${data.id}/${data.title}/${data.themeType}`)
    }

    gotempDetails = (data)=>{
        this.props.history.push(`/tempDetail/index/${data.designTemplateId}/${'pages/index'}`)
    }
    
   
    render() {

    const {datalist:{scene,sceneDetails},tuijianlist} = this.state
        return (
            <div className='Main_content'>

  
                {/* <Button className='buttonTOp' type="primary" shape="circle" icon={<UpCircleFilled />}/> */}

			
        
                <ul className='Main_content_navul'>
                {
                    !scene?'':scene.slice(0,8).map((item,index) =>{
                        return( 
                        <li key={item.designKindId} onClick={()=>this.handelckickgetlist(item)}>
                        <img src={item.thumbUrl} alt="" />
                        <span>{item.name}</span>
                        </li> 
                        )
                    })
        
                }
                   
                  
                </ul>
              
                 
                <div className="tuijian">
                  <h3>推荐专题</h3>
                   <div className='tuijian_nav'>
                   {

                       !tuijianlist?"":tuijianlist.map((res,i)=>{
                              return  (
                             <div onClick={()=>this.gotuijiandatel(res)} className="items" key={res.id}>
                                        <span>{res.title}</span>
                                        <span>{res.themeDescribe}</span>
                                        <div className='round' style={{ backgroundColor:`#${i}83`}}></div>
                                        </div>
                                        )
                       })

                       

                   }
                        
                        
                       

                   </div>

                </div>
           {
            !sceneDetails? '' : sceneDetails.sceneDetail.map(res=>{
                return   <Showitem handelckickgetlist={this.handelckickgetlist} gotempDetails={this.gotempDetails} name={res.name} dataitem={res} key={res.kindId} />
            })

           }
            
          
     
   

            </div>
        )
    }
}
