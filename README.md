# IMAGIFY
A web-based image inpainting app that allows users to upload an image, draw a mask on it, and export both the original image and the mask. Built with React, Fabric.js, and react-canvas-draw for seamless drawing functionality."


## How to Run the Project Locally

### 1. Clone the repository:
First, clone the repository to your local machine:

#INSTAL DEPENDENCIES-  Navigate to the project folder  : cd my-image-inpainting-app
                        npm install
                        Then in the main.jsx (in terminal ) npm run dev
The application should now be running at http://localhost:3000 in your browser.

Libraries Used
React: A JavaScript library for building user interfaces.
react-canvas-draw: A React component for drawing on a canvas element.
Fabric.js: A powerful and simple-to-use canvas library for drawing and image manipulation.
Vite: A next-generation, fast build tool for modern web applications.


Features
Image Upload: Users can upload an image that will be displayed on the canvas.
Drawing Mask: Users can draw on the image to create a mask, which can be saved.
Export: Users can export both the original image and the mask as a pair.

Challenges Faced
1. Handling Image Upload:
Initially, I faced challenges with properly rendering the uploaded image onto the canvas. This was solved by using React hooks (useState, useEffect) to manage the image state and ensure the image was correctly displayed once uploaded.

2. Canvas Drawing Interaction:
Implementing the drawing functionality on the image was tricky, especially when working with react-canvas-draw. The library required careful handling of canvas redraws and maintaining the state of the mask. After testing and fine-tuning the drawing logic, I was able to get it to work smoothly.


Future Enhancements
Undo/Redo functionality: To improve the user experience, I plan to implement undo and redo functionality for drawing on the canvas.
Brush Size/Color Control: Allowing users to modify the brush size and color would give them more control over their drawing.
Advanced Masking Options: Adding more options for creating and refining the mask could improve the tool's flexibility.

