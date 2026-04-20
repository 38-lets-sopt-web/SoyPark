import { formatAmount, getAmountClass, fillDetailModal } from "./utils.js";
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

// 전체 선택
const checkAllItems = () => {
    const checkAll = document.querySelector('#check-all');

    if (checkAll) {
        checkAll.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            const allCheckboxes = document.querySelectorAll('.list-check');
            
            // 화면에 있는 모든 개별 체크박스 상태를 상단 버튼과 동기화
            allCheckboxes.forEach(checkbox => {
                checkbox.checked = isChecked;
            });
        });
    }
}



export const renderAllItems = (data) => {
    const listBody = document.querySelector('#budget-list-body');
    const checkAll = document.querySelector('#check-all');
    const tr = document.createElement("tr");
    if (!listBody) return;

    listBody.innerHTML = '';
    if (checkAll) checkAll.checked = false;

    // 행을 생성
    data.forEach(item => renderItem(item));

    // 총 금액 계산
    const total = data.reduce((acc, cur) => acc + Number(cur.amount), 0);

    tr.style.backgroundColor = 'var(--color-light-accent)';
    tr.innerHTML = `
        <td></td>
        <td>합계</td>
        <td colspan="1"></td>
        <td class="${getAmountClass(total)}">
            ${formatAmount(total)}
        </td>
        <td colspan="2"></td>
    `;

    listBody.appendChild(tr);
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

        checkAllItems();
    }

    listBody.appendChild(rowClone);
};