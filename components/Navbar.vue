<template>
	<nav class="nav">
		<div class="nav__wrapper">
			<div v-on:click="selectAction" class="nav__link">
				<svg
					width="30"
					height="27"
					viewBox="0 0 30 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.07143 4.82143H28.9286C29.5203 4.82143 30 4.34176 30 3.75V1.07143C30 0.479665 29.5203 0 28.9286 0H1.07143C0.479665 0 0 0.479665 0 1.07143V3.75C0 4.34176 0.479665 4.82143 1.07143 4.82143ZM1.07143 15.5357H28.9286C29.5203 15.5357 30 15.0561 30 14.4643V11.7857C30 11.194 29.5203 10.7143 28.9286 10.7143H1.07143C0.479665 10.7143 0 11.194 0 11.7857V14.4643C0 15.0561 0.479665 15.5357 1.07143 15.5357ZM1.07143 26.25H28.9286C29.5203 26.25 30 25.7703 30 25.1786V22.5C30 21.9082 29.5203 21.4286 28.9286 21.4286H1.07143C0.479665 21.4286 0 21.9082 0 22.5V25.1786C0 25.7703 0.479665 26.25 1.07143 26.25Z"
						fill="white"
					/>
				</svg>
			</div>
			<div v-on:click="spinAction" class="nav__cta">
				<svg
					width="100"
					height="55"
					viewBox="0 0 100 55"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M25.069 12.3227C25.3251 13.3025 25.4406 13.8634 25.6572 14.5547C25.8899 15.2826 26.4404 15.7397 27.3088 15.9259C28.145 16.0388 28.9462 15.7739 29.2656 15.1091C29.6671 14.2335 30.073 13.2684 30.0483 12.318C30.0857 9.02432 26.176 6.59232 22.0314 7.10391C20.4262 7.32907 19.108 7.9087 17.8865 8.70803C13.4117 11.5496 10.5258 15.2219 9.4073 19.7337C8.98816 20.9668 8.93804 22.3434 9.24967 23.6483C9.78931 26.863 12.5613 28.397 16.6371 27.8283C17.1204 27.8343 17.551 27.8197 17.9332 27.6953C19.6571 27.2432 21.3648 26.7545 23.1618 26.2701C24.54 25.9263 25.8582 25.3467 27.5395 25.3939C30.3992 27.3263 25.2116 34.8072 19.8718 35.5822C18.5186 35.7839 17.6032 36.1865 17.3188 37.2291C17.0344 38.2718 17.5102 39.155 18.6728 39.9109C19.9936 40.7284 21.4785 41.1242 23.0837 40.8991C24.1601 40.8627 25.3025 40.5789 26.2545 40.1602C32.7312 37.3997 35.547 32.9717 35.1881 27.1868C35.1663 26.541 35.0186 25.9068 34.7609 25.321C33.5887 21.8601 30.1519 20.0067 25.6821 20.5738C23.8251 20.8223 22.0031 21.4487 20.2221 21.9697C18.7502 22.3984 17.432 22.9781 16.045 23.5006C15.9279 23.3336 15.8269 23.2032 15.8313 23.1139C16.9511 19.3006 18.9948 15.9986 22.7255 13.3531C23.2104 12.9651 24.0437 12.7735 25.069 12.3227Z"
						fill="white"
					/>
					<path
						d="M45.2469 16.3752C45.0827 15.9368 44.9201 15.6583 44.7974 15.3794C43.7804 13.589 41.6941 12.9287 40.3448 14.0615C39.9478 14.3853 39.552 14.8291 39.3565 15.311C38.9641 16.1147 38.6129 17.0381 38.422 17.9999C36.9634 24.494 36.7874 31.256 38.5355 38.4398C38.742 39.1178 38.8684 39.7967 39.1944 40.4336C39.6035 41.3898 40.5295 42.021 41.5302 42.0916C42.5713 42.2017 43.3275 41.7945 43.5588 40.8723C43.675 40.4712 43.6705 39.9912 43.7063 39.5509C43.8401 36.7895 43.9336 33.9885 44.0679 31.2671C44.1029 30.7467 44.218 30.2256 44.2531 29.7052C44.5742 29.8222 44.7346 29.8607 44.8553 29.9395C50.0348 31.9706 54.467 31.1286 56.7524 27.4668C58.1315 25.2536 58.6269 22.6488 58.0797 19.7739C57.8291 18.6562 57.337 17.3808 56.6468 16.3073C54.9422 13.7233 52.1317 12.6299 49.4602 13.5352C48.6621 13.7428 47.9459 14.1496 47.2701 14.596C46.5943 15.0424 46.0008 15.7281 45.2469 16.3752ZM45.2148 25.6559C45.9735 21.2886 49.2935 17.0569 52.0523 16.9108C53.4289 18.6578 53.1049 22.4611 51.4428 24.3569C50.018 25.9705 47.303 26.5162 45.2148 25.6559Z"
						fill="white"
					/>
					<path
						d="M67.7373 21.6846C68.2306 18.1406 64.4163 16.2227 62.4805 20.2797C61.0525 23.2665 60.4616 26.7044 60.1427 30.2085C60.0574 30.5583 60.0982 30.8976 60.1978 31.3336C60.397 32.2055 60.925 32.9107 61.8293 33.2546C62.7042 33.5502 63.4605 33.4875 63.8642 32.8448C64.1049 32.533 64.3352 32.095 64.4299 31.7064C65.7109 28.4779 66.8753 25.221 67.7373 21.6846ZM68.1327 16.3464C69.5279 16.0277 70.0831 14.7632 69.3673 13.4771C68.6904 12.2005 67.1245 11.5306 65.8649 11.8C64.4697 12.1187 63.905 13.422 64.6303 14.6692C65.2683 15.9364 66.8636 16.6546 68.1327 16.3464Z"
						fill="white"
					/>
					<path
						d="M78.8746 23.395C78.8824 22.8224 79.2557 21.6707 79.2494 21.313C79.3403 20.3811 78.9683 19.5825 78.2419 18.9691C77.586 18.3008 76.7968 18.1895 76.1583 18.505C75.6798 18.7639 75.2562 19.0934 74.8342 19.5123C72.2849 22.0621 70.1923 25.1405 68.5531 28.5688C68.0841 29.3643 67.8143 30.2994 67.5806 31.2518C67.267 32.7423 67.8131 34.2892 68.8676 35.2367C70.0114 36.1827 71.2995 36.1778 72.2847 35.2301C72.6204 34.9916 73.0079 34.6448 73.1632 34.3201C75.6024 29.5895 86.7253 21.1632 82.007 31.5877C80.9215 33.9506 79.673 37.2109 81.0962 39.798C81.7223 40.8067 82.4849 41.4374 83.4686 41.42C84.3457 41.4403 84.7818 40.8064 85.0154 39.8541C85.7196 37.1758 87.417 35.0168 88.6201 32.2224C89.224 30.9594 89.5925 29.5395 89.7807 28.0333C90.0832 24.897 88.139 22.1939 85.249 21.6545C83.1858 21.333 80.8482 22.6982 78.8746 23.395Z"
						fill="white"
					/>
				</svg>
			</div>
			<div v-on:click="aboutAction" class="nav__link">
				<svg
					class="biggerSvg"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 32 32"
				>
					<path
						d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15 10 L 15 12 L 17 12 L 17 10 Z M 15 14 L 15 22 L 17 22 L 17 14 Z"
					/>
				</svg>
			</div>
		</div>
		<div class="nav__message">
			<p>Selectionnez au moins deux marques</p>
		</div>
	</nav>
