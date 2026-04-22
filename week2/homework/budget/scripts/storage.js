import { expenses } from "../mockData.js"; 

const STORAGE_KEY = "expenseData";

// storage 비어있을 때만 목데이터 저장
export const initStorage = () => {
    if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    }
};

// 데이터 불러오기
export const getStorageData = () => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

// 데이터 추가 저장
export const saveToStorage = (newItem) => {
    const currentData = getStorageData();
    currentData.push(newItem);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
};

// 데이터 삭제
export const deleteFromStorage = (selectedIds) => {
    const currentData = getStorageData();
    // 선택 id 배열에 포함 안 된 데이터 거르기
    const newList = currentData.filter(item => !selectedIds.includes(item.id.toString()));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
};

initStorage();