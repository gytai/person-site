<style scoped>
    img{
        width: 100%;
    }

    .card{
        margin: 0 auto;
        margin-top: 20px;
    }

    .container{
        padding-left: 20px;
        padding-right: 20px;
    }
</style>
<template>
    <div class="container">
        <Card class="card" style="width:100%;">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                乐房通
            </p>
            <Carousel>
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
        <Card class="card" style="width:100%;">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                雅集诗词官网
            </p>
            <Carousel>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p6-1.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p6-2.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p6-3.png" /></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../images/product/p6-4.png" /></div>
                </Carousel-item>
            </Carousel>
        </Card>
        <Card class="card" style="width:100%;">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                造物者
            </p>
            <Carousel>
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
        <Card class="card" style="width:350px;height: 650px;">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                半职
            </p>
            <Carousel>
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
            <Carousel>
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
            <Carousel>
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
            this.$Message.success('每个作品可切换，查看多张效果图哦');
        }
    }

</script>