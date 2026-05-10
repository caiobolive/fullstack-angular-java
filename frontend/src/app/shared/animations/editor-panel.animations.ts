import { animate, style, transition, trigger } from '@angular/animations';

const EASE = 'cubic-bezier(0.2, 0, 0, 1)';

/** Entrada/saída do cartão de criar/editar cliente (control flow `@if`). */
export const editorPanelAnimations = trigger('editorPanel', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(16px)' }),
    animate(`280ms ${EASE}`, style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
  transition(':leave', [
    animate(`200ms ${EASE}`, style({ opacity: 0, transform: 'translateY(10px)' })),
  ]),
]);
