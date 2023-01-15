<template>
	<div>
		<section class="brandSelection">
			<h2 class="brandSelection__title">Faites votre sélection</h2>
			<div class="brandSelection__search">
				<input v-on:input="search" type="text" placeholder="Rechercher..." />
				<div v-on:click="resetSearch" class="brandSelection__closeSearch brandSelection__closeSearch--close">x</div>
			</div>
			<div class="brandSelection__brands">
				<div
					v-for="brand in brands"
					v-on:click="editSelection"
					v-bind:data-id="brand.id"
					v-bind:class="
						brand.selected ? 'brand  brand--selected' : 'brand'
					"
				>
					<img v-bind:src="brand.src" v-bind:alt="brand.name" />
					<div class="brand__name">{{ brand.name }}</div>
					<div class="brand__checkmark">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
							<path
								d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
							/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "SelectPage",
	data() {
		return {
			selected: null,
		};
	},
	transition: "brandSelection",
	beforeMount(e) {
		if (this.$store.state.selection == null) {
			this.$store.dispatch("storeInit");
		}
	},
	computed: {
		brands() {
			return this.$store.state.selection;
		},
	},
	methods: {
		editSelection(e) {
			let id = e.currentTarget.dataset.id;
			for (let i = 0; i < this.brands.length; i++) {
				if (this.brands[i].id == id) {
					let selected = this.$store.state.selection[i];
					let selectedState =
						!this.$store.state.selection[i].selected;
					this.$store.commit("changeSelectState", {
						selected,
						selectedState,
					});
				}
			}
		},
		search(e) {
			let search = e.target.value;
			let brands = document.querySelectorAll(".brand");
			brands.forEach(brand => {
				let brandName = brand.querySelector(".brand__name").innerText;
				if (brandName.toLowerCase().includes(search.toLowerCase())) {
					brand.style.display = "flex";
				} else {
					brand.style.display = "none";
				}
			});
			if(search.length > 0) {
				document.querySelector(".brandSelection__closeSearch").classList.remove("brandSelection__closeSearch--close");
			} else {
				document.querySelector(".brandSelection__closeSearch").classList.add("brandSelection__closeSearch--close");
			}
		},
		resetSearch() {
			document.querySelector(".brandSelection__search input").value = "";
			document.querySelector(".brandSelection__closeSearch").classList.add("brandSelection__closeSearch--close");
			this.search({target: {value: ""}});
		}
	},
};
</script>

<style scoped lang="scss">
section.brandSelection {
    padding-top: 32px;
	padding-bottom: 136px;
}
.brandSelection__title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
}
.brandSelection__brands {
    display: grid;
	grid-template-columns: 1fr 1fr;
    gap: 16px;
}
.brandSelection-enter-active,
.brandSelection-leave-active {
	transition: transform 0.2s;
}
.brandSelection-enter,
.brandSelection-leave-active {
	transform: translateX(-100%);
}
.brand {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	position: relative;
	height: 100%;
	&__checkmark {
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 75px;
		height: 75px;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 100px;
		transition: 200ms;
		svg {
			fill: var(--blue);
			height: 36px;
			width: 36px;
		}
	}
	&--selected {
		.brand__checkmark {
			opacity: 1;
		}
	}
	img {
		max-width: 150px;
		width: 100%;
		height: 100%;
        max-height: 150px;
	}
}

.brandSelection__search{
	margin-bottom: 16px;
	width: 100%;
	position: relative;
	input{
		font-size: 14px;
		width: 100%;
		padding: 8px 16px;
		border-radius: 100px;
		border: 1px solid var(--blue);
		&:focus{
			outline: none;
			border: 1px solid var(--red);
		}
	}
	.brandSelection__closeSearch{
		position: absolute;
		top: 50%;
		right: 16px;
		transform: translateY(-50%);
		cursor: pointer;
		background-color: var(--red);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 100px;
		width: 24px;
		height: 24px;
		line-height: 16px;
		padding-bottom: 3px;
		transition: 200ms ease;
		transform-origin: top;
	}
	.brandSelection__closeSearch--close{
		opacity: 0;
		pointer-events: none;
		// transform: rotate(90deg);
		right: -4px
	}
}
</style>
