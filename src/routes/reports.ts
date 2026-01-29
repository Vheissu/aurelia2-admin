export class Reports {
  public summary = [
    { label: "Scheduled", value: "12" },
    { label: "Shared", value: "8" },
    { label: "Exports", value: "214" }
  ];

  public schedule = [
    { title: "Weekly revenue", cadence: "Every Monday", owner: "Finance" },
    { title: "Usage health", cadence: "Every Friday", owner: "Ops" },
    { title: "Security review", cadence: "Monthly", owner: "Security" }
  ];

  public library = [
    { name: "Q4 revenue", status: "Published", updated: "Jan 10" },
    { name: "Incident trends", status: "Draft", updated: "Jan 08" },
    { name: "Capacity outlook", status: "Published", updated: "Jan 05" }
  ];
}
