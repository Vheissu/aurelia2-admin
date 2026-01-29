export class Dashboard {
  public stats = [
    { title: "Active Users", value: "1,234", delta: "+12%", icon: "users" },
    { title: "Monthly Revenue", value: "$42,980", delta: "+8.1%", icon: "revenue" },
    { title: "New Orders", value: "248", delta: "+3.4%", icon: "orders" },
    { title: "Open Tasks", value: "13", delta: "-2", icon: "tasks" }
  ];

  public performance = [
    { label: "Mon", value: 62 },
    { label: "Tue", value: 78 },
    { label: "Wed", value: 71 },
    { label: "Thu", value: 85 },
    { label: "Fri", value: 66 },
    { label: "Sat", value: 52 },
    { label: "Sun", value: 60 }
  ];

  public activity = [
    { title: "Enterprise plan upgraded", detail: "Northwind Co.", time: "2m ago" },
    { title: "New admin added", detail: "Mary Gibson", time: "18m ago" },
    { title: "Security scan completed", detail: "No issues", time: "1h ago" },
    { title: "Weekly report generated", detail: "Operations", time: "4h ago" }
  ];

  public signals = [
    { label: "API uptime", value: "99.98%" },
    { label: "Avg. response", value: "128ms" },
    { label: "Queue depth", value: "24" }
  ];
}
