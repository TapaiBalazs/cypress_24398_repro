import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-stepper',
  template: `<div>
    <button aria-label="decrement" (click)="decrement()">-</button>
    <span data-cy="counter">{{ count }}</span>
    <button aria-label="increment" (click)="increment()">+</button>
    <img src="https://placekitten.com/200/200"/>
  </div>`,
})
export class StepperComponent {
  @Input() count = 0

  constructor(private http: HttpClient) {
  }



  decrement(): void {
    this.count--

    this.http.get(`https://placekitten.com/300/300`).subscribe((result) => {
      console.log('success')
    })
  }

  increment(): void {
    this.count++
  }
}
