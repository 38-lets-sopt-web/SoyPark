/*
list, modal에서 공통으로 쓰이는 로직 + 템플릿
*/

import { elements } from "./domElement.js";

// 템플릿 초기화 함수
export function fillSelectOptions() {
    elements.template.selects.forEach(select => {
        const templateId = select.getAttribute('data-options-template');
        const template = document.getElementById(templateId);
        if (template) {
            select.appendChild(template.content.cloneNode(true));
        }
    });
}

fillSelectOptions();

// 금액 포맷팅 (부호, 콤마)
export const formatAmount = (amount) => {
    const num = Number(amount);
    const isMinus = num < 0;
    const formatted = num.toLocaleString('ko-KR');
    return `${isMinus ? '' : '+'}${formatted}`;
};

// 금액 색상 추가
export const getAmountClass = (amount) => {
    return Number(amount) < 0 ? "expense" : "income";
};

// 상세 모달 데이터 채우기
export const fillDetailModal = (item) => {
    const detailModal = elements.modal.detail;
    if (!detailModal) return;

    const values = elements.modal.detailValues;
    if (values.length === 0) return;
    
    values[0].textContent = item.title;
    values[1].textContent = formatAmount(item.amount);
    values[1].className = `detail-value ${getAmountClass(item.amount)}`; // 색상 클래스 적용
    values[2].textContent = item.date;
    values[3].textContent = item.category;
    values[4].textContent = item.payment;
};