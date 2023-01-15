<template>
	<div class="about">
		<div class="about__wrapper">
			<div class="about__content">
				<h1 class="about__title">C'est quoi</h1>
				<p class="about__text">
					Where do we eat est un site qui vous aide à décider où
					manger. Il vous permet de sélectionner les types de cuisine
					puis utilise une roulette pour vous suggérer un
					établissement. Vous pouvez également ajouter le site à votre
					écran d'accueil pour une utilisation encore plus facile.
					C'est un outil pratique pour les personnes qui ont du mal à
					choisir où aller manger ou qui veulent découvrir de
					nouvelles options. Essayez-le dès maintenant pour trouver
					votre prochaine destination culinaire.
				</p>
			</div>
			<div class="about__links">
				<h2>Liens utiles</h2>
				<div class="about__link" v-on:click="goToLegals">
					Mentions Légales
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "AboutPage",
	beforeMount() {
		// if (this.$store.state.selection == null) {
		// 	this.$router.push("/select");
		// }
	},
	transition: "about",
	created() {},
	data() {
		return {};
	},
	computed: {},
	methods: {
		goToLegals() {
			this.$router.push("/mentions-legales");
		},
	},
	mounted() {},
	onModifed() {},
	watch: {},
};
</script>

<style lang="scss" scoped>
.about-enter-active,
.about-leave-active {
	transition: transform 0.2s;
}
.about-enter,
.about-leave-active {
	transform: translateX(100%);
}
.about {
	margin-top: 36px;
	&__links {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		margin-top: 32px;
	}
	&__link {
		color: var(--red);
		text-decoration: underline;
	}
}
</style>
