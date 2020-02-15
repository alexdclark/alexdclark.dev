Overview:
Modules is our collection of pages. We can eventually move the footer in here as well.
You basically want to create a page, keep all the layout/parts in that page and then export the whole thing.
Then you export that component in the index to keep things clean.

Creating a page:
There should be a few layers to your page to abstract out logic and separate that logic from the UI.

it should look something like this:

./modules/clock/ClockContainer.jsx
./modules/clock/layout/Clock.jsx
./modules/clock/layout/Clock.css

with the container importing the layout and passing down props. All your logic goes in the container, and then sends down all the information the layout needs to display.

Then the only thing exported from modules is the container.

For example:

the container for your Clock page would calculate the current time and pass that down to the Layout for your clock page. That layout then displays that time and doesn't
handle any calculations. What we _can_ do in the layout is add a listener to update the UI every time the information that's passed down from the container.

We abstract the logic away from the UI to create cleaner, more readable code.

Files only need to be .jsx when we're rendering JSX. Files with utility functions/other pure javascript can just be js.