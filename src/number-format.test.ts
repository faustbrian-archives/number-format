import { NumberFormat } from "../src";

test("#format", () => {
	expect(NumberFormat.make("en").format(5000)).toBe("5,000");
});

test("#formatAsCurrency", () => {
	expect(NumberFormat.make("en").formatAsCurrency(5000, "EUR")).toBe(
		"€5,000.00"
	);
});

test("#formatAsUnit", () => {
	expect(NumberFormat.make("en").formatAsUnit(5000, "kilobyte")).toBe(
		"5,000 kB"
	);
});
