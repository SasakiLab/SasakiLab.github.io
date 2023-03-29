<script setup lang="ts">

/* head設定 */
useHead({
  title: 'ニュース | 佐々木研究室',
});
</script>


<template>

  <!-- メイン -->
  <v-main>

    <!-- メインビジュアル -->
    <MainVisual />
    
    <v-container class="news-container">
      <v-row justify="center">
        <v-col cols="12">
          <v-card>
            <v-container class="news">

              <!-- 記事の内容 -->
              <ContentDoc />

            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>


<style lang="scss" scoped>

/* PC */
@mixin pc {
  @media (min-width: 1264px) {
    @content;
  }
}

/* Medium */
@mixin md {
  @media (min-width: 960px) {
    @content;
  }
}

/* コンテナ設定 */

// メインビジュアルを背景にする
.v-main {
  min-height: 100vh;
  position: relative;
}
.main_visual {
  width: 100%;
  position: absolute; 
}

.news-container {
  max-width: 100%;
  padding: 100px 10px 10%;

  @include pc {
    max-width: 1000px;
    margin: 0 auto;
  }

  .v-card {
    padding: 0;
    min-height: 500px;

    @include pc {
      padding: 50px 30px;
    }

    .v-card-title {
      font-size: 1.3em;

      @include pc {
        font-size: 1.5em;
      }
    }
  }
}
</style>


<style lang="scss">

/* グローバル変数 */
$primary: #14368C;

/* NEWS */
h1 {
  padding-bottom: 20px;
  color: $primary;
  font-size: 1.5em;
}
</style>
