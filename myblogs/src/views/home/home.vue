<template>
  <div class="home">
    <div class="homeHead">
      <el-form>
        <el-row>
          <el-col :span="18" class="homeL">
            <el-col :span="4">
              <el-form-item label="" label-width="20px">
                <el-button size="mini" @click="gotoPlay()" type="primary" round
                  >GAME</el-button
                >
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="6">
            <el-col :span="8">
              <el-form-item>
                <img
                  class="imgTou"
                  :src="require('@/img/touxiang/sjl.jpg')"
                  alt=""
                />
                <el-button @click="goToSjl()" size="mini" type="primary" round
                  >SJL</el-button
                >
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item>
                <img
                  class="imgTou"
                  :src="require('@/img/touxiang/zds.jpg')"
                  alt=""
                />
                <el-button @click="goToZds()" size="mini" type="primary" round
                  >ZDS</el-button
                >
              </el-form-item>
            </el-col>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToSjl() {
      this.$router.push({
        path: "sjl",
      });
    },
    goToZds() {
      this.$router.push({
        path: "zds",
      });
    },
    gotoPlay() {
      this.$router.push({
        path: "play",
      });
    },
  },
};
</script>
<style scoped lang='scss'>
.home {
  background: url("../../../src/img/beijin.png") center center no-repeat;
  animation: fadeIn 1s linear;
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
  .homeHead {
    width: 100%;
    height: 58px;
    background: rgba($color: #000000, $alpha: 0.4);
    line-height: 58px;
    animation: dropdown 1s linear;
    .homeL{
      padding-top: 9px;
    }
  }
}
.imgTou {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 5px;
  display: inline-block;
}
@keyframes dropdown {
  0% {
    margin-top: -58px;
  }
  50% {
    margin-top: -25px;
  }
  100% {
    margin-top: 0px;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>