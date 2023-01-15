<template>
	<div class="legals">
		<h1>Mentions légales</h1>

		<h2>
			Identité du propriétaire du site et responsable de la publication
		</h2>
		<p>
			Le site Where do we eat (WDWE) est la propriété de Simon Botté, dont
			l'adresse e-mail est
			<a href="mailto:contact@wdwe.fr">contact@wdwe.fr</a>.
		</p>

		<h2>Hebergeur du site</h2>
		<p>
			Le site WDWE est hébergé par Always Data, 91 rue du Faubourg Saint
			Honoré - 75008 Paris.
		</p>

		<h2>Droit d'auteur</h2>
		<p>
			Le site WDWE utilise des logos de marques sans leur autorisation.
			WDWE n'est pas affilié à ces marques.
		</p>

		<h2>Cookies</h2>
		<p>
			Le site WDWE utilise un cookie de statistique, Matomo, hébergé par
			WDWE et anonymisé.
		</p>

		<h2>Utilisation du contenu du site</h2>
		<p>
			Le contenu du site WDWE est protégé par le droit d'auteur. Toute
			utilisation du contenu du site doit être autorisée par Simon Botté.
		</p>

		<h2>Liens externes</h2>
		<p>
			Le site WDWE peut contenir des liens vers d'autres sites. WDWE n'est
			pas responsable du contenu de ces sites et décline toute
			responsabilité quant à leur contenu.
		</p>

		<h2>Conditions d'utilisation</h2>
		<p>
			Les utilisateurs du site WDWE sont tenus de respecter les lois et
			réglementations en vigueur. En utilisant le site, vous acceptez ces
			conditions.
		</p>

		<h2>Modification des mentions légales</h2>
		<p>
			Ces mentions légales sont susceptibles d'être modifiées à tout
			moment. Nous
		</p>
	</div>
</template>

<script>
export default {
	name: "MentionsLegales",
	components: {},
	data() {
		return {};
	},
	computed: {},
	methods: {},
	mounted() {},
};
</script>

<style scoped lang="scss">

    .legals {
        margin-top: 36px;
        max-width: 800px;
        margin: 36px auto;
        padding-bottom: 100px;
        h1{
            font-size: 1.8rem;
            line-height: 2rem;
            margin-bottom: 1rem;
        }
        h2{
            font-size: 1.5rem;
            line-height: 1.7rem;
        }
        p{
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }
    }
</style>
