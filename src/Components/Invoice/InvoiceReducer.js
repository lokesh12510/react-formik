// import { ActionType, InvoiceState, InvoiceInfo, ItemList } from "./type";

// export const InvoiceReducer = (
//   previousData: InvoiceState,
//   action: InvoiceInfo
// ) => {
//   const { type, payload } = action;
//   const { field, value } = payload;

//   switch (type) {
//     case ActionType.INVOICE_INFO:
//       return {
//         ...previousData,
//         invoiceInfo: {
//           ...previousData.invoiceInfo,
//           [field]: value,
//         },
//       };

//     default:
//       return previousData;
//   }
// };

// const InitialItemData = {
//   id: new Date().getDate() * Math.floor(Math.random() * 1000),
//   start_date: "",
//   end_date: "",
//   credit: "",
//   active: false,
//   item_num: "",
//   desc: "",
//   unit: "",
//   price: "",
//   gst_code: "",
//   amount: "",
// };

// export const ItemReducer = (previousData: InvoiceState, action: ItemList) => {
//   const { type, payload } = action;
//   const { field, value, index } = payload;
//   const values = [...previousData.itemList];

//   switch (type) {
//     case ActionType.UPDATE_ITEM_LIST:
//       values[index][field] = value;
//       return [...values];

//     case ActionType.ADD_ITEM_LIST:
//       return [...values, InitialItemData];

//     case ActionType.REMOVE_ITEM_LIST:
//       values.splice(index, 1);
//       return [...values];

//     default:
//       return previousData;
//   }
// };
export const InvoiceReducer = () => {};
