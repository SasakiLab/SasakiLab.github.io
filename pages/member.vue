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
              <v-card-title class="py-6 text-h4 text-primary" style="font-weight: bold;">メンバー</v-card-title>
              
              <!-- 区切り線 -->
              <v-divider class="pa-4"></v-divider>

              <!-- 教員タイトル -->
              <v-card-title class="py-6 text-primary" style="font-weight: bold;">教員</v-card-title>

              <!-- 教員アイテム -->
              <v-row v-for="(member) in teacherList" :key="member.title">
                <v-col cols="12" class="py-0">
                  <v-card flat class="pa-0 my-2" color="secondary">
                    <v-card-title class="text-subtitle-1">{{ member.title }}</v-card-title>
                    <v-card-text>{{ member.name }}</v-card-text>
                  </v-card>
                </v-col>
              </v-row>

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

              <!-- 「過去のメンバー」ボタン -->
              <v-btn class="my-6" height="50" color="primary" href="/alumni">過去のメンバー
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

/* head設定 */
useHead({
  title: 'メンバー | 佐々木研究室',
});

/* メンバーリスト */
/* 編集する場合はteacherList，studentListの中身を変更してください */
const teacherList = [
  { title: '助教', name: '佐々木 修平' }
];
const studentList = [
  { title: '5年生', name: '高専 太郎' },
  { title: '5年生', name: '高専 花子' },
  { title: '5年生', name: '高専 太郎' },
  { title: '5年生', name: '高専 花子' }
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
  .v-card-text, .v-btn {
    font-size: 1em;
  }
  .v-btn {
    width: 100%;
    line-height: 50px;
    margin: 0 auto;
    display: block;

    @include md {
      width: 30%;
    }
  }
}
</style>
