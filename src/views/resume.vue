<style scoped>
    .fullpage-container {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #00FF00 url(../images/bg.jpg) repeat;
    }

    #section0 img,
    #section1 img{
        margin: 20px 0 0 0;
        width: 100px;
        height: 100px;
        border-radius: 100px;
    }
    #section2 img{
        margin: 20px 0 0 52px;
    }
    #section3{
        color: white;
    }
    #section3 img{
        bottom: 0px;
        position: absolute;
        margin-left: -420px;
    }
    .intro{
        width: 50%;
        margin: 0 auto;
        font-size: 1.5em;
    }

    .section{
        text-align:center;
    }
    #menu li {
        display:inline-block;
        margin: 10px;
        color: #000;
        background:#fff;
        background: rgba(255,255,255, 0.5);
        -webkit-border-radius: 10px;
        border-radius: 10px;
    }
    #menu li.active{
        background:#666;
        background: rgba(0,0,0, 0.5);
        color: #fff;
    }
    #menu li a{
        text-decoration:none;
        color: #000;
    }
    #menu li.active a:hover{
        color: #000;
    }
    #menu li:hover{
        background: rgba(255,255,255, 0.8);
    }
    #menu li a,
    #menu li.active a{
        padding: 9px 18px;
        display:block;
    }
    #menu li.active a{
        color: #fff;
    }
    #menu{
        position:fixed;
        top:0;
        left:0;
        height: 40px;
        z-index: 70;
        width: 100%;
        padding: 0;
        margin:0;
    }

    h1{
        font-size: 40px;
        color: white;
    }

    #section0 p{
        color: white;
    }

    #section1,#section2{
       text-align: left;
        color:white;
    }
    #section3{
        text-align: center;
    }
    .time{
        font-size: 14px;
        font-weight: bold;
    }

    .content{
        padding-left: 5px;
    }

    dd:before {
        position: absolute;
        left: -15px;
        top: 13px;
        content: "";
        width: 4px;
        height: 4px;
        background: #000;
        border-radius: 50%;
    }

    #section1 ul {
        list-style-type:square;
    }

    #section1 {
        font-size: 16px;
        color:white;
    }

