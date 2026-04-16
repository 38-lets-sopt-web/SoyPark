import { formatAmount, getAmountClass, fillDetailModal } from "./common.js";
import { deleteFromStorage, getStorageData } from "./storage.js";

const deleteBtn = document.getElementById('btn-delete');

if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
        const checkedInputs = document.querySelectorAll('.list-check:checked');

        if (checkedInputs.length === 0){
            alert("삭제할 항목을 선택해주세요.");
            return;
        }

        const idsToDelete = Array.from(checkedInputs).map(input => input.dataset.id);

        deleteFromStorage(idsToDelete);

        // 화면 업데이트
        const updatedData = getStorageData();
        renderAllItems(updatedData);
    })
}


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
    const checkbox = rowClone.querySelector('.list-check');

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

    if (checkbox) {
        checkbox.setAttribute('data-id', item.id);
    }

    listBody.appendChild(rowClone);
};