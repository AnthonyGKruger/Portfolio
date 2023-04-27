import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "./../components/UI/Lottie";
import Banner from "./../components/UI/Banner";
import classes from "./../css/ContactMe.module.css";
import { useMediaQuery } from "react-responsive";
import { Form, useNavigate } from "react-router-dom";
import Loader from "../components/UI/Loader";

const ContactMe = () => {
	const form = useRef();
	const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });
	const navigate = useNavigate();

	const [state, setState] = useState({
		mailSending: false,
		error: false,
		inputHasError: {
			nameHasError: false,
			emailHasError: false,
			companyHasError: false,
			commentsHasError: false,
		},
		formHasErrors: false,
	});

	const validateEmail = (email) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	const validateName = (str) => {
		const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
		return nameRegex.test(str);
	};

	const validateString = (str) => {
		let regex = /^[a-zA-Z0-9\s]+$/;
		return regex.test(str);
	};

	const changeMailIsSendingState = () => {
		setState((prevState) => {
			return {
				...prevState,
				mailSending: !prevState.mailSending,
			};
		});
	};

	const setError = () => {
		setState((prevState) => {
			return { ...prevState, error: true };
		});
	};

	const inputHasErrorHandler = (input) => {
		setState((prevState) => {
			return {
				...prevState,
				inputHasError: {
					...prevState.inputHasError,
					...input,
				},
			};
		});
	};

	const inputChangeHandler = (event) => {
		const inputName = event.target.name;
		const inputValue = event.target.value;

		switch (inputName) {
			case "from_name":
				if (!validateName(inputValue.trim())) {
					inputHasErrorHandler({ nameHasError: true });
				} else {
					setState((prevState) => {
						return {
							...prevState,
							inputHasError: {
								nameHasError: false,
							},
						};
					});
				}
				break;
			case "reply_to":
				if (!validateEmail(inputValue)) {
					inputHasErrorHandler({ emailHasError: true });
				} else {
					setState((prevState) => {
						return {
							...prevState,
							inputHasError: {
								emailHasError: false,
							},
						};
					});
				}
				break;
			case "company":
				if (!validateString(inputValue)) {
					inputHasErrorHandler({ companyHasError: true });
				}
				break;
			case "comments":
				if (!validateString(inputValue)) {
					inputHasErrorHandler({ commentsHasError: true });
				}
				break;
			default:
				return;
		}

		setState((prevState) => {
			return {
				...prevState,
				[inputName]: inputValue,
				error: false,
			};
		});

		state.inputHasError.nameHasError ||
		state.inputHasError.emailHasError ||
		state.inputHasError.companyHasError ||
		state.inputHasError.commentsHasError
			? setState((prevState) => {
					return { ...prevState, formHasErrors: true };
			  })
			: setState((prevState) => {
					return { ...prevState, formHasErrors: false };
			  });
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		if (!state.formHasErrors && state.from_name && state.reply_to) {
			changeMailIsSendingState();

			emailjs
				.sendForm(
					"ezdev_smtp_service",
					"ezdev_contact_me",
					form.current,
					"0PBBlj4pgSRIws7hs"
				)
				.then(
					(result) => {
						changeMailIsSendingState();
						console.log(result.text);
						console.log(state);
						navigate("/thank-you");
					},
					(error) => {
						changeMailIsSendingState();
						setError();
						console.log(error.text);
						console.log(state);
					}
				);
		} else {
			setState((prevState) => {
				return { ...prevState, formHasErrors: true };
			});
		}
	};

	return (
		<>
			{state.error && (
				<Banner
					bgColor="bg-light-red"
					textColor="white"
					content="An error occurred, please try again."
				/>
			)}
			{state.formHasErrors && (
				<Banner
					bgColor="bg-light-red"
					textColor="white"
					content="There is an issue with your forms input fields, please check the marked fields."
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
										className={`pa2 input-reset ba br2 w-100 measure  ${
											state.inputHasError.nameHasError
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
										value={state.reply_to || ""}
										className={`pa2 input-reset ba br2 w-100 measure ${
											state.inputHasError.emailHasError
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
										value={state.company || ""}
										className={`pa2 input-reset ba br2 w-100 measure  ${
											state.inputHasError.companyHasError
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
										value={state.comments || ""}
										id="comments"
										name="comments"
										className={`pa2 input-reset ba br2 w-100 measure db border-box hover-black ba mb2 ${
											state.inputHasError.commentsHasError
												? classes.inputError
												: classes.input
										}`}
										aria-describedby="comment-desc"
										onChange={inputChangeHandler}
									></textarea>
									<small id="comment-desc" className="f6 black-60"></small>
								</div>
							</fieldset>

							{!state.mailSending && (
								<div className="mt3">
									<input
										className={`f6 grow br2 ph3 pv2 mb2 mr2 dib pointer input-reset ${classes.button}`}
										type="submit"
										value="Send"
									/>
								</div>
							)}

							{state.mailSending && <Loader />}
						</Form>
					</article>
				</div>
			</div>
		</>
	);
};

export default ContactMe;
