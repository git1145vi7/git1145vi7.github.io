function showCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以+1
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const formattedTime = `${hours} : ${minutes} : ${seconds}`;
    const formattedDate = `${year} 年 ${month} 月 ${day} 日 `;
    
    document.getElementById('currentTime').textContent = formattedTime;
    document.getElementById('currentDate').textContent = formattedDate;
}
// 页面加载完成后立即显示当前日期时间
window.onload = showCurrentDateTime;
// 每秒更新一次日期时间显示
setInterval(showCurrentDateTime, 1000);

// 代码由 Copilot 编写。 ✌️