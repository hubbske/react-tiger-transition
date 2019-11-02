import { buildTransitionIn } from './buildTransition';

import { InjectStyle, getEasing } from '../../utils';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'ease',
  opacity = 1,
  angle = 90,
  replaceBackground = null,
  zIndex = 2,
  delay = 0,
} = {}) => {

  const config = {
    right: {
      to: '100% 50%',
      trans: ['X', '(-100%)'],
      rot: ['Y', `(${-angle}deg)`],
    },
    left: {
      to: '0% 50%',
      trans: ['X', '(100%)'],
      rot: ['Y', `(${angle}deg)`],
    },
    top: {
      to: '50% 0%',
      trans: ['Y', '(100%)'],
      rot: ['X', `(${-angle}deg)`],
    },
    bottom: {
      to: '50% 100%',
      trans: ['Y', '(-100%)'],
      rot: ['X', `(${angle}deg)`],
    },
  };

  const transformOrigin = config[direction].to;
  let rotate = `rotate${config[direction].rot[0]}${config[direction].rot[1]}`;
  let translate = `translate${config[direction].trans[0]}${config[direction].trans[1]}`;
  let transform = `${rotate} ${translate}`;
  const animationName = `${direction}ReactTigerTransitionUnfold`;
  const animationCss = `${animationName} ${duration}ms ${getEasing(easing)} both`;

  const style = `
  .react-tiger-transition-unfold-${direction} {
    -webkit-transform-origin:${transformOrigin};
    -ms-transform-origin: ${transformOrigin};
    transform-origin: ${transformOrigin};
    -webkit-transform: ${transform};
    -ms-transform: ${transform};
    transform: ${transform};
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
    z-index: ${zIndex};
    -webkit-animation-delay: ${delay}ms;
    animation-delay: ${delay}ms;
    opacity: ${opacity};
  }
  `;
  rotate = `rotate${config[direction].rot[0]}(0deg)`;
  translate = `translate${config[direction].trans[0]}(0px)`;
  transform = `${rotate} ${translate}`;

  const animation = `
  @-webkit-keyframes ${animationName} {
    to {
      opacity: 1;
      -webkit-transform: ${transform};
      transform: ${transform};
    }
  }
  @keyframes ${animationName} {
    to {
      opacity: 1;
      -webkit-transform: ${transform};
      transform: ${transform};
    }
  }
  `;

  const rules = {
    style: new InjectStyle(style),
    animation: new InjectStyle(animation),
  };

  return buildTransitionIn({
    rules,
    replaceBackground,
    className: `react-tiger-transition-unfold-${direction}`,
  });
};
