import { expenses } from "../mockData.js";
import { formatAmount, getAmountClass, fillDetailModal } from "./common.js";


if (!localStorage.getItem("expenseData")) {
    localStorage.setItem("expenseData", JSON.stringify(expenses));
}

export const getExpenseData = () => {
    return JSON.parse(localStorage.getItem("expenseData"));
};

export const renderAllItems = (data) => {
    const listBody = document.querySelector('#budget-list-body');
    if (!listBody) return;

    listBody.innerHTML = '';

    // 행을 생성
    data.forEach(item => {
        renderItem(item);
    });
};

export const renderItem = (item) => {
    const listBody = document.querySelector('#budget-list-body');
    const template = document.querySelector('#budget-row-template');
    const rowClone = template.content.cloneNode(true);

    const titleCell = rowClone.querySelector('.list-title');
    const amountCell = rowClone.querySelector('.list-amount');
    const dateCell = rowClone.querySelector('.list-date');
    const categoryCell = rowClone.querySelector('.list-category');
    const paymentCell = rowClone.querySelector('.list-payment');

    // 텍스트 내용 채우기
    titleCell.textContent = item.title;
    dateCell.textContent = item.date;
    categoryCell.textContent = item.category;
    paymentCell.textContent = item.payment;

    amountCell.textContent = formatAmount(item.amount);
    amountCell.classList.add(getAmountClass(item.amount));

    titleCell.addEventListener('click', () => {
        fillDetailModal(item);
        document.querySelector('#detail-modal').showModal();
    });

    listBody.appendChild(rowClone);
};