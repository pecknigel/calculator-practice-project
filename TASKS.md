# Suggested Tasks

Suggested tasks to complete.

This project is provided for learning and practice. Use it as you see fit - however is useful for your learning.

If you prefer more structure, the tasks below can be made use of.

Ongoing support and guided learning is available from Nigel via [Preply](https://preply.com/en/tutor/4217857).

## Essentials

These tasks are all considered essential since they set up the basic functionality of the calculator. A short version is provided and then broken down in to separate steps.

### Short Version: Simple Math

Set up basic mathematical operations. Enable the user to provide two numbers and an operator before pressing equals. Display the result. Allow a new calculation working from the result.

**Implementation Considerations**

Input from the user will need to be tracked as they press buttons. Do this using state variables and not using the DOM.

———

*The following tasks break the above task in to smaller steps.*

———

### Step 1: Respond to Number Button Clicks

Set up the number buttons so that they can be clicked. Display the chosen number once clicked.

**Implementation Considerations**

Don’t use the `onclick` attribute. Select each button from the DOM using the `id`. Listen for click events using `addEventListener`.

Create a function `handleNumberButtonClick` that takes a single parameter of the number that was clicked and displays it.

Use a loop to avoid repeated code - don’t add event listeners one by one.

### Step 2: Track State for Entered Numbers

## Further Work

The following tasks are suggested improvements and features. Feel free to come up with your own! Let is know what you come up with.

### Robust Handling of Input

Make sure that the calculator responds appropriately if used incorrectly, and does not break. Such as pressing equals too early, pressing an operator without entering a number, or pressing two operators in a row.

### Button Shape Options

An option to have round or square buttons.

**Suggested Implementation**

Have a class on the container that switches the buttons between square and round. Provide a button or switch to toggle it. Use `border-radius: 50%` to achieve the round  effect.

### Theme Options

Provide options for changing the colour scheme of the calculator.

**Suggested Implementation**

Have a class on the container that sets the colour scheme. Theme classes should only change the properties needed for the theming, and not duplicate any other declarations.

### Dark Mode

### Persist User Options
