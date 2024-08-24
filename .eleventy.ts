import { eleventyJsxPlugin } from "./eleventyJsxPlugin.ts";
import type { EleventyConfig, defineConfig } from "npm:11ty.ts";

export default function (eleventyConfig: EleventyConfig) {
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
	} satisfies ReturnType<ReturnType<typeof defineConfig>>;
}
