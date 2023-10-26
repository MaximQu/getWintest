export interface IPokemons {
	count: number;
	next: string;
	previous: unknown;
	results: IPokemonResult[];
}

export interface IPokemon {
    name: string;
	sprites: {
		other: {
			"official-artwork": {
				front_default: string;
			};
		};
	};
	abilities: {
		ability: {
			name: string;
		};
	}[];
	stats: {
		base_stat: number;
		stat: {
			name: string;
		};
	}[];
	moves: {
		move: {
			name: string;
		};
	}[];
}

export interface IPokemonResult {
	name: string;
	url: string;
}

export interface ISearchState {
	loading: boolean;
	error: null | string;
	data: null | IPokemons;
}
