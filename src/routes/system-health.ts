export class SystemHealth {
  public services = [
    { name: "API Gateway", status: "Operational", latency: "128ms" },
    { name: "Auth Service", status: "Operational", latency: "92ms" },
    { name: "Billing", status: "Monitoring", latency: "210ms" },
    { name: "Notifications", status: "Operational", latency: "64ms" },
    { name: "Analytics", status: "Degraded", latency: "420ms" }
  ];

  public incidents = [
    { title: "Analytics latency", detail: "Elevated response times in EU", time: "Ongoing" },
    { title: "Billing sync", detail: "Delayed updates in staging", time: "Resolved" }
  ];

  public metrics = [
    { label: "Uptime", value: "99.98%" },
    { label: "Error rate", value: "0.12%" },
    { label: "SLA", value: "99.9%" }
  ];
}
