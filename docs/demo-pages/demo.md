<body class="flexy center gap padx">
    <div class="flexy center gap mary-auto">
        <h1 class="mart tgradient" style="
            animation: ess-bg-r2l 3s linear infinite;
        ">in simple words,</h1>
        <span class="flex center gap-small marr-big marb-small">
            <code class="snippet dead">HTML</code>
            <i class="icon material-icons-round">add</i>
            <code class="snippet dead">CSS</code>
            <i class="icon material-icons-round">add</i>
            <code class="snippet dead">JS</code>
        </span>
        <i class="icon material-icons-round tgradient" style="
            animation: ess-bg-r2l 3s linear infinite;">
            south
        </i>
        <img src="./favicon.ico" alt="ess" class="logo-big" style="animation: ess-pulse 1s ease infinite;">
    </div>
    <hr class="wmax-tab">
    <div class="flexy ai-center gap mary-auto">
        <span class="flex gap">
            <a id="copy-cmd" class="border action">
                <i class="icon material-icons-round swap">copy</i>
                <p class="label">npm</p>
            </a>
            <a target="_blank" href="https://github.com/asmingtm/ess" class="border">
                <i class="icon material-icons-round swap">launch</i>
                <p class="label">GitHub</p>
            </a>
        </span>
        <span class="mart-larger">
            <i class="info">by</i>
            <a href="https:/paicho.org" class="link">paicho.org</a>
            <i class="info">team</i>
        </span>
    </div>
    <script type="module">
        import ess from "/index.js";
        ess.snackbar.create("copiedSucess", "");
        ess.snackbar.create("copiedFailed", "");

        const npmCmd = "npm install github:asmingtm/ess";
        const copyCmd = document.getElementById('copy-cmd');

        copyCmd.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(npmCmd);
                ess.snackbar.show("copiedSucess");
            } catch (err) {
                console.error("Failed to copy:", err);
                ess.snackbar.show("copiedFailed");
            }
        });
    </script>
</body>