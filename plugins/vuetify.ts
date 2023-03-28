import "@mdi/font/css/materialdesignicons.min.css";
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

export default defineNuxtPlugin((nuxtApp) => {

  /* 配色テーマ */
  const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: '#EEEEEE',
      surface: '#FFFFFF',
      primary: '#14368C7',
      'primary-darken-1': '#3700B3',
      secondary: '#C4DBF5',
      'secondary-darken-1': '#018786',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    }
  }

  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    },
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme
      }
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
