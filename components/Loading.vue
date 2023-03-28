<!-- このプログラムは「ローディング」と呼ばれるトップページをロードした際に表示される部分です -->

<template>
  <div v-show="show" :class="loading">
    <div class="loading_inner">
      <v-img :width="iconSize" :height="iconSize" src="/images/logo.webp"></v-img>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useDisplay } from 'vuetify';
  import { computed } from "vue";

  /* グローバル変数 */
  const time = 1500;
  const loading = ref('loading');
  const show = ref(true);

  /* 待機関数 */
  const wait = (time: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  };

  /* マウント時 */
  onMounted(() => {
    wait(time)
    .then(() => {
      loading.value = 'loading hidden';
      return wait(time);
    })
    .then(() => {
      show.value = false;
    })
  })

  /* レスポンシブ */
  const display = useDisplay();

  const iconSize = computed(() => {
    return display.smAndDown.value ? 100 : 200; // モバイル:100px, ディスクトップ:200px
  });
</script>

<style lang="scss" scoped>

/* 変数 */
$background-color: #EEEEEE;

.loading {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  transition: opacity 1s;
  background: $background-color;
  z-index: 10000;

  .loading_inner {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translateY(-50%) translateX(-50%);
  }
}

.loading.hidden {
  opacity: 0;
}
</style>

