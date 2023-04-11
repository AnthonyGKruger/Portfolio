import logo from "./../../media/ezdev-logo.png";
import classes from "./../../css/Footer.module.css";

const Footer = () => {
	return (
		<footer class="pa4 pa5-l black-70 bt b--black-10 avenir">
			<div class="mb4-l cf">
				<a href="/#title" className={classes.image}>
					<img
						// className={"flex-auto "}
						src={logo}
						alt="ez-dev logo"
						height={100}
						layout="filled"
					/>
				</a>
				<h1 className={`${classes.name} + tc mt2 mb0 fw1 f1`}>
					Anthony Gordon Kruger
				</h1>
			</div>

			<section class={`cf tc mb5`}>
				<div class="mb4 mb0-ns w-100 fr">
					<a
						class={`black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l ${classes.email}`}
						href="mailto:hello@ezdev.solutions"
					>
						hello@ezdev.solutions
					</a>
				</div>
				{/* <div class="mb4 mb0-ns fl w-100 w-50-l">
					<p class="f4 fw6 mb2 f6 mt0">Sign up for our newsletter.</p>
					<input
						placeholder="Email Address"
						class="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box"
					/>
					<input
						type="submit"
						class="input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray"
					/>
				</div> */}
			</section>
			<div class="dt dt--fixed w-100">
				<div class="dn dtc-ns v-mid">
					<p class="f7 black-70 dib pr3 mb3">
						© EZdev Solutions (PTY) LTD 2023
					</p>
				</div>
				<div class="db dtc-ns black-70 tc tr-ns v-mid">
					<a
						href="https://www.facebook.com/"
						class="link dim dib mr3 black-70"
						title="EZdev on Facebook"
					>
						<svg
							class="db w2 h2"
							data-icon="facebook"
							viewBox="0 0 32 32"
							fill="currentColor"
						>
							<title>facebook icon</title>
							<path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"></path>
						</svg>
					</a>
					
					<a
						href="https://www.linkedin.com/company/"
						class="link dim dib black-70"
					>
						<svg class="db w2 h2" x="0px" y="0px" viewBox="0 0 48 48">
							<linearGradient
								gradientUnits="userSpaceOnUse"
								x1="23.9995"
								y1="0"
								x2="23.9995"
								y2="48.0005"
							>
								<stop offset="0"></stop>
								<stop offset="1"></stop>
							</linearGradient>
							<path
								fill="currentColor"
								d="M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z"
							></path>
							<g>
								<g>
									<path
										fill="#FFFFFF"
										d="M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z"
									></path>
								</g>
							</g>
						</svg>
					</a>
				</div>
			</div>
		
		</footer>
	);
};

export default Footer;
