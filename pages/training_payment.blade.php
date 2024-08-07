<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<!-- --------------search engine robots & SEO-------------- -->
		<meta name="robots" content="index, follow" />

		<meta
			name="description"
			content="Questergate training teaches you to trade and profit from the financial market."
		/>

		<!-- -----------explorer compatibility---------- -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />

		<meta name="theme-color" content="#0C567B" />

		<!-- --------Cache control meta tag------------ -->
		<meta http-equiv="Cache-control" content="public, max-age=7776000" />

		<!-- ----------------Security---------------- -->
		<meta http-equiv="X-Content-Type-Options" content="nosniff" />

		<meta
			http-equiv="Strict-Transport-Security"
			content="max-age=31536000; includeSubDomains; preload"
		/>

		<meta
			http-equiv="Content-Security-Policy"
			content="upgrade-insecure-requests"
		/>

		<!-- -----------------CSS Resets-------------------- -->
		<!-- Use Normalize Reset -->
		<link rel="stylesheet" href="/questergatecapital/public/css/css-resets/normalize.css" />

		<!-- -----------------FONTS (loaded for a start)-------------------- -->
		@include('generic.new_font_in_head')

		<!-- -------Other stylesheets---------- -->

		<link
			rel="stylesheet"
			href="/questergatecapital/public/css/1-css-components/joined-fixed-component.css"
		/>
		
		<link rel="stylesheet" href="/questergatecapital/public/css/1-css-components/6-utility-classes.css" />
		
		<link
			rel="stylesheet"
			href="/questergatecapital/public/css/1-css-components/10-carousel--swipper--custom-1.css"
		/>

			
		<link rel="stylesheet" href="/questergatecapital/public/css/training/all__training__css__combined.css" />


		<!-- <link rel="stylesheet" href="/questergatecapital/public/css/training/0-training--header.css" /> -->
		
		<!-- <link rel="stylesheet" href="/questergatecapital/public/css/training/1-training--hero.css" /> -->
		
		<!-- <link rel="stylesheet" href="/questergatecapital/public/css/training/2-training--benefits.css" /> -->
		
		<!-- <link rel="stylesheet" href="/questergatecapital/public/css/training/3-training--testimonials.css" /> -->
		
		<!-- <link rel="stylesheet" href="/questergatecapital/public/css/training/4-training--cta.css" /> -->
		
		<!-- <link rel="stylesheet" href="/questergatecapital/public/css/training/5-training--focus.css" /> -->
		
		<link rel="stylesheet" href="training-with-payment/7-training__payment__types.css" />
		
		
		<!-- SWIPER -->
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
		/>


		<!-- ----------Page Title---------- -->
		<title>Questergate Training</title>

		<!-- -------------Favicon for page--------------- -->
		<link
			rel="icon"
			type="image/x-icon"
			href="/questergatecapital/public/img/images/QG__favicon__no__background-Favicon-Phone-16-10.ico"
			id="favicon"
		/>
		
		      
        <!-- IMPORTANT OLD HEAD CODE -->
        
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
	</head>

	<body>
		@include('generic.new_back_to_top_button')

		<div class="gen-container">
			@include('generic.new_header_training')

			<main class="main">
				<!-- -------START OF HERO section------- -->
				<section class="training-hero__section">
					<div class="training-hero__container">
						<div class="training-hero__txt-content__container">
							<h1 class="training-hero__txt-content-header">
								<span class="hero__txt-content-header__part-1"> Go from</span>

								<span class="hero__txt-content-header__part-2"
									>Beginner
									<span class="hero__txt-content-header__part-x">to</span>
								</span>
								<span class="hero__txt-content-header__part-2"
									>Profitable Trader</span
								>

								<span class="hero__txt-content-header__part-3"
									>in 3 months</span
								>
							</h1>

							<div class="hero__cred">
								<p class="hero__cred__text-1">Trusted By:</p>

								<div class="hero__cred__text-2">
									<p class="hero__cred__text-2__traders">
										<span class="counter-1">0</span> Traders
									</p>

									<!-- <p class="hero__cred__text-2__investors">
										<span class="counter-2">0</span> Investors
									</p> -->
								</div>
							</div>

							<p class="training-hero__txt-content-subhead">
								The most effective way to learn how to trade the financial
								market.
							</p>
						</div>
					</div>
				</section>

				<!-- -------START OF "What you will learn" section------- -->
				<section class="training__benefit-for-you__section">
					<div class="training__benefit-for-you__container">
						<h2 class="training__benefit-card__header">
							The 3 Major skills you will develop <br />
							<span class="training__benefit__header-span2"></span>
						</h2>

						<div class="training__benefit-card__container">
							<div class="training__benefit-card__content__container">
								<ul class="training__benefit-card__list">
									<li class="training__benefit-card__list-items">
										Create trading strategies that are stable and long lasting.
									</li>

									<li class="training__benefit-card__list-items">
										Minimise your loses and never lose your capital.
									</li>

									<li class="training__benefit-card__list-items">
										Start earning an income from the financial market.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<!-- -------START OF "Details about the training" section------- -->
				<section class="training__focus__section">
					<div class="training__focus__main-container">
						<div class="training__focus__container">
							<h4 class="training__focus__header">
								You will learn how to trade these markets
							</h4>

							<div class="training__focus-card__container">
								<ul class="training__focus-card__list">
									<li class="training__focus-card__list-items">
										Commodities Market
									</li>

									<li class="training__focus-card__list-items">
										Currency(Forex) Market
									</li>

									<!-- <li class="training__focus-card__list-items">Stock Market</li> -->
								</ul>
							</div>

							<div class="drawing-an-arrow"></div>

							<div
								class="training__focus-card__container training__features-card__container"
							>
								<ul
									class="training__focus-card__list training__features-card__list"
								>
									<li
										class="training__focus-card__list-items training__features-card__list-items"
									>
										12 weeks of real time training (online).
									</li>

									<li
										class="training__focus-card__list-items training__features-card__list-items"
									>
										Access to over 30years of Trading insights.
									</li>

									<li
										class="training__focus-card__list-items training__features-card__list-items"
									>
										Access to Free Trading signals for a year.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<!-- -------START OF Training CTA__1 section------- -->
				<section class="training__cta__1__section">
					<div class="training__cta__1__container">
						<div class="training__cta__1__content__container">
							<p class="training__cta__content">
								Start your journey to become a profitable trader
							</p>

							<a
								href="#training__cta__2__section-id"
								class="training__cta__button"
								id="training__cta__1__button-id"
								aria-expanded="false"
							>
								Click here
							</a>
						</div>
					</div>
				</section>

				<!-- -------start of TESTIMONIALS section------- -->
				<section class="testimonial__section">
					<div class="testimonial__container">
						<h2 class="testimonial__header">Feedback from other Traders</h2>

						<!-- Testimonial Carousel sub-Section -->
						<div class="testimonial-carousel__container">
							<!-- insert carousel arrows here -->
							<div class="testimonial-carousel__scroll carousel-nav">
								<button
									class="testimonial-carousel__scroll-left arrow-circle prev"
									title="Previous"
								>
									<div class="left-arrow"></div>
								</button>

								<button
									class="testimonial-carousel__scroll-right arrow-circle next"
									title="Next"
								>
									<div class="right-arrow"></div>
								</button>
							</div>

							<!-- insert carousel cards here -->
							<div class="testimonial__carousel__section">
								<div class="testimonial__carousel__container">
									<div class="swiper swiperCarousel">
										<div class="swiper-wrapper">
											<div class="swiper-slide">
												<div class="swiper-card">
													<div class="client__quote__container">
														<svg
															class="client__quote-icon"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 48 48"
														>
															<path
																d="M16.5 9.0A1.5 1.5 0 0 0 15.9 9.1C13.1 10.3 10.4 13.5 10.4 13.5C7.6 16.7 5 21.9 5 30A1.5 1.5 0 0 0 5.0 30.2A8.5 8.5 0 0 0 13.5 39A8.5 8.5 0 0 0 13.5 22A8.5 8.5 0 0 0 8.7 23.5C9.6 19.8 11.1 17.2 12.6 15.4C14.9 12.7 17.1 11.9 17.1 11.9A1.5 1.5 0 0 0 16.5 9.0zM37.5 9.0A1.5 1.5 0 0 0 36.9 9.1C34.1 10.3 31.4 13.5 31.4 13.5C28.6 16.7 26.0 21.9 26.0 30A1.5 1.5 0 0 0 26.0 30.2A8.5 8.5 0 0 0 34.5 39A8.5 8.5 0 0 0 34.5 22A8.5 8.5 0 0 0 29.7 23.5C30.6 19.8 32.1 17.2 33.6 15.4C35.9 12.7 38.1 11.9 38.1 11.9A1.5 1.5 0 0 0 37.5 9.0z"
															/>
														</svg>

														<p class="client__quote">
															I was suprised when I was made to understand that
															trading Forex was not as complicated as i use to
															believe. All I needed was a good tutor. Thanks for
															the training.
														</p>
													</div>

													<div class="client__profile__container">
														<!-- <img
															class="client__avatar"
															src="https://i.pravatar.cc/200?img=26"
														/> -->

														<div class="client__name-title__container">
															<h1 class="client__review__name">Kingsley</h1>

															<!-- <h2 class="client__title">
																Sr. Technology Analyst
															</h2> -->
														</div>
													</div>
												</div>
											</div>

											<div class="swiper-slide">
												<div class="swiper-card">
													<div class="client__quote__container">
														<svg
															class="client__quote-icon"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 48 48"
														>
															<path
																d="M16.5 9.0A1.5 1.5 0 0 0 15.9 9.1C13.1 10.3 10.4 13.5 10.4 13.5C7.6 16.7 5 21.9 5 30A1.5 1.5 0 0 0 5.0 30.2A8.5 8.5 0 0 0 13.5 39A8.5 8.5 0 0 0 13.5 22A8.5 8.5 0 0 0 8.7 23.5C9.6 19.8 11.1 17.2 12.6 15.4C14.9 12.7 17.1 11.9 17.1 11.9A1.5 1.5 0 0 0 16.5 9.0zM37.5 9.0A1.5 1.5 0 0 0 36.9 9.1C34.1 10.3 31.4 13.5 31.4 13.5C28.6 16.7 26.0 21.9 26.0 30A1.5 1.5 0 0 0 26.0 30.2A8.5 8.5 0 0 0 34.5 39A8.5 8.5 0 0 0 34.5 22A8.5 8.5 0 0 0 29.7 23.5C30.6 19.8 32.1 17.2 33.6 15.4C35.9 12.7 38.1 11.9 38.1 11.9A1.5 1.5 0 0 0 37.5 9.0z"
															/>
														</svg>

														<p class="client__quote">
															I wanted to learn how to trade commodities, after
															many months of searching, I found Questergate and
															I learned a lot from them. Thanks for the
															simplicity.
														</p>
													</div>

													<div class="client__profile__container">
														<!-- <img
															class="client__avatar"
															src="https://i.pravatar.cc/200?img=31"
														/> -->

														<div class="client__name-title__container">
															<h1 class="client__review__name">
																Kehinde Animashaun
															</h1>

															<!-- <h2 class="client__title">
																Sr. Technology Analyst
															</h2> -->
														</div>
													</div>
												</div>
											</div>

											<div class="swiper-slide">
												<div class="swiper-card">
													<div class="client__quote__container">
														<svg
															class="client__quote-icon"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 48 48"
														>
															<path
																d="M16.5 9.0A1.5 1.5 0 0 0 15.9 9.1C13.1 10.3 10.4 13.5 10.4 13.5C7.6 16.7 5 21.9 5 30A1.5 1.5 0 0 0 5.0 30.2A8.5 8.5 0 0 0 13.5 39A8.5 8.5 0 0 0 13.5 22A8.5 8.5 0 0 0 8.7 23.5C9.6 19.8 11.1 17.2 12.6 15.4C14.9 12.7 17.1 11.9 17.1 11.9A1.5 1.5 0 0 0 16.5 9.0zM37.5 9.0A1.5 1.5 0 0 0 36.9 9.1C34.1 10.3 31.4 13.5 31.4 13.5C28.6 16.7 26.0 21.9 26.0 30A1.5 1.5 0 0 0 26.0 30.2A8.5 8.5 0 0 0 34.5 39A8.5 8.5 0 0 0 34.5 22A8.5 8.5 0 0 0 29.7 23.5C30.6 19.8 32.1 17.2 33.6 15.4C35.9 12.7 38.1 11.9 38.1 11.9A1.5 1.5 0 0 0 37.5 9.0z"
															/>
														</svg>

														<p class="client__quote">
															After losing thousands of dollars to trading, I
															finally know what I was lacking and thanks to the
															training. It was worth the price. I have been
															making profit for the past 4 months.
														</p>
													</div>

													<div class="client__profile__container">
														<!-- <img
															class="client__avatar"
															src="https://i.pravatar.cc/200?img=69"
														/> -->

														<div class="client__name-title__container">
															<h1 class="client__review__name">
																Musa, Optimus trades
															</h1>

															<!-- <h2 class="client__title">
																Sr. Technology Analyst
															</h2> -->
														</div>
													</div>
												</div>
											</div>

											<div class="swiper-slide">
												<div class="swiper-card">
													<div class="client__quote__container">
														<svg
															class="client__quote-icon"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 48 48"
														>
															<path
																d="M16.5 9.0A1.5 1.5 0 0 0 15.9 9.1C13.1 10.3 10.4 13.5 10.4 13.5C7.6 16.7 5 21.9 5 30A1.5 1.5 0 0 0 5.0 30.2A8.5 8.5 0 0 0 13.5 39A8.5 8.5 0 0 0 13.5 22A8.5 8.5 0 0 0 8.7 23.5C9.6 19.8 11.1 17.2 12.6 15.4C14.9 12.7 17.1 11.9 17.1 11.9A1.5 1.5 0 0 0 16.5 9.0zM37.5 9.0A1.5 1.5 0 0 0 36.9 9.1C34.1 10.3 31.4 13.5 31.4 13.5C28.6 16.7 26.0 21.9 26.0 30A1.5 1.5 0 0 0 26.0 30.2A8.5 8.5 0 0 0 34.5 39A8.5 8.5 0 0 0 34.5 22A8.5 8.5 0 0 0 29.7 23.5C30.6 19.8 32.1 17.2 33.6 15.4C35.9 12.7 38.1 11.9 38.1 11.9A1.5 1.5 0 0 0 37.5 9.0z"
															/>
														</svg>

														<p class="client__quote">
															Learning how to trade with Questergate's training
															has made me a better Trader than I could have
															imagined. My trading account has grown steadily.
														</p>
													</div>

													<div class="client__profile__container">
														<!-- <img
															class="client__avatar"
															src="https://i.pravatar.cc/200?img=59"
														/> -->

														<div class="client__name-title__container">
															<h1 class="client__review__name">Femi Ojo</h1>

															<!-- <h2 class="client__title">
																Sr. Technology Analyst
															</h2> -->
														</div>
													</div>
												</div>
											</div>

											<div class="swiper-slide">
												<div class="swiper-card">
													<div class="client__quote__container">
														<svg
															class="client__quote-icon"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 48 48"
														>
															<path
																d="M16.5 9.0A1.5 1.5 0 0 0 15.9 9.1C13.1 10.3 10.4 13.5 10.4 13.5C7.6 16.7 5 21.9 5 30A1.5 1.5 0 0 0 5.0 30.2A8.5 8.5 0 0 0 13.5 39A8.5 8.5 0 0 0 13.5 22A8.5 8.5 0 0 0 8.7 23.5C9.6 19.8 11.1 17.2 12.6 15.4C14.9 12.7 17.1 11.9 17.1 11.9A1.5 1.5 0 0 0 16.5 9.0zM37.5 9.0A1.5 1.5 0 0 0 36.9 9.1C34.1 10.3 31.4 13.5 31.4 13.5C28.6 16.7 26.0 21.9 26.0 30A1.5 1.5 0 0 0 26.0 30.2A8.5 8.5 0 0 0 34.5 39A8.5 8.5 0 0 0 34.5 22A8.5 8.5 0 0 0 29.7 23.5C30.6 19.8 32.1 17.2 33.6 15.4C35.9 12.7 38.1 11.9 38.1 11.9A1.5 1.5 0 0 0 37.5 9.0z"
															/>
														</svg>

														<p class="client__quote">
															I use to think i could learn how to trade forex in
															2 weeks. LoL. Very interactive training. Now I am
															making money from trading on my own.
														</p>
													</div>

													<div class="client__profile__container">
														<!-- <img
															class="client__avatar"
															src="https://i.pravatar.cc/200?img=49"
														/> -->

														<div class="client__name-title__container">
															<h1 class="client__review__name">Favour Ita</h1>

															<!-- <h2 class="client__title">
																Sr. Technology Analyst
															</h2> -->
														</div>
													</div>
												</div>
											</div>

											<div class="swiper-slide">
												<div class="swiper-card">
													<div class="client__quote__container">
														<svg
															class="client__quote-icon"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 48 48"
														>
															<path
																d="M16.5 9.0A1.5 1.5 0 0 0 15.9 9.1C13.1 10.3 10.4 13.5 10.4 13.5C7.6 16.7 5 21.9 5 30A1.5 1.5 0 0 0 5.0 30.2A8.5 8.5 0 0 0 13.5 39A8.5 8.5 0 0 0 13.5 22A8.5 8.5 0 0 0 8.7 23.5C9.6 19.8 11.1 17.2 12.6 15.4C14.9 12.7 17.1 11.9 17.1 11.9A1.5 1.5 0 0 0 16.5 9.0zM37.5 9.0A1.5 1.5 0 0 0 36.9 9.1C34.1 10.3 31.4 13.5 31.4 13.5C28.6 16.7 26.0 21.9 26.0 30A1.5 1.5 0 0 0 26.0 30.2A8.5 8.5 0 0 0 34.5 39A8.5 8.5 0 0 0 34.5 22A8.5 8.5 0 0 0 29.7 23.5C30.6 19.8 32.1 17.2 33.6 15.4C35.9 12.7 38.1 11.9 38.1 11.9A1.5 1.5 0 0 0 37.5 9.0z"
															/>
														</svg>

														<p class="client__quote">
															Commodities trading use to feel complicated to me.
															The training made it so easy and fun. I am
															gradually growing my trading capital.
														</p>
													</div>

													<div class="client__profile__container">
														<!-- <img
															class="client__avatar"
															src="https://i.pravatar.cc/200?img=68"
														/> -->

														<div class="client__name-title__container">
															<h1 class="client__review__name">
																Samson Adebamiji
															</h1>

															<!-- <h2 class="client__title">
																Sr. Technology Analyst
															</h2> -->
														</div>
													</div>
												</div>
											</div>

											<div class="swiper-slide">
												<div class="swiper-card">
													<div class="client__quote__container">
														<svg
															class="client__quote-icon"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 48 48"
														>
															<path
																d="M16.5 9.0A1.5 1.5 0 0 0 15.9 9.1C13.1 10.3 10.4 13.5 10.4 13.5C7.6 16.7 5 21.9 5 30A1.5 1.5 0 0 0 5.0 30.2A8.5 8.5 0 0 0 13.5 39A8.5 8.5 0 0 0 13.5 22A8.5 8.5 0 0 0 8.7 23.5C9.6 19.8 11.1 17.2 12.6 15.4C14.9 12.7 17.1 11.9 17.1 11.9A1.5 1.5 0 0 0 16.5 9.0zM37.5 9.0A1.5 1.5 0 0 0 36.9 9.1C34.1 10.3 31.4 13.5 31.4 13.5C28.6 16.7 26.0 21.9 26.0 30A1.5 1.5 0 0 0 26.0 30.2A8.5 8.5 0 0 0 34.5 39A8.5 8.5 0 0 0 34.5 22A8.5 8.5 0 0 0 29.7 23.5C30.6 19.8 32.1 17.2 33.6 15.4C35.9 12.7 38.1 11.9 38.1 11.9A1.5 1.5 0 0 0 37.5 9.0z"
															/>
														</svg>

														<p class="client__quote">
															I took the training program and now I trade along
															side my 9 to 5 job. I focus on swing trading. And
															it has been mostly wins for my trades.
														</p>
													</div>

													<div class="client__profile__container">
														<!-- <img
															class="client__avatar"
															src="https://i.pravatar.cc/200?img=68"
														/> -->

														<div class="client__name-title__container">
															<h1 class="client__review__name">Helene</h1>

															<!-- <h2 class="client__title">
																Sr. Technology Analyst
															</h2> -->
														</div>
													</div>
												</div>
											</div>

											<div class="swiper-slide">
												<div class="swiper-card">
													<div class="client__quote__container">
														<svg
															class="client__quote-icon"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 48 48"
														>
															<path
																d="M16.5 9.0A1.5 1.5 0 0 0 15.9 9.1C13.1 10.3 10.4 13.5 10.4 13.5C7.6 16.7 5 21.9 5 30A1.5 1.5 0 0 0 5.0 30.2A8.5 8.5 0 0 0 13.5 39A8.5 8.5 0 0 0 13.5 22A8.5 8.5 0 0 0 8.7 23.5C9.6 19.8 11.1 17.2 12.6 15.4C14.9 12.7 17.1 11.9 17.1 11.9A1.5 1.5 0 0 0 16.5 9.0zM37.5 9.0A1.5 1.5 0 0 0 36.9 9.1C34.1 10.3 31.4 13.5 31.4 13.5C28.6 16.7 26.0 21.9 26.0 30A1.5 1.5 0 0 0 26.0 30.2A8.5 8.5 0 0 0 34.5 39A8.5 8.5 0 0 0 34.5 22A8.5 8.5 0 0 0 29.7 23.5C30.6 19.8 32.1 17.2 33.6 15.4C35.9 12.7 38.1 11.9 38.1 11.9A1.5 1.5 0 0 0 37.5 9.0z"
															/>
														</svg>

														<p class="client__quote">
															I use to look for the "Holy grail" of tradiing.
															Many youtube videos are just lies. The training
															taught me how to create a tradining startegy and
															how to be disciplined. Now I can settle down and
															trade on my own.
														</p>
													</div>

													<div class="client__profile__container">
														<!-- <img
															class="client__avatar"
															src="https://i.pravatar.cc/200?img=68"
														/> -->

														<div class="client__name-title__container">
															<h1 class="client__review__name">J. B.</h1>

															<!-- <h2 class="client__title">
																Sr. Technology Analyst
															</h2> -->
														</div>
													</div>
												</div>
											</div>

											<div class="swiper-slide">
												<div class="swiper-card">
													<div class="client__quote__container">
														<svg
															class="client__quote-icon"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 48 48"
														>
															<path
																d="M16.5 9.0A1.5 1.5 0 0 0 15.9 9.1C13.1 10.3 10.4 13.5 10.4 13.5C7.6 16.7 5 21.9 5 30A1.5 1.5 0 0 0 5.0 30.2A8.5 8.5 0 0 0 13.5 39A8.5 8.5 0 0 0 13.5 22A8.5 8.5 0 0 0 8.7 23.5C9.6 19.8 11.1 17.2 12.6 15.4C14.9 12.7 17.1 11.9 17.1 11.9A1.5 1.5 0 0 0 16.5 9.0zM37.5 9.0A1.5 1.5 0 0 0 36.9 9.1C34.1 10.3 31.4 13.5 31.4 13.5C28.6 16.7 26.0 21.9 26.0 30A1.5 1.5 0 0 0 26.0 30.2A8.5 8.5 0 0 0 34.5 39A8.5 8.5 0 0 0 34.5 22A8.5 8.5 0 0 0 29.7 23.5C30.6 19.8 32.1 17.2 33.6 15.4C35.9 12.7 38.1 11.9 38.1 11.9A1.5 1.5 0 0 0 37.5 9.0z"
															/>
														</svg>

														<p class="client__quote">
															The one-on-one training is expensive but I think
															it is the best. I took the one-on-one training and
															it was worth it. Now I even teach others how to
															trade and I am a pro trader now.
														</p>
													</div>

													<div class="client__profile__container">
														<!-- <img
															class="client__avatar"
															src="https://i.pravatar.cc/200?img=68"
														/> -->

														<div class="client__name-title__container">
															<h1 class="client__review__name">Jonathan Ogu</h1>

															<!-- <h2 class="client__title">
																Sr. Technology Analyst
															</h2> -->
														</div>
													</div>
												</div>
											</div>

											<div class="swiper-slide">
												<div class="swiper-card">
													<div class="client__quote__container">
														<svg
															class="client__quote-icon"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 48 48"
														>
															<path
																d="M16.5 9.0A1.5 1.5 0 0 0 15.9 9.1C13.1 10.3 10.4 13.5 10.4 13.5C7.6 16.7 5 21.9 5 30A1.5 1.5 0 0 0 5.0 30.2A8.5 8.5 0 0 0 13.5 39A8.5 8.5 0 0 0 13.5 22A8.5 8.5 0 0 0 8.7 23.5C9.6 19.8 11.1 17.2 12.6 15.4C14.9 12.7 17.1 11.9 17.1 11.9A1.5 1.5 0 0 0 16.5 9.0zM37.5 9.0A1.5 1.5 0 0 0 36.9 9.1C34.1 10.3 31.4 13.5 31.4 13.5C28.6 16.7 26.0 21.9 26.0 30A1.5 1.5 0 0 0 26.0 30.2A8.5 8.5 0 0 0 34.5 39A8.5 8.5 0 0 0 34.5 22A8.5 8.5 0 0 0 29.7 23.5C30.6 19.8 32.1 17.2 33.6 15.4C35.9 12.7 38.1 11.9 38.1 11.9A1.5 1.5 0 0 0 37.5 9.0z"
															/>
														</svg>

														<p class="client__quote">
															It was not easy for me to keep up with the
															training due to my busy schedule. But with the
															class recording, I kept up. I have been making
															money from trading ever since.
														</p>
													</div>

													<div class="client__profile__container">
														<!-- <img
															class="client__avatar"
															src="https://i.pravatar.cc/200?img=68"
														/> -->

														<div class="client__name-title__container">
															<h1 class="client__review__name">Ibrahim</h1>

															<!-- <h2 class="client__title">
																Sr. Technology Analyst
															</h2> -->
														</div>
													</div>
												</div>
											</div>

											<div class="swiper-slide">
												<div class="swiper-card">
													<div class="client__quote__container">
														<svg
															class="client__quote-icon"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 48 48"
														>
															<path
																d="M16.5 9.0A1.5 1.5 0 0 0 15.9 9.1C13.1 10.3 10.4 13.5 10.4 13.5C7.6 16.7 5 21.9 5 30A1.5 1.5 0 0 0 5.0 30.2A8.5 8.5 0 0 0 13.5 39A8.5 8.5 0 0 0 13.5 22A8.5 8.5 0 0 0 8.7 23.5C9.6 19.8 11.1 17.2 12.6 15.4C14.9 12.7 17.1 11.9 17.1 11.9A1.5 1.5 0 0 0 16.5 9.0zM37.5 9.0A1.5 1.5 0 0 0 36.9 9.1C34.1 10.3 31.4 13.5 31.4 13.5C28.6 16.7 26.0 21.9 26.0 30A1.5 1.5 0 0 0 26.0 30.2A8.5 8.5 0 0 0 34.5 39A8.5 8.5 0 0 0 34.5 22A8.5 8.5 0 0 0 29.7 23.5C30.6 19.8 32.1 17.2 33.6 15.4C35.9 12.7 38.1 11.9 38.1 11.9A1.5 1.5 0 0 0 37.5 9.0z"
															/>
														</svg>

														<p class="client__quote">
															The training taught me how to think like a pro
															trader. Now I am patient and strategic in my
															trades. And it has turned into another stream of
															income for me.
														</p>
													</div>

													<div class="client__profile__container">
														<!-- <img
															class="client__avatar"
															src="https://i.pravatar.cc/200?img=68"
														/> -->

														<div class="client__name-title__container">
															<h1 class="client__review__name">Victor I.</h1>

															<!-- <h2 class="client__title">
																Sr. Technology Analyst
															</h2> -->
														</div>
													</div>
												</div>
											</div>
										</div>

										<!-- swiper controls -->
										<div class="swiper-button-next swiper__scroll"></div>
										<div class="swiper-button-prev swiper__scroll"></div>

										<div class="pagination__container">
											<!-- swiper pagination -->
											<div class="swiper-pagination"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<!-- Move from CTA__1 to CTA__2 -->
				<section
					id="training__cta__2__section-id"
					class="training__cta__2__section"
				></section>

				<!-- -------START OF payment section------- -->
				<section class="training__payment__section">
					<div class="training__payment__container">
						<!-- for one-on-one training -->
						<div class="training__types__container">
							<div class="training__types__card">
								<div class="training__types__header-features__container">
									<h3 class="training__types__header">One-on-One Training</h3>

									<div class="training__types__features__list__container">
										<ul class="training__types__features__list">
											<li class="training__types__features__list-items">
												Learn at your own pace.
											</li>

											<li class="training__types__features__list-items">
												Customize your class schedule.
											</li>

											<li class="training__types__features__list-items">
												Unlimited access to training Instructor.
											</li>

											<li class="training__types__features__list-items">
												1 year of free trading signals.
											</li>
										</ul>
									</div>
								</div>

								<div class="training__types__drawing-an-arrow"></div>

								<div class="training__types__cost__list__container">
									<ul class="training__types__cost__list">
										<li class="training__types__cost__list-items">
											3 months online training.
										</li>

										<li class="training__types__cost__list-items">
											Fee: ₦50,000 per month.
										</li>

										<li class="training__types__cost__list-items">
											Live video classes
											<br />
											(with access to recordings)
										</li>
									</ul>
								</div>

                <form>
                  <div>Email</div>
                  <div style="margin-bottom: 10px;"><input type="text" id="email-address-50k"></div>

                  <div>Amount</div>
                  <div style="margin-bottom: 10px;"><input type="tel" id="amount-50k" value="50000" readonly></div>
                </form>

								<div
									class="training__types__cta__container training__one-on-one__cta__container"
								>
									<button
										class="training__one-on-one__cta__button"
										id="training__one-on-one__cta__button"
										aria-expanded="false"
										data-target="#one-on-one__payment-message"
                    onclick="payWithPaystack50K(event)"
									>
										Pay Now to Register
									</button>

									<div
										class="training__one-on-one__payment-message__container training__payment__one-on-one__accordion__scroll-into-view"
										id="one-on-one__payment-message"
									>
										<p class="training__payment-message__text-1">
											Welcome Onboard!
										</p>

										<p class="training__payment-message__text-2">
											To make payment and get more info about the One-on-One
											training:
										</p>

										<p class="training__payment-message__text-3">
											Contact Us on Whatsapp:
											<span class="training-whatsapp-link__container"
												><a
													href="https://wa.link/68pals"
													class="training-whatsapp-link"
													alt="training whatsapp link"
													target="_blank"
													>+234 814 447 7866</a
												>
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>

						<!-- for group training -->
						<div class="training__types__container">
							<div class="training__types__card">
								<div class="training__types__header-features__container">
									<h3 class="training__types__header">Group Training</h3>

									<div class="training__types__features__list__container">
										<ul class="training__types__features__list">
											<li class="training__types__features__list-items">
												Affordable learning fee.
											</li>

											<li class="training__types__features__list-items">
												Easy class schedules.
											</li>

											<li class="training__types__features__list-items">
												Access to training Instructor.
											</li>

											<li class="training__types__features__list-items">
												4 months of free trading signals.
											</li>
										</ul>
									</div>
								</div>

								<div class="training__types__drawing-an-arrow"></div>

								<div class="training__types__cost__list__container">
									<ul class="training__types__cost__list">
										<li class="training__types__cost__list-items">
											3 months online training.
										</li>

										<li class="training__types__cost__list-items">
											Fee: ₦6,000 per month.
										</li>

										<li class="training__types__cost__list-items">
											Live video classes
											<br />
											(with access to recordings)
										</li>
									</ul>
								</div>

								<div
									class="training__types__cta__container training__group__cta__container"
								>
									<p class="training__group__sub-cta">
										Limited Slots: 19 slots remaining!
									</p>

                  <form>
                    <div>Email</div>
                    <div style="margin-bottom: 10px;"><input type="text" id="email-address-6k"></div>
  
                    <div>Amount</div>
                    <div style="margin-bottom: 10px;"><input type="tel" id="amount-6k" value="6000" readonly></div>
                  </form>

									<button
										class="training__group__cta__button"
										id="training__group__cta__button"
										aria-expanded="false"
										data-target="#group__payment-message"
                    onclick="payWithPaystack6K(event)"
									>
										Pay Now to Register
									</button>

									<div
										class="training__group__payment-message__container training__payment__group__accordion__scroll-into-view"
										id="group__payment-message"
									>
										<p class="training__payment-message__text-1">
											Welcome Onboard!
										</p>

										<p class="training__payment-message__text-2">
											To make payment and get more info about the Group
											training:
										</p>

										<p class="training__payment-message__text-3">
											Contact Us on Whatsapp:
											<span class="training-whatsapp-link__container"
												><a
													href="https://wa.link/68pals"
													class="training-whatsapp-link"
													alt="training whatsapp link"
													target="_blank"
													>+234 814 447 7866</a
												>
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<!-- -------start of FOOTER section------- -->
			@include('generic.new_footer')
		</div>

		<script src="/questergatecapital/public/js/js-components/header__on__scroll__with__training.js"></script>
		<script src="/questergatecapital/public/js/js-components/back-to-top.js"></script>
		<script src="/questergatecapital/public/js/js-components/section__visible__on__scroll.js"></script>
		<script src="/questergatecapital/public/js/js-components/numbers-count-up-1__training.js"></script>
		<script src="/questergatecapital/public/js/js-components/carousel--swipper--jbg-1.js"></script>
		
		<!-- ---These 2 Javascript controls the dropdown that would have appeared if we did not implement Paystack payment--- -->
		<!-- <script src="/questergatecapital/public/js/js-components/training__payment__cta__accordion.js"></script> -->
		<!-- <script src="/questergatecapital/public/js/js-components/training__payment__cta__accordion__smooth__scroll__into__view.js"></script> -->
		
		
		<script src="/questergatecapital/public/js/js-components/footer__currentyear__auto.js"></script>
		<!-- <script src="/questergatecapital/public/js/js-components/append__to__footer-list.js"></script> -->
		<script src="/questergatecapital/public/js/js-components/footer__remove__list-items.js"></script>
		
		        
		<!-- --------------JQUERY ACCESS via CDN and via Local server----------------- -->
		<script
			src="https://code.jquery.com/jquery-3.7.1.min.js"
			integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
			crossorigin="anonymous"
		></script>

    <script src="https://js.paystack.co/v1/inline.js"></script>

    <script>
      const paymentForm = document.getElementById('paymentForm');
      paymentForm.addEventListener("submit", payWithPaystack, false);

      function payWithPaystack50K(e) {
        console.log(e.target);
        e.preventDefault();
        const v = "50000";

        let handler = PaystackPop.setup({
          key: 'pk_test_cdecde0ab7d5be891a84933c9c3faf2077e853b0', // Replace with your public key
          email: document.getElementById("email-address-50k").value,
          amount: v * 100,
          ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
          // label: "Optional string that replaces customer email"
          onClose: function(){
            alert('Window closed.');
          },
          callback: function(response){
            window.location.href = "https://questergate.com/training_payment_success_private";
          }
        });

        handler.openIframe();
      }

      function payWithPaystack6K(e) {
        console.log(e.target);
        e.preventDefault();
        const v = "6000";

        let handler = PaystackPop.setup({
          key: 'pk_test_cdecde0ab7d5be891a84933c9c3faf2077e853b0', // Replace with your public key
          email: document.getElementById("email-address-6k").value,
          amount: v * 100,
          ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
          // label: "Optional string that replaces customer email"
          onClose: function(){
            alert('Window closed.');
          },
          callback: function(response){
            window.location.href = "https://questergate.com/training_payment_success_group";
          }
        });

        handler.openIframe();
      }
    </script>


		<!-- SWIPER -->

		<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
		<!-- End of SWIPER -->
        
        <script type="text/javascript"> window.$crisp=[];window.CRISP_WEBSITE_ID="59767aec-ab5f-49a2-9233-f872ade8029a";(function(){ d=document;s=d.createElement("script"); s.src="https://client.crisp.chat/l.js"; s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})(); </script>

	</body>
</html>
