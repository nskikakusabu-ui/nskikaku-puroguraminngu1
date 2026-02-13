// --- 学習カリキュラム（日本語・1スライド1コード徹底） ---
const slides = [
    // 0. 導入
    {
        title: "はじめに",
        content: `
            <p>N.S企画のプログラミング講座へようこそ。</p>
            <p>このコースでは、<span class="highlight">Python（パイソン）</span>という言語を使って、自分の思い通りにコンピュータを動かす方法を学びます。</p>
            <p>難しいことはありません。「説明を読む」→「コードを書く」→「実行する」。この繰り返しで、必ずできるようになります。</p>
        `
    },
    // 1. print基礎
    {
        title: "文字を表示する",
        content: `
            <p>まずは、画面に文字を表示させる命令 <span class="highlight">print (プリント)</span> を使います。</p>
            <div class="code-box">print("こんにちは")</div>
            <p>カッコ <code>( )</code> の中に、表示したい言葉をダブルクォーテーション <code>" "</code> で囲んで入れます。</p>
            <div class="mission-box">
                <span class="mission-title">演習課題</span>
                エディタに <code>print("Hello")</code> と入力して、実行ボタンを押してください。
            </div>
        `,
        mission: { key: ['print', '"Hello"'], success: "正解！英語のあいさつが表示されました。", advice: "printの後のカッコと、Helloを囲むチョンチョン(\")を忘れずに。" }
    },
    // 2. 全角注意
    {
        title: "エラーの正体（全角と半角）",
        content: `
            <p>プログラミングで一番多い失敗は<span class="highlight">「全角文字」</span>を使ってしまうことです。</p>
            <div class="code-box" style="color:#e74c3c;">× ｐｒｉｎｔ（） ← 全角はダメ！</div>
            <div class="code-box" style="color:#27ae60;">◎ print()       ← 半角ならOK！</div>
            <p>日本語入力モードのままコードを書くと動きません。必ず「半角英数」モードに切り替えてください。</p>
            <div class="mission-box">
                <span class="mission-title">演習課題</span>
                半角で <code>print(1234)</code> と入力してください。（数字には " " は不要です）
            </div>
        `,
        mission: { key: ['print', '1234'], success: "正解！数字の出力成功です。", advice: "全角になっていませんか？ 半角で print(1234) です。" }
    },
    // 3. 計算
    {
        title: "計算させてみよう",
        content: `
            <p>コンピュータは計算が得意です。以下の記号を使います。</p>
            <ul>
                <li>足し算： <code>+</code></li>
                <li>引き算： <code>-</code></li>
                <li>掛け算： <code>*</code> (アスタリスク)</li>
                <li>割り算： <code>/</code> (スラッシュ)</li>
            </ul>
            <div class="mission-box">
                <span class="mission-title">演習課題：計算システム</span>
                500円の商品を8個買った値段を計算します。<br>
                <code>print(500 * 8)</code> と入力してください。
            </div>
        `,
        mission: { key: ['print', '500', '*', '8'], success: "4000と表示されました。正解です！", advice: "掛け算は × ではなく * を使います。" }
    },
    // 4. 分岐点
    {
        title: "コース選択",
        type: "branch",
        content: `
            <p>基本操作は完璧です。ここからは、作りたいシステムを選んで実践練習を行います。</p>
            <p>下のボタンから好きなコースを選んでください。</p>
            <div style="display:flex; flex-direction:column; gap:10px; margin-top:20px;">
                <button class="nav-btn" onclick="setTrack('calc')">🧮 自動計算システムを作る</button>
                <button class="nav-btn" style="border-color:#e67e22; color:#e67e22;" onclick="setTrack('game')">👾 ゲームを動かすプログラムを作る</button>
                <button class="nav-btn" style="border-color:#9b59b6; color:#9b59b6;" onclick="setTrack('todo')">📋 TODOリスト(社内ツール)を作る</button>
            </div>
        `
    },
    // --- トラックA：計算 ---
    {
        id: "track-calc",
        title: "実践：割引計算",
        content: `
            <p>【計算システム開発】</p>
            <p>2000円のランチが20%OFF（0.8倍）になった時の価格を計算します。</p>
            <div class="mission-box">
                <span class="mission-title">演習課題</span>
                <code>print(2000 * 0.8)</code> を実行して確認してください。
            </div>
        `,
        mission: { key: ['print', '2000', '*', '0.8'], success: "1600.0円。正解です！", advice: "小数は . (ドット)を使います。" }
    },
    // --- トラックB：ゲーム ---
    {
        id: "track-game",
        title: "実践：キャラクター操作",
        visual: true,
        content: `
            <p>【ゲーム開発】</p>
            <p>右の画面の<span style="color:red; font-weight:bold;">●</span>を動かします。</p>
            <p>命令：<code>move(横, 縦)</code></p>
            <p>まずは障害物を避けるため、右へ大きく移動させましょう。</p>
            <div class="mission-box">
                <span class="mission-title">演習課題</span>
                <code>move(200, 50)</code> と入力して実行してください。
            </div>
        `,
        mission: { key: ['move', '200', '50'], success: "移動成功！壁を回避しました。", advice: "move(200, 50) と入力してください。" }
    },
    {
        id: "track-game-2",
        title: "実践：ゴールへ",
        visual: true,
        content: `
            <p>【ゲーム開発】</p>
            <p>続けてゴールへ向かいます。ゴールは右下にあります。</p>
            <div class="mission-box">
                <span class="mission-title">演習課題</span>
                <code>move(200, 150)</code> と入力してゴールしてください！
            </div>
        `,
        mission: { key: ['move', '200', '150'], success: "ゴール！！ゲームプログラム完成です！", advice: "座標を変えて調整しましょう。" }
    },
    // --- トラックC：TODO ---
    {
        id: "track-todo",
        title: "実践：データ追加",
        content: `
            <p>【社内ツール開発】</p>
            <p>リスト（配列）にデータを追加する <code>append</code> (追加) 命令を使います。</p>
            <div class="code-box">todos.append("会議")</div>
            <div class="mission-box">
                <span class="mission-title">演習課題</span>
                リスト <code>todos</code> に "日報" を追加してください。<br>
                <code>todos.append("日報")</code>
            </div>
        `,
        mission: { key: ['todos', 'append', '"日報"'], success: "リスト更新完了。データが追加されました。", advice: "todos.append(\"文字\") の形です。" }
    },
    // 修了
    {
        title: "コース修了",
        content: `
            <h3 style="color:#27ae60; text-align:center;">おめでとうございます！</h3>
            <p>これでPython体験コースの全工程が完了しました。</p>
            <p>あなたが今日書いたコードは、実際のエンジニアが書くコードと全く同じものです。</p>
            <p>N.S企画では、さらに本格的なWebサイト作成コースなども用意しています。</p>
            <div style="text-align:center; margin-top:30px;">
                <button class="nav-btn primary" onclick="location.reload()">トップへ戻る</button>
            </div>
        `
    }
];

