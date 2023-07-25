import Carousel from "react-material-ui-carousel";

export const MediaDisplay = ({
  mediaArray,
}: {
  mediaArray?: { alt: string; url: string; type: "img" | "video" }[];
}) => {
  // TODO: add video player
  // TODO: add onclick
  return (
    <Carousel
      duration={3000}
      className={"w-full bg-white flex-grow aspect-video"}
      indicators={false}
    >
      {mediaArray &&
        mediaArray.map((m) => {
          return (
            <div
              className={"w-full aspect-video overflow-hidden justify-center"}
              key={mediaArray.indexOf(m)}
            >
              {m.type === "img" && m.url !== "" ? (
                <img src={m.url} alt={m.alt} className={"object-cover"} />
              ) : (
                <img
                  src={"/coming_soon_2.png"}
                  alt={"no image"}
                  className={"object-cover"}
                />
              )}
            </div>
          );
        })}
    </Carousel>
  );
};