</template>
<script>
export default {
	name: "Navbar",
	components: {},
	methods: {
		spinAction() {
			if (this.$route.name == "index") {
				this.$nuxt.$emit("spinWheel");
			} else {
				if (this.$store.state.selection != null) {
					if (this.$store.getters.getSelection.length > 1) {
						this.$router.push("/");
						let nav = document.querySelector(".nav__wrapper");
						let spinBtn = nav.querySelector(".nav__cta");
						spinBtn.classList.add("nav__cta--big");
					} else {
						let navMessage =
							document.querySelector(".nav__message");
						navMessage.classList.add("nav__message--openLow");
						setTimeout(() => {
							navMessage.classList.remove(
								"nav__message--openLow"
							);
						}, 2000);
						if (this.$route.name != "brand-selection") {
							this.$router.push("/brand-selection");
						}
					}
				} else {
					this.$router.push("/brand-selection");
				}
			}
		},
		selectAction() {
			this.$router.push("/brand-selection");
			let nav = document.querySelector(".nav__wrapper");
			let spinBtn = nav.querySelector(".nav__cta");
			spinBtn.classList.remove("nav__cta--big");
		},
		aboutAction() {
			this.$router.push("/about");
			let nav = document.querySelector(".nav__wrapper");
			let spinBtn = nav.querySelector(".nav__cta");
			spinBtn.classList.remove("nav__cta--big");
		},
	},
	mounted() {
		let nav = document.querySelector(".nav__wrapper");
		let spinBtn = nav.querySelector(".nav__cta");
		if (this.$route.name == "index") {
			spinBtn.classList.add("nav__cta--big");
		} else {
			spinBtn.classList.remove("nav__cta--big");
		}
	},
	onModifed() {
		let nav = document.querySelector(".nav__wrapper");
		let spinBtn = nav.querySelector(".nav__cta");
		if (this.$route.name == "index") {
			spinBtn.classList.add("nav__cta--big");
		} else {
			spinBtn.classList.remove("nav__cta--big");
		}
	},
	watch: {
		$route(to, from) {
			if (process.client) {
				if (to.name == "index") {
					let nav = document.querySelector(".nav__wrapper");
					let spinBtn = nav.querySelector(".nav__cta");
					spinBtn.classList.add("nav__cta--big");
				} else {
					let nav = document.querySelector(".nav__wrapper");
					let spinBtn = nav.querySelector(".nav__cta");
					spinBtn.classList.remove("nav__cta--big");
				}
			}
		},
	},
};
</script>

<style scoped lang="scss">
.nav {
	position: fixed;
	bottom: 32px;
	z-index: 1000;
	left: 50%;
	transform: translateX(-50%);
	&__wrapper {
		position: relative;
		width: 318px;
		background-color: var(--red);
		height: 80px;
		border-radius: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 32px 0 36px;
	}
	&__cta {
		background-color: var(--blue);
		border-radius: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 64px;
		width: 64px;
		transition: 300ms ease;
		&--big {
			height: 100px;
			width: 100px;
			transform: translateY(-25%);
		}
	}
	&__link {
		svg {
			width: 30px;
			height: 30px;
			fill: white;
			&.biggerSvg {
				width: 36px;
				height: 36px;
			}
		}
	}
	&__message {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		background-color: var(--red);
		padding: 8px 16px;
		text-align: center;
		border-radius: 100px;
		z-index: -1;
		transition: 200ms ease;
		p {
			color: white;
		}
		&--open {
			transform: translate(-50%, -100%);
			&Hight {
				top: -50px;
			}
			&Low {
				top: -50px;
			}
		}
	}
}
</style>
