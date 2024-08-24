import { renderToStringAsync } from "preact-render-to-string";
import { isValidElement } from "preact";
import type { EleventyConfig } from "npm:11ty.ts";

export function eleventyJsxPlugin(eleventyConfig: EleventyConfig) {
	eleventyConfig.addTemplateFormats("tsx,jsx");
	eleventyConfig.addExtension(["tsx", "jsx"], {
		key: "11ty.js",
		compile: function () {
			return async (data: unknown) => {
				let output = await this.defaultRenderer(data);
				if (isValidElement(output)) {
					output = `<!doctype html>` + (await renderToStringAsync(output));
				}
				return output;
			};
		},
	});
}
