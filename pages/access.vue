<script setup lang="ts">

/* head設定 */
useHead({
  title: 'アクセス | 佐々木研究室',
});
</script>


<template>

  <!-- メイン -->
  <v-main>

    <!-- メインビジュアル -->
    <MainVisual />

    <!-- ACCESS -->
    <v-container class="access-container">
      <v-row justify="center">
        <v-col cols="12">
          <v-card>

            <!-- コンテナ：アクセス -->
            <v-container class="access">

              <!-- タイトル -->
              <v-card-title class="py-6 text-h4 text-primary" style="font-weight: bold;">アクセス</v-card-title>

              <!-- 区切り線 -->
              <v-divider class="access-title pa-4"></v-divider>

              <!-- 住所・場所 -->
               <v-row>
                 <v-col>
                  <div class="mx-4">
                    <p class="access-name">福島工業高等専門学校</p>
                    <p class="access-name mb-4">電気電子システム工学科棟</p>
                    <p>〒970-8034</p>
                    <p>福島県いわき市平上荒川字長尾３０</p>
                  </div>
                  <v-btn class="my-8" elevation="3" color="primary" height="50px" href="https://www.fukushima-nct.ac.jp/fk_access/access.html">アクセスマップ</v-btn>
                 </v-col>
               </v-row>

               <!-- Google Maps -->
               <v-row>
                 <v-col class="access-map">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1126.0782100199724!2d140.88897363261398!3d37.03292736996434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6021110a3467021f%3A0x1796df6d719fa484!2z56aP5bO25bel5qWt6auY562J5bCC6ZaA5a2m5qCh!5e0!3m2!1sja!2sjp!4v1666827121159!5m2!1sja!2sjp" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

.access-container {
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

/* ACCESS */
.access {

  .access-name {
    font-size: 1.1em;
    font-weight: 700;
    
    @include pc {
     font-size: 1.3em;
    }
  }
  .access-map {
    height: 300px;

    @include pc {
      height: 500px;
    }
  }
  .v-btn {
    width: 100%;
    line-height: 50px;
    font-size: 1em;
    margin: 0 auto;
    display: block;

    @include md {
      width: 30%;
    }
  }
}
</style>
