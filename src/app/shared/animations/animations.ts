import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

const duration: string | number = '500ms';

export const fadeInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ opacity: 0 })
      ]),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate(duration, style({ opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate(duration, style({ opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
