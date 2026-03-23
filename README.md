<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>README Generator</title>

  <!-- Marked.js CDN -->
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

  <style>
    body {
      margin: 0;
      font-family: Arial;
      display: flex;
      height: 100vh;
    }

    .form, .preview {
      width: 50%;
      padding: 20px;
      overflow-y: auto;
    }

    .form {
      background: #f5f5f5;
    }

    .preview {
      background: #ffffff;
      border-left: 2px solid #ddd;
    }

    input, textarea {
      width: 100%;
      margin-bottom: 10px;
      padding: 8px;
    }

    button {
      padding: 10px;
      background: black;
      color: white;
      border: none;
      cursor: pointer;
    }

    /* GitHub-like styling */
    .preview h1 { border-bottom: 2px solid #ddd; }
    .preview ul { padding-left: 20px; }
  </style>
</head>
<body>

<div class="form">
  <h2>Fill Application</h2>

  <input id="name" placeholder="Your Name">
  <input id="project" placeholder="Project Title">
  <textarea id="desc" placeholder="Description"></textarea>
  <input id="tech" placeholder="Technologies (comma separated)">
  <textarea id="features" placeholder="Features (comma separated)"></textarea>
  <input id="github" placeholder="GitHub Link">

  <button onclick="copyMarkdown()">Copy Markdown</button>
</div>

<div class="preview" id="preview"></div>

<script>
const inputs = document.querySelectorAll("input, textarea");

inputs.forEach(input => input.addEventListener("input", update));

function update() {
  const name = document.getElementById("name").value;
  const project = document.getElementById("project").value;
  const desc = document.getElementById("desc").value;
  const tech = document.getElementById("tech").value.split(",");
  const features = document.getElementById("features").value.split(",");
  const github = document.getElementById("github").value;

  const markdown = `
# ${project || "Project Title"}

## 👤 Author
${name || "Your Name"}

## 📖 Description
${desc || "Write something..."}

## 🛠️ Technologies
${tech.map(t => `- ${t.trim()}`).join("\n")}

## ✨ Features
${features.map(f => `- ${f.trim()}`).join("\n")}

## 🔗 GitHub
[Repository](${github || "#"})
  `;

  // Convert Markdown → HTML
  document.getElementById("preview").innerHTML = marked.parse(markdown);

  // Save for copy
  window.generatedMarkdown = markdown;
}

function copyMarkdown() {
  navigator.clipboard.writeText(window.generatedMarkdown || "");
  alert("Markdown copied!");
}

// initial render
update();
</script>

</body>
</html>
