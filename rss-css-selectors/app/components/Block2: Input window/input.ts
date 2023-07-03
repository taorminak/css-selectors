export default class Input {
  public input: HTMLInputElement;

  constructor() {
    this.input = document.createElement("input");
    this.render();
  }

  render(): void {
    this.input.type = "text";
    document.body.appendChild(this.input);
  }

  getCode(): string {
    return this.input.value;
  }
}
