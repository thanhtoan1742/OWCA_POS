# Functional and Non-functional Requirement

## Functional Requirement
- Webpage:
    - Provide QR code which links to landing page.
    - Have separate section/page for restaurant staff (need authentication).
    - Login page for customers/staff.
    - Redirect customer to customer page.
    - Redirect staff to staff page.
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

- General users can:
    - View the menu.
    - Search for food using inputbox or filter.

- Custormers can:
    - Ask for printing invoice / Receive invoice.
    - Add food to cart.
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
