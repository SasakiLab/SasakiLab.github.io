<!-- このプログラムは「メインビジュアル」と呼ばれるトップページの一番最初に表示される部分です -->

<template>
  <section class="main_visual">

    <!-- 画像 -->
    <div class="main_visual__images">
      <v-container class="main_visual__image" fluid></v-container>
    </div>

  </section>
</template>

<style  lang="scss" scoped>

/* グローバル変数 */
$primary: rgba(0, 113, 243, 0.5);
$height: 50vh; // メインビジュアルの高さ（Mobile）
$height-pc: 50vh; // メインビジュアルの高さ（PC）

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

/* メインビジュアル */
.main_visual {
  height: $height;
  min-height: 500px;
  position: relative;
  overflow: hidden;

  @include pc {
    height: $height-pc;
  }

  .main_visual__images {
    width: 100%;
    height: 100%;
    position: relative;

    .main_visual__image {
      height: $height;
      min-height: 500px;
      position: absolute;

      @include pc {
        height: $height-pc;
      }

      // メイン画像
      &:nth-of-type(1) {
        background: url("/images/main_visual_01.webp");
        background-size: cover;
        background-position: center center;
      }
      &:nth-of-type(1):before {
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        position: absolute;
        background-color: rgba(0,0,0,0.5); // 半透明のフィルターをかける
      }
    }
  }
}
</style>
