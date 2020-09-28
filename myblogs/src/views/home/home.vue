<template>
<!-- -->
  <div class="home">
      <div class="imgDiv">
          <img src="" alt="">
      </div>
    <div class="homeHead">home</div>
  </div>
</template>
<script>

// import meadiaurl from '../../api/mediaurl'
export default {
    
  data() {
    return {
        // imgUrl:require("../../img/背景.image")
    //   note: {
    //     backgroundImage: "url(" + require("../../img/背景.image") + ") ",
    //     backgroundPosition: "center center",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //   },
    };
  },
  methods: {},
};
</script>
<style scoped lang='scss'>
.home {
//   background-image: url("../../img/背景.image");
//   background: url('~@/img/背景.image') center center no-repeat;
  width: 100%;
  .homeHead {
    width: 100%;
    height: 50px;
    background: rgba($color: #000000, $alpha: 0.6);
  }
}
</style>