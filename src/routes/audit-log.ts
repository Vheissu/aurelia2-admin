export class AuditLog {
  public entries = [
    { action: "User role updated", detail: "Jane Smith promoted to Admin", actor: "Dwayne", time: "2 min ago" },
    { action: "API key rotated", detail: "Payments service", actor: "System", time: "1 hour ago" },
    { action: "Export generated", detail: "Quarterly revenue report", actor: "Lina", time: "3 hours ago" },
    { action: "New integration enabled", detail: "Salesforce", actor: "Dwayne", time: "Yesterday" },
    { action: "Password reset", detail: "Bob Johnson", actor: "Support", time: "2 days ago" }
  ];
}
