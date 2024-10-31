# Suggested Tasks

Suggested tasks to complete.

This project is provided for learning and practice. Use it as you see fit - however works for your learning.

If you prefer more structure, the tasks below can provide that.

Ongoing support and guided learning is available from Nigel via [Preply](https://preply.com/en/tutor/4217857).

## Essentials

The following tasks are considered essential. They set up the basic functionality of the calculator. A short version is provided and then broken down to separate steps.

### Short Version: Simple Math

Set up basic mathematical operations. Enable the user to provide two numbers and an operator before pressing equals. Display the result. Allow a new calculation working from the result.

*Implementation Considerations*

Input from the user will need to be tracked as they press buttons. Do this using state variables and not using the DOM.

**The following tasks break the above task in to smaller steps.**

### Step 1: Respond to Number Button Clicks

Set up the number buttons so that they can be clicked. Display the chosen number once clicked.

*Implementation Considerations*

Don’t use the `onclick` attribute. Select each button from the DOM using the `id`. Listen for click events using `addEventListener`.

Create a function `handleNumberButtonClick` that takes a single parameter of the number that was clicked and displays it.

Use a loop to avoid repeated code - don’t add event listeners one by one.

### Step 2: Track State for Entered Numbers

That’s a good start. But clicking one number replaces the previously displayed one. Allow multiple digits to be pressed without losing the last one.

*Implementation Considerations*

Track the state by storing the entered number in a variable as well as displaying it. Don’t use the DOM for that - such as querying the `innerText` of the display.

### Step 3: Respond to Operation Button Clicks

Set up the operation buttons (plus, minus, multiply and divide) so they can be clicked. Store the chosen operator and clear the display ready for a new number to be entered.

*Implementation Considerations*

You don’t need a loop here but having a single function to listen for all of the operations is necessary, rather than four separate ones, as most of what they do is the same, and we don’t want repeated code.

So your `handleOperationButtonClick` function will need a single parameter for the operator that was clicked.

The first entered number will need to be stored elsewhere now so that a second number can be entered. And of course, the chosen operator will need to be tracked, ready for use after the second number has been provided.

### Step 4: Respond to Equals Button Clicks

Set up the equals button so that it can be used to make the entered calculation. Allow the result to be used for a new operation.

*Implementation Considerations*

Make the calculation based on the current state. Set up `handleEqualsClick` to do that.

### Step 5: Set Up the Clear Button

Set up the clear button so that it clears the current state.

## Further Work

The following tasks are suggested improvements and features. Feel free to come up with your own! Let us know what you come up with so it can be shared with others here.

### Robust Handling of Input

Make sure that the calculator responds appropriately if used incorrectly and doesn’t break. Such as pressing equals too early, pressing an operator without entering a number, or pressing two operators in a row.

Think through the different ways that the interface could be used incorrectly. Wrote them out and spend time considering them. Try out other calculators and see how they handle invalid input.

*Implementation Considerations*

Make sure that the click is ignored and indicate to the user that something went wrong - such as by making the button red for a short time, or showing an alert to say that the input was invalid (easier, but not as intuitive and fun to use).

### Organise Your Code with a Class

Convert all of your code to run from a single `Calculator` class.

*Implementation Considerations*

Set up your state as properties on the class. Set up your functions as methods. Move code for initialisation to the `constructor`.

### Support Floating Point Operations

Set up a decimal point button and support floating point calculations.

### Button Shape Options

An option to have round or square buttons.

*Suggested Implementation*

Have a class on the container that switches the buttons between square and round. Provide a button or switch to toggle it. Use `border-radius: 50%` to achieve the round  effect.

### Theme Options

Provide options for changing the colour scheme of the calculator.

*Suggested Implementation*

Have a class on the container that sets the colour scheme. Theme classes should only change the properties needed for the theming, and not duplicate any other declarations.

### Dark Mode

### Persist User Options
