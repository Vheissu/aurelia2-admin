export class Webhooks {
  public endpoints = [
    { name: "Order events", url: "https://ops.company.com/webhooks/orders", status: "Active", lastDelivery: "2 min ago" },
    { name: "User updates", url: "https://ops.company.com/webhooks/users", status: "Active", lastDelivery: "14 min ago" },
    { name: "Alerts", url: "https://ops.company.com/webhooks/alerts", status: "Paused", lastDelivery: "3 days ago" }
  ];

  public deliveries = [
    { id: "wh_9182", status: "200 OK", time: "2 min ago" },
    { id: "wh_9181", status: "200 OK", time: "14 min ago" },
    { id: "wh_9174", status: "500", time: "3 days ago" }
  ];
}
