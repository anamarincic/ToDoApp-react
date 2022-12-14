export class Item {
  constructor(text) {
    this.id = Date.now();
    this.text = text;
    this.createdAt = Date.now();
    this.completedAt = null;
  }

  get isDone() {
    return this.completedAt !== null;
  }

  displayCompletedAt() {
    return new Date(this.completedAt).toLocaleString();
  }

  displayCreatedAt() {
    return new Date(this.createdAt).toLocaleString();
  }

  toggleDone() {
    if (this.completedAt === null) {
      this.completedAt = Date.now();
    } else {
      this.completedAt = null;
    }
  }
}
