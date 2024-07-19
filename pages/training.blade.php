<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="csrf-token" content="{{ csrf_token() }}">

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
		
		<link 
		    rel="stylesheet"
		    href="/questergatecapital/public/css/training/all__training__css__combined.css"
		    async
	    />


		<!-- <link rel="stylesheet" href="/questergatecapital/public/css/training/0-training--header.css" /> -->
		
		<!-- <link rel="stylesheet" href="/questergatecapital/public/css/training/1-training--hero.css" /> -->
		
		<!-- <link rel="stylesheet" href="/questergatecapital/public/css/training/2-training--benefits.css" /> -->
		
		<!-- <link rel="stylesheet" href="/questergatecapital/public/css/training/3-training--testimonials.css" /> -->
		
		<!-- <link rel="stylesheet" href="/questergatecapital/public/css/training/4-training--cta.css" /> -->
		
		<!-- <link rel="stylesheet" href="/questergatecapital/public/css/training/5-training--focus.css" /> -->
		
		<!-- <link rel="stylesheet" href="/questergatecapital/public/css/training/6-training--form.css" /> -->
	


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
							3 Trading skills you will learn <br />
							<span class="training__benefit__header-span2"></span>
						</h2>

						<div class="training__benefit-card__container">
							<div class="training__benefit-card__content__container">
								<ul class="training__benefit-card__list">
									<li class="training__benefit-card__list-items">
										Different ways to earn steady income from the financial
										market.
									</li>
									
									<li class="training__benefit-card__list-items">
										Ways to minimise your loses and never wipeout your capital.
									</li>
									
									<li class="training__benefit-card__list-items">
										How to create trading strategies that are stable and
										profitable.
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
										Access to over 30years of trading insights.
									</li>

									<li
										class="training__focus-card__list-items training__features-card__list-items"
									>
										Access to Free trading signals for a year.
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
								Want to start earning income from the financial market?
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

				<!-- -------START OF payment section------- -->
				<!-- removed -->

				<!-- Move from CTA__1 to CTA__2 -->
				<section
					id="training__cta__2__section-id"
					class="training__cta__2__section"
				></section>

				<!-- -------START OF Training CTA-3 section------- -->
				<section class="training__cta__section">
					<div
						class="training__cta__container training__cta__accordion__scroll-into-view"
					>
						<div
							class="training__cta__content__container training__cta__content__container__forAccordion"
						>
							<p class="training__cta__content">
								Become a profit-making Trader
							</p>

							<button
								class="training__cta__button training__cta__accordion__button"
								id="training__cta__accordion__button-id"
								aria-expanded="false"
								data-target="#training__cta__accordion__content"
							>
								Apply for the FREE training sessions
							</button>
						</div>
					</div>
				</section>

				<!-- -------START OF TRAINING FORM section------- -->
				<section class="training-form__section">
					<div
						class="training-form__container training-form__container__forAccordion"
						id="training__cta__accordion__content"
					>
						<h2 class="training-form__header">Apply Here</h2>

						<form
							class="training-form"
							name="qg-training-form"
							action="#"
							method="post"
							id="training-form__form"
						>
						    @csrf
						    
						    <!-- first name -->
							<div class="training-form__elements__container">
								<label for="f-name">First Name:</label>

								<input
									type="text"
									id="f-name"
									name="firstName"
									placeholder="first name"
								/>

								<div class="error-message" id="error-f-name"></div>
							</div>

                            <!-- last name -->
							<div class="training-form__elements__container">
								<label for="l-name">Last Name:</label>

								<input
									type="text"
									id="l-name"
									name="lastName"
									placeholder="last name"
								/>

								<div class="error-message" id="error-l-name"></div>
							</div>

                            <!-- email -->
							<div class="training-form__elements__container">
								<label for="your-email">Email:</label>

								<input
									type="email"
									id="your-email"
									name="email"
									placeholder="email"
								/>

								<div class="error-message" id="error-your-email"></div>
							</div>

                            <!-- phone number -->
							<div class="training-form__elements__container">
								<label for="phone-number">Phone Number:</label>

								<input
									type="tel"
									id="phone-number"
									name="phoneNumber"
									placeholder="phone number"
								/>

								<div class="error-message" id="error-phone-number"></div>
							</div>

                            <!-- country -->
							<div class="training-form__elements__container">
								<label for="your-country">Country:</label>

								<input
									type="text"
									id="your-country"
									name="country"
									placeholder="your country"
								/>

								<div class="error-message" id="error-your-country"></div>
							</div>

                            <!-- knowledge level -->
							<div class="training-form__elements__container">
								<label class="trading-knowledge-level" for="knowledge-level"
									>What is your current level of knowledge:</label
								>

								<select id="knowledge-level" name="knowledgeLevel">
									<option value="" disabled selected>Select</option>
									<option value="beginner">No trading experience</option>
									<option value="demo-trader">
										Only Demo trading experience
									</option>
									<option value="live-trader">Live trading experience</option>
								</select>

								<div class="error-message" id="error-knowledge-level"></div>
							</div>

                            <!-- confirm age -->
							<div
								class="training-form__elements__container training__confirm-age"
							>
								<label class="trading__confirm-age__label" for="confirm-age"
									>Confirm that you are above 21years</label
								>

								<input
									type="checkbox"
									class="trading__confirm-age__inputbox"
									id="confirm-age"
									name="confirmAge"
									value="qualifiedAged"
								/>

								<div class="error-message" id="error-confirm-age"></div>
							</div>

                            <!-- submit button -->
							<input
								type="button"
								class="training-form__submit-button training-form__submit-button__forAccordion"
								
								value="Submit"
								onclick="handleTrainingFormSubmission()"
							/>
						</form>


                    <!-- Success message for training Form -->
                        
                        <!-- success mssg for beginner -->
						<div
							class="training-form__after-submit__container training-form__after-submit__container__forAccordion"
							id="success-message-beginner"
						>
							<p class="training-form__after-submit__text-1">
								Application Successful!
							</p>
							
							<p class="training-form__after-submit__text-1">
								<b>Beginner level</b>
							</p>

							<p class="training-form__after-submit__text-2">
								Your 3 months training starts on:
								<span class="training-start-date">12th July, 2024.</span>
							</p>

							<p class="training-form__after-submit__text-3">
								<br />
								<span style= "color: red;">Click the link below</span> to join the Whatsapp group and get your <b>training schedule</b>.
								<br />
								<br />
								<span class="training-whatsapp-link__container"
									><a
										href="https://chat.whatsapp.com/HGhnO9EUFTgK9T2uPM9ZTN"
										class="training-whatsapp-link"
										alt="training whatsapp group name"
										target="_blank"
										>"Beginners - 3 months forex training"</a
									>
								</span>
								<!-- <span class="training-whatsapp-link__container"
									><a
										href="https://wa.link/68pals"
										class="training-whatsapp-link"
										alt="training whatsapp group number"
										target="_blank"
										>+234 814 447 7866</a
									>
								</span> -->
							</p>
						</div>
						
						<!-- success mssg for Demo-experience -->
						<div
							class="training-form__after-submit__container training-form__after-submit__container__forAccordion"
							id="success-message-demo-intermediate"
						>
							<p class="training-form__after-submit__text-1">
								Application Successful!
							</p>

							<p class="training-form__after-submit__text-1">
								<b>Demo Trader level</b>
							</p>

							<p class="training-form__after-submit__text-2">
								Your 3 months training starts on:
								<span class="training-start-date">12th July, 2024.</span>
							</p>

							<p class="training-form__after-submit__text-3">
								<br />
								<span style= "color: red;">Click the link below</span> to join the Whatsapp group and get your <b>training schedule</b>.
								<br />
								<br />
								<span class="training-whatsapp-link__container"
									><a
										href="https://chat.whatsapp.com/KffExWQsKY3Cf2Wutm2Daj"
										class="training-whatsapp-link"
										alt="training whatsapp group name"
										target="_blank"
										>"Demo Traders - 3 months forex training"</a
									>
								</span>
								<!-- <span class="training-whatsapp-link__container"
									><a
										href="https://wa.link/68pals"
										class="training-whatsapp-link"
										alt="training whatsapp group number"
										target="_blank"
										>+234 814 447 7866</a
									>
								</span> -->
							</p>
						</div>
						
						<!-- success mssg for Live-experience -->
						<div
							class="training-form__after-submit__container training-form__after-submit__container__forAccordion"
							id="success-message-live-intermediate"
						>
							<p class="training-form__after-submit__text-1">
								Application Successful!
							</p>
							
							<p class="training-form__after-submit__text-1">
								<b>Live trading level</b>
							</p>

							<p class="training-form__after-submit__text-2">
								Your 3 months training starts on:
								<span class="training-start-date">12th July, 2024.</span>
							</p>

							<p class="training-form__after-submit__text-3">
								<br />
								<span style= "color: red;">Click the link below</span> join the Whatsapp group and get your <b>training schedule</b>.
								<br />
								<br />
								<span class="training-whatsapp-link__container"
									><a
										href="https://chat.whatsapp.com/GsKGUWGsPOo4gXyCw98nlM"
										class="training-whatsapp-link"
										alt="training whatsapp group name"
										target="_blank"
										>"Live Traders - 3 months forex training"</a
									>
								</span>
								<!-- <span class="training-whatsapp-link__container"
									><a
										href="https://wa.link/68pals"
										class="training-whatsapp-link"
										alt="training whatsapp group number"
										target="_blank"
										>+234 814 447 7866</a
									>
								</span> -->
							</p>
						</div>
					</div>
				</section>
			</main>

			<!-- -------start of FOOTER section------- -->
			@include('generic.new_footer')
		</div>

        <!-- other scripts -->

		<!-- --------------JQUERY ACCESS via CDN and via Local server----------------- -->
	    <!-- <script
			src="https://code.jquery.com/jquery-3.7.1.min.js"
			integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
			crossorigin="anonymous"
		></script> -->
		
		
        <!-- SWIPER -->
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
		/>
		
		<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

	    <!-- End of SWIPER -->

		<script src="/questergatecapital/public/js/js-components/header__on__scroll__with__training.js"></script>
		<script src="/questergatecapital/public/js/js-components/back-to-top.js"></script>
		<script src="/questergatecapital/public/js/js-components/section__visible__on__scroll.js"></script>
		<script src="/questergatecapital/public/js/js-components/numbers-count-up-1__training.js"></script>
		<script src="/questergatecapital/public/js/js-components/carousel--swipper--jbg-1.js"></script>
		<script src="/questergatecapital/public/js/js-components/training__cta__1__affect__cta-accordion.js"></script>
		<script src="/questergatecapital/public/js/js-components/training__cta__accordion.js"></script>
		<script src="/questergatecapital/public/js/js-components/training__cta__accordion__smooth__scroll__into__view.js"></script>
		<!--<script src="/questergatecapital/public/js/js-components/training__form__validation__and__scroll__into__view.js"></script>-->
		<script src="/questergatecapital/public/js/js-components/footer__currentyear__auto.js"></script>
		<!-- <script src="/questergatecapital/public/js/js-components/append__to__footer-list.js"></script> -->
		<script src="/questergatecapital/public/js/js-components/footer__remove__list-items.js"></script>
		

        <!-- Training Form Validation & sending form data to admin dashboard -->
        <script>
            let preFormText = document.getElementById("form__text");
            let theForm = document.querySelector(".training-form");
            
            let successMessage = document.querySelector(".training-form__after-submit__container");
            let successMessageBeginner = document.getElementById("success-message-beginner");
            let successMessageDemoIntermediate = document.getElementById("success-message-demo-intermediate");
            let successMessageLiveIntermediate = document.getElementById("success-message-live-intermediate");
        
            function handleTrainingFormSubmission() {
                // Your form validation logic goes here
                let isValid = validateForm();
        
                if (isValid) {
                    submitTrainingForm();
                }
            }
        
            function submitTrainingForm() {
                var _shost = window.location.host;
                const protocol = window.location.protocol + "//";
                const apiURL = protocol + _shost + "/";
        
                var ajaxPost = $.ajax({
                    url: apiURL + "subscribe",
                    method: "POST",
                    data: $("#training-form__form").serialize(),
                    dataType: "json",
                    headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
                });
        
                ajaxPost.done(function (res) {
                    displaySuccessMessage();
                    scrollToView__SuccessMessage();
                    hideSuccessMessageAfterDelay();
                });
        
                ajaxPost.fail(function (res) {});
            }
        
            function showSuccessMessage() {
                displaySuccessMessage();
                scrollToView__SuccessMessage();
                hideSuccessMessageAfterDelay();
            }
        
            function validateForm() {
                // Reset error messages
                document.querySelectorAll(".error-message").forEach(function (el) {
                    el.innerHTML = "";
                });
        
                let isError = false; // Flag to track if there is an error
        
                // Validation logic starts here:
        
                // Validation logic for First Name
                const firstName = document.getElementById("f-name").value;
                if (firstName.length === 0) {
                    document.getElementById("error-f-name").innerHTML =
                        "Please enter your first name.";
                    scrollToView__ErrorMessage();
                    isError = true; // Set isError to true
                } else if (firstName.length < 3) {
                    document.getElementById("error-f-name").innerHTML =
                        "Enter minimum of 3 letters.";
                    scrollToView__ErrorMessage();
                    isError = true; // Set isError to true
                } else if (firstName.length > 20) {
                    document.getElementById("error-f-name").innerHTML =
                        "Maximum of 20 letters exceeded.";
                    scrollToView__ErrorMessage();
                    isError = true; // Set isError to true
                }
        
                // Validation logic for Last Name
                const lastName = document.getElementById("l-name").value;
                if (lastName.length === 0) {
                    document.getElementById("error-l-name").innerHTML =
                        "Please enter your last name.";
                    scrollToView__ErrorMessage();
                    isError = true; // Set isError to true
                } else if (lastName.length < 3) {
                    document.getElementById("error-l-name").innerHTML =
                        "Enter minimum of 3 letters.";
                    scrollToView__ErrorMessage();
                    isError = true; // Set isError to true
                } else if (lastName.length > 20) {
                    document.getElementById("error-l-name").innerHTML =
                        "Maximum of 20 letters exceeded.";
                    scrollToView__ErrorMessage();
                    isError = true; // Set isError to true
                }
        
                // Your validation logic for Email
                const email = document.getElementById("your-email").value;
                const emailRegex = /^(?=.{7,81}$)[\w\.-]+@[\w\.-]+\.\w{2,4}$/;
                if (!emailRegex.test(email)) {
                    document.getElementById("error-your-email").innerHTML =
                        "Please enter a valid email.";
                    scrollToView__ErrorMessage();
                    isError = true; // Set isError to true
                }
        
                // Your validation logic for Phone Number
                const phoneNumber = document.getElementById("phone-number").value;
                const phoneRegex =
                    /^(?=.{7,20}$)\+?\d{1,3}[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}$/;
                if (!phoneRegex.test(phoneNumber)) {
                    document.getElementById("error-phone-number").innerHTML =
                        "Please enter a valid phone number.";
                    scrollToView__ErrorMessage();
                    isError = true; // Set isError to true
                }
        
                // Your validation logic for Country
                const country = document.getElementById("your-country").value;
                if (country.length < 4) {
                    document.getElementById("error-your-country").innerHTML =
                        "Please enter your country.";
                    scrollToView__ErrorMessage();
                    isError = true; // Set isError to true
                }
        
                // Your validation logic for Knowledge Level
                const knowledgeLevel = document.getElementById("knowledge-level").value;
                if (knowledgeLevel === "") {
                    document.getElementById("error-knowledge-level").innerHTML =
                        "Please select your knowledge level.";
                    scrollToView__ErrorMessage();
                    isError = true; // Set isError to true
                }
        
                // Your validation logic for Confirm Age
                const confirmAgeCheckbox = document.getElementById("confirm-age");
                if (!confirmAgeCheckbox.checked) {
                    document.getElementById("error-confirm-age").innerHTML =
                        "Please confirm your age.";
                    scrollToView__ErrorMessage();
                    isError = true; // Set isError to true
                }
                // Validation logic ends here
        
                // If there's an error, show error message for 10 seconds
                if (isError) {
                    setTimeout(function () {
                        document.querySelectorAll(".error-message").forEach(function (el) {
                            el.innerHTML = ""; // Clear error messages
                        });
                    }, 10000); // Show error message for 10 seconds (10000 milliseconds)
                }
        
                // If all validations pass
                if (!isError) {
                    return true;
                }
        
                // Prevent the form from submitting (remove this line if you want the form to be submitted)
                return false;
            }
        
            function scrollToView__ErrorMessage() {
                let offsetValue = 300;
        
                // Get the first error message element with a non-empty message
                let errorMessage = document.querySelector(".error-message:not(:empty)");
        
                // If an error message element is found, scroll to its parent container
                if (errorMessage) {
                    let errorContainerId = errorMessage.id;
                    let startingPoint = document
                        .querySelector("#" + errorContainerId)
                        .closest(".training-form__elements__container");
                    let scrollPosition = startingPoint.offsetTop - offsetValue;
                    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
                }
            }
        
            // Timer to Hide success message and display form like it was never filled
            function hideSuccessMessageAfterDelay() {
                setTimeout(function () {
                    let theForm = document.querySelector(".training-form");
                    let formHeader = document.querySelector(".training-form__header");
                    let accordionButton = document.getElementById("training__cta__accordion__button-id");

                    // hide success message
                    successMessage.style.display = "none";
                    successMessageBeginner.style.display = "none";
                    successMessageDemoIntermediate.style.display = "none";
                    successMessageLiveIntermediate.style.display = "none";
        
                    // Reset the form to clear input fields
                    theForm.reset();
        
                    // Show all the elements that were hidden due to showing the success message
                    theForm.style.display = "flex";
                    formHeader.style.display = "block";
                    accordionButton.style.display = "flex";
                }, 120000); // Show for 120 seconds
            }
        
            function displaySuccessMessage() {
                let theForm = document.querySelector(".training-form");
                let formHeader = document.querySelector(".training-form__header");
                let accordionButton = document.getElementById("training__cta__accordion__button-id");
                
                // Get the selected knowledge level
                let knowledgeLevel = document.getElementById("knowledge-level").value;
                
                
                // hide form, header and accordion button
                theForm.style.display = "none";
                formHeader.style.display = "none";
                accordionButton.style.display = "none";
                
                
                // show success message container
                if (knowledgeLevel === "beginner") {
                    successMessageBeginner.style.display = "block";
                    successMessageDemoIntermediate.style.display = "none";
                    successMessageLiveIntermediate.style.display = "none";
                } else if (knowledgeLevel === "demo-trader") {
                    successMessageDemoIntermediate.style.display = "block";
                    successMessageBeginner.style.display = "none";
                    successMessageLiveIntermediate.style.display = "none";
                } else if (knowledgeLevel === "live-trader") {
                    successMessageLiveIntermediate.style.display = "block";
                    successMessageBeginner.style.display = "none";
                    successMessageDemoIntermediate.style.display = "none";
                }
            }
        
            // Ensure success message is well positioned on the screen
            function scrollToView__SuccessMessage() {
            	let offsetValue = 100;
            	let startingPoint = document.querySelector(".training__cta__section");
            	let scrollPosition = startingPoint.offsetTop - offsetValue;
            
            	// Scroll to the desired position
            	window.scrollTo({ top: scrollPosition, behavior: "smooth" });
            }
        
            // Event listener for the form submission
            theForm.addEventListener("submit", function (event) {
                event.preventDefault(); // Prevent the default form submission
        
                handleTrainingFormSubmission(); // Call your custom form submission function
            });
        </script>

		
		   
		
		<!-- FROM OLD WEBSITE DESIGN -->
		<script src="/questergatecapital/public/js/jquery.js"></script>
        <script src="/questergatecapital/public/js/script.js?v=16"></script>

        <script type="text/javascript"> window.$crisp=[];window.CRISP_WEBSITE_ID="59767aec-ab5f-49a2-9233-f872ade8029a";(function(){ d=document;s=d.createElement("script"); s.src="https://client.crisp.chat/l.js"; s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})(); </script>
	
	</body>
</html>
