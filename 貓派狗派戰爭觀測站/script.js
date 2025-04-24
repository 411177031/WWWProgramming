let votes = { cat: 0, dog: 0 };

function vote(animal) {
  if (votes[animal] !== undefined) {
    votes[animal]++;
    updateVoteResult();
  }
}

function updateVoteResult() {
  const total = votes.cat + votes.dog;
  const catPercent = total === 0 ? 0 : Math.round((votes.cat / total) * 100);
  const dogPercent = total === 0 ? 0 : 100 - catPercent;

  document.getElementById("voteResult").textContent = `目前結果：🐱 ${catPercent}% vs. 🐶 ${dogPercent}%（總票數：${total}）`;
}

// 切換顯示的圖表區塊
function showChart(chartId) {
  const charts = document.querySelectorAll('.chart-section');
  charts.forEach(chart => {
    chart.style.display = chart.id === chartId ? 'block' : 'none';
  });
}

// 初始顯示第一張圖
window.onload = () => {
  showChart('trendChartSection');

  // 示意圖表初始化
  const ctx = document.getElementById('trendChart');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1月', '2月', '3月', '4月', '5月'],
      datasets: [
        {
          label: '貓咪搜尋熱度',
          data: [65, 59, 80, 81, 56],
          borderColor: 'rgba(255, 159, 64, 1)',
          fill: false
        },
        {
          label: '狗狗搜尋熱度',
          data: [28, 48, 40, 19, 86],
          borderColor: 'rgba(54, 162, 235, 1)',
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: '貓狗搜尋熱度時間趨勢'
        }
      }
    }
  });
};