</style>
<template>
    <div class="fullpage-container">
        <ul id="menu">
            <li data-menuanchor="firstPage"><a href="#firstPage">个人信息</a></li>
            <li data-menuanchor="secondPage"><a href="#secondPage">推荐合适性</a></li>
            <li data-menuanchor="3rdPage"><a href="#3rdPage">项目经验</a></li>
            <li data-menuanchor="4thpage"><a href="#4thpage">工作经验</a></li>
            <li data-menuanchor="lastPage"><a href="#lastPage">教育背景</a></li>
        </ul>


        <div id="fullpage">
            <div class="section active" id="section0">
                <h1>个人简历</h1>
                <img class="photo" src="../images/myself.png">
                <p style="font-size: 20px;">
                    姓名		:           邰广银<br>
                    邮箱		:           taiguangyin@qq.com<br>
                    电话     ：          18656095251<br>
                </p>
            </div>
            <div class="section " id="section1">
                <div style="width: 540px;margin: 0 auto;">
                    <h3>前端开发 </h3>
                    <ul>
                        <li>6年前端开发经验</li>
                        <li>掌握HTML,JAVASCRIPT,CSS3,Jquery等前端知识</li>
                        <li>熟悉各类前端框架例如Bootstrap，Sui，Vue等</li>
                        <li>熟悉前端构建工具webpack，gulp 等。</li>
                        <li>熟悉网络协议，熟悉 http(s)协议；</li>
                        <li>熟悉 PC、Mobile 端主流浏览器兼容性及特性</li>
                        <li>熟悉 W3C 标准，对前后端分离、Web 语义化等有较为深刻的理解。</li>
                    </ul>
                    <br>
                    <h3>   服务器开发</h3>
                    <ul>
                        <li>4年后端开发经验，熟练掌握NODEJS，PHP以及Python。 </li>
                        <li> 熟悉关系型数据库SqlSevrer以及Mysql。熟悉NoSql（redis,MemCache）。</li>
                        <li>  熟悉负载均衡配置。 </li>
                        <li>   熟悉 Linux 操作系统。 </li>
                        <li>   有过大流量、高并发 WEB 项目开发经验 </li>

                    </ul>
                    <br>
                    <h3> 客户端开发 </h3>
                    <ul>
                        <li>熟悉Java、C++、C#、C，熟悉安卓开发 </li>
                        <li>  熟悉Winform开发以及各类PC客户开发。熟悉WebApp开发。<br></li>
                    </ul>
                    <br>
                    <h3> 团队管理 </h3>
                    <ul >
                        <li>4年管理经验，团队合作良好，有较强的推动力。</li>
                    </ul>
                </div>

            </div>
            <div class="section" id="section2">
                <div class="slide">
                    <div class="intro">
                        项目名称：半职<br>
                        项目职务：开发经理<br>
                        项目职责：负责整个项目的需求分析以及技术架构。<br>
                        1.APP以及后端框架设计。<br>
                        2.后端接口开发以及管理系统核心开发。<br>
                        3.公众号页面开发以及优化。<br>
                        4.前端框架搭建<br>
                        5.服务器端架构<br>
                        项目成果：半职APP完整上线，包括安卓、IOS，微信端以及管理平台和接口系统。技术栈使用nodejs。<br>
                    </div>

                </div>
                <div class="slide">
                    <div class="intro">
                        项目名称：点点网<br>
                        项目职务：开发经理<br>
                        项目职责：负责整个项目的需求分析以及技术架构。<br>
                        1.hybird开发APP，技术选型以及后端设计。前端使用Mui以及数字天堂的H5打包技术。<br>
                        2.后端接口开发以及管理系统核心开发。<br>
                        3.聊天系统设计以及开发。集成环信webIm。<br>
                        项目成果：一个基于城域网的咨询类APP。采用H5打包技术。短时间内完成安卓和IOS平台发布。后端使用nodejs.<br>
                    </div>
                </div>
                <div class="slide">
                    <div class="intro">
                        项目名称：教师机<br>
                        项目职务：开发组长<br>
                        项目职责：<br>
                        1.核心技术攻关。<br>
                        2.电子书点读功能开发，云课讲堂，交互式课件工具开发。<br>
                        3. 负责需求细化，模块设计开发，难点攻关和进度跟踪，文档完善。<br>
                        项目成果：完成教师机的紧急交付以及产品设计。<br>
                    </div>
                </div>
                <div class="slide">
                    <div class="intro">
                        项目名称：一键同屏教学<br>
                        项目职务：开发组长<br>
                        项目职责：<br>
                        1. 负责PC端程序完整设计和开发。<br>
                        2. 安卓端模块开发。<br>
                        3. 文档编写，配合专利申请等<br>
                        项目成果：实现PC和平板界面同步。类似Miracast和Airplay。我们是自己实现的协议。延时在300MS左右，画面清晰，帧率30FPS。效果较好。<br>
                    </div>
                </div>
                <div class="slide">
                    <div class="intro">
                        项目名称：作业网以及教师<br>
                        项目名称：一键同屏教学<br>
                        项目职务：开发组长<br>
                        项目职责：<br>
                        1. 负责安卓端需求分析以及设计。<br>
                        2. 安卓端完整开发。<br>
                        项目成果：完成教师布置作业，学生做作业，错题查看，题目归类，作业提交，教师批改以及相关视频教学下载观看等功能。完成教师通过PAD进行互动方案。<br>
                    </div>
                </div>
                <div class="slide">
                    <div class="intro">
                        项目名称：公司OA管理系统<br>
                        项目职务：软件开发工程师<br>
                        项目职责：<br>
                        1.完成需求分析以及评审。<br>
                        2.OA流程引擎等模块开发<br>
                        3.单元测试以及文档编写<br>
                        项目成果：完成公司内部OA系统。完成流程管理模块，考勤模块，报表模块等开发。<br>
                    </div>
                </div>
                <div class="slide">
                    <div class="intro">
                        项目名称：汽车引擎驱动移植<br>
                        项目职务：软件开发工程师<br>
                        项目职责：<br>
                        1.完成飞思卡尔部分驱动移植。<br>
                        2.编写测试案例。<br>
                        项目成果：完成领导布置的任务。额外时间完成部门内部订餐系统。<br>
                    </div>
                </div>
            </div>
            <div class="section" id="section3">
                <Timeline style="width: 250px;margin: 0 auto;">
                    <Timeline-item color="green">
                        <p class="time">2010.02-2013.02</p>
                        <p class="content">南京富士通南大软件技术有限公司</p>
                    </Timeline-item>
                    <Timeline-item color="green">
                        <p class="time">2013.02-2015.02</p>
                        <p class="content">科大讯飞股份有限公司</p>
                    </Timeline-item>
                    <Timeline-item color="green">
                        <Icon type="trophy" slot="dot"></Icon>
                        <p class="time">2015.02-至今</p>
                        <p class="content">安徽胜果信息科技有限公司</p>
                    </Timeline-item>
                </Timeline>
            </div>
            <div class="section" id="section4">
                <div class="intro">
                    <h1>安徽大学</h1>
                    <p>
                        安徽大学(Anhui University)是国家“211工程”重点建设高校，是安徽省人民政府与教育部共建高校，安徽省属重点综合性大学。作为安徽现代高等教育开端，学校1928年创建于当时省会安庆市。抗战期间，学校被迫西迁，并一度流散，1946年复校，为国立安徽大学。1949年12月迁至芜湖，几经调整，学校于1956年迁建合肥市，1958年全面恢复招生。伴随着我国改革开放和现代化建设的伟大进程,学校进入历史上发展最快最好的时期,尤其是进入国家“211工程”高校建设行列之后，更是实现了跨越式的发展。
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import $ from  '../libs/jquery-3.2.1';
    import  '../libs/jquery.fullpage';
    import  '../libs/jquery.fullpage.min.css';

    export default {
        data() {
            return {
            }
        },
        mounted(){
            $('#fullpage').fullpage({
                sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#101139', '#ccddff'],
                anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
                menu: '#menu',
                scrollingSpeed: 1000
            });
        }
    }

</script>