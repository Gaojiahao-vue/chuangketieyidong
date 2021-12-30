import React, { Component } from 'react'

import './index.css'

import { SearchBar,Tag } from 'antd-mobile'

export default class Seach extends Component {

    handerenter = ()=>{
         console.log('回车');
    }

    onCancelhandel = ()=>{
        console.log('取消');
    }


    render() {
        return (
            <div className='Seach'>
      <SearchBar className='antseach' placeholder='200000+ 模板免费试用' showCancelButton={() => true} onCancel={() => this.onCancelhandel()}  clearOnCancel={true}
          onSearch={()=>this.handerenter()}
      /> 
          <div className='hotseach'>
           <h3>热门搜索</h3>
           <div>
           <Tag round color='#2db7f5'>元旦</Tag>
           <Tag round color='#2db7f5'>新年</Tag>
           <Tag round color='#2db7f5'>logo</Tag>
           <Tag round color='#2db7f5'>海报</Tag>
           <Tag round color='#2db7f5'>招聘</Tag>
           <Tag round color='#2db7f5'>喜报</Tag>
           </div>

          </div> 

          <div className='history_seach'>
           <h3>历史</h3>
           <div>
           <Tag round color='#2db7f5'>元旦</Tag>
           <Tag round color='#2db7f5'>新年</Tag>
           </div>

          </div> 
      

    
            </div>
        )
    }
}
