import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "react-lottie";
import classes from "./../css/ContactMe.module.css";
import lottieData from "./../lotties/ContactMe.json";
import { useMediaQuery } from "react-responsive";
import { Form, useNavigate } from "react-router-dom";

const ContactMe = () => {
	const form = useRef();
	const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
	const navigate = useNavigate();

	const [state, setState] = useState({ mailSent: false, error: null });

	const inputChangeHandler = (event) => {
		setState({ ...state, [event.target.name]: event.target.value });
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		console.log(state);
		emailjs
			.sendForm(
				"ezdev_smtp_service",
				"ezdev_contact_me",
				form.current,
				"0PBBlj4pgSRIws7hs"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
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
		<div
			className={`dt center pt0 pb5 pv5-m pv6-ns ${isMobile ? "w-75" : "w-100"}`}
		>
			<div className={`db dtc-ns v-mid-ns ${isMobile ? "w-50" : "w-25"}`}>
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
					<Form
						ref={form}
						method="POST"
						onSubmit={onSubmitHandler}
						acceptCharset="utf-8"
					>
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="ph0 mh0 fw6 clip">Contact Me</legend>

							<div className="mt3">
								<label
									className={`db fw4 lh-copy f6 ${classes.text}`}
									htmlFor="name"
								>
									Name
								</label>

								<input
									value={state.from_name || ""}
									className="pa2 input-reset ba bg-transparent w-100 measure"
									type="text"
									name="from_name"
									id="name"
									onChange={inputChangeHandler}
								/>
							</div>

							<div className="mt3">
								<label
									className={`db fw4 lh-copy f6 ${classes.text}`}
									htmlFor="email"
								>
									Email address
								</label>

								<input
									value={state.reply_to || ""}
									className="pa2 input-reset ba bg-transparent w-100 measure"
									type="email"
									name="reply_to"
									id="email"
									onChange={inputChangeHandler}
								/>
							</div>

							<div className="mt3">
								<label
									className={`db fw4 lh-copy f6 ${classes.text}`}
									htmlFor="company"
								>
									Company <span className="normal black-60">(optional)</span>
								</label>

								<input
									value={state.company || ""}
									className="pa2 input-reset ba bg-transparent w-100 measure"
									type="text"
									name="company"
									id="company"
									onChange={inputChangeHandler}
								/>
							</div>

							<div>
								<label htmlFor="comment" className={`f6 db mt2 ${classes.text}`}>
									Comments <span className="normal black-60">(optional)</span>
								</label>
								<textarea
									value={state.comments || ""}
									id="comments"
									name="comments"
									className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
									aria-describedby="comment-desc"
									onChange={inputChangeHandler}
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
						<div
							className="g-recaptcha"
							data-sitekey="6LebeaUlAAAAAHaSpJ--uIjwm5hpkl83lIYEHSDT"
							data-action="LOGIN"
						></div>
						{/* <br /> */}
						{/* <input type="submit" value="Submit"></input> */}
					</Form>
				</article>
			</div>
		</div>
	);
};

export default ContactMe;
