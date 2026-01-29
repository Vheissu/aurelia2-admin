export class Notifications {
  public channels = [
    { name: "Email", status: "Enabled", detail: "Weekly digests" },
    { name: "Slack", status: "Enabled", detail: "#ops-alerts" },
    { name: "SMS", status: "Muted", detail: "Critical only" }
  ];

  public notifications = [
    { title: "Security scan complete", detail: "No issues detected", time: "10 min ago" },
    { title: "Usage spike", detail: "API calls up 12%", time: "1 hour ago" },
    { title: "New integration", detail: "Salesforce connected", time: "Yesterday" }
  ];
}
