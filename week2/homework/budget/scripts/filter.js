import { getStorageData } from "./storage.js";
import { renderAllItems } from "./list.js";

// 검색 필터 및 정렬
const searchFilter = () => {
    const allData = getStorageData();
    
    // 현재 입력된 필터값
    const nameValue = document.getElementById('filter-name').value;
    const typeValue = document.getElementById('filter-type').value;
    const categoryValue = document.getElementById('filter-category').value;
    const paymentValue = document.getElementById('filter-payment').value;

    // 정렬
    const sortOrder = document.getElementById('sort-order').value;

    // 필터링
    const filteredData = allData.filter(item => {
        const matchType = (typeValue === 'all') || 
            (typeValue === '지출' && item.amount < 0) ||
            (typeValue === '수익' && item.amount > 0);

        // 제목이 포함되어 있거나 빈칸이면 통과
        const matchName = item.title.includes(nameValue);

        // 카테고리가 'all'이거나 값이 일치하면 통과
        const matchCategory = (categoryValue === 'all' || item.category === categoryValue);
        const matchPayment = 
            (paymentValue === 'all' || 
            (paymentValue === '카드' && item.payment.includes('카드')) ||  // 신용, 체크 다 포함
            (item.payment === paymentValue));
        
        return matchName && matchType && matchCategory && matchPayment;
    });

    filteredData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (sortOrder === 'asc') {
            return dateA - dateB; // 오름차순
        } else {
            return dateB - dateA; // 내림차순
        }
    });

    renderAllItems(filteredData);
};

// 적용 버튼
const applyBtn = document.getElementById('btn-apply');
applyBtn.addEventListener('click', (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지
    searchFilter();
});

// 초기화 버튼 
const resetBtn = document.getElementById('btn-reset');
resetBtn.addEventListener('click', () => {
    document.querySelector('.filter-form').reset(); // 폼 비우기
    renderAllItems(getStorageData()); 
});


// 정렬 바로 반영
const sortSelect = document.getElementById('sort-order');
if (sortSelect) {
    sortSelect.addEventListener('change', () => {
        searchFilter(); 
    });
}