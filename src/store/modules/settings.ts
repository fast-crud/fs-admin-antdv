import { defineStore } from "pinia";
// @ts-ignore
import { LocalStorage } from "/src/utils/util.storage";
interface SettingState {
  theme: any;
}

const SETTING_THEME_KEY = "SETTING_THEME";
export const useUserStore = defineStore({
  id: "app.setting",
  state: (): SettingState => ({
    // user info
    theme: {
      type: "dark"
    }
  }),
  getters: {
    getTheme() {
      return this || LocalStorage.get(SETTING_THEME_KEY) || {};
    }
  },
  actions: {
    persistTheme() {
      LocalStorage.set(SETTING_THEME_KEY, this);
    },
    setTheme(theme: Object) {
      this.theme = theme;
      this.persistTheme();
    }
  }
});
