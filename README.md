Name: Mohd Arham
Company: CODETECH IT SOLUTIONS
ID: CT08DS8645
Domain: Android App development
Duration: october to november

Overview of project
Project Name: Note-Taking App
Objective:
Create a simple note-taking app where users can:

Write notes with rich text formatting (using a rich text editor).
Draw on a canvas using their mouse.
Save and clear their notes.
Store their notes locally, so they persist even after refreshing the page.
Key Features:
Rich Text Editor:

Users can type and format their notes using the Quill rich text editor.
Formatting options include bold, italic, underline, lists, etc.
The notes are saved to localStorage, so users can retrieve them even after refreshing the page.
Drawing Canvas:

Users can draw on a canvas element using their mouse.
The app allows users to clear the canvas when they want to start fresh.
Save and Clear Options:

Save Button: Stores the note content to the browser’s localStorage.
Clear Editor: Clears the text in the editor.
Clear Drawing: Clears the drawing canvas.
Technologies Used:
HTML: Structure of the page.
CSS: Styling the layout and elements.
JavaScript:
Quill.js (for rich text editor functionality).
HTML5 Canvas (for drawing).
localStorage (for saving the notes).
How It Works:
Load the Page: When the page is loaded, the rich text editor is initialized, and any saved notes from localStorage are displayed.
Rich Text Editor: Users can type and format their notes, and the app will store the content locally when saved.
Drawing Feature: The canvas allows users to draw freehand using their mouse, and the app has a button to clear the drawing.
Persistent Notes: When the user saves a note, it is stored in localStorage and remains even if the page is refreshed.
User Interface:
Text Editor: A box where users can type and format their notes.
Drawing Canvas: A canvas below the text editor where users can draw.
Buttons: Options to save the note, clear the editor, and clear the drawing canvas.
