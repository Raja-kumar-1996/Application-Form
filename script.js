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
${desc || "Write description..."}

## 🛠️ Technologies
${tech.map(t => `- ${t.trim()}`).join("\n")}

## ✨ Features
${features.map(f => `- ${f.trim()}`).join("\n")}

## 🔗 GitHub
[Repository](${github || "#"})
  `;

  // Convert Markdown → HTML
  document.getElementById("preview").innerHTML = marked.parse(markdown);

  // Store for copy
  window.generatedMarkdown = markdown;
}

function copyMarkdown() {
  navigator.clipboard.writeText(window.generatedMarkdown || "");
  alert("README copied!");
}

// Initial load
update();
