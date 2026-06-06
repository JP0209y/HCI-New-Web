 const end = new Date();
  end.setDate(end.getDate() + 37);
  end.setHours(end.getHours() + 18);
  end.setMinutes(end.getMinutes() + 58);
  end.setSeconds(end.getSeconds() + 13);

  function timer() {
    const el = document.getElementById("countdown");
    if (!el) return;

    const diff = end - new Date();
    if (diff <= 0) {
      el.textContent = "Ended";
      return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    el.textContent =
      `${d}d : ${String(h).padStart(2,'0')}h : ${String(m).padStart(2,'0')}m : ${String(s).padStart(2,'0')}s`;
  }

  timer();
  setInterval(timer, 1000);