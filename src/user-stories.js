const simpleUserStory = `
<h1>User Story: User Registration</h1>

<p>
  As a new user,
  I want to create an account on the website
  So that I can access exclusive features and personalize my experience.
</p>

<h2>Acceptance Criteria:</h2>
<ol>
  <li>When I visit the website, I should see a "Sign Up" button on the homepage.</li>
  <li>Clicking on the "Sign Up" button should take me to the registration page.</li>
  <li>On the registration page, I should see input fields for my name, email address, and password.</li>
  <li>I should be able to enter my name, email address, and password in the respective fields.</li>
  <li>After entering my details, I should be able to click on a "Submit" button to complete the registration process.</li>
  <li>If I click on the "Submit" button without filling in all the required fields, I should see an error message indicating the missing information.</li>
  <li>If I enter an invalid email address, I should see an error message prompting me to enter a valid email address.</li>
  <li>After successfully submitting my registration details, I should be redirected to a "Welcome" page, confirming that my account has been created.</li>
  <li>I should also receive a confirmation email with a verification link to activate my account.</li>
  <li>Upon clicking the verification link in the email, my account should be activated, and I should be able to log in to the website.</li>
</ol>

<h2>Additional Considerations:</h2>
<ul>
  <li>The password field should have validation rules, such as a minimum length and complexity requirements, to ensure the security of user accounts.</li>
  <li>The registration page should include a checkbox for accepting the terms and conditions of the website.</li>
  <li>In case of any errors during the registration process, appropriate error messages should be displayed to guide the user.</li>
  <li>The system should handle potential edge cases, such as duplicate email addresses or existing accounts, by providing informative error messages and preventing account duplication.</li>
</ul>
`;

const complexUserStory = `
<h1>User Story: International Flight Booking</h1>

<p>
  As a customer, I want to book an international flight for a group of passengers with diverse preferences, such as different departure dates, seat preferences, and dietary restrictions, to ensure a personalized and hassle-free travel experience.
</p>

<h2>Acceptance Criteria:</h2>
<ol>
  <li>As a customer, I should be able to select the desired departure and arrival airports for the international flight.</li>
  <li>As a customer, I should have the option to choose different departure dates for each passenger within the same booking.</li>
  <li>As a customer, I should be able to specify the number of passengers and their basic information, including names, ages, and genders.</li>
  <li>As a customer, I should be able to select seat preferences for each passenger, such as aisle, window, or specific seat numbers if available.</li>
  <li>As a customer, I should have the option to request special assistance or accommodations for any of the passengers, such as wheelchair access or extra legroom.</li>
  <li>As a customer, I should be able to specify any dietary restrictions or meal preferences for each passenger, ensuring their specific needs are met during the flight.</li>
  <li>As a customer, I should be able to view a summary of the selected flights, including the total cost, flight duration, and any additional services or amenities included.</li>
  <li>As a customer, I should have the option to select add-ons or extra services, such as travel insurance, additional baggage allowance, or seat upgrades.</li>
  <li>As a customer, I should be presented with various payment options, including credit/debit cards, PayPal, or other accepted methods.</li>
  <li>As a customer, I should receive a booking confirmation email containing the detailed itinerary, passenger information, payment details, and any additional instructions.</li>
  <li>As a customer, I should have the ability to make changes to the booking, such as modifying passenger information, adding or removing services, or requesting flight changes, within a reasonable timeframe and as per the airline's policy.</li>
  <li>As a customer, I should receive timely notifications regarding any changes, delays, or cancellations related to my booked flights.</li>
  <li>As a customer, I should be able to access and manage my booking through a user-friendly interface or mobile application, allowing me to review or print e-tickets, check flight statuses, or contact customer support if needed.</li>
</ol>

<h2>Additional Notes:</h2>

<ul>
  <li>The booking process should consider any specific regulations, visa requirements, or travel restrictions associated with the selected destinations.</li>
  <li>Integration with airline systems or third-party providers should be established to fetch accurate flight availability, pricing, and other related information.
  <li>User interface and error handling should be designed to guide customers through the booking process, ensuring they provide all necessary information and preventing any common mistakes.
  <li>Privacy and data protection measures should be implemented to safeguard passenger information and comply with relevant data security regulations.
  <li>By addressing this user story, we aim to provide a comprehensive and tailored booking experience for customers traveling internationally, accommodating their preferences and ensuring a convenient and satisfying journey for all passengers involved.
</ul>
`;

export {
  simpleUserStory,
  complexUserStory,
};
