import { createContext } from "preact";
import { useContext } from "preact/hooks";

const EleventyContext = createContext(undefined);

export const page = (getPage) =>
	function () {
		return (
			<EleventyContext.Provider value={this}>
				{getPage()}
			</EleventyContext.Provider>
		);
	};

export function useEleventy() {
	return useContext(EleventyContext);
}
