import { renderToStringAsync } from "preact-render-to-string";
import { isValidElement } from "preact";

/** @param {import("npm:11ty.ts").EleventyConfig} eleventyConfig */
export function eleventyJsxPlugin(eleventyConfig) {
	eleventyConfig.addTemplateFormats("tsx,jsx");
	eleventyConfig.addPreprocessor(
		"jsx-transform",
		["jsx", "tsx"],
		(data, content) => {
			console.log({ data, content }); // ‼️ content is empty
		},
	);
	eleventyConfig.addExtension(["tsx", "jsx"], {
		key: "11ty.js",
		compile: function () {
			return async (data) => {
				let output = await this.defaultRenderer(data);
				if (isValidElement(output)) {
					output = `<!doctype html>${await renderToStringAsync(output)}`;
				}
				return output;
			};
		},
	});
}
