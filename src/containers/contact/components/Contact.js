import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { listWordAffect, spanVariants, wordAffect } from 'utils/constant';
import Iframe from 'react-iframe';
import { FaUser, FaAddressCard } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Button from 'components/Button';
const h1Word = 'Contact me';

const messageBox = {
	hidden: { x: 200 },
	visible: {
		x: 0,
		transition: {
			delayChildren: 0,
			staggerChildren: 0.3,
		},
	},
};

const Contact = () => {
	const [error, setError] = useState(false);
	const [errorText, setErrorText] = useState('');
	const form = useRef();
	const nameInput = useRef();
	const emailInput = useRef();
	const subjectInput = useRef();
	const messageInput = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		validation();

		console.log(form.current.name.value);
	};

	const validation = () => {
		let email = emailInput.current.value;
		let message = messageInput.current.value;
		if (!email.trim() && !message.trim()) {
			setError(true);
			setErrorText('Please fill in all required fields');
		} else if (!email.trim() && message.trim()) {
			setError(true);
			setErrorText("Oops Email can't be empty");
		} else if (email.trim() && !message.trim()) {
			setError(true);
			setErrorText('Please provide a message');
		} else {
			emailjs.sendForm('service_udapvyd', 'template_n7psfzc', form.current, 'XAw1rr-yc2KGK7lPQ').then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
			setError(false);
			setErrorText('Message sent successfully');
			nameInput.current.value = '';
			emailInput.current.value = '';
			subjectInput.current.value = '';
			messageInput.current.value = '';
		}
	};

	useEffect(() => {
		setTimeout(() => {
			setErrorText(null);
		}, 4000);
	}, [errorText]);

	return (
		<section className="min-h-[100vh] py-20 px-6 relative">
			<div className="flex justify-between items-center flex-col lg:flex-row">
				<div className="w-full lg:w-[50%]">
					<div className="px-4 sm:px-8 xl:pl-12">
						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<h2>`}</p>
						<motion.h1 className="text-[55px] text-primary-100 font-bold tracking-[-1px] leading-[68px] lg:text-[64px] xl:text-[74px] break-words">
							<motion.div variants={listWordAffect} initial="hidden" animate="visible" className="flex">
								{h1Word.split('').map((x, idx) => (
									<motion.span variants={wordAffect} key={idx}>
										<motion.p
											variants={spanVariants}
											initial="visible"
											whileHover="hover"
											className={`${x === ' ' ? 'mr-2 lg:mr-4' : ''}`}
										>
											{x}
										</motion.p>
									</motion.span>
								))}
							</motion.div>
						</motion.h1>
						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<h2>`}</p>
					</div>
					<div className="px-4 sm:px-8 xl:pl-12">
						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<p>`}</p>
						<p>
							I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have
							other request or question, don’t hesitate to use the form.
						</p>

						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<p>`}</p>
					</div>
					<div className="px-4 my-2 sm:px-8 xl:pl-12">
						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`<form>`}</p>

						<form className="my-2" ref={form} onSubmit={sendEmail}>
							<div className="flex justify-between gap-6">
								<div className="w-full relative">
									<input
										ref={nameInput}
										type="text"
										placeholder="Name"
										name="name"
										className="placeholder:text-gray-500 mb-4 w-full h-[42px] border-none px-[20px] text-xl text-gray-500 outline-none shadow-input"
									/>
									<span
										className={`after:content-[''] after:w-0 after:h-[2px] after:absolute after:bg-primary-100 after:bottom-[16px] after:left-0 after:transition-all after:duration-800 after:ease-linear`}
									/>
								</div>
								<div className="w-full relative">
									<input
										ref={emailInput}
										type="email"
										name="email"
										placeholder="Email"
										className="placeholder:text-gray-500 mb-4 w-full h-[42px] border-none px-[20px] text-xl text-gray-500 outline-none shadow-input"
									/>
									<span
										className={`after:content-[''] after:h-[2px] after:absolute ${
											error ? 'after:bg-primary-50 after:w-full' : 'after:bg-primary-100 after:w-0'
										} after:bottom-[16px] after:left-0 after:transition-all after:duration-800 after:ease-linear`}
									/>
								</div>
							</div>
							<div className="w-full relative">
								<input
									ref={subjectInput}
									type="text"
									placeholder="Subject"
									className="placeholder:text-gray-500 mb-4 w-full h-[42px] border-none px-[20px] text-xl text-gray-500 outline-none shadow-input"
									name="subject"
								/>
								<span
									className={`after:content-[''] after:w-0 after:h-[2px] after:absolute after:bg-primary-100 after:bottom-[16px] after:left-0 after:transition-all after:duration-800 after:ease-linear`}
								/>
							</div>
							<div className="w-full relative">
								<textarea
									ref={messageInput}
									type="text"
									placeholder="Message"
									className="placeholder:text-gray-500 mb-8 w-full h-[25vh] border-none py-[10px] px-[20px] text-xl text-gray-500 outline-none shadow-input"
									name="message"
								></textarea>
								<span
									className={`after:content-[''] after:h-[2px] after:absolute ${
										error ? 'after:bg-primary-50 after:w-full' : 'after:bg-primary-100 after:w-0'
									} after:bottom-[36px] after:left-0 after:transition-all after:duration-800 after:ease-linear`}
								/>
							</div>
							{errorText && (
								<motion.div
									variants={messageBox}
									initial="hidden"
									animate="visible"
									style={{ zIndex: 9999 }}
									className={`fixed bottom-[20px] right-0 min-w-[200px] h-[48px] ${
										error ? 'bg-primary-50' : 'bg-primary-100 text-background-50'
									} flex items-center px-4 py-2`}
								>
									<p>{errorText}</p>
								</motion.div>
							)}

							<div className="flex justify-end">
								<Button text="Send message!" submit={true} />
							</div>
						</form>
						<p className="font-aurore tracking-[3px] text-gray-100 text-1xl relative left-[-18px]">{`</form>`}</p>
					</div>
					{/* <div
						style={{ zIndex: -999 }}
						className="leading-0 xl:text-[28rem] lg:text-[24rem] sm:text-[18rem] text-[12rem] tracking-[-10px] text-gray-600 font-bold absolute left-0 xl:top-[10px] lg:top-[30px] sm:top-[180px] top-[396px] "
					>
						@
					</div> */}
				</div>
				<div className="w-full lg:w-[50%] relative">
					<div
						style={{ zIndex: 999 }}
						className="bg-gray-900/60 w-[280px] p-4 absolute top-[52px] lg:top-[12px] right-[12px]"
					>
						<p className="flex gap-1">
							<i className="text-primary-100">
								<FaUser />
							</i>
							Phạm Văn Toan
						</p>
						<p className="flex gap-1">
							<i className="text-primary-100 mt-1 ">
								<FaAddressCard />
							</i>
							41/4, Cluster 14, Quarter 2, Dong Hung Thuan Ward, District 12, Ho Chi Minh City
						</p>
						<p>
							<span className="text-primary-100">@</span>: phamvantoan1903@gmail.com
						</p>
					</div>
					<Iframe
						url="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d9357.693958505219!2d106.63762199769604!3d10.845778126773638!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1659373735658!5m2!1svi!2s"
						id="myId"
						className="w-full h-[80vh] mt-10 lg:mt-0"
						display="initial"
						position="relative"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					/>
				</div>
			</div>
		</section>
	);
};

export default Contact;
