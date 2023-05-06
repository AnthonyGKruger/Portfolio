import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Lottie from "./../components/UI/Lottie";
import Banner from "./../components/UI/Banner";
import classes from "./../css/ContactMe.module.css";
import { useMediaQuery } from "react-responsive";
import { Form, useNavigate } from "react-router-dom";
import Loader from "../components/UI/Loader";
import ResumeRequest from "../components/UI/ResumeRequest";
import { useDispatch, useSelector } from "react-redux";
import { contactMeActions } from "../store/contactMe-slice";

const ContactMe = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const contactFormState = useSelector((state) => state.contactMe);

	const form = useRef();
	const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });

	const onSubmitHandler = (event) => {

		event.preventDefault();
		
		dispatch(contactMeActions.errorHandler({ isError: false }));

		const formData = {
			from_name: form.current.from_name.value,
			company: form.current.company.value,
			comments: form.current.comments.value,
			reply_to: form.current.reply_to.value,
		};

		if (
			!contactFormState.formHasErrors &&
			contactFormState.from_name &&
			contactFormState.reply_to
		) {
			dispatch(
				contactMeActions.mailIsSendingStateHandler({ isMailSending: true })
			);

			emailjs
				.send(
					"ezdev_smtp_service",
					"ezdev_contact_me",
					formData,
					"0PBBlj4pgSRIws7hs"
				)
				.then(
					(result) => {
						console.log(result.text);
						dispatch(
							contactMeActions.mailIsSendingStateHandler({
								isMailSending: false,
							})
						);
						navigate("/thank-you");
					},
					(error) => {
						dispatch(contactMeActions.errorHandler({ isError: true }));
						console.log(error.text);
						dispatch(
							contactMeActions.mailIsSendingStateHandler({
								isMailSending: false,
							})
						);
					}
				);
		} else if (
			contactFormState.from_name === "" ||
			contactFormState.inputHasError.nameHasError ||
			contactFormState.reply_to === "" ||
			contactFormState.inputHasError.emailHasError
		) {
			dispatch(contactMeActions.formErrorHandler({ formHasErrors: true }));

		} else {
			dispatch(contactMeActions.formErrorHandler({ formHasErrors: true }));
		}
	};

	const inputChangeHandler = (event) => {
		dispatch(
			contactMeActions.inputChangeHandler({
				value: event.target.value,
				name: event.target.name,
			})
		);
	};

	return (
		<>
			{contactFormState.error && (
				<Banner
					bgColor="bg-light-red"
					textColor="white"
					content="An error occurred, please try again."
				/>
			)}
			{contactFormState.formHasErrors && (
				<Banner
					bgColor="bg-light-red"
					textColor="white"
					content="There is an issue with your forms input fields, please check whether all fields are valid.."
				/>
			)}
			<div className={`dt center pv5-m pv3-ns ${isMobile ? "w-75" : "w-100"}`}>
				<div className={`db dtc-ns v-mid-ns ${isMobile ? "w-50" : "w-25"}`}>
					<Lottie
						height={isMobile ? 300 : 600}
						width={isMobile ? 300 : 600}
						animationData={
							"https://lottie.host/f892594d-0ecc-4bd5-b0e0-0dafc24cc7bd/Sf1sAY0f0p.json"
						}
					/>
				</div>
				<div
					className={`db dtc-ns v-mid ph2 pr0-ns pl3-ns ${
						isMobile ? "w-100" : "w-25"
					}`}
				>
					<article
						className={`${isMobile ? "pa1" : "pa4"} lh-copy black-80 avenir`}
					>
						<Form
							ref={form}
							method="POST"
							onSubmit={onSubmitHandler}
							acceptCharset="utf-8"
						>
							<fieldset id="contact_me" className="ba b--transparent ph0 mh0">
								<legend className="ph0 mh0 fw6 clip">Contact Me</legend>

								<div className="mt3">
									<label
										className={`db fw4 lh-copy f6 ${classes.text}`}
										htmlFor="name"
									>
										Name
									</label>

									<input
										// value={contactFormState.from_name}
										className={`pa2 input-reset ba br2 w-100 measure  ${
											contactFormState.inputHasError.nameHasError
												? classes.inputError
												: classes.input
										}`}
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
										value={contactFormState.reply_to || ""}
										className={`pa2 input-reset ba br2 w-100 measure ${
											contactFormState.inputHasError.emailHasError
												? classes.inputError
												: classes.input
										}`}
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
										value={contactFormState.company || ""}
										className={`pa2 input-reset ba br2 w-100 measure  ${
											contactFormState.inputHasError.companyHasError
												? classes.inputError
												: classes.input
										}`}
										type="text"
										name="company"
										id="company"
										onChange={inputChangeHandler}
									/>
								</div>

								<div>
									<label
										htmlFor="comment"
										className={`f6 db mt2 ${classes.text}`}
									>
										Comments <span className="normal black-60">(optional)</span>
									</label>
									<textarea
										value={contactFormState.comments || ""}
										id="comments"
										name="comments"
										className={`pa2 input-reset ba br2 w-100 measure db border-box hover-black ba mb2 ${
											contactFormState.inputHasError.commentsHasError
												? classes.inputError
												: classes.input
										}`}
										aria-describedby="comment-desc"
										onChange={inputChangeHandler}
									></textarea>
									<small id="comment-desc" className="f6 black-60"></small>
								</div>
							</fieldset>

							{!contactFormState.mailSending && (
								<div className="mt3">
									<input
										className={`f6 grow br2 ph3 pv2 mb2 mr2 dib pointer input-reset ${classes.button}`}
										type="submit"
										value="Send"
									/>
								</div>
							)}

							{contactFormState.mailSending && <Loader />}
						</Form>
					</article>
					<ResumeRequest />
				</div>
			</div>
		</>
	);
};

export default ContactMe;
