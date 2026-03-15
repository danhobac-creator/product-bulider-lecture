
# Lotto Number Generator

## Overview

This is a simple web application that generates random lottery numbers. The user can click a button to generate a set of 6 unique numbers between 1 and 45.

## Project Outline

### Initial Version

*   **HTML (`index.html`):** Sets up the basic structure of the page, including a title, a container for the numbers, and a button to generate them.
*   **CSS (`style.css`):** Styles the page with a modern design, including a gradient background, custom fonts, and responsive layout. It will make the numbers and button visually appealing.
*   **JavaScript (`main.js`):** Contains the logic for generating the unique random numbers and updating the display when the button is clicked.

### Current Plan

1.  **`index.html`:**
    *   Change the title to "Lotto Number Generator".
    *   Create a main container for the application.
    *   Add a heading "오늘의 행운 번호".
    *   Create a container to display the generated lottery numbers.
    *   Add a button with the text "번호 생성".

2.  **`style.css`:**
    *   Apply a visually appealing background with a subtle texture.
    *   Use modern CSS for layout (Flexbox/Grid).
    *   Style the number display elements with a "lifted" card-like effect.
    *   Style the button with a "glow" effect on hover/focus.
    *   Choose an expressive and readable font.
    *   Ensure the layout is responsive and works on mobile devices.

3.  **`main.js`:**
    *   Create a function `generateNumbers` that:
        *   Generates 6 unique random integers between 1 and 45.
        *   Sorts the numbers in ascending order.
    *   Add a click event listener to the "번호 생성" button.
    *   When the button is clicked, call `generateNumbers` and display the results in the number container.
    *   Add a simple animation or transition effect when the numbers appear.
