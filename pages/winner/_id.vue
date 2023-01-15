<template>
	<div class="winner">
		<div class="winner__container">
			<div class="winner__logo">
				<img :src="brand.src" :alt="brand.name" />
			</div>
			<div class="winner__texte">
				<h1>Tu iras à {{ brand.name }}</h1>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "WinnerPage",
	beforeCreate() {
		if (this.$store.state.selection == null) {
			this.$router.push("/brand-selection");
		}
	},
	computed: {
		brand() {
			if (this.$store.state.selection != null) {
				return this.$store.state.selection.filter(
					(item) => item.id == this.$route.params.id
				)[0];
			} else {
				return {
					id: 1,
					name: "Burger King",
					src: "https://lacusair.com/wdwe/images/burger_king.svg",
					selected: true,
				};
			}
		},
	},
};
</script>

<style scoped lang="scss">
.winner {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	&__container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	&__logo {
		width: 200px;
		height: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
	&__texte {
		margin-top: 16px;
		h1 {
			font-size: 24px;
			font-weight: 700;
		}
	}
}
</style>
