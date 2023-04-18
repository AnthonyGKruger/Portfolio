import Lottie from "react-lottie";
import classes from "./../css/ContactMe.module.css";
import lottieData from "./../lotties/ContactMe.json";
import { useMediaQuery } from "react-responsive";
import {Form, useNavigate} from "react-router-dom"

const ContactMe = () => {
	const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
	const navigate = useNavigate()

	const sendContactDetailHandler = async (event) => {
		event.preventDefault();

		
		navigate('/thank-you')
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
		<div class={`dt center pt0 pb5 pv5-m pv6-ns ${isMobile ? "w-75" : "w-100"}`}>
			<div class={`db dtc-ns v-mid-ns ${isMobile ? "w-50" : "w-25"}`}>
				<Lottie
					height={isMobile ? 400 : 600}
					width={isMobile ? 400 : 600}
					options={defaultOptions}
				/>
			</div>
			<div
				className={`db dtc-ns v-mid ph2 pr0-ns pl3-ns ${
					isMobile ? "w-100" : "w-25"
				}`}
			>
				<article className="lh-copy pa4 black-80 avenir">
					<Form onSubmit={sendContactDetailHandler} acceptCharset="utf-8">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="ph0 mh0 fw6 clip">Contact Me</legend>

							<div className="mt3">
								<label
									className={`db fw4 lh-copy f6 ${classes.text}`}
									for="name"
								>
									Name
								</label>

								<input
									className="pa2 input-reset ba bg-transparent w-100 measure"
									type="text"
									name="name"
									id="name"
								/>
							</div>

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

							<div className="mt3">
								<label
									className={`db fw4 lh-copy f6 ${classes.text}`}
									for="company"
								>
									Company  <span className="normal black-60">(optional)</span>
								</label>

								<input
									className="pa2 input-reset ba bg-transparent w-100 measure"
									type="text"
									name="company"
									id="company"
								/>
							</div>

							<div>
								<label for="comment" className={`f6 db mt2 ${classes.text}`}>
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
								type="submit"
								value="Send"
							/>
						</div>
					</Form>
				</article>
			</div>
		</div>
	);
};

export default ContactMe;
