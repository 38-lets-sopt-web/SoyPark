import "./init.js";
import "./header.js";
import "./modal.js";
import { renderAllItems } from "./list.js";
import { getStorageData } from "./storage.js";
import "./filter.js";

const data = getStorageData();
renderAllItems(data);