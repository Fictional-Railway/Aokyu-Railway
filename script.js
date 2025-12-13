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

    // --- モバイルメニューのトグル（ロゴが隠れないように修正） ---
    const menuBtn = document.getElementById('menuBtn');
    const navList = document.querySelector('.nav-list');
    const header = document.querySelector('header');
    const statusBar = document.getElementById('statusBar');

    menuBtn.addEventListener('click', () => {
        // ヘッダーとステータスバーの現在の高さを取得
        const offsetTop = header.offsetHeight + statusBar.offsetHeight;

        if (navList.style.display === 'flex') {
            // メニューを閉じる
            navList.style.display = 'none';
            menuBtn.querySelector('i').className = "fa-solid fa-bars";
        } else {
            // メニューを開く
            navList.style.display = 'flex';
            navList.style.flexDirection = 'column';
            
            // ★修正点: topの位置を固定ヘッダー+ステータスバーの下に設定★
            navList.style.position = 'fixed'; // fixedに変更してスクロールしても付いてくるように
            navList.style.top = `${offsetTop}px`; // 計算した高さを適用
            
            navList.style.left = '0';
            navList.style.width = '100%';
            navList.style.background = '#fff';
            navList.style.padding = '0'; // CSSの調整でpaddingは削除
            navList.style.boxShadow = '0 5px 5px rgba(0,0,0,0.1)';
            navList.style.zIndex = '900'; // 固定されたヘッダー/ステータスバーの下
            
            menuBtn.querySelector('i').className = "fa-solid fa-xmark";
        }
    });

    // --- 運行情報のシミュレーション（ランダムでたまに遅延する演出） ---
    // ※以下、ご提供いただいたコードと同じです
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