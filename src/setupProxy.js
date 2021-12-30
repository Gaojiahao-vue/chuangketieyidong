const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
	app.use(
		createProxyMiddleware('/ck',{ //遇见/api1前缀的请求，就会触发该代理配置
			target:'https://api-v2.chuangkit.com', //请求转发给谁
			changeOrigin:true,//控制服务器收到的请求头中Host的值
			pathRewrite:{'^/ck':''} //重写请求路径(必须)
		}),
		createProxyMiddleware('/gjh',{ //遇见/api1前缀的请求，就会触发该代理配置
			target:'https://api.chuangkit.com', //请求转发给谁
			changeOrigin:true,//控制服务器收到的请求头中Host的值
			pathRewrite:{'^/gjh':''} //重写请求路径(必须)
		})

	)
}