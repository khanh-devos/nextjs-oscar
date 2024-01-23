import Carousel, { defaultTransitionDuration } from "../Carousel";


export const setItemFlying = (
  carousel: Carousel,
  nextSlide: number = carousel.state.currentSlide,
  isReachingTheEnd: boolean = false,
  isReachingTheStart: boolean = false
):void => {
  if (!carousel.props.flying) return;

  let transform: string = '';
  const items = carousel.getItems(),
    pivot = nextSlide,
    shownNum = carousel.state.slidesToShow,
    shownIndexLimit = Math.min(pivot + shownNum - 1, carousel.state.totalItems - 1);
  
  
  const isReachingTheEdge = isReachingTheEnd || isReachingTheStart;
  const animatedTime = carousel.props.transitionDuration || defaultTransitionDuration;

  const noFlying = `translate3d(0,0,0) scale(1) rotateZ(0deg)`;
  const flying = `translateY(-${carousel.state.itemWidth}px) scale(0) rotateZ(-180deg)`;
  

  Object.values(items!).forEach((item: any, index: number) => {
    item.style.transitionDuration = isReachingTheEdge ?
      '0s' : `${animatedTime / 1000}s`;

    item.style.transitionTimingFunction = isReachingTheEdge ?
      'none' : 'ease-in-out';

    if (index < pivot || index > shownIndexLimit) {
      
      transform = noFlying;
      if (index <= pivot - 1) {
        transform = flying;
      }

    }
    else {
      transform = noFlying
    }

    item.style.transform = transform;
    
  })
}

export const handleItemFlying = (
  carousel: Carousel,
  nextPosition: number
): void => {
  if (!carousel.props.flying) return

  const noFlying = `translate3d(0,0,0) scale(1) rotateZ(0deg)`;

  const move = nextPosition,
    step = carousel.state.itemWidth;

  const shownNum = carousel.state.slidesToShow;
  const currentLeftScreenSide = move,
    currentRightScreenSide = move + (shownNum * -step);
  
  const items = carousel.getItems();
  let transform: string = '';
  Object.values(items!).forEach((item: any, index: number) => {
    
    let itemPos = index * -step;
    if (carousel.direction === 'right') {
      
      // item right at the right is greater then ones on the left.
      const canFlying = itemPos > currentLeftScreenSide;
      const canShowing = itemPos > currentRightScreenSide && !canFlying;
      
      if (canFlying) {
        const rate = Math.min(itemPos - currentLeftScreenSide, step) / step;
        // rate : 0 -> 1
        transform = `translateY(-${step * rate}px) scale(${1 - rate}) rotateZ(-${180 * rate}deg)`;
      }

      if (canShowing) {
        transform = noFlying;
      }

    }

    if (carousel.direction === 'left') {
      // Need to increase itemPos 1 step to be equal to the screen sides.
      itemPos += -step;

      // the currentRightScreenSide is reduced 1 step.
      const canFlying = itemPos < currentRightScreenSide;

      // the currentLeftScreenSide is reduced 1 step.
      const canShowing = itemPos < currentLeftScreenSide && !canFlying;

      if (canFlying) {
        transform = noFlying;
      }

      if (canShowing) {
        const numSteps = (currentLeftScreenSide - itemPos) / step;

        if (numSteps > 1) {
          transform = noFlying
        }
        else {
          const rate = Math.min(currentLeftScreenSide - itemPos, step) / step;
          // rate : 0 -> 1
          transform = `translateY(-${step * (1 - rate)}px) scale(${rate}) rotateZ(-${180 * (1 - rate)}deg)`;
        }

      }

    }


    item.style.transitionDuration = '0s';
    item.style.transform = transform;


  })
}