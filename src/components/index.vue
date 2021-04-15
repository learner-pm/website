<template>
  <div id="website">
     <section class="websiteCon">
       <p class="hello">Welcome To Here</p>
       <div class="myImg">
        <img src="../assets/my.jpg">
       </div>
       <div class="nav">
        <p>
          <router-link to="/note" tag="a">
             前端
          </router-link>
          <a>工具</a>
          <a>开发</a>
          <a>其他</a>
        </p>
       </div>
       <div class="wx">
         <p>扫码Call Me，提供改进意见和交流。</p>
         <div>
          <img src="../assets/wx.jpg">
         </div>
       </div>
     </section>
     
     <footer>
       <p>本站为非盈利性个人网站,未经许可不得用于任何商业目的</p>
       <p>如有侵权,敬请来信联系我们,我们立即删除.站长邮箱:2273028917@qq.com</p>
       <p><a href="https://beian.miit.gov.cn/#/Integrated/index">备案号:蜀ICP备20004855号-1</a></p>
     </footer>

     <div class="out">
         <div></div>
         <div></div>
     </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                a: 1
            }
        },
        methods: {

        },
    }
</script>

<style scoped>
    .out div:nth-child(2) {
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        background-color: #afeeee;
    }
    
    .out div:first-child {
        width: 100%;
        height: 80%;
        background-color: #afeeee;
        border-radius: 0 0 .25rem .25rem;
    }
    
    .out {
        position: absolute;
        top: -10%;
        left: 10%;
        height: 70%;
        width: 1.25rem;
    }
    
    footer p a:hover {
        color: #9e9e9e;
    }
    
    footer p {
        margin-bottom: 1%;
    }
    
    footer {
        text-align: center;
        width: 100%;
        position: absolute;
        bottom: 0%;
        color: rgba(0, 0, 0, .7411764705882353)
    }
    
    .wx div {
        margin: 0 auto;
        width: 6.875rem;
        height: 6.875rem;
    }
    
    .wx p {
        text-align: center;
        font-size: 0.875rem;
        font-weight: 500;
        color: rgba(0, 0, 0, .7411764705882353);
        padding-bottom: 0.625rem;
    }
    
    .wx {
        margin-top: 12%;
    }
    
    .nav p a:hover {
        color: #0c7b9d;
    }
    
    .nav p {
        margin: 0 auto;
        width: 24%;
        display: flex;
        justify-content: space-around;
        align-content: center;
        font-size: 1.25rem;
        color: #9e9e9e;
        cursor: pointer;
        border: none;
        outline: none
    }
    
    .nav {
        margin-top: 2%;
    }
    
    .myImg {
        width: 5rem;
        height: 5rem;
        margin: 0 auto;
        border-radius: 50%;
        margin-top: 2%;
    }
    
    .myImg img {
        border-radius: 50%;
    }
    
    img {
        width: 100%;
        height: 100%;
    }
    
    .hello {
        text-align: center;
        font-size: 1.5625rem;
        font-weight: 300;
        color: #0c7b9d;
        margin-top: 6%;
    }
    
    .websiteCon {
        width: 100%;
    }
    
    #website {
        height: 100%;
        overflow: hidden;
        position: relative;
    }
</style>