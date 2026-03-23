<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>README Dashboard Generator</title>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

body {
  display: flex;
  height: 100vh;
  background: #0d1117;
  color: #e6edf3;
}

/* Sidebar */
.sidebar {
  width: 250px;
  background: #161b22;
  padding: 20px;
}

.sidebar h2 {
  margin-bottom: 20px;
}

.sidebar p {
  color: #8b949e;
  font-size: 14px;
}

/* Main */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Topbar */
.topbar {
  padding: 15px 20px;
  background: #161b22;
  border-bottom: 1px solid #30363d;
}

/* Content */
.content {
  display: flex;
  flex: 1;
}

/* Form Section */
.form-section {
  width: 40%;
  padding: 20px;
  border-right: 1px solid #30363d;
}

.form-section input,
.form-section textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 6px;
  background: #0d1117;
  color: white;
  border: 1px solid #30363d;
}

/* Preview */
.preview {
  width: 60%;
  padding: 20px;
  overflow-y: auto;
}

.preview-box {
  background: #161b22;
  padding: 20px;
  border-radius: 10px;
}

/* Chart */
.chart-box {
  margin-top: 20px;
  background: #161b22;
  padding: 15px;
  border-radius: 10px;
}
</style>
</head>

<body>

<div class="sidebar">
  <h2>📘 README Tool</h2>
  <p>Generate beautiful GitHub README with live preview & analytics.</p>
</div>

<div class="main">

  <div class="topbar">
    <h3>🚀 README Dashboard Generator</h3>
  </div>

  <div class="content">

    <!-- FORM -->
    <div class="form-section">
      <input id="name" placeholder="Your Name">
      <input id="project" placeholder="Project Name">
      <textarea id="desc" placeholder="Description"></textarea>
      <input id="tech" placeholder="Technologies (comma separated)">
      <input id="features" placeholder="Features (comma separated)">
    </div>

    <!-- PREVIEW -->
    <div class="preview">
      <div class="preview-box" id="output"></div>

      <div class="chart-box">
        <canvas id="chart"></canvas>
      </div>
    </div>

  </div>
</div>

<script>
const output = document.getElementById("output");
const ctx = document.getElementById("chart");

let chart;

function update() {
  const name = document.getElementById("name").value;
  const project = document.getElementById("project").value;
  const desc = document.getElementById("desc").value;
  const tech = document.getElementById("tech").value.split(",");
  const features = document.getElementById("features").value.split(",");

  // README Preview
  output.innerHTML = `
    <h1>${project}</h1>
    <h3>👤 ${name}</h3>
    <p>${desc}</p>

    <h3>🛠️ Technologies</h3>
    <ul>${tech.map(t => `<li>${t}</li>`).join("")}</ul>

    <h3>✨ Features</h3>
    <ul>${features.map(f => `<li>${f}</li>`).join("")}</ul>
  `;

  // Chart Data
  const techCount = tech.filter(t => t.trim()).length;
  const featureCount = features.filter(f => f.trim()).length;

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Technologies', 'Features'],
      datasets: [{
        label: 'Project Stats',
        data: [techCount, featureCount]
      }]
    }
  });
}

// Live Update
document.querySelectorAll("input, textarea").forEach(el => {
  el.addEventListener("input", update);
});
</script>

</body>
</html>
