import {
  guid,
  isGuid,
} from "../../src";

describe("dyna guid", () => {

  test("Create a simple guid", () => {
    const myGUID: string = guid();
    expect(myGUID).not.toBe(undefined);
    expect(myGUID).not.toBe(null);
    expect(myGUID.length > 14).toBe(true);
  });

  test("Correct number of dashes", () => {
    const myGUID: string = guid(7);
    let dashes: number = 0;
    myGUID.split("").forEach((s: string) => s === "-" ? dashes++ : null);
    expect(dashes).toBe(7);
  });

  test("isGuid validation with 100 random guids", () => {
    let wrongGuid = "";
    for (let i = 0; i < 100; i++) {
      const createdGuid = guid();
      if (!isGuid(createdGuid)) wrongGuid = createdGuid;
    }
    expect(wrongGuid).toBe("");
  });

  test("isGuid validation with space inside", () => {
    expect(isGuid("703d76b3-1e461433-2f847b96d3ace7688")).toMatchSnapshot();
  });
  test("isGuid validation with wrong blocks number", () => {
    expect(isGuid("703d76b3-2f847b96d3ace7688")).toMatchSnapshot();
  });
  test("isGuid validation with wrong last block", () => {
    expect(isGuid("703d76b3-703d76b3-2f847b96d3ae7688")).toMatchSnapshot();
  });

  test("validate v1 guids", () => {
    expect(isGuid("1g6263bg-1h2c3a89-18046497750547120")).toBe(true);
    expect(isGuid("1f8900gh-1cg4e90g-54886797750547120")).toBe(true);
    expect(isGuid("1g6263bg-1h2c3a89-18046497750547120")).toBe(true);
  });
});
