import { ResponsiveType, CarouselProps } from "../types";

let hasWarnAboutTypo = false;

function getPartialVisibilityGutter(
  responsive: ResponsiveType,
  partialVisible?: boolean,
  serverSideDeviceType?: string | undefined,
  clientSideDeviceType?: string | undefined
): number | undefined {
  let gutter: number | undefined = 0;
  const deviceType = clientSideDeviceType || serverSideDeviceType;
  if (partialVisible && deviceType) {
    if (
      !hasWarnAboutTypo &&
      process.env.NODE_ENV !== "production" &&
      responsive[deviceType].paritialVisibilityGutter
    ) {
      hasWarnAboutTypo = true;
      console.warn(
        "You appear to be using paritialVisibilityGutter instead of partialVisibilityGutter which will be moved to partialVisibilityGutter in the future completely"
      );
    }
    gutter =
      responsive[deviceType].partialVisibilityGutter ||
      responsive[deviceType].paritialVisibilityGutter;
    // back-ward compatible, because previously there has been a typo
    // remove in the future
  }
  return gutter;
}

function getWidthFromDeviceType(
  deviceType: string,
  responsive: ResponsiveType
): number | string | undefined {
  let itemWidth;

  console.log(responsive);

  if (responsive[deviceType]) {
    const { items } = responsive[deviceType];
    itemWidth = (100 / items).toFixed(1);
  }
  return itemWidth;
}

function getItemClientSideWidth(
  props: CarouselProps,
  slidesToShow: number,
  containerWidth: number
): number {
  return Math.round(
    containerWidth / (slidesToShow + (props.centerMode ? 1 : 0))
  );
}

export {
  getWidthFromDeviceType,
  getPartialVisibilityGutter,
  getItemClientSideWidth
};
