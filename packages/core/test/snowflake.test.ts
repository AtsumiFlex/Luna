import {Snowflake} from "../src";

test("is snowflake", () => {
    expect(Snowflake.parse("730029344193249310")).toBe("730029344193249310");
});