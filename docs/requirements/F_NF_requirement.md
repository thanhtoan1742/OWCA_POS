# Functional and Non-functional Requirement

## Functional Requirement
- Search engine: customers can view menu foods/drinks based on their names, ratings, recently,... 
- Order food: customers can order food (add new, remove, change food quantity,...).
- Reservation (Book table): customers can book table with/ without food before an amount of time.
- Payment function (Purchase): customers can choose the payment method for their order.
- Feedback: customers can write reviews, rate dishes or services.
- Confirm order: check if dishes in order are available.
    - Clerks can confirm orders via restaurant staff's manually announcement.
    - Extend (toggleable): Ingredient management system can link to app to be automatically functional.
- Profile management: users can manage their profile (authorization - , personal information,...).
- Data management: restaurant manager can edit menu, including promotions, customers and staff information, homepage, feedbacks,...

```
_____________________________________
| aaaaaaa   |            |          |
|  aaaaaa   |  bbbbbbbb  | ddddddd  |
|    aaaa   |     bbb    |  ddddd   |____
|___________|____________|__________|[  ]
```


## Features
- Webpage:
    - Provide QR code which links to landing page.
    - Have separate section/page for restaurant staff (need authentication).
    - Login page for customers/staff.
    - Redirect customer to customer page.
    - Redirect staff to staff page.

```
    __________________________________________________________
    |                           |                            |
    |  >>>>>  Customer  <<<<<   |           Staff            |
    |___________________________|____________________________|
    |                                                        |
    |                                                        |
    |                      LOGIN                             |
    |                                                        |
    |       username:_________________________               |
    |                                                        |
    |       password:_________________________               |
    |                                                        |
    |                                                        |
    |                                                        |
    |                                                        |
    |________________________________________________________|
```

- Users can:
    - View the menu.
    - Search for food using inputbox or filter.

- Custormers can:
    - Order food: add food to cart.
    - Ask for printing invoice / Receive invoice.
    - Pay the bill via banking services.
    - Rate and send feedback.
    
- Restaurant staff can:
    - Receive orders.
    - Confirm payment and give food to customers.

- Restaurant managers can:
    - Update food availability.
    - View invoice, transaction history.
    - Edit the menu.





## Non-functional Requirement
- Usability:
    - Implemented using Web technology (No app installation required).
    - Works on web stably across multiple browsers on multiple platforms (Chrome,
        Firefox, Safari,... on Windows, MacOS, Android, iOS,...).
    - Payment can be done in 3 clicks.
- Performance:
    - Simplified site that loads fast and has less bugs.
    - Support n orders at the same time.
- Security: 
    - 2-step authentication for staff.
