import React, { Component,lazy,Suspense,Fragment } from 'react'
import './App.css'
import PubSub from 'pubsub-js'
import { Route,Switch,Redirect } from 'react-router-dom'



import Headernav from './Headernav'
import Fotter from './Footer/index'
import MyDesign from './pages/MyDesign'
import Home from './pages/Home'
import UserCenter from './pages/UserCenter'
import ThemeDetails from './pages/ThemeDetails'
import SceneDetails from './pages/SceneDetails'



// 懒加载

// const Home = lazy(()=>{import('./pages/Home')})
// const MyDesign = lazy(()=>{import('./pages/MyDesign')})
// const UserCenter = lazy(()=>{import('./pages/UserCenter')})
// const ThemeDetails = lazy(()=>{import('./pages/ThemeDetails')})
// const SceneDetails = lazy(()=>{import('./pages/SceneDetails')})


export default class App extends Component {

  state = {
    iShow:true
  }
  componentDidMount(){
		this.token = PubSub.subscribe('iSheight',(_,stateObj)=>{
			this.setState(stateObj)
		})
	}

	componentWillUnmount(){
		PubSub.unsubscribe(this.token)
	}





  render() {
    
    const {iShow} = this.state

    return (
      <div className='App' style={iShow?{marginTop:'110px'}:{marginTop:'60px'}}>

        <Headernav />
          {/* Suspense 包裹懒加载的路由组件  组件未加载出来先展示fallback内的内容 也可以写一个组件 */}
  {/* <Suspense fallback={(<h1>正在加载中请稍后....</h1>)}> */}
        <Switch>
       
       
        <Route path="/pages/home/index" component={Home}/>
       

        <Route path="/pages/myDesign/index" component={MyDesign}/>
        <Route path="/pages/userCenter/index" component={UserCenter}/>

        <Route path="/pages/sceneDetails/index/:kindId/:name" component={SceneDetails}/>

        <Route path="/pages/themeDetails/index/:themeId/:n/:type" component={ThemeDetails}/>

    

				<Redirect to="/pages/home/index"/>
        </Switch> 
  {/* </Suspense> */}

         <Fotter />

      </div>
    )
  }
}

