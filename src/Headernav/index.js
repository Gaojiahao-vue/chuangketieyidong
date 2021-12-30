import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PubSub from 'pubsub-js'

import './index.css'


export default class Headernav extends Component {

   state = {
       iShow:true
   }

    headclose  = (e) => {
        // PubSub传值
        	PubSub.publish('iSheight',{iShow:false})

        this.setState({iShow:false})

    };


    // PubSub接收
    // componentDidMount(){
	// 	this.token = PubSub.subscribe('atguigu',(_,stateObj)=>{
	// 		this.setState(stateObj)
	// 	})
	// }

	// componentWillUnmount(){
	// 	PubSub.unsubscribe(this.token)
	// }

  

    render() {

        const {iShow} = this.state

        return (
            <div className='Headernav'>
          {
            !iShow?"":

            <div className="isshow">
                  <div onClick={this.headclose}>×</div>
                  <img src="https://m.chuangkit.com/ziyuan/images/cktlogo.jpg" alt="" />
                  <div> <button className='button'>App内打开</button> </div>
              </div>
          }
              


               <div className="input">
               <Link to='/seach' className='inputseach'>
                  <p className='input' onClick={this.goseach}>
                    <span>🔍</span>
                    <span>2000+免费模板任你搜索</span>
                  </p>
                  </Link>
               </div>
                
            </div>
        )
    }
}




