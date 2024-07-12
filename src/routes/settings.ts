import { ICustomElementViewModel } from "aurelia";

export class Settings implements ICustomElementViewModel {
  public settings: {
    notifications: boolean;
    darkMode: boolean;
    language: string;
  };

  constructor() {
    this.loadSettings();
  }

  private loadSettings() {
    const storedSettings = localStorage.getItem("appSettings");
    this.settings = storedSettings
      ? JSON.parse(storedSettings)
      : {
          notifications: true,
          darkMode: false,
          language: "en",
        };
  }

  private saveSettings() {
    localStorage.setItem("appSettings", JSON.stringify(this.settings));
  }

  toggleSetting(setting: "notifications" | "darkMode") {
    this.saveSettings();
    if (setting === "darkMode") {
      this.applyDarkMode();
    }
  }

  updateLanguage() {
    this.saveSettings();
  }

  private applyDarkMode() {
    if (this.settings.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  attached() {
    // Apply dark mode when the component is attached
    this.applyDarkMode();
  }
}