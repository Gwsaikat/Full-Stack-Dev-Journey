fetch("/stories")
  .then(res => res.json())
  .then(data => {
    const cards = document.getElementById("cards");
    cards.innerHTML = data.map(story => `
      <div class="card">
        <h3>${story.title}</h3>
        <p>${story.description}</p>
      </div>
    `).join("");
  })
  .catch(() => {
    document.getElementById("cards").innerHTML =
      "<p>Failed to load stories</p>";
  });
