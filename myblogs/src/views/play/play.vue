<template>
  <!--  -->
  <div class="play">
    <!-- <router-link to="/play/tuixiangzi">推箱子</router-link>-->
    <!-- <router-view></router-view>  -->
    <div @click="toTuixiangzi()">推箱子</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toTuixiangzi() {
      this.$router.replace("/play/tuixiangzi");
    },
  },
};
</script>
<style scoped>
</style>