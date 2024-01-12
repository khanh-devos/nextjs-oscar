import * as React from "react";

import {
  containerStyle,
  contentStyle,
  rightArrowStyle,
  leftArrowStyle
} from "./style";

import { guessWidthFromDeviceType } from "./utils";
import { CarouselInternalState, CarouselProps } from "./types";
import { transformSync } from "next/dist/build/swc/index";


const defaultTransitionDuration = 300;
const defaultTransition = "transform 300ms ease-in-out";
class Container extends React.Component<CarouselProps, CarouselInternalState> {
  public static defaultProps: any = {
    slidesToSlide: 1,
    infinite: false,
    containerClassName: "",
    contentClassName: "",
    itemClassName: "",
    keyBoardControl: true
  };
  private readonly containerRef: React.RefObject<any>;
  public onMove: boolean;
  public initialPosition: number;
  public lastPosition: number;
  public isAnimationAllowed: boolean;
  public direction: string;
  constructor(props: CarouselProps) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      itemWidth: 0,
      slidesToShow: 0,
      currentSlide: 0,
      totalItems: React.Children.count(props.children),
      deviceType: "",
      domLoaded: false,
      transform: 0,
      containerWidth: 0,
      resetZero: 0
    };

    this.onResize = this.onResize.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.setOpacity = this.setOpacity.bind(this);
    this.setFlying = this.setFlying.bind(this);
    this.onMove = false;
    this.initialPosition = 0;
    this.lastPosition = 0;
    this.isAnimationAllowed = true;
    this.direction = "";
  }
  public componentDidMount(): void {
    this.setState({ domLoaded: true });
    this.setItemsToShow();
    window.addEventListener("resize", this.onResize);
    this.onResize();
    if (this.props.keyBoardControl) {
      window.addEventListener("keyup", this.onKeyUp);
    }
  }
  public setItemsToShow(shouldCorrectItemPosition?: boolean): void {
    const { responsive } = this.props;
    Object.keys(responsive).forEach(item => {
      const { breakpoint, items } = responsive[item];
      const { max, min } = breakpoint;
      if (window.innerWidth >= min && window.innerWidth <= max) {
        this.setState({ slidesToShow: items, deviceType: item });
        this.setContainerAndItemWidth(items, shouldCorrectItemPosition);
      }
    });
  }
  public setContainerAndItemWidth(
    slidesToShow: number,
    shouldCorrectItemPosition?: boolean
  ): void {
    if (this.containerRef && this.containerRef.current) {
      const containerWidth = this.containerRef.current.offsetWidth;
      const itemWidth: number = Math.round(
        this.containerRef.current.offsetWidth / slidesToShow
      );
      this.setState({
        containerWidth,
        itemWidth
      });
      if (shouldCorrectItemPosition) {
        this.setState({
          transform: -(itemWidth * this.state.currentSlide)
        });
      }
    }
  }
  public onResize(): void {
    this.setItemsToShow();
  }
  public componentDidUpdate(
    prevProps: CarouselProps,
    { containerWidth }: CarouselInternalState
  ): void {
    if (
      this.containerRef &&
      this.containerRef.current &&
      this.containerRef.current.offsetWidth !== containerWidth
    ) {
      setTimeout(() => {
        this.setItemsToShow(true);
      }, this.props.transitionDuration || defaultTransitionDuration);
    }
  }
  public resetAllItems(): void {
    this.setState({ transform: 0, currentSlide: 0 });
  }
  public next(slidesHavePassed = 0): void {
    this.isAnimationAllowed = true;
    const { slidesToShow } = this.state;
    const { slidesToSlide, infinite } = this.props;
    
    const nextMaximumSlides =
      this.state.currentSlide + 1 + slidesHavePassed + slidesToShow;
    const nextSlides =
      this.state.currentSlide + slidesHavePassed + slidesToSlide;
    const nextPosition = -(this.state.itemWidth * nextSlides);

    if (nextMaximumSlides <= this.state.totalItems) {
      this.setState({
        transform: nextPosition,
        currentSlide: nextSlides
      });
    } else if (
      slidesHavePassed > 0 &&
      this.state.currentSlide + 1 + slidesToShow <= this.state.totalItems
    ) {
      // prevent over sliding;
      const maxSlides = this.state.totalItems - slidesToShow;
      const maxPosition = -(this.state.itemWidth * maxSlides);
      
      this.setState({
        transform: maxPosition,
        currentSlide: maxSlides
      });
    } else {
      if (infinite) {
        this.resetAllItems();
      }
    }

  }
  public previous(slidesHavePassed = 0): void {
    this.isAnimationAllowed = true;
    const { slidesToShow } = this.state;
    const { slidesToSlide, infinite } = this.props;
    const nextMaximumSlides =
      this.state.currentSlide - slidesHavePassed - slidesToSlide;
    const nextSlides =
      this.state.currentSlide - slidesHavePassed - slidesToSlide;
    const nextPosition = -(this.state.itemWidth * nextSlides);
    if (nextMaximumSlides >= 0) {
      this.setState({
        transform: nextPosition,
        currentSlide: nextSlides
      });
    } else if (
      slidesHavePassed > 0 &&
      this.state.currentSlide - slidesToSlide >= 0
    ) {
      // prevent oversliding.
      this.setState({
        transform: 0,
        currentSlide: 0
      });
    } else {
      const maxSlides = this.state.totalItems - slidesToShow;
      const maxPosition = -(this.state.itemWidth * maxSlides);
      if (infinite) {
        this.setState({
          transform: maxPosition,
          currentSlide: maxSlides
        });
      }
    }
  }
  public componentWillUnmount(): void {
    window.removeEventListener("resize", this.onResize);
    if (this.props.keyBoardControl) {
      window.removeEventListener("keyup", this.onKeyUp);
    }
  }
  public resetMoveStatus(): void {
    this.onMove = false;
    this.initialPosition = 0;
    this.lastPosition = 0;
    this.direction = "";
    
  }
  public handleMouseDown(e: any): void {
    if (this.props.disableDrag) {
      return;
    }
    this.onMove = true;
    this.initialPosition = e.pageX;
    this.lastPosition = e.pageX;
    this.isAnimationAllowed = false;
  }
  public handleMouseMove(e: any): void {
    if (this.props.disableDrag) {
      return;
    }
    
    
    if (this.onMove) {
      if (this.initialPosition > e.pageX) {
        // moving to the left.
        this.direction = "right";
        const translateXLimit = Math.abs(
          -(
            this.state.itemWidth *
            (this.state.totalItems - this.state.slidesToShow)
          )
        );
        const nextTranslate =
          this.state.transform - (this.lastPosition - e.pageX);
        const isLastSlide =
          this.state.currentSlide ===
          this.state.totalItems - this.state.slidesToShow;
        
        if (
          Math.abs(nextTranslate) <= translateXLimit ||
          (isLastSlide && this.props.infinite)
        ) {
          this.setState({ transform: nextTranslate });
        }
      }
      if (e.pageX > this.initialPosition) {
        this.direction = "left";
        const nextTranslate =
          this.state.transform + (e.pageX - this.lastPosition);
        const isFirstSlide = this.state.currentSlide === 0;
        if (nextTranslate <= 0 || (isFirstSlide && this.props.infinite)) {
          this.setState({ transform: nextTranslate });
        }
      }

      this.lastPosition = e.pageX;
    }
  }
  public handleMouseUp(e: any): void {
    if (this.props.disableDrag) {
      return;
    }
    if (this.onMove) {
      if (this.initialPosition > e.pageX) {
        const hasTravel =
          Math.round((this.initialPosition - e.pageX) / this.state.itemWidth)
        this.next(hasTravel);
      }
      if (e.pageX > this.initialPosition) {
        const hasTravel = Math.round(
          (e.pageX - this.initialPosition) / this.state.itemWidth
        );
        this.previous(hasTravel);
      }
      this.resetMoveStatus();
      
    }
  }
  public handleTouchStart(e: any): void {
    if (this.props.disableSwipeOnMobile) {
      return;
    }
    this.onMove = true;
    this.initialPosition = e.touches[0].screenX;
    this.lastPosition = e.touches[0].screenX;
    this.isAnimationAllowed = false;
  }
  public handleTouchMove(e: any): void {
    if (this.props.disableSwipeOnMobile) {
      return;
    }
    if (this.onMove) {
      if (this.initialPosition > e.touches[0].screenX) {
        this.direction = "right";
        const translateXLimit = Math.abs(
          -(
            this.state.itemWidth *
            (this.state.totalItems - this.state.slidesToShow)
          )
        );
        const nextTranslate: number =
          this.state.transform - (this.lastPosition - e.touches[0].screenX);
        const isLastSlide =
          this.state.currentSlide ===
          this.state.totalItems - this.state.slidesToShow;
        if (Math.abs(nextTranslate) <= translateXLimit || (isLastSlide && this.props.infinite)) {
          this.setState({ transform: nextTranslate });
        }
      }
      if (e.touches[0].screenX > this.initialPosition) {
        this.direction = "left";
        const nextTranslate =
          this.state.transform + (e.touches[0].screenX - this.lastPosition);
        const isFirstSlide = this.state.currentSlide === 0;
        if (nextTranslate <= 0 || (isFirstSlide && this.props.infinite)) {
          this.setState({ transform: nextTranslate });
        }
      }
      this.lastPosition = e.touches[0].screenX;
    }
  }
  public handleTouchEnd(): void {
    if (this.props.disableSwipeOnMobile) {
      return;
    }
    this.isAnimationAllowed = true;
    if (this.onMove) {
      if (this.direction === "right") {
        const hasTravel = Math.round(
          (this.initialPosition - this.lastPosition) / this.state.itemWidth
        );
        this.next(hasTravel);
      }
      if (this.direction === "left") {
        const hasTravel = Math.round(
          (this.lastPosition - this.initialPosition) / this.state.itemWidth
        );
        this.previous(hasTravel);
      }
      this.resetMoveStatus();
    }
  }
  public onKeyUp(e: any): void {
    switch (e.keyCode) {
      case 37:
        return this.previous();
      case 39:
        return this.next();
    }
  }
  public setOpacity(index: number): string {
    let opacity: string = '';
    const move = this.state.transform,
      step = this.state.itemWidth;

    const pivot = this.state.currentSlide;
    const shownNum = this.state.slidesToShow;
    const shownIndexLimit = Math.min(pivot + shownNum - 1, this.state.totalItems - 1);

    if (index < pivot || index > shownIndexLimit) {
      opacity = '0';
      
      if (
        (this.direction !== 'right' && index === pivot - 1) 
        || (this.direction === 'right' && index === shownIndexLimit + 1)) {
        opacity = `${Math.abs(((move % step) / step))}`;
      }


      
    }
    else {
      // Here are all the current showing items.
      opacity = '1';
      if (this.direction !== 'right' && index === shownIndexLimit) {
        const currentPos = step * pivot;
        opacity = `${1 - ((currentPos - Math.abs(move)) % step / step)}`;
      }

      if (this.direction === 'right' && index === pivot) {
        opacity = `${1 - (Math.abs(move % step) / step)}`;
      }
      
    }
    return opacity;

  }
  public setFlying(index: number): string {
    let rotate: string = '', translate: string = '';
    const move = this.state.transform,
      step = this.state.itemWidth;

    const pivot = this.state.currentSlide;
    const shownNum = this.state.slidesToShow;
    const shownIndexLimit = Math.min(pivot + shownNum - 1, this.state.totalItems - 1);

    if (index < pivot || index > shownIndexLimit) {
      
      if (this.direction !== 'right' && index <= pivot - 1 ) {        
        const currentPos = step * pivot;
        const change = 1 - ((currentPos - Math.abs(move)) % step / step);
        rotate = `rotateZ(-${change * 180}deg)`;
        translate = `translate(0, -${change * step}px)`;
      }

      
    }
    else {
      // Here are all the current showing items.
      rotate = 'rotateZ(0deg)';
      translate = 'translateY(0px)';

      if (this.direction === 'right' && index === pivot) {
        const change = Math.abs(move % step) / step;
        rotate = `rotateZ(-${change * 180}deg)`;
        translate = `translate(0, -${change * step}px)`;

      }
      
    }

    return translate + '' + rotate;
  }
  public renderLeftArrow(): React.ReactElement<any> {
    const { customLeftArrow } = this.props;
    if (customLeftArrow) {
      return React.cloneElement(customLeftArrow, {
        onClick: () => this.previous()
      });
    } else {
      return (
        <i
          // @ts-ignore
          style={leftArrowStyle}
          onClick={() => this.previous()}
        />
      );
    }
  }
  public renderRightArrow(): React.ReactElement<any> {
    const { customRightArrow } = this.props;
    if (customRightArrow) {
      return React.cloneElement(customRightArrow, {
        onClick: () => this.next()
      });
    } else {
      return (
        <i
          // @ts-ignore
          style={rightArrowStyle}
          onClick={() => this.next()}
        />
      );
    }
  }

  public render(): any {
    const { domLoaded, slidesToShow, containerWidth, itemWidth } = this.state;
    const {
      deviceType,
      responsive,
      forSSR,
      children,
      slidesToSlide,
      customLeftArrow,
      customRightArrow,
      disableSwipeOnMobile,
      removeArrow,
      removeArrowOnDeviceType,
      infinite,
      containerClassName,
      contentClassName,
      itemClassName,
      customTransition
    } = this.props;
    let flexBisis: number | string | undefined;
    const domFullLoaded =
      domLoaded && slidesToShow && containerWidth && itemWidth;
    if (forSSR && deviceType && !domFullLoaded) {
      flexBisis = guessWidthFromDeviceType(deviceType, responsive);
    }
    const shouldRenderOnSSR =
      forSSR && deviceType && !domFullLoaded && flexBisis;
    const isLeftEndReach = !(this.state.currentSlide - slidesToSlide >= 0);
    const isRightEndReach = !(
      this.state.currentSlide + 1 + slidesToShow <=
      this.state.totalItems
    );
    const shouldShowArrows =
      !removeArrow &&
      !(
        removeArrowOnDeviceType &&
        ((deviceType && removeArrowOnDeviceType.indexOf(deviceType) > -1) ||
          (this.state.deviceType &&
            removeArrowOnDeviceType.indexOf(this.state.deviceType) > -1))
      );
    const disableLeftArrow = !infinite && isLeftEndReach;
    const disableRightArrow = !infinite && isRightEndReach;
    return (
      <div
        className={containerClassName}
        ref={this.containerRef}
        style={containerStyle}
      >
        <ul
          className={contentClassName}
          // @ts-ignore
          style={{
            ...contentStyle,
            listStyle: "none",
            padding: 0,
            margin: 0,
            transition: this.isAnimationAllowed
              ? customTransition || defaultTransition
              : "none",
            overflow: shouldRenderOnSSR ? "hidden" : "unset",
            transform: `translate3d(${this.state.transform}px,0,0)`,
            perspective: '800px',
            // perspectiveOrigin: 'left'
          }}
          onMouseMove={this.handleMouseMove}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseLeave={this.handleMouseUp}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
        >
          {React.Children.toArray(children).map((child, index) => {
            
            
            return(
            <li
              key={index}
              id={`carousel-item-${index}`}
              style={{
                flex: shouldRenderOnSSR ? `1 0 ${flexBisis}%` : "auto",
                width: domFullLoaded ? `${itemWidth}px` : "auto",
                opacity: this.setOpacity(index),
                transform: this.setFlying(index),
                transitionDuration: '0.5s',
                
              }}
              className={itemClassName}
            >
              {child}
            </li>
          )})}
        </ul>
        {shouldShowArrows && !disableLeftArrow && this.renderLeftArrow()}
        {shouldShowArrows && !disableRightArrow && this.renderRightArrow()}
      </div>
    );
  }
}
const Carousel = ({ children, ...rest }: CarouselProps): any => (
  <Container {...rest}>{children}</Container>
);

export default Carousel;
