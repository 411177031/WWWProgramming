<?php
header('Content-Type: application/json');

$conn = new mysqli("localhost", "catdog_user", "catdogcatdog", "catdog_user");

if ($conn->connect_error) {
  echo json_encode(['catVotes' => 0, 'dogVotes' => 0]);
  exit;
}

$result = $conn->query("SELECT animal, COUNT(*) as count FROM votes GROUP BY animal");

$catVotes = 0;
$dogVotes = 0;

while ($row = $result->fetch_assoc()) {
  if ($row['animal'] === 'cat') $catVotes = $row['count'];
  if ($row['animal'] === 'dog') $dogVotes = $row['count'];
}

echo json_encode(['catVotes' => $catVotes, 'dogVotes' => $dogVotes]);

$conn->close();
?>
