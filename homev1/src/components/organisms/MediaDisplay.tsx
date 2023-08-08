// core version + navigation, pagination modules:
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import styled from '@emotion/styled';

interface MediaArray {
  alt: string;
  url: string;
  type: "img" | "video";
}

export const MediaDisplay = ({ mediaArray }: { mediaArray?: MediaArray[] }) => {
  // TODO: add video player
  // TODO: add onclick
  const swiperElRef = useRef(null);

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  if (!mediaArray || mediaArray.length === 0) {
    mediaArray = [
      {
        alt: "no image",
        url: "/images/coming_soon_2.png",
        type: "img",
      } as MediaArray,
    ];
  }

  const StyledSwiperNavigator = styled(SwiperSlide)`
    opacity: 0.4;
    transition: opacity 0.3s ease;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    &:hover {
      opacity: 1;
    }

    &.swiper-slide-thumb-active {
      opacity: 1;
    }
  `;

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        ref={swiperElRef}
        thumbs-swiper=".mySwiper2"
        style={{
          width: "100%",
          flex: 1,
        }}
        spaceBetween={10}
        navigation={true}
        className="mySwiper2"
        effect={"fade"}
      >
        {mediaArray &&
          mediaArray.map((m) => {
            return (
              <SwiperSlide key={m.alt + m.url}>
                <div
                  style={{
                    paddingTop: "56.25%",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  {m.type === "img" && m.url !== "" ? (
                    <img
                      src={m.url}
                      alt={m.alt}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                  ) : (
                    <img
                      src={"/images/coming_soon_2.png"}
                      alt={"loading error"}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                  )}
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={4}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        style={{
          width: "100%",
          boxSizing: "border-box",
          margin: "5px 0",
          flex: 1,
        }}
      >
        {mediaArray &&
          mediaArray.map((m) => {
            return (
              <StyledSwiperNavigator key={m.alt + m.url}>
                <div
                  style={{
                    paddingTop: "56.25%",
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {m.type === "img" && m.url !== "" ? (
                    <img
                      src={m.url}
                      alt={m.alt}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                  ) : (
                    <img
                      src={"/images/coming_soon_2.png"}
                      alt={"loading error"}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                  )}
                </div>
              </StyledSwiperNavigator>
            );
          })}
      </Swiper>
    </div>
  );
};
