class RetiredForagerBee extends ForagerBee {
  constructor() {
    super();

    this.age = 40;
    this.color = 'grey';
    this.canFly = false;
    this.job = 'gamble';
  }

  gamble(treasure) {
    super.forage(treasure);
  }

  forage() {
    return 'I am too old, let me play cards instead';
  }
}
