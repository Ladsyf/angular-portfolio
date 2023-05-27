import {
  state,
  style,
  animate,
  trigger,
  transition,
} from '@angular/animations';

export const prevAnimation = trigger('closeOpen', [
  state(
    'open',
    style({
      opacity: 1,
    })
  ),
  state(
    'closed',
    style({
      left: '1rem',
      opacity: 0,
    })
  ),
  transition('open => closed', [animate('0.2s')]),
  transition('closed => open', [animate('0.2s')]),
]);


export const nextAnimation = trigger('openClose', [
  state(
    'open',
    style({
      opacity: 1,
    })
  ),
  state(
    'closed',
    style({
      right: '1rem',
      opacity: 0,
    })
  ),
  transition('open => closed', [animate('0.2s')]),
  transition('closed => open', [animate('0.2s')]),
]);

export const prevComponentAnimation = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('100ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('100ms', style({ opacity: 0 }))
]
  ),
]);

export const navBarAnimation = trigger('hide', [
  transition(':enter', [
    style({ top: '-100px' }),
    animate('200ms', style({top: 0}))
  ]),
  transition(':leave', [
    animate('200ms', style({top: '-100px'}))
  ])
])
