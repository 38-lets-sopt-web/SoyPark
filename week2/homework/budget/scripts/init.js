// 템플릿 초기화 함수
export function fillSelectOptions() {
    const templateSelects = document.querySelectorAll('select[data-options-template]');
    templateSelects.forEach(select => {
        const templateId = select.getAttribute('data-options-template');
        const template = document.getElementById(templateId);
        if (template) {
            select.appendChild(template.content.cloneNode(true));
        }
    });
}

fillSelectOptions();