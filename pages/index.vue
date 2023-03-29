<template>

  <!-- ローディング -->
  <Loading />

  <!-- メイン -->
  <v-main>

    <!-- メインビジュアル -->
    <MainVisual />

    <v-container class="about-container">
      <v-row justify="center">
        <v-col cols="12">
          <v-card class="about">

            <!-- コンテナ：研究室紹介 -->
            <v-container>

              <!-- 研究室キャッチコピー -->
              <v-card-title class="py-6 text-primary" style="font-weight: bold;">未来を支える超電導技術の研究</v-card-title>

              <!-- 研究室説明 -->
              <v-card-text>
                <p>佐々木研究室は、超電導体を用いたエネルギー貯蔵システムや免震装置などの研究を行っています。特に、大容量化を目指した回転エネルギー貯蔵システムや、静止安定浮上を搭載した磁気浮上型超電導免震装置などの技術に注目しています。また、永久磁石や銅板を用いた免震装置や、超電導バルク体を用いた磁気浮上応用システムなど、多様な研究課題に取り組んでいます。これらの研究は、エネルギー貯蔵や防災・減災技術の発展に貢献することが期待されています。</p>
              </v-card-text>
            </v-container>

            <!-- コンテナ：メインコンテンツ -->
            <v-container>

              <!-- メインコンテンツタイトル -->
              <v-card-title class="py-6 text-primary" style="font-weight: bold;">MAIN CONTENTS</v-card-title>

              <!-- メインコンテンツアイテム -->
              <v-row justify="center">
                  <v-col v-for="(content) in mainContentList" :key="content.title" cols="12" sm="12" md="4">
                    <v-card color="primary" class="pa-4" :href="content.url">
                      <v-icon size="100px" style="display: block; margin: 0 auto;">{{ content.icon }}</v-icon>
                      <v-card-title class="pt-4" style="text-align: center;">{{ content.title }}</v-card-title>
                    </v-card>
                  </v-col>
              </v-row>
            </v-container>

            <!-- コンテナ：ニュース -->
            <v-container class="news">

              <!-- ニュースタイトル -->
              <v-card-title class="py-6 text-primary" style="font-weight: bold;">NEWS</v-card-title>
                          
              <!-- ニュースアイテム -->
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

              <!-- 「もっと見る」ボタン -->
              <v-btn class="my-6" height="50" color="primary" href="/news">もっと見る
                <v-icon class="ml-1">mdi-arrow-right</v-icon>
              </v-btn>
            </v-container>

          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </v-main>
</template>


<script setup lang="ts">
import { queryContent } from '#imports';

/* head設定 */
useHead({
  title: '佐々木研究室 | 福島高専',
});

/* メインコンテンツリスト */
/* 編集する場合はmainContentListの中身を変更してください */
const mainContentList = [
  { title: 'メンバー', icon: 'mdi-account-group', url: '/member' },
  { title: '研究成果', icon: 'mdi-trophy', url: '/research' },
  { title: 'アクセス', icon: 'mdi-map-marker', url: '/access' },
];

/* 記事表示 */
const props = defineProps({
  max: {
    type: Number,
    default: 3, // 最大表示数を設定
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

.about-container {
  max-width: 100%;
  padding: 400px 10px 10%;

  @include pc {
    max-width: 1000px;
    margin: 0 auto;
  }
}

/* ABOUT */
.about {
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
  .v-card-text {
    line-height: 30px;
    font-size: 1em;

    p {
      padding: 0;
    }
  }
}

/* NEWS */
.news {
  .v-btn {
    line-height: 50px;
    width: 100%;
    margin: 0 auto;
    display: block;
    font-size: 1em;

    @include md {
      width: 30%;
    }
  }
  .news-title {
    text-decoration: underline;
    font-weight: bold;
  }
}
</style>
