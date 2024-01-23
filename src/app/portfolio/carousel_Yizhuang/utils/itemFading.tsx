import Carousel, { defaultTransitionDuration } from "../Carousel";

export const setItemOpacity = (
  carousel: Carousel,
  nextSlide: number = carousel.state.currentSlide,
  isReachingTheEnd: boolean = false, 
  isReachingTheStart: boolean = false
):void => {
  if (!carousel.props.fading) return;

  let opacity: string = '';
  const items = carousel.getItems(),
    pivot = nextSlide,
    shownNum = carousel.state.slidesToShow,
    shownIndexLimit = Math.min(pivot + shownNum - 1, carousel.state.totalItems - 1);


  const animatedTime = carousel.props.transitionDuration || defaultTransitionDuration;
  const isReachingTheEdge = isReachingTheEnd || isReachingTheStart;

  Object.values(items!).forEach((item: any, index: number) => {
    
    item.style.transitionDuration = isReachingTheEdge ? '0s' :
      `${animatedTime / 1000}s`;

    item.style.transitionTimingFunction = isReachingTheEdge ? 'none' : 'ease-in-out';

    if (index < pivot || index > shownIndexLimit) {
      opacity = isReachingTheEdge ? '1' : '0';
    }
    else {
      opacity = '1';
    }

    
    item.style.opacity = opacity;

  })
}

export const handleItemOpacity = (
  carousel: Carousel,
  nextPosition: number
  ): void => {
  
  if (!carousel.props.fading) return

  const move = nextPosition,
      step = carousel.state.itemWidth;

  const shownNum = carousel.state.slidesToShow;
  const currentLeftScreenSide = move,
    currentRightScreenSide = move + (shownNum * -step);

  const items = carousel.getItems();
  let opacity: string = '';
  Object.values(items!).forEach((item: any, index: number) => {
    
    let itemPos = index * -step;
    if (carousel.direction === 'right') {
      
      // item right at the right is greater then ones on the left.
      const canFading = itemPos > currentLeftScreenSide;
      const canShowing = itemPos > currentRightScreenSide && !canFading;
      
      if (canFading) {
        const rate = Math.min(itemPos - currentLeftScreenSide, step) / step;
        // rate : 0 -> 1
        opacity = `${1 - rate}`;
      }

      if (canShowing) {
        const numSteps = (itemPos - currentRightScreenSide) / step;

        if (numSteps > 1) {
          opacity = '1'
        }
        else {
          const rate = Math.min(itemPos - currentRightScreenSide, step) / step;
          // rate : 0 -> 1
          opacity = `${rate}`;
        }

      }

    }

    if (carousel.direction === 'left') {
      // Need to increase itemPos 1 step to be equal to the screen sides.
      itemPos += -step;

      // the currentRightScreenSide is reduced 1 step.
      const canFading = itemPos < currentRightScreenSide;

      // the currentLeftScreenSide is reduced 1 step.
      const canShowing = itemPos < currentLeftScreenSide && !canFading;

      if (canFading) {
        const rate = Math.min(currentRightScreenSide - itemPos, step) / step;
        // rate : 0 -> 1
        opacity = `${1 - rate}`;
      }

      if (canShowing) {
        const numSteps = (currentLeftScreenSide - itemPos) / step;

        if (numSteps > 1) {
          opacity = '1'
        }
        else {
          const rate = Math.min(currentLeftScreenSide - itemPos, step) / step;
          // rate : 0 -> 1
          opacity = `${rate}`;
        }

      }

    }


    item.style.transitionDuration = '0s';
    item.style.opacity = opacity;


  })
  

}