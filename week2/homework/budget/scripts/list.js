import { formatAmount, getAmountClass, fillDetailModal } from "./utils.js";
import { deleteFromStorage, getStorageData } from "./storage.js";
import { elements, LIST_SELECTORS } from "./domElement.js";


export const handleDelete = () => {
    const checkedInputs = elements.list.getCheckedCheckboxes;
    
    if (checkedInputs.length === 0){
        alert("삭제할 항목을 선택해주세요.");
        return;
    }

    const idsToDelete = Array.from(checkedInputs).map(input => input.dataset.id);

    deleteFromStorage(idsToDelete);

    // 화면 업데이트
    const updatedData = getStorageData();
    renderAllItems(updatedData);
}


const deleteBtn = elements.list.deleteBtn;

if (deleteBtn) {
    deleteBtn.addEventListener('click', handleDelete);
}

// 전체 선택
const checkAllItems = () => {
    const checkAll = elements.list.checkAll;

    if (!checkAll) return;

    checkAll.addEventListener('change', (e) => {
        const isChecked = e.target.checked;

        // 화면에 있는 모든 개별 체크박스 상태를 전체 성택 상태와 동기화
        elements.list.getCheckboxes().forEach(checkbox => {
            checkbox.checked = isChecked;
        });
    });
}

checkAllItems();

const listBody = elements.list.body;

export const renderAllItems = (data) => {
    const checkAll = elements.list.checkAll;
    const tr = document.createElement("tr");
    if (!listBody) return;

    // 기존 목록, 전체 체크박스 초기화
    listBody.innerHTML = '';
    if (checkAll) checkAll.checked = false;

    // 저장된 모든 항목을 한 줄씩 리렌더링
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
    const template = elements.template.row;
    const rowClone = template.content.cloneNode(true);

    const titleCell = rowClone.querySelector(LIST_SELECTORS.item.title);
    const amountCell = rowClone.querySelector(LIST_SELECTORS.item.amount);
    const dateCell = rowClone.querySelector(LIST_SELECTORS.item.date);
    const categoryCell = rowClone.querySelector(LIST_SELECTORS.item.category);
    const paymentCell = rowClone.querySelector(LIST_SELECTORS.item.payment);
    const checkbox = rowClone.querySelector(LIST_SELECTORS.item.check);

    // 텍스트 내용 채우기
    titleCell.textContent = item.title;
    dateCell.textContent = item.date;
    categoryCell.textContent = item.category;
    paymentCell.textContent = item.payment;

    amountCell.textContent = formatAmount(item.amount);
    amountCell.classList.add(getAmountClass(item.amount));

    // 제목을 눌러 상세모달 열기
    titleCell.addEventListener('click', () => {
        fillDetailModal(item);
        elements.modal.detail.showModal();
    });

    if (checkbox) {
        checkbox.setAttribute('data-id', item.id);
    }

    listBody.appendChild(rowClone);
};