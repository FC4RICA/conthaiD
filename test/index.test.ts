import { thaiLocale } from "../src/index";
import { test, expect, describe } from "@jest/globals";

describe("thaiLocale function", () => {
  test("should return formatted date in full Thai format", () => {
    const testDate = new Date(2023, 0, 15);
    expect(thaiLocale("full", testDate)).toBe("15 มกราคม 2023");
  });
test("should return formatted date in full Thai format now", () => {
    const testDate = new Date();
    expect(thaiLocale("full", testDate)).toBe("13 มีนาคม 2025");
  });
test("should return formatted date in short Thai format now", () => {
    const testDate = new Date();
    expect(thaiLocale("short", testDate)).toBe("13 มี.ค. 2025");
  });
 test("should return formatted date in full Thai format", () => {
    const testDate = new Date(2023, 0, 15);
    expect(thaiLocale("short", testDate)).toBe("15 ม.ค. 2023");
  });

    test("invalid format", () => {
        const testDate = new Date(2023, 0, 15);
        expect(thaiLocale("asdasdas", testDate)).toBe("am00am00am0");
    });
});
