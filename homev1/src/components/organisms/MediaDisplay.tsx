// core version + navigation, pagination modules:
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation],
});

export const MediaDisplay = ({
  mediaArray,
}: {
  mediaArray?: { alt: string; url: string; type: "img" | "video" }[];
}) => {
  // TODO: add video player
  // TODO: add onclick
  return (
    <swiper-container
      style={{
        width: "100%",
      }}
    >
      {mediaArray &&
        mediaArray.map((m) => {
          return (
            <swiper-slide key={mediaArray.indexOf(m)}>
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
                    }}
                  />
                ) : (
                  <img
                    src={"/coming_soon_2.png"}
                    alt={"no image"}
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
            </swiper-slide>
          );
        })}
    </swiper-container>
  );
};
