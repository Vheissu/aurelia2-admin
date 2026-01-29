export class ApiKeys {
  public summaries = [
    { label: "Active keys", value: "4" },
    { label: "Revoked", value: "1" },
    { label: "Next rotation", value: "Feb 10" }
  ];

  public keys = [
    { name: "Primary key", created: "Jan 03, 2026", lastUsed: "Today", owner: "Dwayne", status: "Active", scope: "Read/Write" },
    { name: "Automation", created: "Dec 18, 2025", lastUsed: "2 days ago", owner: "System", status: "Active", scope: "Write" },
    { name: "Reporting", created: "Nov 01, 2025", lastUsed: "Last week", owner: "Analytics", status: "Active", scope: "Read" },
    { name: "Legacy", created: "Aug 02, 2025", lastUsed: "45 days ago", owner: "Ops", status: "Revoked", scope: "Read" }
  ];

  public policies = [
    { label: "Rotation policy", value: "Every 90 days" },
    { label: "IP restrictions", value: "Enabled" },
    { label: "Key scope", value: "Scoped" },
    { label: "Secrets storage", value: "Vaulted" }
  ];

  public alerts = [
    { label: "Unused keys", value: "2" },
    { label: "High-risk scopes", value: "1" },
    { label: "Failed auth", value: "3" }
  ];
}
