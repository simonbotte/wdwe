export const state = () => ({
	selection: null,
	winner: {id:0}
});

export const getters = {
	getSelection(state) {
		if(state.selection != null){
			return state.selection.filter((selection) => selection.selected);
		}else{
			return null;
		}
		
	},
	getWinner(state) {
		let random = Math.floor(Math.random() * state.selection.length);
		commit('setWinner', state.selection[random]);
		return state.winner;
	}
};

export const mutations = {
	setSelection(state, selection) {
		state.selection = selection;
	},
	setWinner(state, winner) {
		state.winner = winner;
	},
	changeSelectState(state, selectedData) {
		for (let i = 0; i < state.selection.length; i++) {
			if (state.selection[i].id == selectedData.selected.id) {
				state.selection[i].selected = selectedData.selectedState;
			}
		}
	},
};

export const actions = {
    buildFromApi({commit}) {
		let apiUrlGetBrands = "https://api.wdwe.fr/api/brands?populate=*";
		let config = {
			headers: {
				Authorization:
					"Bearer 75b73e0e00025f7fc2660141865d7253b8f9e971120411b64d9befa28fac5a689e90e53ae001c93a7f3f570101f9dbdd886edb7e6aedc0244198f60b0d4d97b2e8195647138f8f15c2266c9c28aa1b95fe40e88cbac90e4b4817f2e43a78db560a00faae063effd7ef12a30f8293ff02c2215b0151b8d498d8df2be2dca7786d",
			},
		};
        let selection = Promise
		this.$axios.get(apiUrlGetBrands, config).then((response) => {
            let selection = [];
            for (const brand of response.data.data) {
                let aSelection = {
                    "name": brand.attributes.Nom,
                    "id": brand.id,
                    "selected": false,
                    "src": "https://api.wdwe.fr" + brand.attributes.Logo.data.attributes.url,
                }
                selection.push(aSelection);
            }
            commit('setSelection', selection)
			localStorage.setItem("selection", JSON.stringify(selection));
		});
	},

	useDataFromLocalStorage({commit}) {
		if (localStorage.getItem("selection") != null) {
			commit('setSelection', JSON.parse(localStorage.getItem("selection")))
			this.dispatch("buildFromApi");
		}
	},

	storeInit({commit}) {
		if (localStorage.getItem("selection") == null) {
			this.dispatch("buildFromApi");
		} else {
			this.dispatch("useDataFromLocalStorage");
		}
	}
}
