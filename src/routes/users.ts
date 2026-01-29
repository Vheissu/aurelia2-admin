export class Users {
  private allUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" }
  ];

  public users = [];
  public newUser = { name: "", email: "", role: "User" };
  public editingUserId: number | null = null;
  public searchQuery = "";
  public showAddUserForm = false;

  constructor() {
    this.applyFilter();
  }

  get adminCount() {
    return this.allUsers.filter((user) => user.role === "Admin").length;
  }

  get userCount() {
    return this.allUsers.filter((user) => user.role !== "Admin").length;
  }

  addUser() {
    const id = Math.max(...this.allUsers.map((u) => u.id)) + 1;
    this.allUsers.push({ ...this.newUser, id });
    this.newUser = { name: "", email: "", role: "User" };
    this.showAddUserForm = false;
    this.applyFilter();
  }

  editUser(user) {
    this.editingUserId = user.id;
  }

  updateUser(user) {
    const index = this.allUsers.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.allUsers[index] = { ...user };
      this.editingUserId = null;
      this.applyFilter();
    }
  }

  deleteUser(id: number) {
    this.allUsers = this.allUsers.filter((user) => user.id !== id);
    this.applyFilter();
  }

  cancelEdit() {
    this.editingUserId = null;
  }

  filterUsers() {
    this.applyFilter();
  }

  private applyFilter() {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) {
      this.users = [...this.allUsers];
      return;
    }

    this.users = this.allUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query)
    );
  }
}
