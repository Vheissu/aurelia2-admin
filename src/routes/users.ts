export class Users {
  private allUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
  ];
  private users = [];
  newUser = { name: "", email: "", role: "User" };
  editingUserId: number | null = null;
  searchQuery = "";

  constructor() {
    this.users = this.allUsers;
  }

  addUser() {
    const id = Math.max(...this.users.map((u) => u.id)) + 1;
    this.users.push({ ...this.newUser, id });
    this.newUser = { name: "", email: "", role: "User" };
  }

  editUser(user) {
    this.editingUserId = user.id;
  }

  updateUser(user) {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = { ...user };
      this.editingUserId = null;
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  cancelEdit() {
    this.editingUserId = null;
  }

  filterUsers() {
    const query = this.searchQuery.toLowerCase();
    this.users = this.allUsers.filter(user =>
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.role.toLowerCase().includes(query)
    );
  }
}
