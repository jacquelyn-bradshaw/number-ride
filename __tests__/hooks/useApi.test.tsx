import { renderHook } from "@testing-library/react";
import { useApi } from "@/hooks/useApi";

describe("useApi Hook", () => {
  const mockUrl = "/api/checkanswer";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("calls the API and returns the result on success", async () => {
    const mockResponse = { correct: true };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      })
    ) as jest.Mock;

    const { result } = renderHook(() => useApi(mockUrl));
    const { callApiCheckAnswer } = result.current;

    const options = {
      method: "POST",
      body: JSON.stringify({ answer: 5 }),
      headers: { "Content-Type": "application/json" },
    };

    const response = await callApiCheckAnswer(options);

    expect(fetch).toHaveBeenCalledWith(mockUrl, options);
    expect(response).toEqual(mockResponse);
  });

  it("returns the error object when an exception occurs", async () => {
    const mockError = new Error("Network error");
    global.fetch = jest.fn(() => Promise.reject(mockError)) as jest.Mock;

    const { result } = renderHook(() => useApi(mockUrl));
    const { callApiCheckAnswer } = result.current;

    const options = {
      method: "POST",
      body: JSON.stringify({ answer: 5 }),
      headers: { "Content-Type": "application/json" },
    };

    const response = await callApiCheckAnswer(options);

    expect(fetch).toHaveBeenCalledWith(mockUrl, options);
    expect(response).toEqual(mockError);
  });
});
