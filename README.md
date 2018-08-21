# 运行与打包     
  npm install   
  npm run dev    
  npm run build

# 所需vscode插件      
    1.vue vscode snippets


# 学习步骤
## 0.安装 stylus stylus-loader    
    <1>. npm install --save stylus stylus--loader
    <2>.在style标签中引入 <style scoped lang="stylus">     
    <3>.引入css文件    
        1).比如引入home.styl    @import "./home.styl"      
        
## 1.安装vant ui      
    npm install --save vant  
                
## 2.安装   babel-plugin-import         
    npm i babel-plugin-import -D   
    
## 3.实现按需加载vant     
    <1>.在.babellrc文件中添加                   
        ["import", {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
        }]        

    <2>. 在主入口 main.js中，引入vant对应的组件   
    import { Button } from 'vant'      
    Vue.use(Button) 

##  4.采用rem布局     
    <1>.在static文件夹下，创建rem.js,写入以下代码：     
    let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;
    let htmlDom = document.getElementsByTagName("html")[0];
    htmlDom.style.fontSize = htmlwidth/20 + 'px'     

    <2>.在根文件 index.html中引入rem.js       

## 5. 使用iconfont图标    
网址：http://www.iconfont.cn/    

## 6.引入图片    
使用require("../../assets/image/location.png")      

## 7.vant ui使用图片懒加载   
1).在main.js中引入lazyload
    import { Lazyload } from 'vant'     
    Vue.use(Lazyload);     
2).在页面:src的地方换成v-lazy     
    <img v-lazy="item.url" width="100%"/>     

## 8.数据模拟       
    1).安装mock.js      
        npm install --save-dev mockjs  
    2).创建mock文件夹，新建mock.js    
        import Mock from 'mockjs'          
        import data from './goods'         
        const goodsData = Mock.mock('/api/shop/index', 'post', data);  
        export default {
            goodsData
        }
    3).在调接口的地方，引入mock数据      
        import mockdata from "../../mock/mock.js";     
        axios({
            url: "/api/shop/index",
            method: "post",
        }).           
## 9.安装vue-awesome-swiper (轮播支持水平和竖直滑动的插件)  
    <1>. npm install --save vue-awesome-swiper      
    <2>.在home.vue中,引入 vue-awesome-swiper        
        1).    
        import 'swiper/dist/css/swiper.css';    
        import { swiper, swiperSlide } from 'vue-awesome-swiper'
        再注册swiper, swiperSlide这两个组件    
        components:[swiper, swiperSlide]
## 10.使用fillter过滤器   
    <1>.在 src目录下创建utils文件夹,moneyFillter.js      
    <2>.在页面js部分，定义fillter属性       
        filters:{ // 过滤器
            moneyFillter(code){
            return newMoney(code)
            }
        },        
    <3>.在要用的地方引入    
        <div class="goods-price">￥{{item.price | moneyFillter}}(￥{{item.mallPrice | moneyFillter}})</div>    
    
## 后端部分

## 1.创建配置文件管理接口url
    在serviceAPI.config.js里，配置所有的url

## 2.新建后端项目
    <1>.创建service文件夹      
    <2>.初始化npm      npm init -y
   
## 3.安装koa2
    npm install --save koa

## 4.安装mongoDB数据库
    <1>.下载地址: https://www.mongodb.com 
    <2>.在 C:\Program Files\MongoDB\Server\4.0\bin下cmd           
           输入：mongod --dbpath=C:\Program Files\MongoDB\Server\4.0\data --logpath=C:\Program Files\MongoDB\Server\4.0\log --logappend     
    <3>.配置mongoDB     
        1).找到环境变量，在用户变量里的path点击编辑，加上逗号之后，添加C:\Program Files\MongoDB\Server\4.0\bin      
        2).在F盘里创建data文件夹，进去后创建db文件夹     
        3).输入mongod就启动成功了       
    <4>.安装robo3    (mongodb的图形界面)       
        1). https://robomongo.org/download    
        2).一路安装

## 5.安装mongoose
    在service文件夹下  npm install --save mongoose    

## 6.具体使用
    <1>.初始化   在init.js中写入      

    const mongoose = require('mongoose')
    const db = "mongodb://localhost/vueshop"

    exports.connect = () => {
        mongoose.connect(db, { useNewUrlParser: true })
        let maxConnectTimes = 0

        //增加数据库连接的事件监听
        return new Promise((resolve, reject) => {
            mongoose.connection.on('disconnected', () => {
                console.log('***********数据库断开***********')
                if (maxConnectTimes < 3) {
                    maxConnectTimes++
                    mongoose.connect(db)
                } else {
                    reject()
                    throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
                }
            })
            mongoose.connection.on('disconnected', (err) => {
                console.log('***********数据库错误***********')
                if (maxConnectTimes < 3) {
                    maxConnectTimes++
                    mongoose.connect(db)
                } else {
                    reject()
                    throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
                }
            })
            mongoose.connection.once('open', () => { // 连接成功
                resolve()
                console.log('MongoDB Connected successfully!')
            })
        })
    }

    <2>.在需要的页面（index.js）中     
    //引入connect
    const {connect} = require('./database/init.js')
    
    //立即执行函数
    ;(async () =>{
        await connect()
    })()





    




            






        


       


        

