<!-- このプログラムは「フッター」と呼ばれるページ一番下に表示される部分です -->

<template>
  <v-footer class="pa-0" padless>
    <v-card width="100%" class="text-center" color="primary">

      <!-- 外部サイト -->
      <v-card-text>
        <v-btn v-for="item in icons" :key="item.icon" :href="item.url" color="transparent" elevation="0">
          <v-icon size="24px" class="mx-2">{{ item.icon }}</v-icon>
          {{ item.name }}
        </v-btn>
      </v-card-text>

      <!-- 区切り線 -->
      <v-divider></v-divider>

      <!-- 著作権情報 -->
      <v-card-text class="footer-text white--text">
        &copy; {{ new Date().getFullYear() }} 佐々木研究室
      </v-card-text>

    </v-card>
  </v-footer>
</template>


<script setup lang="ts">

  /* 外部サイト一覧 */
  /* 編集する場合はiconsの中身を変更してください */
  const icons = [
    { icon: 'mdi-web', name: '福島工業高等専門学校', url: 'https://www.fukushima-nct.ac.jp/' },
    { icon: 'mdi-web', name: 'researchmap', url: 'https://researchmap.jp/7259' }
  ];
</script>

<style lang="scss" scoped>
.v-card {
  border-radius: 0;
}
</style>
