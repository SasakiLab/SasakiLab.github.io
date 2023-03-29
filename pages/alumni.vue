<script setup lang="ts">

/* head設定 */
useHead({
  title: '過去のメンバー | 佐々木研究室',
});

/* メンバーリスト */
/* 編集する場合はstudentListの中身を変更してください */
const studentList = [
  { title: '2023年3月 卒業', name: '岸本 篤' },
  { title: '2023年3月 卒業', name: '中本 怜恩' },
  { title: '2023年3月 卒業', name: '松本 蒼矢' },
  { title: '2023年3月 卒業', name: 'GOH PEI JIN' }
];
</script>


<template>

  <!-- メイン -->
  <v-main>

    <!-- メインビジュアル -->
    <MainVisual />

    <!-- MEMBER -->
    <v-container class="member-container">
      <v-row justify="center">
        <v-col cols="12">
          <v-card>

            <!-- コンテナ：メンバー -->
            <v-container class="member">

              <!-- タイトル -->
              <v-card-title class="py-6 text-h4 text-primary" style="font-weight: bold;">過去のメンバー</v-card-title>
              
              <!-- 区切り線 -->
              <v-divider class="pa-4"></v-divider>

              <!-- 学生タイトル -->
              <v-card-title class="py-6 text-primary" style="font-weight: bold;">学生</v-card-title>

              <!-- 学生アイテム -->
              <v-row v-for="(member) in studentList" :key="member.title">
                <v-col cols="12" class="py-0">
                  <v-card flat class="pa-0 my-2" color="secondary">
                    <v-card-title class="text-subtitle-1">{{ member.title }}</v-card-title>
                    <v-card-text>{{ member.name }}</v-card-text>
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

.member-container {
  max-width: 100%;
  padding: 100px 10px 10%;

  @include pc {
    max-width: 1000px;
    margin: 0 auto;
  }

  .v-card {
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

/* MEMBER */
.member {
  .v-card-text {
    font-size: 1em;
  }
}
</style>
