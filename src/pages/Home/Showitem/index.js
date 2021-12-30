import React, { Component } from 'react'
import './index.css'

export default class Showitem extends Component {

    loadMore = (data)=>{
 
       this.props.handelckickgetlist({designKindId:data.kindId,name:data.name})
    }

    gotempDetail = (data)=>{
        //  不是路由组件需要传给父亲进行跳转  

        this.props.gotempDetails(data)
    }
    



    render() {

        const {templates} = this.props.dataitem
        
       
        return (
            <div className='Showitem'>
            <div className='Showitem_header'><h3>{this.props.name}</h3> <p onClick={()=>this.loadMore(this.props.dataitem)}>进入场景</p></div>
                  
                   <ul>
                {
                    templates.map((res,i)=>{
                        return (
                          <li onClick={()=>this.gotempDetail(res)} key={i}>
                           <img src={res.designTemplateImageUrl} alt="" />
                           </li>
                      
                        )
                    })
                }
                      
                   </ul>
             <div className='buttons'>
                 <button>更多</button>
                   <button>换一批</button>
            </div>
                  
            </div>
        )
    }
}
