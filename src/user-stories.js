const simpleUserStory = `
As a customer, I want to be able to complete my shopping experience seamlessly by checking out my items from the shopping cart.

User Story:
As a customer, I want to add items to my shopping cart and proceed to checkout, so that I can purchase the selected products easily.

Acceptance Criteria:

As a customer, I should be able to browse through the product catalog and add desired items to my shopping cart.
As a customer, I should be able to view the contents of my shopping cart, including the product details and the total cost.
As a customer, I should have the option to modify the quantity of items in my shopping cart or remove items if necessary.
As a customer, I should be able to proceed to the checkout process by clicking on a designated button.
As a customer, I should be prompted to provide my shipping address and contact information during the checkout process.
As a customer, I should have the option to select a preferred payment method (e.g., credit card, PayPal, etc.).
As a customer, I should be able to review the order details, including the total cost, before finalizing the purchase.
As a customer, I should be able to confirm the order by clicking on a "Place Order" button.
As a customer, I should receive a confirmation message or email containing the order details and a unique order ID.
As a customer, I should be redirected to a "Thank You" page or receive an on-screen notification confirming the successful completion of my purchase.

Additional Notes:

The shopping cart should be persistent across sessions, allowing customers to resume their shopping experience from where they left off.
Appropriate error handling and validation should be implemented to guide customers in case of any input errors or missing information during the checkout process.
The checkout process should be secure and protect customer information by implementing necessary encryption and security measures.
If any items in the shopping cart become unavailable or out of stock during the checkout process, appropriate notifications should be displayed to the customer.
By implementing this user story, we aim to enhance the user experience and make the shopping journey more convenient for customers, leading to increased customer satisfaction and successful purchases.
`;

const complexUserStory = `
As a frequent traveler, I want to be able to book an international flight for multiple passengers with specific preferences and requirements, ensuring a smooth and tailored booking experience.

User Story:
As a customer, I want to book an international flight for a group of passengers with diverse preferences, such as different departure dates, seat preferences, and dietary restrictions, to ensure a personalized and hassle-free travel experience.

Acceptance Criteria:

As a customer, I should be able to select the desired departure and arrival airports for the international flight.
As a customer, I should have the option to choose different departure dates for each passenger within the same booking.
As a customer, I should be able to specify the number of passengers and their basic information, including names, ages, and genders.
As a customer, I should be able to select seat preferences for each passenger, such as aisle, window, or specific seat numbers if available.
As a customer, I should have the option to request special assistance or accommodations for any of the passengers, such as wheelchair access or extra legroom.
As a customer, I should be able to specify any dietary restrictions or meal preferences for each passenger, ensuring their specific needs are met during the flight.
As a customer, I should be able to view a summary of the selected flights, including the total cost, flight duration, and any additional services or amenities included.
As a customer, I should have the option to select add-ons or extra services, such as travel insurance, additional baggage allowance, or seat upgrades.
As a customer, I should be presented with various payment options, including credit/debit cards, PayPal, or other accepted methods.
As a customer, I should receive a booking confirmation email containing the detailed itinerary, passenger information, payment details, and any additional instructions.
As a customer, I should have the ability to make changes to the booking, such as modifying passenger information, adding or removing services, or requesting flight changes, within a reasonable timeframe and as per the airline's policy.
As a customer, I should receive timely notifications regarding any changes, delays, or cancellations related to my booked flights.
As a customer, I should be able to access and manage my booking through a user-friendly interface or mobile application, allowing me to review or print e-tickets, check flight statuses, or contact customer support if needed.
Additional Notes:

The booking process should consider any specific regulations, visa requirements, or travel restrictions associated with the selected destinations.
Integration with airline systems or third-party providers should be established to fetch accurate flight availability, pricing, and other related information.
User interface and error handling should be designed to guide customers through the booking process, ensuring they provide all necessary information and preventing any common mistakes.
Privacy and data protection measures should be implemented to safeguard passenger information and comply with relevant data security regulations.
By addressing this user story, we aim to provide a comprehensive and tailored booking experience for customers traveling internationally, accommodating their preferences and ensuring a convenient and satisfying journey for all passengers involved.
`;

export {
  simpleUserStory,
  complexUserStory,
};
