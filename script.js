// Initialize the Quill editor
const quill = new Quill('#editor-container', {
  theme: 'snow'
});

// Save the content of the editor
function saveNote() {
  const noteContent = quill.root.innerHTML;
  localStorage.setItem('note', noteContent);
  alert('Note saved!');
}

// Clear the editor content
function clearEditor() {
  quill.root.innerHTML = '';
}

// Load saved note (if any) on page load
window.addEventListener('load', () => {
  const savedNote = localStorage.getItem('note');
  if (savedNote) {
    quill.root.innerHTML = savedNote;
  }
});

// Drawing functionality
const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');
let drawing = false;

// Mouse down event to start drawing
canvas.addEventListener('mousedown', (e) => {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

// Mouse move event to draw on the canvas
canvas.addEventListener('mousemove', (e) => {
  if (drawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
});

// Mouse up event to stop drawing
canvas.addEventListener('mouseup', () => {
  drawing = false;
});

// Mouse out event to stop drawing when cursor leaves canvas
canvas.addEventListener('mouseout', () => {
  drawing = false;
});

// Clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

