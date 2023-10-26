export interface IPokemon {
	count: number;
	next: string;
	previous: unknown;
	results: IPokemonResult[];
}

export interface IPokemonResult {
    name: string;
    url: string;
}

export interface ISearchState {
	loading: boolean;
	error: null | string;
	data: null | IPokemon;
}
