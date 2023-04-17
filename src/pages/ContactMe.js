import Lottie from "react-lottie";
import classes from "./../css/ContactMe.module.css";
import lottieData from "./../lotties/ContactMe.json";

const ContactMe = () => {
	const sendContactDetailHandler = (event) => {
		event.preventDefault();
	};

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: lottieData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		
		<div class="dt w-100 center pt0 pb5 pv5-m pv6-ns">
			<div class="db dtc-ns v-mid-ns">
				<Lottie 
				height={500} width={500}
				 options={defaultOptions} />
			</div>
			<div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
				<article className="lh-copy pa4 black-80 avenir">
					<form acceptCharset="utf-8">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="ph0 mh0 fw6 clip">Contact Me</legend>

							<div className="mt3">
								<label
									className={`db fw4 lh-copy f6 ${classes.text}`}
									for="email-address"
								>
									Email address
								</label>

								<input
									className="pa2 input-reset ba bg-transparent w-100 measure"
									type="email"
									name="email-address"
									id="email-address"
								/>
							</div>

							<div>
								<label for="comment" className={`f6 b db mt2 ${classes.text}`}>
									Comments <span className="normal black-60">(optional)</span>
								</label>
								<textarea
									id="comment"
									name="comment"
									className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
									ariaDescribedby="comment-desc"
								></textarea>
								<small id="comment-desc" className="f6 black-60"></small>
							</div>
						</fieldset>

						<div className="mt3">
							<input
								className={`f6 grow br2 ph3 pv2 mb2 mr2 dib pointer input-reset ${classes.button}`}
								type="button"
								value="Send"
								onClick={sendContactDetailHandler}
							/>
						</div>
					</form>
				</article>
			</div>
		</div>
	);
};

export default ContactMe;
