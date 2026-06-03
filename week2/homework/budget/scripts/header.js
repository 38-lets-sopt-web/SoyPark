import { elements } from "./domElement.js";

// 좌측 아이콘 클릭시 새로고침
elements.header.reloadIcon.addEventListener("click", () => {
    location.reload();
});