import { createContext } from "preact";
import { useContext } from "preact/hooks";

const EleventyContext = createContext(undefined);

export function page(getPage) {
	return function () {
		return (
			<EleventyContext.Provider value={this}>
				{getPage.bind(this)()}
			</EleventyContext.Provider>
		);
	};
}

export function useEleventy() {
	return useContext(EleventyContext);
}
