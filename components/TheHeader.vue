<!-- このプログラムは「ヘッダー」と呼ばれるページ一番上に表示される部分です -->

<template>

  <!-- サイドナビ -->
  <v-navigation-drawer v-model="drawer" temporary location="right" class="bg-primary">
    <v-btn icon="mdi-close" variant="text" @click="drawer=!drawer"></v-btn>
    <v-list nav>
      <v-list-item v-model="selectedItem">
        <v-list-item v-for="(item, i) in tabItems" :key="i" :href="item.url">
          <p><v-icon class="mx-2">{{ item.icon }}</v-icon>{{item.text}}</p>
        </v-list-item>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- トップナビ -->
  <v-app-bar elevation="3" height="80" app>

    <!-- ロゴ -->
    <v-toolbar-title>
      <v-btn height="100%" :ripple="false" class="pa-0" href="/">
        <v-img :width="logoWidth" height="60" src="/images/title.webp"></v-img>
      </v-btn>
    </v-toolbar-title>

    <!-- タブ -->
    <v-tabs color="primary">
      <v-tab v-for="(item, i) in tabItems" :key="i" :href="item.url">
        <v-icon class="mx-2">{{ item.icon }}</v-icon>{{item.text}}
      </v-tab>
    </v-tabs>

    <!-- ハンバーガーメニュー -->
    <v-app-bar-nav-icon @click="drawer=!drawer" style="font-size: 24px;"></v-app-bar-nav-icon>

  </v-app-bar>
</template>

<script setup lang="ts">
  import { useDisplay } from 'vuetify';
  import { computed } from "vue";

  const selectedItem = ref(1);

  /* サイドナビの表示・非表示制御 */
  const drawer = useState('drawer', () => false);

  /* タブの内容 */
  /* 編集する場合はtabItemsの中身を変更してください */
  const tabItems = [
    { text: 'TOP', icon : 'mdi-information-outline', url: '/' },
    { text: 'メンバー', icon : 'mdi-account-group', url: '/member' },
    { text: '研究成果', icon : 'mdi-trophy', url: '/research' },
    { text: 'アクセス', icon : 'mdi-map-marker', url: '/access' }
  ];

  /* レスポンシブ */
  const display = useDisplay();

  const AppBarPx = computed(() => {
    return display.smAndDown.value ? "px-0" : "px-4"; // モバイル:"px-0", ディスクトップ:"px-4"
  });
  const logoWidth = computed(() => {
    return display.smAndDown.value ? 180 : 200; // モバイル:180px, ディスクトップ:200px
  });
</script>

<style  lang="scss" scoped>

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

/* サイドナビ */
.v-navigation-drawer {

  .v-btn {
    font-size: 24px;// ボタンサイズを設定
    margin: 15px 10px 15px calc(100% - 60px);
  }
}

/* トップナビ */
.v-toolbar {

  @include pc {
    padding: 0 15% 0; // pc以上はpaddingを追加
  }

  .v-app-bar-nav-icon {

    @include md {
      display: none; // Medium以上はハンバーガーメニューを非表示
    }
  }

  .v-tabs {
    display: none;
  
    @include md {
      display: flex; // Medium以上はタブを表示
    }

    .v-tab {
      font-size: 100%; // タブの文字サイズを設定
      border-radius: 3px !important; // 角を丸くする

      &:hover {
        opacity: .6; // 透明度を設定
      }
    }
  }
}
</style>
