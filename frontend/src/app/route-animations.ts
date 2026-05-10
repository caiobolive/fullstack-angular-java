import { animate, group, query, style, transition, trigger } from '@angular/animations';

/** Alinha com o easing “standard” usado nos botões/cards em `styles.scss`. */
const EASE = 'cubic-bezier(0.2, 0, 0, 1)';

/**
 * Crossfade entre rotas: vistas ficam na mesma célula da grid (ver `.route-viewport`),
 * assim a altura do main segue o conteúdo — ao contrário de `position:absolute` no outlet.
 */
export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        gridArea: '1 / 1',
      }),
    ], { optional: true }),
    group([
      query(':leave', [
        animate(`200ms ${EASE}`, style({ opacity: 0, transform: 'translateY(14px)' })),
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(-14px)' }),
        animate(`300ms 70ms ${EASE}`, style({ opacity: 1, transform: 'translateY(0)' })),
      ], { optional: true }),
    ]),
  ]),
]);
