const addModal = document.getElementById('add-modal');
const detailModal = document.getElementById('detail-modal');
const openDetailBtn = document.getElementById('detail-btn');
const openAddBtn = document.getElementById('add-btn'); 
const closeAddBtn = document.querySelector('.btn-close');

// 열기
openAddBtn.addEventListener('click', () => {
    addModal.showModal();
});

openDetailBtn.addEventListener('click', () => {
    detailModal.showModal();
});

// 닫기
closeAddBtn.addEventListener('click', () => {
    addModal.close();
});