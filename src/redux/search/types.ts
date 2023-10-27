export interface IPokemons {
	count: number;
	next: string;
	previous: unknown;
	results: IPokemonResult[];
}
export interface IPokemon {
	name: string;
	sprites: IPokemonPhoto;
	abilities: IPokemonAbilities[];
	stats: IPokemonStats[];
	moves: IPokemonMoves[];
}

export interface IPokemonPhoto {
	other: {
		"official-artwork": {
			front_default: string;
		};
	};
}

export interface IPokemonAbilities {
	ability: {
		name: string;
	};
}

export interface IPokemonStats {
	base_stat: number;
	stat: {
		name: string;
	};
}

export interface IPokemonMoves {
	move: {
		name: string;
	};
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
