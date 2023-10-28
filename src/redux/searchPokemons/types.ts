export interface IPokemons {
	count: number;
	next: string;
	previous: unknown;
	results: IPokemon[];
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

export interface IPokemon {
	id: number;
	url: string;
	name: string;
	sprites: IPokemonPhoto;
	abilities: IPokemonAbilities[];
	stats: IPokemonStats[];
	moves: IPokemonMoves[];
    types: [{type: {name: string}}]
}
