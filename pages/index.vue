<template>
	<div class="index">
		<div class="brands">
			<div class="brands__wrapper">
				<div
					v-for="brand in selectionForLoop"
					v-bind:class="brand.winner ? 'winner' : ''"
					v-bind:data-id="brand.id"
					class="brand"
				>
					<img v-bind:src="brand.src" v-bind:alt="brand.name" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	beforeCreate() {
		if (this.$store.state.selection == null) {
			this.$router.push("/brand-selection");
		}
	},
	data() {
		return {
			selectionForLoop: [],
			brandWinner: null,
			randomOne: { id: 0 },
			lunch: false,
		};
	},
	computed: {
		selection() {
			if (this.$store.state.selection == null) {
				this.$router.push("/brand-selection");
			} else {
				return this.$store.state.selection.filter(
					(item) => item.selected == true
				);
			}
		},
	},
	name: "IndexPage",

	created() {
		if (this.$store.state.selection == null) {
			this.$router.push("/brand-selection");
		} else {
			let random = Math.floor(Math.random() * this.selection.length);
			this.randomOne = this.selection[random];
			this.doSelectionForLoop();
			this.lunch = false;
		}
	},
	mounted() {
		if (this.randomOne == null) {
		}

		this.$nuxt.$on("spinWheel", () => {
			let random = Math.floor(Math.random() * this.selection.length);
			this.randomOne = this.selection[random];
			this.spin();
		});
	},
	beforeDestroy() {
		this.lunch = false;
	},

	transition: "home",
	methods: {
		doSelectionForLoop() {
			let selection = [];
			if (this.$store.state.selection != null) {
				for (let i = 0; i < 100; i++) {
					for (let j = 0; j < this.selection.length; j++) {
						let brand = {
							id: this.selection[j].id,
							name: this.selection[j].name,
							src: this.selection[j].src,
							selected: this.selection[j].selected,
							winner: false,
						};
						if (i == 98) {
							if (this.randomOne.id == brand.id) {
								brand.winner = true;
							}
						}
						selection.push(brand);
					}
				}
			}
			this.selectionForLoop = selection;
		},
		spin() {
			this.lunch = true;
			let winnerElement = document.querySelector(".winner");
			let winnerX = winnerElement.offsetTop;
			winnerX -= 150;
			let wrapper = document.querySelector(".brands__wrapper");
			let transitionDuration = 4;
			let waitTimeAfterWinner = 1;
			wrapper.style.transitionDuration = `${transitionDuration * 1.1}s`;
			wrapper.style.transform = `translateY(-${winnerX}px)`;
			setTimeout(() => {
				if (this.$route.name == "index" && this.lunch == true) {
					let redirectBrandId = winnerElement.dataset.id;
					this.$router.push(`/winner/${redirectBrandId}`);
				}
			}, (transitionDuration + waitTimeAfterWinner) * 1000);
		},
	},
};
</script>

<style scoped lang="scss">
.index {
	margin-top: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.home-enter-active,
.home-leave-active {
	transition: opacity 0.2s;
}
.home-enter,
.home-leave-active {
	opacity: 0;
}
.brands {
	overflow: hidden;
	max-height: 500px;
	position: relative;
	&::after {
		content: "";
		display: block;
		width: 100%;
		height: 100px;
		background: linear-gradient(
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 1)
		);
		position: absolute;
		bottom: -2px;
		z-index: 2;
	}
	&::before {
		content: "";
		display: block;
		width: 100%;
		height: 100px;
		background: linear-gradient(
			rgba(255, 255, 255, 1),
			rgba(255, 255, 255, 0)
		);
		position: absolute;
		top: -2px;
		z-index: 2;
	}
	&__wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		margin: 0 auto;
		transform: translateY(-125px);
		transition-timing-function: cubic-bezier(0, 0.55, 0.1, 1);
	}
	.brand {
		width: 175px;
		img {
			width: 100%;
			object-fit: contain;
			max-height: 175px;
		}
	}
}
</style>
