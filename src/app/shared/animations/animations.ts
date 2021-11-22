import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

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
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate(500, style({ opacity: 0 }))
        ]),
        query(':enter', [
          animate(500, style({ opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
