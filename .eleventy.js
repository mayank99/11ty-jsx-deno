import { isValidElement } from "preact";
import { renderToStringAsync } from "preact-render-to-string";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
	eleventyConfig.ignores?.add("README.md");

	eleventyConfig.setServerPassthroughCopyBehavior("copy");
	eleventyConfig.setServerOptions({ domDiff: false });

	eleventyConfig.addPassthroughCopy({ public: "." });

	eleventyConfig.addTemplateFormats("11ty.ts,tsx,jsx");
	eleventyConfig.addExtension("11ty.ts", { key: "11ty.js" });
	eleventyConfig.addExtension(["tsx", "jsx"], {
		key: "11ty.js",
		compile: function () {
			return async function (data) {
				let output = await this.defaultRenderer(data);
				if (isValidElement(output)) {
					output = `<!doctype html>` + (await renderToStringAsync(output));
				}
				return output;
			};
		},
	});

	return {
		dir: {
			input: "src/pages",
			includes: "../_includes",
			output: "dist",
		},
	};
}
