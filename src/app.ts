import { IRouter, route } from "@aurelia/router";
import { AuthService } from "./services/auth-service";
import { IEventAggregator } from "aurelia";

import { Dashboard } from "./routes/dashboard";
import { Analytics } from "./routes/analytics";
import { SystemHealth } from "./routes/system-health";
import { TeamActivity } from "./routes/team-activity";
import { Users } from "./routes/users";
import { Roles } from "./routes/roles";
import { ApiKeys } from "./routes/api-keys";
import { FeatureFlags } from "./routes/feature-flags";
import { Billing } from "./routes/billing";
import { Usage } from "./routes/usage";
import { AuditLog } from "./routes/audit-log";
import { Integrations } from "./routes/integrations";
import { Webhooks } from "./routes/webhooks";
import { Settings } from "./routes/settings";
import { Support } from "./routes/support";
import { Login } from "./routes/login";
import { Reports } from "./routes/reports";
import { Profile } from "./routes/profile";
import { Notifications } from "./routes/notifications";
import { Tables } from "./routes/tables";
import { Forms } from "./routes/forms";
import { Content } from "./routes/content";
import { Notes } from "./routes/notes";
import { Projects } from "./routes/projects";

@route({
  routes: [
    { path: "", component: Dashboard },
    { path: "analytics", component: Analytics },
    { path: "system-health", component: SystemHealth },
    { path: "team-activity", component: TeamActivity },
    { path: "users", component: Users },
    { path: "roles", component: Roles },
    { path: "api-keys", component: ApiKeys },
    { path: "feature-flags", component: FeatureFlags },
    { path: "billing", component: Billing },
    { path: "usage", component: Usage },
    { path: "reports", component: Reports },
    { path: "audit-log", component: AuditLog },
    { path: "integrations", component: Integrations },
    { path: "webhooks", component: Webhooks },
    { path: "profile", component: Profile },
    { path: "notifications", component: Notifications },
    { path: "tables", component: Tables },
    { path: "forms", component: Forms },
    { path: "content", component: Content },
    { path: "notes", component: Notes },
    { path: "projects", component: Projects },
    { path: "settings", component: Settings },
    { path: "support", component: Support },
    { path: "login", component: Login },
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

  private navGroups = [
    {
      label: "Core",
      items: [
        { route: "", title: "Dashboard", icon: "dashboard" },
        { route: "analytics", title: "Analytics", icon: "analytics" },
        { route: "system-health", title: "System Health", icon: "health" },
        { route: "usage", title: "Usage", icon: "usage" },
        { route: "reports", title: "Reports", icon: "reports" },
      ],
    },
    {
      label: "Team",
      items: [
        { route: "team-activity", title: "Team Activity", icon: "activity" },
        { route: "users", title: "Users", icon: "users" },
        { route: "roles", title: "Roles & Permissions", icon: "roles" },
        { route: "profile", title: "Profile", icon: "profile" },
        { route: "notifications", title: "Notifications", icon: "notifications" },
      ],
    },
    {
      label: "Operations",
      items: [
        { route: "billing", title: "Billing", icon: "billing" },
        { route: "api-keys", title: "API Keys", icon: "keys" },
        { route: "feature-flags", title: "Feature Flags", icon: "flags" },
        { route: "webhooks", title: "Webhooks", icon: "webhooks" },
        { route: "integrations", title: "Integrations", icon: "integrations" },
        { route: "audit-log", title: "Audit Log", icon: "audit" },
      ],
    },
    {
      label: "Workspace",
      items: [
        { route: "projects", title: "Projects", icon: "projects" },
        { route: "content", title: "Content", icon: "content" },
        { route: "notes", title: "Notes", icon: "notes" },
        { route: "tables", title: "Tables", icon: "tables" },
        { route: "forms", title: "Forms", icon: "forms" },
        { route: "settings", title: "Settings", icon: "settings" },
        { route: "support", title: "Support", icon: "support" },
      ],
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
    return this.isAuthenticated ? this.navGroups : [];
  }
}
