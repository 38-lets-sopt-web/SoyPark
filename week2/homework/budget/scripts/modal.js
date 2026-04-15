const addModal = document.getElementById('add-modal');
const detailModal = document.getElementById('detail-modal');
const openDetailBtn = document.getElementById('detail-btn');
const openAddBtn = document.getElementById('add-btn'); 
const closeAddBtn = document.querySelector('.btn-close');

// 열기
openAddBtn.addEventListener('click', () => {
    addModal.classList.remove('hidden');
});

openDetailBtn.addEventListener('click', () => {
    detailModal.classList.remove('hidden');
});

// 닫기
closeAddBtn.addEventListener('click', () => {
    addModal.classList.add('hidden');
});