import { eleventyJsxPlugin } from "./eleventyJsxPlugin.js";

/** @type {ReturnType<typeof import("npm:11ty.ts").defineConfig>} */
export default function (eleventyConfig) {
	eleventyConfig.ignores?.add("README.md");

	eleventyConfig.setServerPassthroughCopyBehavior("copy");
	eleventyConfig.setServerOptions({ domDiff: false });

	eleventyConfig.addPassthroughCopy({ public: "." });

	eleventyConfig.addTemplateFormats("11ty.ts");
	eleventyConfig.addExtension("11ty.ts", { key: "11ty.js" });

	eleventyConfig.addPlugin(eleventyJsxPlugin);

	return {
		dir: {
			input: "src/pages",
			includes: "../_includes",
			output: "dist",
		},
	};
}
