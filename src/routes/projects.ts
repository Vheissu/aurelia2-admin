export class Projects {
  public projects = [
    { name: "Admin revamp", status: "In progress", owner: "Product", due: "Jan 28" },
    { name: "Security audit", status: "Review", owner: "Security", due: "Feb 02" },
    { name: "Usage overhaul", status: "Planning", owner: "Ops", due: "Feb 10" }
  ];

  public tasks = [
    { title: "Finalize access policy", assignee: "Dwayne", status: "Open" },
    { title: "Migrate billing data", assignee: "Nina", status: "Blocked" },
    { title: "Update on-call rotation", assignee: "Lina", status: "Done" }
  ];
}
