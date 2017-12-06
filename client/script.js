let clicks = 0;
let autoclickersCount = 0;
let autoclickersPower = 2;
let lastSavedClicks = 0;

setInterval(updateClicksPerSecond, 1000);

function increase() {
    clicks += 1;
    updateClicksCount();
}

function addAutoClicker() {
    autoclickersCount += 1;
    document.getElementById("autoclickerCount").textContent = autoclickersCount;
    setInterval(autoclick, 1000);
}

function upgradeAutoClicker() {
    autoclickersPower += 2;
    document.getElementById("autoclickerPower").textContent = autoclickersPower;
}

function autoclick() {
    clicks += autoclickersPower;
    updateClicksCount();
}

function updateClicksCount() {
    document.getElementById("count").textContent = clicks;
}

function updateClicksPerSecond() {
    let clicksPerSecond = clicks - lastSavedClicks;
    lastSavedClicks = clicks;
    document.getElementById("cps").textContent = clicksPerSecond;
}