(function () {
    var mode = localStorage.getItem("mode");
    if (mode === "dark") document.documentElement.dataset.mode = 'dark';
    else if (mode === "light") document.documentElement.dataset.mode = 'light';
})();