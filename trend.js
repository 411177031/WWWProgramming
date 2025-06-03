function showTrend(id) {
    document.querySelectorAll('.trend-chart').forEach(section => {
    section.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

const chartMap = {
    google: {
        global: "https://flo.uri.sh/visualisation/23010225/embed",
        taiwan: "https://flo.uri.sh/visualisation/23010212/embed",
        japan: "https://flo.uri.sh/visualisation/23010255/embed",
        india: "https://flo.uri.sh/visualisation/23010244/embed"
    },
    youtube: {
        global: "https://flo.uri.sh/visualisation/22885869/embed",
        taiwan: "https://flo.uri.sh/visualisation/22993529/embed",
        japan: "https://flo.uri.sh/visualisation/22993712/embed",
        india: "https://flo.uri.sh/visualisation/23009020/embed"
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
