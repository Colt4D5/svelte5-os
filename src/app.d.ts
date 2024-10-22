// See https://svelte.dev/docs/kit/types#app
// for information about these interfaces
declare global {
	type WindowPane = {
		title: string;
		path: string;
		icon?: string;
		state: 'open' | 'minimized' | 'maximized';
		id: string,
	}
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
