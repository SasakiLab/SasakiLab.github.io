<script setup lang="ts">

/* head設定 */
useHead({
  title: '研究成果 | 佐々木研究室',
});
</script>


<template>

  <!-- メイン -->
  <v-main>

    <!-- メインビジュアル -->
    <MainVisual />

    <!-- RESEARCH -->
    <v-container class="research-container">
      <v-row justify="center">
        <v-col cols="12">
          <v-card>

            <!-- コンテナ：研究成果 -->
            <v-container class="research">

              <!-- タイトル -->
              <v-card-title class="py-6 text-h4 text-primary" style="font-weight: bold;">研究成果</v-card-title>
              
              <!-- 区切り線 -->
              <v-divider class="pa-4"></v-divider>

              <p class="my-4"><a href="https://researchmap.jp/7259">researchmap</a>をご覧ください。</p>

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
  position: relative;
}
.main_visual {
  width: 100%;
  position: absolute; 
}

.research-container {
  max-width: 100%;
  padding: 100px 10px 10%;

  @include pc {
    max-width: 1000px;
    margin: 0 auto;
  }

  .v-card {
    padding: 0;
    min-height: 70vh;

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
