import useSWR from "swr";
import { getErrorPortfolio, Portfolio } from "../models/portfolio";
import { BoardAligner } from "../utils/BoardAligner";
import { useEffect, useState } from "react";

interface Thumbnail {
  id: number;
  imgUri: string;
  title: string;
  desc: string;
}

export const fetchThumbnails = async (key: string): Promise<Thumbnail[]> => {
  const response = await fetch(key);
  if (!response.ok) throw new Error("Failed to fetch thumbnails.");
  return await response.json();
};

export const portfolioConverter = (thumbnail: Thumbnail[]): Portfolio[] => {
  if (!thumbnail) {
    return [];
  }
  if (thumbnail.length > 6) {
    console.error("too many responses");
    thumbnail.splice(6);
  }
  return thumbnail.map((portfolioRes, index): Portfolio => {
    // index = 0, 1, 2: left
    // index = 3, 4, 5: right
    const countLeft = 3;
    const countRight = 3;
    if (index > countLeft + countRight - 1) {
      console.error("too many indexes");
      return getErrorPortfolio();
    }
    const isLeft = index < countLeft;
    const indexLR = isLeft ? index : index - countLeft;
    const ba = BoardAligner(indexLR, isLeft ? countLeft : countRight, isLeft);
    return {
      id: portfolioRes.id,
      title: portfolioRes.title,
      desc: portfolioRes.desc,
      pos: ba.position,
      rotation: ba.rotation,
      imgUri: portfolioRes.imgUri,
      isLeft: isLeft,
    };
  });
};

export const usePortfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { data, error } = useSWR("/articles/thumbnails.json", fetchThumbnails);

  const portfolioData: Portfolio[] = portfolioConverter(data || []);

  useEffect(() => {
    if (!data && !error) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [data, error]);

  return { portfolioData, error, isLoading, setIsLoading };
};
