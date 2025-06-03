function showTrend(id) {
    document.querySelectorAll('.trend-chart').forEach(section => {
    section.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}
const chartMap = {
    trends: {
        cat: "picture/1.png",
        dog: "picture/2.png"
    },
    instagram: {
        cat: "picture/3.png",
        dog: "picture/4.png"
    }
};

function updateChart() {
    const platform = document.getElementById('platformSelect').value;
    const region = document.getElementById('regionSelect').value;
    const chartUrl = chartMap[platform][region];
    document.getElementById('chartContainer').innerHTML =
        `<img class="chart-image" src="${chartUrl}" alt="文字雲圖" />`;
}
    
document.getElementById('menuButton').addEventListener('click', function() {
  const menuList = document.getElementById('menuList');
  menuList.style.display = (menuList.style.display === 'none') ? 'block' : 'none';
});

window.onload = updateChart; // 預設載入一次