// --- 制御システム ---
let currentIdx = 0;
let progress = 0;

window.onload = () => {
    // 日付設定
    document.getElementById("header-date").innerText = new Date().toLocaleDateString();
    
    // ロード時に進捗復元（簡易版）
    const saved = localStorage.getItem("ns_prog");
    if(saved) {
        document.getElementById("prog-val").innerText = saved;
        document.getElementById("bar-fill").style.width = saved + "%";
    }
};

function startLearning() {
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("learning-screen").classList.remove("hidden");
    renderSlide();
}

function goHome() {
    if(confirm("ホームに戻りますか？")) {
        location.reload();
    }
}

function renderSlide() {
    const s = slides[currentIdx];
    
    // スライド内容更新
    document.getElementById("chapter-title").innerText = `第 ${currentIdx + 1} 章： ${s.title}`;
    document.getElementById("slide-content").innerHTML = `<h2>${s.title}</h2>${s.content}`;
    
    // ボタン制御
    document.getElementById("btn-prev").disabled = (currentIdx === 0);
    const nextBtn = document.getElementById("btn-next");
    
    // 分岐ページなどの制御
    if(s.type === "branch" || s.mission) {
        nextBtn.style.display = "none"; // 課題クリアか選択まで進めない
    } else {
        nextBtn.style.display = "inline-block";
        nextBtn.disabled = false;
    }

    // プレビュー表示
    const visual = document.getElementById("visual-monitor");
    if(s.visual) visual.classList.remove("hidden");
    else visual.classList.add("hidden");

    // ステータスリセット
    resetStatus();
}

function moveSlide(dir) {
    currentIdx += dir;
    renderSlide();
}

function setTrack(trackName) {
    const idx = slides.findIndex(s => s.id === "track-" + trackName);
    if(idx !== -1) {
        currentIdx = idx;
        renderSlide();
    }
}

function resetStatus() {
    const statusPanel = document.getElementById("status-panel");
    const statusText = document.getElementById("status-text");
    const icon = document.querySelector(".status-icon");

    statusPanel.className = "status-neutral";
    statusText.innerText = "課題に取り組んでください";
    icon.innerText = "📝";
    
    document.getElementById("console-output").innerText = "> 待機中...";
    document.getElementById("console-output").style.color = "#bdc3c7";
    document.getElementById("code-editor").value = "";
}

function checkAnswer() {
    const s = slides[currentIdx];
    const code = document.getElementById("code-editor").value;
    const consoleOut = document.getElementById("console-output");
    const advice = document.getElementById("advice-msg");
    const statusPanel = document.getElementById("status-panel");
    const statusText = document.getElementById("status-text");
    const icon = document.querySelector(".status-icon");

    if(!s.mission) return; // 課題なしページ

    // 判定ロジック
    const isCorrect = s.mission.key.every(k => code.includes(k));

    if(isCorrect) {
        // 成功演出
        statusPanel.className = "status-ok";
        statusText.innerText = "正解！素晴らしい！";
        icon.innerText = "⭕";
        
        consoleOut.style.color = "#2ecc71";
        consoleOut.innerText = `> ${code}\n> [実行成功] Program exited with code 0.`;
        advice.innerHTML = `<span style="color:#27ae60; font-weight:bold;">${s.mission.success}</span>`;
        
        // 進捗保存
        progress = Math.round(((currentIdx + 1) / slides.length) * 100);
        localStorage.setItem("ns_prog", progress);

        // ゲーム演出
        if(s.visual) {
            const player = document.getElementById("player");
            const match = code.match(/move\((\d+),\s*(\d+)\)/);
            if(match) {
                player.style.left = match[1] + "px";
                player.style.top = match[2] + "px";
            }
        }

        // 次へボタン出現
        document.getElementById("btn-next").style.display = "inline-block";

    } else {
        // 失敗演出
        statusPanel.className = "status-ng";
        statusText.innerText = "エラー！修正してください";
        icon.innerText = "❌";
        
        consoleOut.style.color = "#e74c3c";
        consoleOut.innerText = `> ${code}\n> [Syntax Error] コマンドが見つかりません。`;
        advice.innerHTML = `<span style="color:#e74c3c; font-weight:bold;">ヒント：</span> ${s.mission.advice}`;
    }
}