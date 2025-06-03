<?php
header('Content-Type: application/json');

$conn = new mysqli("localhost", "catdog_user", "catdogcatdog", "catdog_user");

if ($conn->connect_error) {
  echo json_encode(['success' => false, 'error' => '資料庫連線失敗']);
  exit;
}

$vote = $_POST['vote'] ?? '';

if (!in_array($vote, ['cat', 'dog'])) {
  echo json_encode(['success' => false, 'error' => '無效票種']);
  exit;
}

$stmt = $conn->prepare("INSERT INTO votes (animal) VALUES (?)");
$stmt->bind_param("s", $vote);
$stmt->execute();
$stmt->close();

$result = $conn->query("SELECT animal, COUNT(*) as count FROM votes GROUP BY animal");

$catVotes = 0;
$dogVotes = 0;

while ($row = $result->fetch_assoc()) {
  if ($row['animal'] === 'cat') $catVotes = $row['count'];
  if ($row['animal'] === 'dog') $dogVotes = $row['count'];
}

echo json_encode(['success' => true, 'catVotes' => $catVotes, 'dogVotes' => $dogVotes]);

$conn->close();
?>
