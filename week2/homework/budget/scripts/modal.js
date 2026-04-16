import { formatAmount, getAmountClass, fillDetailModal } from "./common.js";

const addModal = document.getElementById('add-modal');
const addForm = document.querySelector('.modal-form');

// 모달 열기
const openModal = (modalId) => {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
        targetModal.showModal();
    }
};

const modalOpenButtons = document.querySelectorAll('[data-target]');

modalOpenButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-target');
        openModal(modalId);
    });
});

// 모달 닫기 (X 버튼)
document.querySelectorAll('.btn-close').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('dialog').close());
});

document.querySelectorAll('dialog').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) { // 클릭 영역이 backdrop인지 확인해서 이벤트 버블링 차단
            backdrop.close();
        }
    });
});


/* Modal - form */
const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지

    const amountInput = document.querySelector('input[type="number"]').value;
    const type = document.getElementById('add-price-type').value;

    // 입력 데이터 객체 
    const newItem = {
        id: Date.now(),
        title: document.querySelector('.input-group input[type="text"]').value,
        amount: type === "minus" ? -Number(amountInput) : Number(amountInput),
        date: document.querySelector('input[type="date"]').value,
        category: document.getElementById('add-category').value,
        payment: document.getElementById('add-payment').value,
    };

    // console.log(newItem);

    // 필드 확인 유효성 검사
    if (!newItem.title || !newItem.amount || !newItem.date) {
        alert("모든 내용을 입력해주세요!");
        return;
    }

    renderItem(newItem);
    // todo: 로컬 스토리지 저장 함수 추가 

    // 폼 초기화
    addForm.reset();

    // 모달 닫기
    addModal.close();
}

if (addForm) {
    addForm.addEventListener('submit', handleSubmit);
}

export const renderItem = (item) => {
    const listBody = document.querySelector('#budget-list-body');
    const template = document.querySelector('#budget-row-template');
    
    // 템플릿 복사
    const rowClone = template.content.cloneNode(true);

    const titleCell = rowClone.querySelector('.list-title');
    const amountCell = rowClone.querySelector('.list-amount');
    const dateCell = rowClone.querySelector('.list-date');
    const categoryCell = rowClone.querySelector('.list-category');
    const paymentCell = rowClone.querySelector('.list-payment');

    titleCell.textContent = item.title;
    dateCell.textContent = item.date;
    categoryCell.textContent = item.category;
    paymentCell.textContent = item.payment;

    amountCell.textContent = formatAmount(item.amount);
    amountCell.classList.add(getAmountClass(item.amount));

    // 상세 모달 연결
    titleCell.addEventListener('click', () => {
        fillDetailModal(item);
        document.querySelector('#detail-modal').showModal();
    });

    listBody.appendChild(rowClone);
};