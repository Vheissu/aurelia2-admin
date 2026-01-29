export class Analytics {
  public kpis = [
    { label: "Active sessions", value: "28,430", change: "+4.8%" },
    { label: "Conversion rate", value: "3.9%", change: "+0.3%" },
    { label: "Avg. session", value: "4m 12s", change: "+0.6%" },
    { label: "Bounce rate", value: "31%", change: "-1.2%" }
  ];

  public segments = [
    { name: "Enterprise", value: "48%", trend: "+2.1%" },
    { name: "Mid-market", value: "32%", trend: "+1.4%" },
    { name: "Startups", value: "20%", trend: "-0.5%" }
  ];

  public sources = [
    { name: "Direct", value: "42%", change: "+1.2%" },
    { name: "Referral", value: "24%", change: "+0.4%" },
    { name: "Organic", value: "20%", change: "-0.3%" },
    { name: "Campaigns", value: "14%", change: "+0.9%" }
  ];

  public retention = [
    { label: "Week 1", value: "78%" },
    { label: "Week 2", value: "62%" },
    { label: "Week 3", value: "54%" },
    { label: "Week 4", value: "46%" }
  ];
}
