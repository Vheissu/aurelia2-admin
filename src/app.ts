import { IRouter, route } from "@aurelia/router-lite";
import { AuthService } from "./services/auth-service";
import { IEventAggregator } from "aurelia";

@route({
  routes: [
    { path: "", component: () => import("./routes/dashboard") },
    { path: "users", component: () => import("./routes/users") },
    { path: "settings", component: () => import("./routes/settings") },
    { path: "login", component: () => import("./routes/login") },
  ],
})
export class App {
  static inject = [IRouter, AuthService, IEventAggregator];

  private isAuthenticated: boolean;

  constructor(
    private readonly router: IRouter,
    private authService: AuthService,
    private ea: IEventAggregator
  ) {
    this.isAuthenticated = this.authService.isAuthenticated;
    this.ea.subscribe("auth:change", (isAuthenticated: boolean) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  private navItems = [
    {
      route: "",
      title: "Dashboard",
      icon: "home",
    },
    {
      route: "users",
      title: "Users",
      icon: "users",
    },
    {
      route: "settings",
      title: "Settings",
      icon: "settings",
    },
  ];

  attached() {
    const storedSettings = localStorage.getItem("appSettings");
    if (storedSettings) {
      const settings = JSON.parse(storedSettings);
      if (settings.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }

  logout() {
    this.authService.logout();
    this.router.load("login");
  }

  get routerNavs() {
    return this.isAuthenticated ? this.navItems : [];
  }
}
