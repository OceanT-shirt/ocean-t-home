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

interface MediaArray {
  alt: string;
  url: string;
  type: "img" | "video";
}

export const MediaDisplay = ({ mediaArray }: { mediaArray?: MediaArray[] }) => {
  // TODO: add video player
  // TODO: add onclick
  if (!mediaArray || mediaArray.length === 0) {
    mediaArray = [
      {
        alt: "no image",
        url: "/coming_soon_2.png",
        type: "img",
      } as MediaArray,
    ];
  }

  return (
    <swiper-container
      style={{
        width: "100%",
      }}
    >
      {mediaArray &&
        mediaArray.map((m) => {
          return (
            <swiper-slide key={m.alt + m.url}>
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
                    src={"/coming_soon_2.png"}
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
            </swiper-slide>
          );
        })}
    </swiper-container>
  );
};
