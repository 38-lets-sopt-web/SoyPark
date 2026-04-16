import { initSelectOptions } from "./init.js";
import "./main.js";
import "./modal.js";
import { getExpenseData, renderAllItems } from "./list.js";

initSelectOptions();

const currentData = getExpenseData();
renderAllItems(currentData);