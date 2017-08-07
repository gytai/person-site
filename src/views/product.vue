<style scoped>
    img{
        width: 100%;
    }

    .card{
        float: left;
        margin: 20px;
    }
</style>
<template>
    <div class="container">
        <Card class="card" style="width:350px;height: 650px;">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                半职
            </p>
            <Carousel v-model="value1">
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p4-0.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p4-1.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p4-2.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p4-3.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p4-4.png" /></div>
                </Carousel-item>
            </Carousel>
        </Card>
        <Card class="card" style="width:350px;height: 650px;">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                点点网
            </p>
            <Carousel v-model="value1">
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p2-1.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p2-2.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p2-3.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p2-4.png" /></div>
                </Carousel-item>
            </Carousel>
        </Card>
        <Card class="card" style="width:350px;height: 650px;">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                虚空念佛堂
            </p>
            <Carousel v-model="value1">
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p3-1.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p3-2.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p3-3.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p3-4.png" /></div>
                </Carousel-item>
            </Carousel>
        </Card>
        <Card class="card" style="width:350px;height: 250px;">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                乐房通
            </p>
            <Carousel v-model="value1">
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p1-1.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p1-2.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p1-3.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p1-4.png" /></div>
                </Carousel-item>
            </Carousel>
        </Card>
        <Card class="card" style="width:350px;height: 250px;">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                造物者
            </p>
            <Carousel v-model="value1">
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p5-1.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p5-2.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p5-3.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p5-4.png" /></div>
                </Carousel-item>
            </Carousel>
        </Card>
        <Card class="card" style="width:80%;height: 250px;">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                更多...
            </p>
           <p>
               这里就不一一列举了。作为一个程序猿，要学习的有很多。我也将继续加油。<br>
               写这个网站主要是练习Vue和iView 这个前端框架。
               谢谢大家。
           </p>
        </Card>
    </div>
</template>

<script>
    import $ from  '../libs/jquery-3.2.1';

    export default {
        data() {
            return {

            }
        },
        mounted(){

        }
    }

</script>