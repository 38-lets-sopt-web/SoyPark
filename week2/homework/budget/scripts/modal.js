import { elements } from "./domElement.js";
import { renderAllItems } from "./list.js";
import { getStorageData, saveToStorage } from "./storage.js";

const addForm = elements.form.add;

// 모달 열기
const openModal = (modalId) => {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
        targetModal.showModal();
    }
};

elements.modal.openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-target');
        openModal(modalId);
    });
});

// 모달 닫기 (X 버튼)
elements.modal.closeButton.forEach(btn => {
    btn.addEventListener('click', () => btn.closest('dialog').close());
});

// 모달 닫기 (백드롭)
elements.modal.dialogs.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) { // 클릭 영역이 backdrop인지 확인해서 이벤트 버블링 차단
            backdrop.close();
        }
    });
});


/* Modal - form */
const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지

    const amountInput = elements.form.inputs.amount.value;
    const type = elements.form.inputs.priceType.value;

    // 입력 데이터 객체 
    const newItem = {
        id: Date.now(),
        title: elements.form.inputs.title.value,
        amount: type === "지출" ? -Number(amountInput) : Number(amountInput),
        date: elements.form.inputs.date.value,
        category: elements.form.inputs.category.value,
        payment: elements.form.inputs.payment.value,
    };

    // 필드 확인 유효성 검사
    if (!newItem.title || !newItem.amount || !newItem.date) {
        alert("모든 내용을 입력해주세요!");
        return;
    }

    saveToStorage(newItem);
    renderAllItems(getStorageData());

    // 폼 초기화
    addForm.reset();

    // 모달 닫기
    elements.modal.add.close();
}

if (addForm) {
    addForm.addEventListener('submit', handleSubmit);
}