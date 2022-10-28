import { HttpClientModule } from '@angular/common/http';
import { MountConfig } from 'cypress/angular';
import { StepperComponent } from './stepper.component'

describe('StepperComponent', () => {

  const config: MountConfig<StepperComponent> = {
    declarations: [StepperComponent],
    imports: [HttpClientModule],
    providers: [],
  };

  it('mounts', () => {
    cy.mount(StepperComponent, config)
    cy.get('[data-cy="counter"]').should('be.visible');
    cy.get('[aria-label="decrement"]').should('be.visible').click();
  })
})
