import { Link } from "react-router-dom";
import { useEffect } from "react";


export default function About() {
	useEffect(() => {
		document.title = "About | OpenKitchen 🧑‍🍳";
		window.scrollTo(0, 0);
	  }, [])
    return(
      <div className="page">
        <div className="splash">
			<h1 className="splash-text">About the kitchen</h1>
			{/* <p className="subtitle"> </p> */}
        </div>
        <div className="about-info">
			<h2>It all started with an idea.</h2>
			<p>Most meal-kit services come from big central kitchens, bringing you ample convenience but no love - we're here to fix that.</p>
			<p>By connecting you directly to humans with a passion for cooking, we make sure you get nourished with passion, at a rate that is completely flexible and adapted to your individual needs.</p>
			<p>Our system is set up to scale humanely, such that your cohort's cooks are compensated more for every new member, while charging less per member.</p>
			<p><b>Here's How it works:</b></p>
        </div>
        <div className="how-it-works">
			<div className="steps">
				<p>Start by <b><Link to="/login" className="inline-link">signing up for an account</Link></b>. You must add your dietary restrictions (if any) and your city.</p>
				<p>When enough people in your area have signed up, a cohort is assigned. Cohorts are defined as any number of <b>diners</b> and at least one <b>cook</b>.</p>
				<p>You will be encouraged to introduce yourself to your cohort - these are real people after all!</p>
				<p>Once the cohort is established, the <b>voting period</b> begins.</p>
				<p><b>Questions that must be answered during the voting period:</b></p>
				<ul>
					<p><li>How many different dishes will be made this month?</li></p>
					<p><li>How many portions of each dish does everyone need?</li></p>
					<p><li>Which dietary restrictions should be accounted for?</li></p>
					<p><li>Do any diners require assistance picking up food?</li></p>
				</ul>
				<p>Questions that are nice to have answered:</p>
				<ul>
					<p><li>Any preferences for which dishes are served this month?</li></p>
					<p><li>Do any diners have  specialty equipment they could lend the cook?</li></p>
					<p><li>Can you share your recipe? (Answer at your discretion, cooks!)</li></p>
				</ul>
			</div>
        </div>
		<div className="pricing">
			<h2>Pricing</h2>
			<p>Due to the cohort system and the variance of the prices for groceries, it is difficult to give an accurate price for the service that OpenKitchen provides.</p>
			<p>Prices for one month may be higher if there are more complex dishes, fewer cohort diners, or exotic ingredients.</p>
			<p>Here is a general guide that is based on a small, single-cook cohort test in Montréal, Québec (prices in $CAD):</p>
			<table>
				<tbody>
					<tr>
						<th>Cohort size</th>
						<td>3 + 1 Cook</td>
						<td>4 + 1 Cook</td>
						<td>5 + 1 Cook</td>
						<td>6 + 1 Cook</td>
					</tr>
					<tr>
						<th>Price per diner</th>
						<td>$39</td>
						<td>$48</td>
						<td>$55</td>
						<td>$60</td>
					</tr>
					<tr>
						<th>Service Fee</th>
						<td>$4</td>
						<td>$5</td>
						<td>$6</td>
						<td>$7</td>
					</tr>
					<tr>
						<th>Cost per Diner</th>
						<td>$13</td>
						<td>$12</td>
						<td>$11</td>
						<td>$10</td>
					</tr>
					<tr>
						<th>Cook's compensation</th>
						<td>$35</td>
						<td>$43</td>
						<td>$49</td>
						<td>$53</td>
					</tr>
				</tbody>
			</table>
			<p>Sounds good with you? Let's get started.</p>
		<div className="sign-up-CTA-container">
			<Link to="/login" className="button">Sign up (cook)</Link>
			<Link to="/login" className="button">Sign up (diner)</Link>
		</div>
		<p>Still have questions? Feel free to reach out on our <b><Link to="/contact" className="inline">contact</Link></b> page. Our dedicated support team will be more than happy to answer any questions you may have.</p>
		</div>
      </div>
    )
  }