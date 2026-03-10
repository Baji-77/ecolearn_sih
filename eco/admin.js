const participants = [
    { name: "Baji", roll: "101", score: 95 },
    { name: "Aisha", roll: "102", score: 88 },
    { name: "Ravi", roll: "103", score: 76 },
    { name: "Meena", roll: "104", score: 60 }
  ];

  // Sort by score (highest first)
  participants.sort((a, b) => b.score - a.score);

  // Display leaderboard
  const tbody = document.getElementById("leaderboardBody");
  participants.forEach((p, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${p.name}</td>
      <td>${p.roll}</td>
      <td>${p.score}</td>
    `;
    tbody.appendChild(row);
  });