export class Profile {
  public profile = {
    name: "Dwayne Stewart",
    role: "Administrator",
    email: "dwayne@company.com",
    location: "New York, US"
  };

  public security = [
    { label: "Two-factor authentication", value: "Enabled" },
    { label: "Password last changed", value: "Nov 18, 2025" },
    { label: "Active sessions", value: "3" }
  ];

  public devices = [
    { name: "MacBook Pro", location: "New York", lastSeen: "Just now" },
    { name: "iPhone 15", location: "New York", lastSeen: "2 hours ago" },
    { name: "Chrome on Windows", location: "Remote", lastSeen: "3 days ago" }
  ];
}
