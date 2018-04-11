import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name" ]

  greet() {
    alert(`Hello, ${this.name * 2}!`)
  }

  get name() {
    return this.nameTarget.value
  }
}