import { glideInRules, glideOutRules } from './transitions';
import { base } from './base';

export const glide = base(
  // common
  {
    direction: 'left',
    backgroundColor: null,
  },

  //enter
  {
    duration: 700,
    easing: 'ease',
    opacity: 1,
    zIndex: 2,
    fillMode: 'both',
    delay: 0,
  },
  glideInRules,

  //exit
  {
    duration: 700,
    easing: 'ease',
    opacity: 0.3,
    zIndex: 1,
    fillMode: 'both',
  },
  glideOutRules
)