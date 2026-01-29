export class Billing {
  public invoices = [
    { id: "INV-2026-01", date: "Jan 14, 2026", amount: "$2,400", status: "Paid" },
    { id: "INV-2025-12", date: "Dec 14, 2025", amount: "$2,400", status: "Paid" },
    { id: "INV-2025-11", date: "Nov 14, 2025", amount: "$2,250", status: "Paid" },
    { id: "INV-2025-10", date: "Oct 14, 2025", amount: "$2,250", status: "Paid" }
  ];

  public paymentMethods = [
    { label: "Corporate card", detail: "Visa •••• 0482", status: "Primary" },
    { label: "Backup card", detail: "Amex •••• 2207", status: "Secondary" }
  ];
}
