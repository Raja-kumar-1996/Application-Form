<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dynamic README Generator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      display: flex;
      height: 100vh;
    }
    .container {
      display: flex;
      width: 100%;
    }
    .form-section, .preview-section {
      width: 50%;
      padding: 20px;
      overflow-y: auto;
    }
    .form-section {
      background: #f4f4f4;
    }
    .preview-section {
      background: #1e1e1e;
      color: #fff;
      white-space: pre-wrap;
    }
    input, textarea {
      width: 100%;
      margin-bottom: 10px;
      padding: 8px;
    }
    button {
      padding: 10px;
      background: #007acc;
      color: white;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background: #005f99;
    }
  </style>
</head>
<body>

<div class="container">
  <!-- Form Section -->
  <div class="form-section">
    <h2>Application Form</h2>
    
    <input type="text" id="name" placeholder="Your Name">
    <input type="text" id="project" placeholder="Project Name">
    <textarea id="description" placeholder="Project Description"></textarea>
    <input type="text" id="tech" placeholder="Technologies Used (comma separated)">
    <textarea id="features" placeholder="Features (comma separated)"></textarea>
    <input type="text" id="github" placeholder="GitHub Link">

    <button onclick="copyReadme()">Copy README</button>
  </div>

  <!-- Preview Section -->
  <div class="preview-section" id="preview">
    Your README will appear here...
  </div>
</div>

<script>
  const inputs = document.querySelectorAll("input, textarea");
  const preview = document.getElementById("preview");

  inputs.forEach(input => {
    input.addEventListener("input", generateReadme);
  });

  function generateReadme() {
    const name = document.getElementById("name").value;
    const project = document.getElementById("project").value;
    const description = document.getElementById("description").value;
    const tech = document.getElementById("tech").value.split(",");
    const features = document.getElementById("features").value.split(",");
    const github = document.getElementById("github").value;

    const techList = tech.map(t => `- ${t.trim()}`).join("\n");
    const featureList = features.map(f => `- ${f.trim()}`).join("\n");

    const readme = `
# ${project || "Project Title"}

## 👤 Author
${name || "Your Name"}

## 📖 Description
${description || "Project description goes here."}

## 🛠️ Technologies Used
${techList || "- Tech 1"}

## ✨ Features
${featureList || "- Feature 1"}

## 🔗 GitHub
${github || "Add your repo link here"}
    `;

    preview.textContent = readme;
  }

  function copyReadme() {
    navigator.clipboard.writeText(preview.textContent);
    alert("README copied to clipboard!");
  }
</script>

</body>
</html>
