<template>

  <!-- メイン -->
  <v-main>

    <!-- メインビジュアル -->
    <MainVisual />

    <!-- news -->
    <v-container class="news-container">
      <v-row justify="center">
        <v-col cols="12">
          <v-card class="news-inner">

            <!-- コンテナ：ニュース -->
            <v-container class="news">

              <!-- タイトル -->
              <v-card-title class="py-6 text-h4 text-primary" style="font-weight: bold;">NEWS</v-card-title>
              
              <!-- 区切り線 -->
              <v-divider class="pa-4"></v-divider>

              <!-- ニュースアイテム -->
              <v-row v-for="(news) in newsList" :key="news.title">
                <v-col cols="12" class="py-0">
                  <v-card flat href="#">
                    <v-card-subtitle class="pt-2 text-primary" style="font-weight: bold; opacity: 1;">{{ news.date }}</v-card-subtitle>
                    <v-card-title class="text-subtitle-1">{{ news.title }}</v-card-title>
                  </v-card>
                </v-col>
              </v-row>

            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>


<script setup lang="ts">

/* head設定 */
useHead({
  title: 'ニュース | 佐々木研究室',
});

/* ニュースリスト */
/* 編集する場合はnewsListの中身を変更してください */
const newsList = [
  { date: '2023/03/31', title: '研究室について'},
  { date: '2023/03/31', title: 'メンバー' },
  { date: '2023/03/31', title: '研究成果' }
];
</script>


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

.news-container {
  max-width: 100%;
  padding: 100px 10px 10%;

  @include pc {
    max-width: 1000px;
    margin: 0 auto;
  }

  .news-inner {
    padding: 0;

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
