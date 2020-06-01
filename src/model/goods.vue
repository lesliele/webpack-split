<template>
  <div>
    <p>这个一个商品页面</p>
    <p>这是一张图片</p>
    <!-- <img src="../assets/images/1.png" class="img"/> -->
    <img src="@/assets/images/1.png" class="img"/>
    <p>{{msg}}</p>
    <p>这是一张背景图片</p>
    <div class="wrapper">
      <div class="inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello world'
    }
  }
}
</script>

<style lang="less" scoped>
.img{
  display: block;
  width: 50px;
  height: 50px;
  object-fit: contain;
}
.wrapper{
  width: 50px;
  height: 50px;
  .inner{
    width: 100%;
    height: 100%;
    // 生产环境不正确
    background-image: url('~@/assets/images/1.png');
    // background-image: url('../assets/images/1.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
