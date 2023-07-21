import {
  fetchThumbnails,
  portfolioConverter,
} from "../../services/PortfolioLoader";
import * as THREE from "three";

describe("portfolioConverter", () => {
  it("should return an empty array if thumbnail is an empty array", () => {
    const result = portfolioConverter([]);
    expect(result).toEqual([]);
  });

  it("should return a converted portfolio array with valid thumbnail data", () => {
    const mockThumbnailData = [
      {
        id: 1,
        title: "Portfolio 1",
        desc: "Description 1",
        imgUri: "path/to/image1.jpg",
      },
      {
        id: 2,
        title: "Portfolio 2",
        desc: "Description 2",
        imgUri: "path/to/image2.jpg",
      },
    ];

    const expectedConvertedData = [
      {
        id: 1,
        title: "Portfolio 1",
        desc: "Description 1",
        pos: expect.any(THREE.Vector3),
        rotation: expect.any(THREE.Euler),
        imgUri: "path/to/image1.jpg",
        isLeft: true,
      },
      {
        id: 2,
        title: "Portfolio 2",
        desc: "Description 2",
        pos: expect.any(THREE.Vector3),
        rotation: expect.any(THREE.Euler),
        imgUri: "path/to/image2.jpg",
        isLeft: true,
      },
    ];

    const result = portfolioConverter(mockThumbnailData);
    expect(result).toEqual(expectedConvertedData);
  });
});

describe("fetchThumbnails", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return the fetched thumbnail data when the fetch is successful", async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([{ id: 1, title: "Thumbnail 1" }]),
    });
    global.fetch = mockFetch;

    const result = await fetchThumbnails("/thumbnails.json");

    expect(result).toEqual([{ id: 1, title: "Thumbnail 1" }]);
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith("/thumbnails.json");
  });

  it("should throw an error when the fetch fails", async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      ok: false,
    });
    global.fetch = mockFetch;

    await expect(fetchThumbnails("/thumbnails.json")).rejects.toThrow(
      "Failed to fetch thumbnails.",
    );

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith("/thumbnails.json");
  });
});
