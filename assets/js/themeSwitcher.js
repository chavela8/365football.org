document.addEventListener("DOMContentLoaded", function(){
    const themeSwitcher = document.getElementById("themeSwitcher");
    // Инициализация: устанавливаем тему из localStorage или по умолчанию (темная)
    let currentTheme = localStorage.getItem('theme') || "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    
    if (themeSwitcher) {
        themeSwitcher.addEventListener("click", function(){
            currentTheme = (currentTheme === "dark") ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", currentTheme);
            localStorage.setItem('theme', currentTheme);
        });
    }
}); 