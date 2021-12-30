import React, { Component } from 'react'
import './index.css'
import axios from 'axios'

export default class SceneDetails extends Component {
       
    state = {
        datalist:[]
    }
      
     componentDidMount() {
        this.getdatalist()
     }

     componentWillUnmount = () => {
        this.setState = (state,callback)=>{
          return;
        }
    }

    getdatalist =  async ()=>{
   
         let res = await axios({
              method:'post',
              url: `/ck/solutionSubject/themeDetail.do?_dataType=json&_dataClientType=3&client_type=40&themeId=${this.props.match.params.themeId}&templatePageSize=6`,
             
          })
           
          console.log(res.data.body.code);
          if (res.data.body.code === 200) {
              
         this.setState({datalist:res.data.body.data.theme.themeExtends})
          }

     }
     
 

    render() {
        // const {n} = this.props.match.params
        const {datalist} = this.state
        console.log(datalist);
        

        return (
            <div className='SceneDetails'>
               
             
                {
                 !datalist?'': 

               datalist.map(res=>{
                 return <div key={res.id}>
                  <h3>{res.title}</h3>
                   <ul>
                     
                     {


                     res.templates.map(res2=>{
                       
                      return  <li key={res2.designTemplateId}>
                            <img src={res2.designTemplateImageUrl}  alt="" />
                            </li>
                        })

                     }
                       

                   </ul>

                <button className='bottomload'>加载更多</button>
                    </div>
               })  

        
                   
                }
                 

              
            </div>
        )
    }
}
