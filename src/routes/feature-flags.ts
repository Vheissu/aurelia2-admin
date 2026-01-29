export class FeatureFlags {
  public flags = [
    { name: "New billing UI", status: "On", exposure: "100%", env: "Production" },
    { name: "Smart alerts", status: "On", exposure: "60%", env: "Staging" },
    { name: "AI summaries", status: "Off", exposure: "0%", env: "Production" },
    { name: "Usage insights", status: "On", exposure: "25%", env: "Canary" }
  ];

  public environments = [
    { name: "Production", health: "Stable" },
    { name: "Staging", health: "Stable" },
    { name: "Canary", health: "Monitoring" }
  ];
}
