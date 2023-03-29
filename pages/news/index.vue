<script setup lang="ts">
import { queryContent } from '#imports';

/* head設定 */
useHead({
  title: 'ニュース | 佐々木研究室',
});

/* 記事表示 */
const props = defineProps({
  max: {
    type: Number,
    default: -1, // 最大表示数を設定
  }
});

const limitedContent = await queryContent('').sort({ date: -1 }).limit(props.max).find();

/* 日付を取得 */
const getDate = (date: string) => {
  date = date.replace('/news/', '');
  
  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);
  const result = `${year}/${month}/${day}`;

  return result;
};
</script>


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

              <!-- ニュース一覧 -->
              <ContentList v-slot="{ list }">
                <v-row v-for="article in props.max === -1 ? list.slice().reverse() : limitedContent" :key="article._path">
                  <v-col cols="12" class="py-0">
                    <v-card flat :href="article._path">
                      <v-card-subtitle class="pt-2 text-primary" style="font-weight: bold; opacity: 1;">
                        {{ getDate(article._path) }}
                      </v-card-subtitle>
                      <v-card-title class="news-title text-subtitle-1">{{ article.body.children[0].props.id }}</v-card-title>
                    </v-card>
                  </v-col>
                </v-row>
              </ContentList>

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

  .news-inner {
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
    .news-title {
      text-decoration: underline;
      font-weight: bold;
    }
  }
}
</style>
