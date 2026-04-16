// 헤더 - 좌측 아이콘 클릭시 새로고침
const reloadIcon = document.getElementById('reload-icn');
reloadIcon.addEventListener("click", (e) => {
    location.reload(true);
});