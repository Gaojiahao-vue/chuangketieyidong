import React, { Component } from 'react'

import './index.css'

import {NavLink} from 'react-router-dom'




export default class Fotter extends Component {


 



    render() {

    
        return (
            <div className='Fotter'>
        
                <ul>
                    <li> 
                       <NavLink  activeClassName="activenav" className="list-group-item" to='/pages/home/index'>
                       <p>🏠</p>
                       <p>首页</p>
                       </NavLink>
                    </li>
                    <li> 
                      <NavLink  activeClassName="activenav" className="list-group-item" to='/pages/myDesign/index'>
                       <p>📠</p>
                       <p>我的设计</p>
                       </NavLink>
                    </li>
                    <li> 
                      <NavLink  activeClassName="activenav" className="list-group-item" to='/pages/userCenter/index'> 
                      <p>🧞‍♂️</p>
                       <p>个人中心</p>
                      </NavLink>
                    </li>

                </ul>


          
		   
						
					
            </div>
        )
    }
}
