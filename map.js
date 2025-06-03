function showTrend(id) {
    document.querySelectorAll('.trend-chart').forEach(section => {
    section.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}
const chartMap = {
    google: {
        cat: "https://flo.uri.sh/visualisation/23524677/embed",
        dog: "https://flo.uri.sh/visualisation/23524526/embed"
    },
    youtube: {
        cat: "https://flo.uri.sh/visualisation/23537204/embed",
        dog: "https://flo.uri.sh/visualisation/23537211/embed"
    }
};

function updateChart() {
    const platform = document.getElementById('platformSelect').value;
    const region = document.getElementById('regionSelect').value;
    const chartUrl = chartMap[platform][region];
    document.getElementById('chartContainer').innerHTML =
        `<iframe class="flourish-chart" src="${chartUrl}" frameborder="0"
        sandbox="allow-same-origin allow-scripts allow-presentation"></iframe>`;
}
    
document.getElementById('menuButton').addEventListener('click', function() {
  const menuList = document.getElementById('menuList');
  menuList.style.display = (menuList.style.display === 'none') ? 'block' : 'none';
});

window.onload = updateChart; // 預設載入一次
