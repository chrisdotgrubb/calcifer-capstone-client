# Store Client

[Try it out](https://calcifer-client.onrender.com)

This application is designed to be the storefront of a basic online store. It gets data from a separate api to display
_items_, and allow users to place _orders_. The api has a _User_ model that allows for authentication and authorization,
but it is currently not being used. This allows the display of full functionality of the site without the need for
account creation.

_Items_ can be added to the _cart_ to prepare for ordering. The cart stores the id of each _item_ added, as well as the
quantity of that _item_. _Items_ can be added to the cart from the store page or from the individual item detail page.
Once in the cart, quantity can be changed and items can be removed from either page, as well as from the cart itself.

This project was made with Typescript using Node and React for the client. It uses react-router for client side routing.
Axios is used to make calls to the api. Cart data is stored in local storage and using context to make it accessible
from any page.

This store just sells some simple fictitious products, but can be easily adapted to a larger store with more complex
requirements.

# Routes

| Path             | Purpose                                                       |
|------------------|---------------------------------------------------------------|
| /                | Home page                                                     |
| /store           | View all _items_                                              |
| /store/:itemId   | View single _item's_ details                                  |
| /orders          | View all _orders_ that have been placed                       |
| /orders/:orderId | View single _order's_ details                                 |
| /cart            | View _items_ in the cart, and submit an order                 |
| /manage          | View _items_ available to edit/delete, administrative purpose |
| /manage/add      | Add new _item_ to store, administrative purpose               |
| /manage/itemId   | Edit/delete _item_, administrative purpose                    |

<br />

## Next steps

The next steps for this project will be to add user registration and improve the styling.

The api used for this project is set up to handle users, but it is not implemented here. There will need to be a sign-up
page for registration, and there will need to be a login page. There will also need to be a way to efficiently handle
access and refresh tokens. Once this is done, the api can be updated to only allow admins to the administration pages,
as well as only return orders that were placed by the currently logged-in user.

Not enough time was spent on styling of this project. There needs to be a more consistent look, some extra colors, and
the format can be improved.
