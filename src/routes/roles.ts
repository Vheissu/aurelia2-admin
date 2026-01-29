export class Roles {
  public summaries = [
    { label: "Total roles", value: "8" },
    { label: "Custom roles", value: "5" },
    { label: "Pending reviews", value: "2" }
  ];

  public roles = [
    { name: "Admin", users: 6, scope: "Full access", status: "Core", lastUpdated: "Today" },
    { name: "Operations", users: 12, scope: "Deployments, billing", status: "Custom", lastUpdated: "Yesterday" },
    { name: "Analyst", users: 18, scope: "Read-only analytics", status: "Default", lastUpdated: "2 days ago" },
    { name: "Support", users: 9, scope: "Tickets, users", status: "Custom", lastUpdated: "Last week" }
  ];

  public assignments = [
    { role: "Admin", owner: "Dwayne", members: "6", coverage: "100%" },
    { role: "Operations", owner: "Nina", members: "12", coverage: "92%" },
    { role: "Analyst", owner: "Arjun", members: "18", coverage: "88%" },
    { role: "Support", owner: "Lina", members: "9", coverage: "76%" }
  ];

  public permissions = [
    { label: "User management", admin: true, ops: true, analyst: false, support: true },
    { label: "Billing", admin: true, ops: true, analyst: false, support: false },
    { label: "Deployments", admin: true, ops: true, analyst: false, support: false },
    { label: "Analytics", admin: true, ops: true, analyst: true, support: true },
    { label: "Support", admin: true, ops: false, analyst: false, support: true }
  ];

  public policies = [
    { label: "Require MFA for admin", status: "On", scope: "Admin" },
    { label: "Just-in-time access", status: "On", scope: "Operations" },
    { label: "Session timeout", status: "30 min", scope: "All" }
  ];
}
