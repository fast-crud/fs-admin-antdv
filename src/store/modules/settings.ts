import { defineStore } from "pinia";
// @ts-ignore
import { LocalStorage } from "/src/utils/util.storage";
import { replaceStyleVariables } from "vite-plugin-theme/es/client";
interface SettingState {
  theme: any;
}

const SETTING_THEME_KEY = "SETTING_THEME";
export const useSettingStore = defineStore({
  id: "app.setting",
  state: (): SettingState => ({
    // user info
    theme: null
  }),
  getters: {
    getTheme(): any {
      return (
        this.theme ||
        LocalStorage.get(SETTING_THEME_KEY) || {
          primaryColor: "#1890FF"
        }
      );
    }
  },
  actions: {
    persistTheme() {
      LocalStorage.set(SETTING_THEME_KEY, this.getTheme);
    },
    async setTheme(theme?: Object) {
      if (theme == null) {
        theme = this.getTheme;
      }
      this.theme = theme;
      this.persistTheme();
      await replaceStyleVariables({
        colorVariables: [this.theme.primaryColor]
      });
    },
    async setPrimaryColor(color) {
      const theme = this.theme;
      theme.primaryColor = color;
      await this.setTheme();
    },
    async init() {
      await this.setTheme(this.getTheme);
    }
  }
});
