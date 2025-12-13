document.addEventListener('DOMContentLoaded', () => {
    
    // --- 時計の更新機能 ---
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const timeString = `${hours}:${minutes}`;
        document.getElementById('clock').textContent = timeString;
    }
    setInterval(updateClock, 1000); // 1秒ごとに更新
    updateClock(); // 初回実行

    // --- モバイルメニューのトグル（簡易版） ---
    const menuBtn = document.getElementById('menuBtn');
    const navList = document.querySelector('.nav-list');

    menuBtn.addEventListener('click', () => {
        // CSSでdisplay:flexなどを制御するクラスを付け替えるのが一般的ですが、
        // ここでは簡易的にJSでdisplayプロパティを操作します。
        if (navList.style.display === 'flex') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'flex';
            navList.style.flexDirection = 'column';
            navList.style.position = 'absolute';
            navList.style.top = '70px';
            navList.style.left = '0';
            navList.style.width = '100%';
            navList.style.background = '#fff';
            navList.style.padding = '20px';
            navList.style.boxShadow = '0 5px 5px rgba(0,0,0,0.1)';
            navList.style.zIndex = '100';
        }
    });

    // --- 運行情報のシミュレーション（ランダムでたまに遅延する演出） ---
    // ※実際はサーバーからJSONを取得するなどの処理になります。
    const statusText = document.getElementById('statusText');
    const statusIcon = document.querySelector('.status-content i');
    const statusContent = document.querySelector('.status-content');
    
    // 5%の確率で「遅れ」を表示する遊び心（リロードすると変わるかも）
    const randomStatus = Math.random();
    
    if (randomStatus < 0.05) {
        statusText.textContent = "大雪のため 一部列車に遅れが出ています";
        statusText.style.color = "#d9534f"; // 赤
        statusIcon.className = "fa-solid fa-triangle-exclamation";
        statusContent.style.color = "#d9534f";
    }

});