export class TeamActivity {
  public highlights = [
    { label: "Active admins", value: "12" },
    { label: "Teams online", value: "4" },
    { label: "Approvals", value: "18" }
  ];

  public updates = [
    { title: "Role updated", detail: "Operations granted billing access", actor: "Nina", time: "12 min ago" },
    { title: "Incident note", detail: "Latency spike resolved", actor: "System", time: "1 hour ago" },
    { title: "Report shared", detail: "Weekly usage summary", actor: "Arjun", time: "3 hours ago" },
    { title: "Key rotated", detail: "Automation key updated", actor: "Dwayne", time: "Yesterday" }
  ];

  public teams = [
    { name: "Operations", focus: "Deploys, runbooks", members: 12 },
    { name: "Analytics", focus: "Forecasting", members: 9 },
    { name: "Support", focus: "Customer tickets", members: 6 }
  ];
}
