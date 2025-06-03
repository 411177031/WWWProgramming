function vote(animal) {
  fetch('vote.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `vote=${animal}`
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      updateResult(data.catVotes, data.dogVotes);
    } else {
      alert("投票失敗：" + data.error);
    }
  });
}

function updateResult(catVotes, dogVotes) {
  catVotes = Number(catVotes);
  dogVotes = Number(dogVotes);

  const total = dogVotes + catVotes;
  const catPercent = total ? Math.round((catVotes / total) * 100) : 0;
  const dogPercent = total ? 100 - catPercent : 0;

  // 更新貓派按鈕
  document.querySelector('#catButton span').textContent =
    `我挺貓派 ${catPercent}%`;

  // 更新狗派按鈕
  document.querySelector('#dogButton span').textContent =
    `我挺狗派 ${dogPercent}%`;

  // 更新總票數
  document.getElementById('voteResult').textContent =
    `總票數：${total}`;

  
}

window.onload = function () {
  fetch('get_votes.php')
    .then(res => res.json())
    .then(data => {
      updateResult(data.catVotes, data.dogVotes);
    });
};
