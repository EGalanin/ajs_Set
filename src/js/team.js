export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(newMember) {
    if (this.members.has(newMember)) {
      throw new Error(`Игрок ${newMember.name} уже состоит в команде`);
    } else {
      this.members.add(newMember);
    }
  }

  addAll(...newMembers) {
    newMembers.forEach((newMember) => this.members.add(newMember));
  }

  toArayy() {
    return Array.from(this.members);
  }
}
