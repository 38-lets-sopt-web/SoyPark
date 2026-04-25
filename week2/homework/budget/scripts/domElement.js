export const LIST_SELECTORS = {
    item: {
        title: '.list-title',
        amount: '.list-amount',
        date: '.list-date',
        category: '.list-category',
        payment: '.list-payment',
        check: '.list-check',
    }
};

export const elements = {
    filter: {
        form: document.querySelector('.filter-form'),
        name: document.getElementById('filter-name'),
        type: document.getElementById('filter-type'),
        category: document.getElementById('filter-category'),
        payment: document.getElementById('filter-payment'),
        button: {
            apply: document.getElementById('btn-apply'),
            reset: document.getElementById('btn-reset'),
        },
        sort: document.getElementById('sort-order'),
    },

    template: {
        selects: document.querySelectorAll('select[data-options-template]'),
        row: document.getElementById('budget-row-template'),
    },

    list: {
        body: document.querySelector('#budget-list-body'),
        checkAll: document.querySelector('#check-all'),
        deleteBtn: document.getElementById('btn-delete'),
        getCheckboxes: () => document.querySelectorAll('.list-check'),
        getCheckedCheckboxes:() => document.querySelectorAll('.list-check:checked'),
    },

    modal: {
        dialogs: document.querySelectorAll('dialog'),
        add: document.getElementById('add-modal'),
        detail: document.getElementById('detail-modal'),
        openButtons: document.querySelectorAll('[data-target]'),
        closeButton: document.querySelectorAll('.btn-close'),
        detailValues: document.querySelectorAll('#detail-modal .detail-value'),
    },

    form: {
        add: document.querySelector('.modal-form'),
        inputs: {
            amount: document.getElementById('add-amount'),
            priceType: document.getElementById('add-price-type'),
            title: document.getElementById('add-title'),
            date: document.getElementById('add-date'),
            category: document.getElementById('add-category'),
            payment: document.getElementById('add-payment'),
        },
    },

    header: {
        reloadIcon: document.getElementById('reload-icn'),
    }
};