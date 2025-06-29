import { formatThaiDate } from "../src/index";
import { test, expect, describe } from "@jest/globals";

describe("formatThaiDate function", () => {
  test("should return formatted date in full Thai format", () => {
    const testDate = new Date(2023, 0, 15);
    expect(formatThaiDate("full", testDate)).toBe("15 มกราคม 2023");
  });
  test("should return formatted date in full Thai format now", () => {
    const testDate = new Date(2025, 2, 13);
    expect(formatThaiDate("full", testDate)).toBe("13 มีนาคม 2025");
  });
  test("should return formatted date in short Thai format now", () => {
    const testDate = new Date(2025, 2, 13);
    expect(formatThaiDate("short", testDate)).toBe("13 มี.ค. 2025");
  });
  test("should return formatted date in full Thai format", () => {
    const testDate = new Date(2023, 0, 15);
    expect(formatThaiDate("short", testDate)).toBe("15 ม.ค. 2023");
  });
  test("invalid format", () => {
    const testDate = new Date(2023, 0, 15);
    expect(formatThaiDate("asdasdas", testDate)).toBe("asdasdas");
  });
  test("should return dd/MM/yyyy formatted date in Thai", () => {
    const testDate = new Date(2025, 5, 29);
    expect(formatThaiDate("dd/MM/yyyy", testDate)).toBe("29/มิ.ย./2025");
  });
  test("should return dd-MM-yyyy formatted date in Thai", () => {
    const testDate = new Date(2025, 5, 29);
    expect(formatThaiDate("dd-MM-yyyy", testDate)).toBe("29-มิ.ย.-2025");
  });
});
