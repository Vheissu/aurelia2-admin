export class Usage {
  public summaries = [
    { label: "API calls", value: "8.2M", limit: "10M" },
    { label: "Storage", value: "420GB", limit: "1TB" },
    { label: "Exports", value: "214", limit: "500" }
  ];

  public spikes = [
    { label: "Mon", value: "68%" },
    { label: "Tue", value: "74%" },
    { label: "Wed", value: "81%" },
    { label: "Thu", value: "63%" },
    { label: "Fri", value: "57%" },
    { label: "Sat", value: "40%" },
    { label: "Sun", value: "45%" }
  ];
}
