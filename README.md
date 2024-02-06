## Preparing for work

1. Make sure that the LTS version of Node.js is installed on the computer.
   [Download and install](https://nodejs.org/en/) if necessary.
2. Install the project's basic dependencies using the `npm install` command.
3. Start the development mode, execute the `npm start` command.
4. Go to [http://localhost:3000](http://localhost:3000) in the browser. This
   page will automatically reload after saving the changes project files.

---

## Feedback widget

Like most companies, Expresso Cafe collects feedback from its customers. Your
task is to create an application for gathering statistics. There are only three
feedback options: positive, neutral, and negative.

#### Step 1

The application should display the number of collected feedback for each
category. The application should not store feedback statistics between different
sessions (page updates).

The application state must be presented as follows, and no new properties can be
added:

```js
state = {
  good: 0,
  neutral: 0,
  bad: 0,
};
```

![Preview](./assets/step-1.png)

#### Step 2

To enhance the application's functionality, display more feedback statistics in
the interface. Add the display of the total number of collected feedback from
all categories and the percentage of positive feedback. To achieve this, create
additional methods `countTotalFeedback()` and
`countPositiveFeedbackPercentage()` that calculate these values based on the
data in the state (computed data).

![Preview](./assets/step-2.png)

#### Step 3

Perform refactoring of the application. The application state should remain in
the root component `<App>`.

- Extract the display of statistics into a separate component
  `<Statistics good={} neutral={} bad={} total={} positivePercentage={}>`.
- Move the button block into the
  `<FeedbackOptions options={} onLeaveFeedback={}>` component.
- Create a `<Section title="">` component that renders a section with a title
  and children. Wrap each of `<Statistics>` and `<FeedbackOptions>` in the
  created section component.

#### Step 4

Extend the application's functionality so that the statistics block is rendered
only after at least one feedback has been collected. Place the message about the
absence of statistics in the `<Notification message="There is no feedback">`
component.

![Preview](./assets/preview.gif)
