// // import React, { useState } from 'react';
// // import InvoiceItem from '../components/InvoiceItem';
// // import InvoicePreview from '../components/InvoicePreview';
// // import { jsPDF } from 'jspdf';
// // import html2canvas from 'html2canvas';
// // import { Inter } from 'next/font/google';

// // const inter = Inter({ subsets: ['latin'] });

// // const InvoiceGenerator = () => {
// //     const [poNumber, setPoNumber] = useState('');
// //     const [performaInvoice, setPerformaInvoice] = useState('');
// //     const [invoiceItems, setInvoiceItems] = useState([]);
// //     const [showPreview, setShowPreview] = useState(false);

// //     const addInvoiceItem = () => {
// //         const newItem = { description: '', quantity: 0, unitPrice: 0 };
// //         setInvoiceItems([...invoiceItems, newItem]);
// //     };

// //     const removeInvoiceItem = (index) => {
// //         const updatedItems = [...invoiceItems];
// //         updatedItems.splice(index, 1);
// //         setInvoiceItems(updatedItems);
// //     };

// //     const togglePreview = () => {
// //         setShowPreview(!showPreview);
// //     };

// //     const generatePDF = () => {
// //         const invoiceContainer = document.getElementById('invoice-container');

// //         html2canvas(invoiceContainer).then((canvas) => {
// //             const imgData = canvas.toDataURL('image/png');
// //             const pdf = new jsPDF();
// //             pdf.addImage(imgData, 'PNG', 10, 10);
// //             pdf.save('invoice.pdf');
// //         });
// //     };

// //     return (
// //         <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
// //             <h1 className="text-4xl font-bold mb-8">Invoice Generator</h1>
// //             <form className="mb-8">
// //                 <div className="mb-4">
// //                     <label className="text-sm font-semibold">PO Number:</label>
// //                     <input
// //                         className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                         type="text"
// //                         value={poNumber}
// //                         onChange={(e) => setPoNumber(e.target.value)}
// //                     />
// //                 </div>

// //                 <div className="mb-4">
// //                     <label className="text-sm font-semibold">Performa Invoice:</label>
// //                     <input
// //                         className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                         type="text"
// //                         value={performaInvoice}
// //                         onChange={(e) => setPerformaInvoice(e.target.value)}
// //                     />
// //                 </div>

// //                 <table className="w-full mb-4">
// //                     <thead>
// //                         <tr>
// //                             <th className="border border-gray-300 px-2 py-1">Description</th>
// //                             <th className="border border-gray-300 px-2 py-1">Quantity</th>
// //                             <th className="border border-gray-300 px-2 py-1">Unit Price</th>
// //                             <th className="border border-gray-300 px-2 py-1"></th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {invoiceItems.map((item, index) => (
// //                             <InvoiceItem
// //                                 key={index}
// //                                 item={item}
// //                                 index={index}
// //                                 invoiceItems={invoiceItems}
// //                                 setInvoiceItems={setInvoiceItems}
// //                                 removeInvoiceItem={removeInvoiceItem}
// //                             />
// //                         ))}
// //                     </tbody>
// //                 </table>

// //                 <button
// //                     className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded-md"
// //                     type="button"
// //                     onClick={addInvoiceItem}
// //                 >
// //                     Add Item
// //                 </button>
// //             </form>

// //             <div id="invoice-container" className="mt-8">
// //                 <table className="w-full">
// //                     <thead>
// //                         <tr>
// //                             <th className="border border-gray-300 px-2 py-1">Description</th>
// //                             <th className="border border-gray-300 px-2 py-1">Quantity</th>
// //                             <th className="border border-gray-300 px-2 py-1">Unit Price</th>
// //                             <th className="border border-gray-300 px-2 py-1">Total</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {invoiceItems.map((item, index) => (
// //                             <tr key={index}>
// //                                 <td className="border border-gray-300 px-2 py-1">{item.description}</td>
// //                                 <td className="border border-gray-300 px-2 py-1">{item.quantity}</td>
// //                                 <td className="border border-gray-300 px-2 py-1">{item.unitPrice}</td>
// //                                 <td className="border border-gray-300 px-2 py-1">{item.quantity * item.unitPrice}</td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             </div>

// //             <div className="flex justify-between mt-8">
// //                 <button
// //                     className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
// //                     type="button"
// //                     onClick={togglePreview}
// //                 >
// //                     Preview
// //                 </button>

// //                 <button
// //                     className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md"
// //                     type="button"
// //                     onClick={generatePDF}
// //                 >
// //                     Generate PDF
// //                 </button>
// //             </div>

// //             {showPreview && (
// //                 <InvoicePreview
// //                     invoiceItems={invoiceItems}
// //                     togglePreview={togglePreview}
// //                 />
// //             )}
// //         </main>
// //     );
// // };

// // export default InvoiceGenerator;







// import React, { useState } from 'react';
// import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

// const InvoiceGenerator = () => {
//     const [address, setAddress] = useState('');
//     const [date, setDate] = useState('');
//     const [projectTitle, setProjectTitle] = useState('');
//     const [projectDescription, setProjectDescription] = useState('');
//     const [poNumber, setPoNumber] = useState('');
//     const [performaInvoice, setPerformaInvoice] = useState('');
//     const [invoiceItems, setInvoiceItems] = useState([
//         { description: '', quantity: 0, unitPrice: 0 },
//     ]);
//     const [showPreview, setShowPreview] = useState(false); // Track the visibility of the preview modal

//     const addInvoiceItem = () => {
//         setInvoiceItems([...invoiceItems, { description: '', quantity: 0, unitPrice: 0 }]);
//     };

//     const removeInvoiceItem = (index) => {
//         const updatedItems = [...invoiceItems];
//         updatedItems.splice(index, 1);
//         setInvoiceItems(updatedItems);
//     };

//     const generatePDF = async () => {
//         const invoiceContainer = document.getElementById('invoice-container');
//         const canvas = await html2canvas(invoiceContainer);

//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF();
//         pdf.addImage(imgData, 'PNG', 0, 0);
//         pdf.save('invoice.pdf');
//     };

//     const togglePreview = () => {
//         setShowPreview(!showPreview);
//     };

//     return (
//         <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
//             <h1 className="text-4xl font-bold mb-8">Invoice Generator</h1>

//             <form className="w-96">
//                 <div className="mb-4">
//                     <label className="text-sm font-semibold">Address:</label>
//                     <input
//                         className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                         type="text"
//                         value={address}
//                         onChange={(e) => setAddress(e.target.value)}
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="text-sm font-semibold">Date:</label>
//                     <input
//                         className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                         type="text"
//                         value={date}
//                         onChange={(e) => setDate(e.target.value)}
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="text-sm font-semibold">Project Title:</label>
//                     <input
//                         className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                         type="text"
//                         value={projectTitle}
//                         onChange={(e) => setProjectTitle(e.target.value)}
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="text-sm font-semibold">Project Description:</label>
//                     <input
//                         className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                         type="text"
//                         value={projectDescription}
//                         onChange={(e) => setProjectDescription(e.target.value)}
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="text-sm font-semibold">P.O. Number:</label>
//                     <input
//                         className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                         type="text"
//                         value={poNumber}
//                         onChange={(e) => setPoNumber(e.target.value)}
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="text-sm font-semibold">Performa Invoice:</label>
//                     <input
//                         className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                         type="text"
//                         value={performaInvoice}
//                         onChange={(e) => setPerformaInvoice(e.target.value)}
//                     />
//                 </div>

//                 <table className="w-full mb-4">
//                     <thead>
//                         <tr>
//                             <th className="border border-gray-300 px-2 py-1">Description</th>
//                             <th className="border border-gray-300 px-2 py-1">Quantity</th>
//                             <th className="border border-gray-300 px-2 py-1">Unit Price</th>
//                             <th className="border border-gray-300 px-2 py-1"></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {invoiceItems.map((item, index) => (
//                             <tr key={index}>
//                                 <td className="border border-gray-300 px-2 py-1">
//                                     <input
//                                         className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                                         type="text"
//                                         value={item.description}
//                                         onChange={(e) => {
//                                             const updatedItems = [...invoiceItems];
//                                             updatedItems[index].description = e.target.value;
//                                             setInvoiceItems(updatedItems);
//                                         }}
//                                     />
//                                 </td>
//                                 <td className="border border-gray-300 px-2 py-1">
//                                     <input
//                                         className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                                         type="number"
//                                         min="0"
//                                         value={item.quantity}
//                                         onChange={(e) => {
//                                             const updatedItems = [...invoiceItems];
//                                             updatedItems[index].quantity = parseInt(e.target.value);
//                                             setInvoiceItems(updatedItems);
//                                         }}
//                                     />
//                                 </td>
//                                 <td className="border border-gray-300 px-2 py-1">
//                                     <input
//                                         className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                                         type="number"
//                                         min="0"
//                                         value={item.unitPrice}
//                                         onChange={(e) => {
//                                             const updatedItems = [...invoiceItems];
//                                             updatedItems[index].unitPrice = parseFloat(e.target.value);
//                                             setInvoiceItems(updatedItems);
//                                         }}
//                                     />
//                                 </td>
//                                 <td className="border border-gray-300 px-2 py-1">
//                                     <button
//                                         className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-md"
//                                         type="button"
//                                         onClick={() => removeInvoiceItem(index)}
//                                     >
//                                         Remove
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>

//                 <button
//                     className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded-md"
//                     type="button"
//                     onClick={addInvoiceItem}
//                 >
//                     Add Item
//                 </button>
//             </form>

//             <div id="invoice-container" className="mt-8">
//                 <table className="w-full">
//                     <thead>
//                         <tr>
//                             <th className="border border-gray-300 px-2 py-1">Description</th>
//                             <th className="border border-gray-300 px-2 py-1">Quantity</th>
//                             <th className="border border-gray-300 px-2 py-1">Unit Price</th>
//                             <th className="border border-gray-300 px-2 py-1">Total</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {invoiceItems.map((item, index) => (
//                             <tr key={index}>
//                                 <td className="border border-gray-300 px-2 py-1">{item.description}</td>
//                                 <td className="border border-gray-300 px-2 py-1">{item.quantity}</td>
//                                 <td className="border border-gray-300 px-2 py-1">{item.unitPrice}</td>
//                                 <td className="border border-gray-300 px-2 py-1">{item.quantity * item.unitPrice}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <div className="flex justify-between mt-8">
//                 <button
//                     className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
//                     type="button"
//                     onClick={togglePreview}
//                 >
//                     Preview
//                 </button>

//                 <button
//                     className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md"
//                     type="button"
//                     onClick={generatePDF}
//                 >
//                     Generate PDF
//                 </button>
//             </div>

//             {/* Preview Modal */}
//             {showPreview && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//                     <div className="bg-white p-8">
//                         <h2 className="text-xl font-bold mb-4">Invoice Preview</h2>
//                         <div id="invoice-container" className="mb-4">
//                             <table className="w-full">
//                                 <thead>
//                                     <tr>
//                                         <th className="border border-gray-300 px-2 py-1">Description</th>
//                                         <th className="border border-gray-300 px-2 py-1">Quantity</th>
//                                         <th className="border border-gray-300 px-2 py-1">Unit Price</th>
//                                         <th className="border border-gray-300 px-2 py-1">Total</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {invoiceItems.map((item, index) => (
//                                         <tr key={index}>
//                                             <td className="border border-gray-300 px-2 py-1">{item.description}</td>
//                                             <td className="border border-gray-300 px-2 py-1">{item.quantity}</td>
//                                             <td className="border border-gray-300 px-2 py-1">{item.unitPrice}</td>
//                                             <td className="border border-gray-300 px-2 py-1">{item.quantity * item.unitPrice}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                         <button
//                             className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
//                             type="button"
//                             onClick={togglePreview}
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </main>
//     );
// };

// export default InvoiceGenerator;




// // //Import the library into your project
// // import { createInvoice } from 'easyinvoice';

// // var data = {
// //     // Customize enables you to provide your own templates
// //     // Please review the documentation for instructions and examples
// //     "customize": {
// //         //  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html 
// //     },
// //     "images": {
// //         // The logo on top of your invoice
// //         "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png",
// //         // The invoice background
// //         "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg"
// //     },
// //     // Your own data
// //     "sender": {
// //         "company": "Sample Corp",
// //         "address": "Sample Street 123",
// //         "zip": "1234 AB",
// //         "city": "Sampletown",
// //         "country": "Samplecountry"
// //         //"custom1": "custom value 1",
// //         //"custom2": "custom value 2",
// //         //"custom3": "custom value 3"
// //     },
// //     // Your recipient
// //     "client": {
// //         "company": "Client Corp",
// //         "address": "Clientstreet 456",
// //         "zip": "4567 CD",
// //         "city": "Clientcity",
// //         "country": "Clientcountry"
// //         // "custom1": "custom value 1",
// //         // "custom2": "custom value 2",
// //         // "custom3": "custom value 3"
// //     },
// //     "information": {
// //         // Invoice number
// //         "number": "2021.0001",
// //         // Invoice data
// //         "date": "12-12-2021",
// //         // Invoice due date
// //         "due-date": "31-12-2021"
// //     },
// //     // The products you would like to see on your invoice
// //     // Total values are being calculated automatically
// //     "products": [
// //         {
// //             "quantity": 2,
// //             "description": "Product 1",
// //             "tax-rate": 6,
// //             "price": 33.87
// //         },
// //         {
// //             "quantity": 4.1,
// //             "description": "Product 2",
// //             "tax-rate": 6,
// //             "price": 12.34
// //         },
// //         {
// //             "quantity": 4.5678,
// //             "description": "Product 3",
// //             "tax-rate": 21,
// //             "price": 6324.453456
// //         }
// //     ],
// //     // The message you would like to display on the bottom of your invoice
// //     "bottom-notice": "Kindly pay your invoice within 15 days.",
// //     // Settings to customize your invoice
// //     "settings": {
// //         "currency": "USD", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
// //         // "locale": "nl-NL", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')        
// //         // "margin-top": 25, // Defaults to '25'
// //         // "margin-right": 25, // Defaults to '25'
// //         // "margin-left": 25, // Defaults to '25'
// //         // "margin-bottom": 25, // Defaults to '25'
// //         // "format": "A4", // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
// //         // "height": "1000px", // allowed units: mm, cm, in, px
// //         // "width": "500px", // allowed units: mm, cm, in, px
// //         // "orientation": "landscape", // portrait or landscape, defaults to portrait
// //     },
// //     // Translate your invoice to your preferred language
// //     "translate": {
// //         // "invoice": "FACTUUR",  // Default to 'INVOICE'
// //         // "number": "Nummer", // Defaults to 'Number'
// //         // "date": "Datum", // Default to 'Date'
// //         // "due-date": "Verloopdatum", // Defaults to 'Due Date'
// //         // "subtotal": "Subtotaal", // Defaults to 'Subtotal'
// //         // "products": "Producten", // Defaults to 'Products'
// //         // "quantity": "Aantal", // Default to 'Quantity'
// //         // "price": "Prijs", // Defaults to 'Price'
// //         // "product-total": "Totaal", // Defaults to 'Total'
// //         // "total": "Totaal", // Defaults to 'Total'
// //         // "vat": "btw" // Defaults to 'vat'
// //     },
// // };

// // //Create your invoice! Easy!
// // createInvoice(data, function (result) {
// //     //The response will contain a base64 encoded PDF file
// //     console.log('PDF base64 string: ', result.pdf);
// // });



















// // import React, { useState } from 'react';
// // import InvoiceItem from '../components/InvoiceItem';
// // import InvoicePreview from '../components/InvoicePreview';
// // import { jsPDF } from 'jspdf';
// // import html2canvas from 'html2canvas';
// // import 'jspdf-autotable';
// // import { Inter } from 'next/font/google';

// // const inter = Inter({ subsets: ['latin'] });

// // const InvoiceGenerator = () => {
// //   const [address, setAddress] = useState('');
// //   const [date, setDate] = useState('');
// //   const [projectTitle, setProjectTitle] = useState('');
// //   const [projectDescription, setProjectDescription] = useState('');

// //   const [poNumber, setPoNumber] = useState('');
// //   const [performaInvoice, setPerformaInvoice] = useState('');
// //   const [invoiceItems, setInvoiceItems] = useState([]);
// //   const [showPreview, setShowPreview] = useState(false);

// //   const addInvoiceItem = () => {
// //     const newItem = { description: '', quantity: 0, unitPrice: 0 };
// //     setInvoiceItems([...invoiceItems, newItem]);
// //   };

// //   const removeInvoiceItem = (index) => {
// //     const updatedItems = [...invoiceItems];
// //     updatedItems.splice(index, 1);
// //     setInvoiceItems(updatedItems);
// //   };

// //   const togglePreview = () => {
// //     setShowPreview(!showPreview);
// //   };


// //   const generatePDF = () => {
// //     const invoiceContainer = document.getElementById('invoice-container');

// //     html2canvas(invoiceContainer).then((canvas) => {
// //       const pdf = new jsPDF({ format: 'a4' });

// //       // Generate table using autoTable function
// //       const rowHeight = 35; // Adjust this value as needed
// //       const tableHeight = invoiceItems.length * rowHeight;
// //       const tableOptions = {
// //         startY: pdf.internal.pageSize.getHeight() - tableHeight - 20,
// //         styles: { font: 'helvetica', fontSize: 10 },
// //         columnStyles: { 3: { halign: 'right' } },
// //         margin: { top: 10 },
// //       };
// //       pdf.autoTable({
// //         html: '#invoice-container table',
// //         ...tableOptions,
// //       });

// //       // Add account information
// //       const accountInfo = `Account number: 123456789\nBank: Bank Name\nName: John Doe\nTitle: CEO`;
// //       const accountInfoLines = pdf.splitTextToSize(accountInfo, pdf.internal.pageSize.getWidth() - 20);
// //       pdf.text(accountInfoLines, 10, pdf.internal.pageSize.getHeight() - 20);

// //       pdf.save('invoice.pdf');
// //     });
// //   };


// //   return (
// //     <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
// //       <h1 className="text-4xl font-bold mb-8">Invoice Generator</h1>
// //       <form className="mb-8">
// // <div className="mb-4">
// //   <label className="text-sm font-semibold">Address:</label>
// //   <input
// //     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //     type="text"
// //     value={address}
// //     onChange={(e) => setAddress(e.target.value)}
// //   />
// // </div>

// // <div className="mb-4">
// //   <label className="text-sm font-semibold">Date:</label>
// //   <input
// //     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //     type="text"
// //     value={date}
// //     onChange={(e) => setDate(e.target.value)}
// //   />
// // </div>

// // <div className="mb-4">
// //   <label className="text-sm font-semibold">Project Title:</label>
// //   <input
// //     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //     type="text"
// //     value={projectTitle}
// //     onChange={(e) => setProjectTitle(e.target.value)}
// //   />
// // </div>

// // <div className="mb-4">
// //   <label className="text-sm font-semibold">Project Description:</label>
// //   <input
// //     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //     type="text"
// //     value={projectDescription}
// //     onChange={(e) => setProjectDescription(e.target.value)}
// //   />
// // </div>

// // <div className="mb-4">
// //   <label className="text-sm font-semibold">PO Number:</label>
// //   <input
// //     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //     type="text"
// //     value={poNumber}
// //     onChange={(e) => setPoNumber(e.target.value)}
// //   />
// // </div>

// // <div className="mb-4">
// //   <label className="text-sm font-semibold">Performa Invoice:</label>
// //   <input
// //     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //     type="text"
// //     value={performaInvoice}
// //     onChange={(e) => setPerformaInvoice(e.target.value)}
// //   />
// // </div>

// //         <table className="w-full mb-4">
// //           <thead>
// //             <tr>
// //               <th className="border border-gray-300 px-2 py-1">Description</th>
// //               <th className="border border-gray-300 px-2 py-1">Quantity</th>
// //               <th className="border border-gray-300 px-2 py-1">Unit Price</th>
// //               <th className="border border-gray-300 px-2 py-1"></th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {invoiceItems.map((item, index) => (
// //               <InvoiceItem
// //                 key={index}
// //                 item={item}
// //                 index={index}
// //                 invoiceItems={invoiceItems}
// //                 setInvoiceItems={setInvoiceItems}
// //                 removeInvoiceItem={removeInvoiceItem}
// //               />
// //             ))}
// //           </tbody>
// //         </table>

// //         <button
// //           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded-md"
// //           type="button"
// //           onClick={addInvoiceItem}
// //         >
// //           Add Item
// //         </button>
// //       </form>

// //       <div id="invoice-container" className="mt-8">
// //         <table className="w-full">
// //           <thead>
// //             <tr>
// //               <th className="border border-gray-300 px-2 py-1">Description</th>
// //               <th className="border border-gray-300 px-2 py-1">Quantity</th>
// //               <th className="border border-gray-300 px-2 py-1">Unit Price</th>
// //               <th className="border border-gray-300 px-2 py-1">Total</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {invoiceItems.map((item, index) => (
// //               <tr key={index}>
// //                 <td className="border border-gray-300 px-2 py-1">{item.description}</td>
// //                 <td className="border border-gray-300 px-2 py-1">{item.quantity}</td>
// //                 <td className="border border-gray-300 px-2 py-1">{item.unitPrice}</td>
// //                 <td className="border border-gray-300 px-2 py-1">{item.quantity * item.unitPrice}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       <div className="flex justify-between mt-8">
// //         <button
// //           className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
// //           type="button"
// //           onClick={togglePreview}
// //         >
// //           Preview
// //         </button>

// //         <button
// //           className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md"
// //           type="button"
// //           onClick={generatePDF}
// //         >
// //           Generate PDF
// //         </button>
// //       </div>

// //       {showPreview && (
// //         <InvoicePreview
// //           invoiceItems={invoiceItems}
// //           togglePreview={togglePreview}
// //         />
// //       )}
// //     </main>
// //   );
// // };

// // export default InvoiceGenerator;






//   // const generatePDF = () => {
//   //   const data = {
//   //     //"customize": {
//   //     //  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded HTML
//   //     //},
//   //     "images": {
//   //       "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png",
//   //       "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg"
//   //     },
//   //     "from": {
//   //       "company": "Sample Corp",
//   //       "address": "Sample Street 123",
//   //       "zip": "1234 AB",
//   //       "city": "Sampletown",
//   //       "country": "Samplecountry"
//   //     },
//   //     "to": {
//   //       "company": "Client Corp",
//   //       "address": "Clientstreet 456",
//   //       "zip": "4567 CD",
//   //       "city": "Clientcity",
//   //       "country": "Clientcountry"
//   //     },
//   //     "invoiceNumber": "2021.0001",
//   //     "invoiceDate": "12-12-2021",
//   //     "dueDate": "31-12-2021",
//   //     "currency": "USD",
//   //     "items": invoiceItems.map((item) => ({
//   //       "quantity": item.quantity,
//   //       "description": item.description,
//   //       "tax": item.tax,
//   //       "price": item.price
//   //     })),
//   //     "notes": "Kindly pay your invoice within 15 days."
//   //   };
  
//   //   const invoice = easyinvoice.createInvoice(data);
  
//   //   easyinvoice.download('invoice.pdf', invoice.pdf);
//   // };




//     // return (
//   //   <div>
//   //     <h2>Invoice Generator</h2>
//   //     <label>Address:</label>
//   //     <input
//   //       type="text"
//   //       value={address}
//   //       onChange={(e) => setAddress(e.target.value)}
//   //     />
//   //     <label>Date:</label>
//   //     <input
//   //       type="text"
//   //       value={date}
//   //       onChange={(e) => setDate(e.target.value)}
//   //     />
//   //     <label>Project Title:</label>
//   //     <input
//   //       type="text"
//   //       value={projectTitle}
//   //       onChange={(e) => setProjectTitle(e.target.value)}
//   //     />
//   //     <label>Project Description:</label>
//   //     <input
//   //       type="text"
//   //       value={projectDescription}
//   //       onChange={(e) => setProjectDescription(e.target.value)}
//   //     />
//   //     <label>PO Number:</label>
//   //     <input
//   //       type="text"
//   //       value={poNumber}
//   //       onChange={(e) => setPoNumber(e.target.value)}
//   //     />
//   //     <label>Performa Invoice:</label>
//   //     <input
//   //       type="text"
//   //       value={performaInvoice}
//   //       onChange={(e) => setPerformaInvoice(e.target.value)}
//   //     />
//   //     <h3>Invoice Items</h3>
//   //     {invoiceItems.map((item, index) => (
//   //       <div key={index}>
//   //         <input
//   //           type="text"
//   //           placeholder="Description"
//   //           value={item.description}
//   //           onChange={(e) => {
//   //             const updatedItems = [...invoiceItems];
//   //             updatedItems[index].description = e.target.value;
//   //             setInvoiceItems(updatedItems);
//   //           }}
//   //         />
//   //         <input
//   //           type="number"
//   //           placeholder="Quantity"
//   //           value={item.quantity}
//   //           onChange={(e) => {
//   //             const updatedItems = [...invoiceItems];
//   //             updatedItems[index].quantity = e.target.value;
//   //             setInvoiceItems(updatedItems);
//   //           }}
//   //         />
//   //         <input
//   //           type="number"
//   //           placeholder="Price"
//   //           value={item.price}
//   //           onChange={(e) => {
//   //             const updatedItems = [...invoiceItems];
//   //             updatedItems[index].price = e.target.value;
//   //             setInvoiceItems(updatedItems);
//   //           }}
//   //         />
//   //         <input
//   //           type="number"
//   //           placeholder="Tax"
//   //           value={item.tax}
//   //           onChange={(e) => {
//   //             const updatedItems = [...invoiceItems];
//   //             updatedItems[index].tax = e.target.value;
//   //             setInvoiceItems(updatedItems);
//   //           }}
//   //         />
//   //         <button onClick={() => removeInvoiceItem(index)}>Remove</button>
//   //       </div>
//   //     ))}
//   //     <button onClick={addInvoiceItem}>Add Item</button>
//   //     <br />
//   //     <br />
//   //     <button onClick={togglePreview}>
//   //       {showPreview ? 'Hide Preview' : 'Show Preview'}
//   //     </button>
//   //     {showPreview && (
//   //       <div>
//   //         <h3>Preview</h3>
//   //         <pre>{JSON.stringify(invoiceItems, null, 2)}</pre>
//   //       </div>
//   //     )}
//   //     <br />
//   //     <button onClick={generatePDF}>Generate PDF</button>
//   //   </div>
//   // );




// // import React, { useState } from 'react';

// // import pdfMake from 'pdfmake/build/pdfmake';
// // import pdfFonts from 'pdfmake/build/vfs_fonts';
// // import { Inter } from 'next/font/google';

// // const inter = Inter({ subsets: ['latin'] });

// // // Register fonts
// // pdfMake.vfs = pdfFonts.pdfMake.vfs;

// // const InvoiceGenerator = () => {
// //   const [address, setAddress] = useState('');
// //   const [date, setDate] = useState('');
// //   const [projectTitle, setProjectTitle] = useState('');
// //   const [projectDescription, setProjectDescription] = useState('');
// //   const [poNumber, setPoNumber] = useState('');
// //   const [performaInvoice, setPerformaInvoice] = useState('');
// //   const [invoiceItems, setInvoiceItems] = useState([]);
// //   const [showPreview, setShowPreview] = useState(false);

// //   const addInvoiceItem = () => {
// //     const newItem = { description: '', quantity: 0, price: 0, tax: 0 };
// //     setInvoiceItems([...invoiceItems, newItem]);
// //   };

// //   const removeInvoiceItem = (index) => {
// //     const updatedItems = [...invoiceItems];
// //     updatedItems.splice(index, 1);
// //     setInvoiceItems(updatedItems);
// //   };

// //   const togglePreview = () => {
// //     setShowPreview(!showPreview);
// //   };

// //   const generatePDF = async () => {
// //     const imageResponse = await fetch('/logo.png');
// //     const imageData = await imageResponse.blob();

// //     const reader = new FileReader();
// //     reader.readAsDataURL(imageData);

// //     reader.onloadend = () => {
// //       const data = {
// //         content: [
// //           {
// //             image: reader.result,
// //             width: 100,
// //             alignment: 'left',
// //           },
// //           {
// //             text: 'Sample Corp',
// //             style: 'header',
// //           },
// //           {
// //             text: 'Sample Street 123',
// //             style: 'subheader',
// //           },
// //           {
// //             text: '1234 AB Sampletown, Samplecountry',
// //             style: 'subheader',
// //             margin: [0, 0, 0, 20],
// //           },
// //           {
// //             text: 'Invoice',
// //             style: 'invoiceTitle',
// //           },
// //           {
// //             text: 'Invoice Number: 2021.0001',
// //             style: 'subheader',
// //             margin: [0, 0, 0, 10],
// //           },
// //           {
// //             text: 'Invoice Date: 12-12-2021',
// //             style: 'subheader',
// //             margin: [0, 0, 0, 10],
// //           },
// //           {
// //             text: 'Due Date: 31-12-2021',
// //             style: 'subheader',
// //             margin: [0, 0, 0, 20],
// //           },
// //           {
// //             table: {
// //               headerRows: 1,
// //               widths: ['*', 'auto', 'auto', 'auto'],
// //               body: [
// //                 ['Description', 'Quantity', 'Unit Price', 'Cost'],
// //                 ...invoiceItems.map((item) => [
// //                   item.description,
// //                   item.quantity,
// //                   item.price,
// //                   item.tax,
// //                 ]),
// //               ],
// //             },
// //           },
// //           {
// //             text: 'Kindly pay into Account Name: \n Account Number:',
// //             margin: [0, 20, 0, 0],
// //           },
// //         ],
// //         styles: {
// //           header: {
// //             fontSize: 18,
// //             bold: true,
// //             alignment: 'left',
// //             margin: [0, 0, 0, 10],
// //           },
// //           subheader: {
// //             fontSize: 14,
// //             bold: false,
// //             alignment: 'left',
// //             margin: [0, 0, 0, 5],
// //           },
// //           invoiceTitle: {
// //             fontSize: 22,
// //             bold: false,
// //             alignment: 'left',
// //             margin: [0, 0, 0, 20],
// //           },
// //         },
// //       };

// //       const pdfDocGenerator = pdfMake.createPdf(data);
// //       pdfDocGenerator.download('invoice.pdf');
// //     };
// //   };

// //   return (
// //     <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
// //         <h1 className="text-4xl font-bold mb-8">Invoice Generator</h1>

// //         <form className="w-96">
// //             <div className="mb-4">
// //                 <label className="text-sm font-semibold">Address:</label>
// //                 <input
// //                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                     type="text"
// //                     value={address}
// //                     onChange={(e) => setAddress(e.target.value)}
// //                 />
// //             </div>

// //             <div className="mb-4">
// //                 <label className="text-sm font-semibold">Date:</label>
// //                 <input
// //                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                     type="text"
// //                     value={date}
// //                     onChange={(e) => setDate(e.target.value)}
// //                 />
// //             </div>

// //             <div className="mb-4">
// //                 <label className="text-sm font-semibold">Project Title:</label>
// //                 <input
// //                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                     type="text"
// //                     value={projectTitle}
// //                     onChange={(e) => setProjectTitle(e.target.value)}
// //                 />
// //             </div>

// //             <div className="mb-4">
// //                 <label className="text-sm font-semibold">Project Description:</label>
// //                 <input
// //                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                     type="text"
// //                     value={projectDescription}
// //                     onChange={(e) => setProjectDescription(e.target.value)}
// //                 />
// //             </div>

// //             <div className="mb-4">
// //                 <label className="text-sm font-semibold">P.O. Number:</label>
// //                 <input
// //                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                     type="text"
// //                     value={poNumber}
// //                     onChange={(e) => setPoNumber(e.target.value)}
// //                 />
// //             </div>

// //             <div className="mb-4">
// //                 <label className="text-sm font-semibold">Performa Invoice:</label>
// //                 <input
// //                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                     type="text"
// //                     value={performaInvoice}
// //                     onChange={(e) => setPerformaInvoice(e.target.value)}
// //                 />
// //             </div>

// //             <table className="w-full mb-4">
// //                 <thead>
// //                     <tr>
// //                         <th className="border border-gray-300 px-2 py-1">Description</th>
// //                         <th className="border border-gray-300 px-2 py-1">Quantity</th>
// //                         <th className="border border-gray-300 px-2 py-1">Unit Price</th>
// //                         <th className="border border-gray-300 px-2 py-1"></th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {invoiceItems.map((item, index) => (
// //                         <tr key={index}>
// //                             <td className="border border-gray-300 px-2 py-1">
// //                                 <input
// //                                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                                     type="text"
// //                                     value={item.description}
// //                                     onChange={(e) => {
// //                                         const updatedItems = [...invoiceItems];
// //                                         updatedItems[index].description = e.target.value;
// //                                         setInvoiceItems(updatedItems);
// //                                     }}
// //                                 />
// //                             </td>
// //                             <td className="border border-gray-300 px-2 py-1">
// //                                 <input
// //                                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                                     type="number"
// //                                     min="0"
// //                                     value={item.quantity}
// //                                     onChange={(e) => {
// //                                         const updatedItems = [...invoiceItems];
// //                                         updatedItems[index].quantity = parseInt(e.target.value);
// //                                         setInvoiceItems(updatedItems);
// //                                     }}
// //                                 />
// //                             </td>
// //                             <td className="border border-gray-300 px-2 py-1">
// //                                 <input
// //                                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                                     type="number"
// //                                     min="0"
// //                                     value={item.unitPrice}
// //                                     onChange={(e) => {
// //                                         const updatedItems = [...invoiceItems];
// //                                         updatedItems[index].unitPrice = parseFloat(e.target.value);
// //                                         setInvoiceItems(updatedItems);
// //                                     }}
// //                                 />
// //                             </td>
// //                             <td className="border border-gray-300 px-2 py-1">
// //                                 <button
// //                                     className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-md"
// //                                     type="button"
// //                                     onClick={() => removeInvoiceItem(index)}
// //                                 >
// //                                     Remove
// //                                 </button>
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>

// //             <button
// //                 className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded-md"
// //                 type="button"
// //                 onClick={addInvoiceItem}
// //             >
// //                 Add Item
// //             </button>
// //         </form>

// //         <div id="invoice-container" className="mt-8">
// //             <table className="w-full">
// //                 <thead>
// //                     <tr>
// //                         <th className="border border-gray-300 px-2 py-1">Description</th>
// //                         <th className="border border-gray-300 px-2 py-1">Quantity</th>
// //                         <th className="border border-gray-300 px-2 py-1">Unit Price</th>
// //                         <th className="border border-gray-300 px-2 py-1">Total Cost</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {invoiceItems.map((item, index) => (
// //                         <tr key={index}>
// //                             <td className="border border-gray-300 px-2 py-1">{item.description}</td>
// //                             <td className="border border-gray-300 px-2 py-1">{item.quantity}</td>
// //                             <td className="border border-gray-300 px-2 py-1">{item.unitPrice}</td>
// //                             <td className="border border-gray-300 px-2 py-1">{item.quantity * item.unitPrice}</td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>

// //         <div className="flex justify-between mt-8">
// //             <button
// //                 className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
// //                 type="button"
// //                 onClick={togglePreview}
// //             >
// //                 Preview
// //             </button>

// //             <button
// //                 className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md"
// //                 type="button"
// //                 onClick={generatePDF}
// //             >
// //                 Generate PDF
// //             </button>
// //         </div>

// //         {/* Preview Modal */}
// //         {showPreview && (
// //             <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
// //                 <div className="bg-white p-8">
// //                     <h2 className="text-xl font-bold mb-4">Invoice Preview</h2>
// //                     <div id="invoice-container" className="mb-4">
// //                         <table className="w-full">
// //                             <thead>
// //                                 <tr>
// //                                     <th className="border border-gray-300 px-2 py-1">Description</th>
// //                                     <th className="border border-gray-300 px-2 py-1">Quantity</th>
// //                                     <th className="border border-gray-300 px-2 py-1">Unit Price</th>
// //                                     <th className="border border-gray-300 px-2 py-1">Total</th>
// //                                 </tr>
// //                             </thead>
// //                             <tbody>
// //                                 {invoiceItems.map((item, index) => (
// //                                     <tr key={index}>
// //                                         <td className="border border-gray-300 px-2 py-1">{item.description}</td>
// //                                         <td className="border border-gray-300 px-2 py-1">{item.quantity}</td>
// //                                         <td className="border border-gray-300 px-2 py-1">{item.unitPrice}</td>
// //                                         <td className="border border-gray-300 px-2 py-1">{item.quantity * item.unitPrice}</td>
// //                                     </tr>
// //                                 ))}
// //                             </tbody>
// //                         </table>
// //                     </div>
// //                     <button
// //                         className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
// //                         type="button"
// //                         onClick={togglePreview}
// //                     >
// //                         Close
// //                     </button>
// //                 </div>
// //             </div>
// //         )}
// //     </main>
// // );

// // };


// // export default InvoiceGenerator;










// // import React, { useState } from 'react';
// // import pdfMake from 'pdfmake/build/pdfmake';
// // import pdfFonts from 'pdfmake/build/vfs_fonts';
// // import { Inter } from 'next/font/google';

// // const inter = Inter({ subsets: ['latin'] });

// // // Register fonts
// // pdfMake.vfs = pdfFonts.pdfMake.vfs;

// // const VAT_RATE = 0.075;

// // const calculateVAT = (invoiceItems) => {
// //   let total = 0;
// //   invoiceItems.forEach(item => {
// //     total += item.quantity * item.price;
// //   });
// //   return total * VAT_RATE;
// // };

// // const calculateTotal = (invoiceItems) => {
// //   let total = 0;
// //   invoiceItems.forEach(item => {
// //     total += item.quantity * item.price;
// //   });
// //   return total + (total * VAT_RATE);
// // };

// // const InvoiceGenerator = () => {
// //   const [address, setAddress] = useState('');
// //   const [date, setDate] = useState('');
// //   const [projectTitle, setProjectTitle] = useState('');
// //   const [projectDescription, setProjectDescription] = useState('');
// //   const [poNumber, setPoNumber] = useState('');
// //   const [performaInvoice, setPerformaInvoice] = useState('');
// //   const [invoiceItems, setInvoiceItems] = useState([]);
// //   const [showPreview, setShowPreview] = useState(false);

// //   const addInvoiceItem = () => {
// //     const newItem = { description: '', quantity: 0, price: 0, cost: 0 ,tax: 0 };
// //     setInvoiceItems([...invoiceItems, newItem]);

// //   };

// //   const removeInvoiceItem = (index) => {
// //     const updatedItems = [...invoiceItems];
// //     updatedItems.splice(index, 1);
// //     setInvoiceItems(updatedItems);
// //   };

// //   const togglePreview = () => {
// //     setShowPreview(!showPreview);
// //   };

// //   const generatePDF = async () => {
// //     const imageResponse = await fetch('/logo.png');
// //     const imageData = await imageResponse.blob();

// //     const reader = new FileReader();
// //     reader.readAsDataURL(imageData);

// //     reader.onloadend = () => {
// //       const vat = calculateVAT(invoiceItems);
// //       const total = calculateTotal(invoiceItems);

// //       const data = {
// //         content: [
// //           {
// //             image: reader.result,
// //             width: 100,
// //             alignment: 'left',
// //           },
// //           {
// //             text: 'Sample Corp',
// //             style: 'header',
// //           },
// //           {
// //             text: 'Sample Street 123',
// //             style: 'subheader',
// //           },
// //           {
// //             text: '1234 AB Sampletown, Samplecountry',
// //             style: 'subheader',
// //             margin: [0, 0, 0, 20],
// //           },
// //           {
// //             text: 'Invoice',
// //             style: 'invoiceTitle',
// //           },
// //           {
// //             text: 'Invoice Number: 2021.0001',
// //             style: 'subheader',
// //             margin: [0, 0, 0, 10],
// //           },
// //           {
// //             text: 'Invoice Date: 12-12-2021',
// //             style: 'subheader',
// //             margin: [0, 0, 0, 10],
// //           },
// //           {
// //             text: 'Due Date: 31-12-2021',
// //             style: 'subheader',
// //             margin: [0, 0, 0, 20],
// //           },
// //           {
// //             table: {
// //               headerRows: 1,
// //               widths: ['*', 'auto', 'auto', 'auto'],
// //               body: [
// //                 ['Description', 'Quantity', 'Unit Price', 'Cost'],
// //                 ...invoiceItems.map((item) => [
// //                   item.description,
// //                   item.quantity,
// //                   item.price,
// //                   item.cost,
// //                   item.tax,
// //                 ]),
// //               ],
// //             },
// //           },
// //           {
// //             text: `VAT (7.5%): ${vat.toFixed(2)}`,
// //             style: 'subheader',
// //             margin: [0, 10, 0, 10],
// //           },
// //           {
// //             text: `Total: ${total.toFixed(2)}`,
// //             style: 'header',
// //             margin: [0, 0, 0, 20],
// //           },
// //           {
// //             text: 'Kindly pay into Account Name: \n Account Number:',
// //             margin: [0, 20, 0, 0],
// //           },
// //         ],
// //         styles: {
// //           header: {
// //             fontSize: 18,
// //             bold: true,
// //             margin: [0, 0, 0, 10],
// //           },
// //           subheader: {
// //             fontSize: 14,
// //             bold: true,
// //           },
// //           invoiceTitle: {
// //             fontSize: 20,
// //             bold: true,
// //             margin: [0, 30, 0, 10],
// //             alignment: 'right',
// //           },
// //         },
// //       };
// //       pdfMake.createPdf(data).download();
// //     };
// //   };


// //   return (
// //     <main className="flex min-h-screen flex-col items-center justify-between p-24">
// //       <h1 className="text-4xl font-bold mb-8">Invoice Generator</h1>
  
// //       <div className="w-96">
// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">Address:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="text"
// //             value={address}
// //             onChange={(e) => setAddress(e.target.value)}
// //           />
// //         </div>
  
// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">Date:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="date"
// //             value={date}
// //             onChange={(e) => setDate(e.target.value)}
// //           />
// //         </div>
  
// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">Project Title:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="text"
// //             value={projectTitle}
// //             onChange={(e) => setProjectTitle(e.target.value)}
// //           />
// //         </div>
  
// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">Project Description:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="text"
// //             value={projectDescription}
// //             onChange={(e) => setProjectDescription(e.target.value)}
// //           />
// //         </div>
  
// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">P.O. Number:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="text"
// //             value={poNumber}
// //             onChange={(e) => setPoNumber(e.target.value)}
// //           />
// //         </div>
  
// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">Performa Invoice:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="text"
// //             value={performaInvoice}
// //             onChange={(e) => setPerformaInvoice(e.target.value)}
// //           />
// //         </div>
  
// //         <table className="w-full mb-4">
// //           <thead>
// //             <tr>
// //               <th className="border border-gray-300 px-2 py-1">Description</th>
// //               <th className="border border-gray-300 px-2 py-1">Quantity</th>
// //               <th className="border border-gray-300 px-2 py-1">Price</th>
// //               <th className="border border-gray-300 px-2 py-1"></th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {invoiceItems.map((item, index) => (
// //               <tr key={index}>
// //                 <td className="border border-gray-300 px-2 py-1">
// //                   <input
// //                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                     type="text"
// //                     value={item.description}
// //                     onChange={(e) => {
// //                       const newInvoiceItems = [...invoiceItems];
// //                       newInvoiceItems[index].description = e.target.value;
// //                       setInvoiceItems(newInvoiceItems);
// //                     }}
// //                   />
// //                 </td>
// //                 <td className="border border-gray-300 px-2 py-1">
// //                   <input
// //                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                     type="number"
// //                     min="0"
// //                     value={item.quantity}
// //                     onChange={(e) => {
// //                       const newInvoiceItems = [...invoiceItems];
// //                       newInvoiceItems[index].quantity = parseInt(e.target.value, 10);
// //                       newInvoiceItems[index].cost = newInvoiceItems[index].quantity * newInvoiceItems[index].price;
// //                       setInvoiceItems(newInvoiceItems);
// //                     }}
// //                   />
// //                 </td>
// //                 <td className="border border-gray-300 px-2 py-1">
// //                   <input
// //                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                     type="number"
// //                     min="0"
// //                     value={item.price}
// //                     onChange={(e) => {
// //                       const newInvoiceItems = [...invoiceItems];
// //                       newInvoiceItems[index].price = parseFloat(e.target.value);
// //                       newInvoiceItems[index].cost = newInvoiceItems[index].quantity * newInvoiceItems[index].price;
// //                       setInvoiceItems(newInvoiceItems);
// //                     }}
// //                   />
// //                 </td>
// //                 <td className="border border-gray-300 px-2 py-1">
// //                   <button
// //                     className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-md"
// //                     onClick={() => removeInvoiceItem(index)}
// //                   >
// //                     Remove
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
  
// //         <button
// //           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded-md"
// //           onClick={addInvoiceItem}
// //         >
// //           Add Item
// //         </button>
// //       </div>
  
// //       {showPreview && (
// //         <div className="mt-8">
// //           {/* Replace with a component to preview the invoice */}
// //         </div>
// //       )}
  
// //       <div className="flex justify-between mt-8">
// //         <button
// //           className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
// //           onClick={togglePreview}
// //         >
// //           {showPreview ? 'Hide Preview' : 'Show Preview'}
// //         </button>
  
// //         <button
// //           className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md"
// //           onClick={generatePDF}
// //         >
// //           Generate PDF
// //         </button>
// //       </div>
// //     </main>
// //   );
  

// // };


// // export default InvoiceGenerator;













// // import React, { useState } from 'react';
// // import pdfMake from 'pdfmake/build/pdfmake';
// // import pdfFonts from 'pdfmake/build/vfs_fonts';

// // pdfMake.vfs = pdfFonts.pdfMake.vfs;

// // const VAT_RATE = 0.075;

// // const calculateVAT = (invoiceItems) => {
// //   let total = 0;
// //   invoiceItems.forEach(item => {
// //     total += item.quantity * item.price;
// //   });
// //   return total * VAT_RATE;
// // };

// // const calculateTotal = (invoiceItems) => {
// //   let total = 0;
// //   invoiceItems.forEach(item => {
// //     total += item.quantity * item.price;
// //   });
// //   return total + (total * VAT_RATE);
// // };

// // const InvoiceGenerator = () => {
// //   const [address, setAddress] = useState('');
// //   const [date, setDate] = useState('');
// //   const [projectTitle, setProjectTitle] = useState('');
// //   const [projectDescription, setProjectDescription] = useState('');
// //   const [poNumber, setPoNumber] = useState('');
// //   const [performaInvoice, setPerformaInvoice] = useState('');
// //   const [invoiceItems, setInvoiceItems] = useState([]);
// //   const [showPreview, setShowPreview] = useState(false);

// //   const addInvoiceItem = () => {
// //     const newItem = { description: '', quantity: 0, price: 0, cost: 0 };
// //     setInvoiceItems([...invoiceItems, newItem]);
// //   };

// //   const removeInvoiceItem = (index) => {
// //     const updatedItems = [...invoiceItems];
// //     updatedItems.splice(index, 1);
// //     setInvoiceItems(updatedItems);
// //   };

// //   const togglePreview = () => {
// //     setShowPreview(!showPreview);
// //   };

// //   const generatePDF = async () => {
// //     const imageResponse = await fetch('/logo.png');
// //     const imageData = await imageResponse.blob();

// //     const reader = new FileReader();
// //     reader.readAsDataURL(imageData);

// //     reader.onloadend = () => {
// //       const vat = calculateVAT(invoiceItems);
// //       const total = calculateTotal(invoiceItems);

// //       const data = {
// //         content: [
// //           {
// //             image: reader.result,
// //             width: 100,
// //             alignment: 'left',
// //           },
// //           {
// //             text: 'Sample Corp',
// //             style: 'header',
// //           },
// //           {
// //             text: 'Sample Street 123',
// //             style: 'subheader',
// //           },
// //           {
// //             text: '1234 AB Sampletown, Samplecountry',
// //             style: 'subheader',
// //             margin: [0, 0, 0, 20],
// //           },
// //           {
// //             text: 'Invoice',
// //             style: 'invoiceTitle',
// //           },
// //           {
// //             text: 'Invoice Number: 2021.0001',
// //             style: 'subheader',
// //             margin: [0, 0, 0, 10],
// //           },
// //           {
// //             text: 'Invoice Date: 12-12-2021',
// //             style: 'subheader',
// //             margin: [0, 0, 0, 10],
// //           },
// //           {
// //             text: 'Due Date: 31-12-2021',
// //             style: 'subheader',
// //             margin: [0, 0, 0, 20],
// //           },
// //           {
// //             layout: 'lightHorizontalLines',
// //             table: {
// //               headerRows: 1,
// //               fillColor: '#000',
// //               widths: ['*', 'auto', 'auto', 'auto'],
// //               body: [
// //                 ['Description', 'Quantity', 'Unit Price', 'Cost'],
// //                 ...invoiceItems.map((item) => [
// //                   item.description,
// //                   item.quantity,
// //                   item.price,
// //                   item.quantity * item.price,
// //                 ]),
// //               ],
// //             },
// //           },
// //           {
// //             text: `VAT (7.5%): ${vat.toFixed(2)}`,
// //             style: 'subheader',
// //             margin: [0, 10, 0, 10],
// //           },
// //           {
// //             text: `Total: ${total.toFixed(2)}`,
// //             style: 'header',
// //             margin: [0, 0, 0, 20],
// //           },
// //           {
// //             text: 'Kindly pay into Account Name: \n Account Number:',
// //             margin: [0, 20, 0, 0],
// //           },
// //         ],
// //         styles: {
// //           header: {
// //             fontSize: 18,
// //             bold: true,
// //             margin: [0, 0, 0, 10],
// //           },
// //           subheader: {
// //             fontSize: 14,
// //             bold: true,
// //           },
// //           invoiceTitle: {
// //             fontSize: 20,
// //             bold: true,
// //             margin: [0, 30, 0, 10],
// //             alignment: 'right',
// //           },
// //         },
// //       };
// //       pdfMake.createPdf(data).download();
// //     };
// //   };

// //   return (
// //     <main className="flex min-h-screen flex-col items-center justify-between p-24">
// //       <h1 className="text-4xl font-bold mb-8">Invoice Generator</h1>

// //       <div className="w-96">
// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">Address:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="text"
// //             value={address}
// //             onChange={(e) => setAddress(e.target.value)}
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">Date:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="date"
// //             value={date}
// //             onChange={(e) => setDate(e.target.value)}
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">Project Title:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="text"
// //             value={projectTitle}
// //             onChange={(e) => setProjectTitle(e.target.value)}
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">Project Description:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="text"
// //             value={projectDescription}
// //             onChange={(e) => setProjectDescription(e.target.value)}
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">P.O. Number:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="text"
// //             value={poNumber}
// //             onChange={(e) => setPoNumber(e.target.value)}
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">Performa Invoice:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="text"
// //             value={performaInvoice}
// //             onChange={(e) => setPerformaInvoice(e.target.value)}
// //           />
// //         </div>

// //         <table className="w-full mb-4">
// //           <thead>
// //             <tr>
// //               <th className="border border-gray-300 px-2 py-1">Description</th>
// //               <th className="border border-gray-300 px-2 py-1">Quantity</th>
// //               <th className="border border-gray-300 px-2 py-1">Price</th>
// //               <th className="border border-gray-300 px-2 py-1"></th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {invoiceItems.map((item, index) => (
// //               <tr key={index}>
// //                 <td className="border border-gray-300 px-2 py-1">
// //                   <input
// //                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                     type="text"
// //                     value={item.description}
// //                     onChange={(e) => {
// //                       const newInvoiceItems = [...invoiceItems];
// //                       newInvoiceItems[index].description = e.target.value;
// //                       setInvoiceItems(newInvoiceItems);
// //                     }}
// //                   />
// //                 </td>
// //                 <td className="border border-gray-300 px-2 py-1">
// //                   <input
// //                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                     type="number"
// //                     min="0"
// //                     value={item.quantity}
// //                     onChange={(e) => {
// //                       const newInvoiceItems = [...invoiceItems];
// //                       newInvoiceItems[index].quantity = parseInt(e.target.value, 10) || 0;
// //                       setInvoiceItems(newInvoiceItems);
// //                     }}
// //                   />
// //                 </td>
// //                 <td className="border border-gray-300 px-2 py-1">
// //                   <input
// //                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                     type="number"
// //                     min="0"
// //                     value={item.price}
// //                     onChange={(e) => {
// //                       const newInvoiceItems = [...invoiceItems];
// //                       newInvoiceItems[index].price = parseFloat(e.target.value) || 0;
// //                       setInvoiceItems(newInvoiceItems);
// //                     }}
// //                   />
// //                 </td>
// //                 <td className="border border-gray-300 px-2 py-1">
// //                   <button
// //                     className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-md"
// //                     onClick={() => removeInvoiceItem(index)}
// //                   >
// //                     Remove
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>

// //         <button
// //           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded-md"
// //           onClick={addInvoiceItem}
// //         >
// //           Add Item
// //         </button>
// //       </div>

// //       {showPreview && (
// //         <div className="mt-8">
// //           {/* Replace with a component to preview the invoice */}
// //         </div>
// //       )}

// //       <div className="flex justify-between mt-8">
// //         <button
// //           className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
// //           onClick={togglePreview}
// //         >
// //           {showPreview ? 'Hide Preview' : 'Show Preview'}
// //         </button>

// //         <button
// //           className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md"
// //           onClick={generatePDF}
// //         >
// //           Generate PDF
// //         </button>
// //       </div>
// //     </main>
// //   );
// // };

// // export default InvoiceGenerator;





















// // import React, { useState } from 'react';
// // import pdfMake from 'pdfmake/build/pdfmake';
// // import pdfFonts from 'pdfmake/build/vfs_fonts';

// // pdfMake.vfs = pdfFonts.pdfMake.vfs;

// // const VAT_RATE = 0.075;

// // const calculateVAT = (invoiceItems) => {
// //   let total = 0;
// //   invoiceItems.forEach(item => {
// //     total += item.quantity * item.price;
// //   });
// //   return total * VAT_RATE;
// // };

// // const calculateTotal = (invoiceItems) => {
// //   let total = 0;
// //   invoiceItems.forEach(item => {
// //     total += item.quantity * item.price;
// //   });
// //   return total + (total * VAT_RATE);
// // };

// // const InvoiceGenerator = () => {
// //   const [address, setAddress] = useState('');
// //   const [date, setDate] = useState('');
// //   const [projectTitle, setProjectTitle] = useState('');
// //   const [projectDescription, setProjectDescription] = useState('');
// //   const [poNumber, setPoNumber] = useState('');
// //   const [performaInvoice, setPerformaInvoice] = useState('');
// //   const [invoiceItems, setInvoiceItems] = useState([]);
// //   const [showPreview, setShowPreview] = useState(false);

// //   const addInvoiceItem = () => {
// //     const newItem = { description: '', quantity: 0, price: 0, cost: 0 };
// //     setInvoiceItems([...invoiceItems, newItem]);
// //   };

// //   const removeInvoiceItem = (index) => {
// //     const updatedItems = [...invoiceItems];
// //     updatedItems.splice(index, 1);
// //     setInvoiceItems(updatedItems);
// //   };

// //   const togglePreview = () => {
// //     setShowPreview(!showPreview);
// //   };

// //   const generatePDF = async () => {
// //     const imageResponse = await fetch('/logo.png');
// //     const imageData = await imageResponse.blob();

// //     const reader = new FileReader();
// //     reader.readAsDataURL(imageData);

// //     reader.onloadend = () => {
// //       const vat = calculateVAT(invoiceItems);
// //       const total = calculateTotal(invoiceItems);

// //       const customLayout = {
// //         hLineWidth: function (i, node) {
// //           return 0.5;
// //         },
// //         vLineWidth: function (i, node) {
// //           return 0.5;
// //         },
// //         hLineColor: function (i, node) {
// //           return '#aaa';
// //         },
// //         vLineColor: function (i, node) {
// //           return '#aaa';
// //         },
// //         paddingLeft: function (i, node) { return 4; },
// //         paddingRight: function (i, node) { return 4; },
// //         paddingTop: function (i, node) { return 2; },
// //         paddingBottom: function (i, node) { return 2; },
// //         fillColor: function (i, node) { return (i === 0) ? '#ddd' : null; },  // Modify as needed for darker shade
// //         drawCell: function (cell, dataIndex, rowIndex, point, node) {
// //           var doc = node.table.body[rowIndex][dataIndex]._pdf.cell.pdf;
// //           var text = cell.text;
// //           if (text) {
// //             doc.text(text, point.x, point.y, {
// //               width: cell.width,
// //               text: doc.splitTextToSize(text, cell.width)
// //             });
// //           }
// //         }
// //       };

// //       const data = {
// //         content: [
// //           {
// //             image: reader.result,
// //             width: 100,
// //             alignment: 'left',
// //           },
// //           {
// //             text: 'Sample Corp',
// //             style: 'header',
// //           },
// //           {
// //             text: 'Sample Street 123',
// //             style: 'subheader',
// //           },
// //           {
// //             text: '1234 AB Sampletown, Samplecountry',
// //             style: 'subheader',
// //             margin: [0, 0, 0, 20],
// //           },
// //           {
// //             text: 'Invoice',
// //             style: 'invoiceTitle',
// //           },
// //           {
// //             text: 'Invoice Number: 2021.0001',
// //             style: 'subheader',
// //             margin: [0, 0, 0, 10],
// //           },
// //           {
// //             text: 'Invoice Date: 12-12-2021',
// //             style: 'subheader',
// //             margin: [0, 0, 0, 10],
// //           },
// //           {
// //             text: 'Due Date: 31-12-2021',
// //             style: 'subheader',
// //             margin: [0, 0, 0, 20],
// //           },
// //           {
// //             layout: customLayout,
// //             table: {
// //               headerRows: 1,
// //               widths: ['*', 'auto', 'auto', 'auto'],
// //               body: [
// //                 ['Description', 'Quantity', 'Unit Price', 'Cost'],
// //                 ...invoiceItems.map((item) => [
// //                   item.description,
// //                   item.quantity,
// //                   item.price,
// //                   item.quantity * item.price,
// //                 ]),
// //                 // [{text: 'VAT', colSpan: 3}, {}, {}, vat],
// //                 // [{text: 'Total', colSpan: 3}, {}, {}, total],
// //               ],
// //             },
// //           },

// //           {
// //             text: `VAT (7.5%): ${vat.toFixed(2)}`,
// //             style: 'subheader',
// //             margin: [0, 10, 0, 10],
// //           },
// //           {
// //             text: `Total: ${total.toFixed(2)}`,
// //             style: 'header',
// //             margin: [0, 0, 0, 20],
// //           },
// //           {
// //             text: 'Kindly pay into Account Name: \n Account Number:',
// //             margin: [0, 20, 0, 0],
// //           },
// //         ],
// //       };
// //       pdfMake.createPdf(data).download();
// //     };
// //   };

// //   return (
// //     <main className="flex min-h-screen flex-col items-center justify-between p-24">
// //       <h1 className="text-4xl font-bold mb-8">Invoice Generator</h1>

// //       <div className="w-96">
// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">Address:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="text"
// //             value={address}
// //             onChange={(e) => setAddress(e.target.value)}
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">Date:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="date"
// //             value={date}
// //             onChange={(e) => setDate(e.target.value)}
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">Project Title:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="text"
// //             value={projectTitle}
// //             onChange={(e) => setProjectTitle(e.target.value)}
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">Project Description:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="text"
// //             value={projectDescription}
// //             onChange={(e) => setProjectDescription(e.target.value)}
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">P.O. Number:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="text"
// //             value={poNumber}
// //             onChange={(e) => setPoNumber(e.target.value)}
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="text-sm font-semibold">Performa Invoice:</label>
// //           <input
// //             className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //             type="text"
// //             value={performaInvoice}
// //             onChange={(e) => setPerformaInvoice(e.target.value)}
// //           />
// //         </div>

// //         <table className="w-full mb-4">
// //           <thead>
// //             <tr>
// //               <th className="border border-gray-300 px-2 py-1">Description</th>
// //               <th className="border border-gray-300 px-2 py-1">Quantity</th>
// //               <th className="border border-gray-300 px-2 py-1">Price</th>
// //               <th className="border border-gray-300 px-2 py-1"></th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {invoiceItems.map((item, index) => (
// //               <tr key={index}>
// //                 <td className="border border-gray-300 px-2 py-1">
// //                   <input
// //                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                     type="text"
// //                     value={item.description}
// //                     onChange={(e) => {
// //                       const newInvoiceItems = [...invoiceItems];
// //                       newInvoiceItems[index].description = e.target.value;
// //                       setInvoiceItems(newInvoiceItems);
// //                     }}
// //                   />
// //                 </td>
// //                 <td className="border border-gray-300 px-2 py-1">
// //                   <input
// //                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                     type="number"
// //                     min="0"
// //                     value={item.quantity}
// //                     onChange={(e) => {
// //                       const newInvoiceItems = [...invoiceItems];
// //                       newInvoiceItems[index].quantity = parseInt(e.target.value, 10) || 0;
// //                       setInvoiceItems(newInvoiceItems);
// //                     }}
// //                   />
// //                 </td>
// //                 <td className="border border-gray-300 px-2 py-1">
// //                   <input
// //                     className="border border-gray-300 rounded-md px-2 py-1 w-full"
// //                     type="number"
// //                     min="0"
// //                     value={item.price}
// //                     onChange={(e) => {
// //                       const newInvoiceItems = [...invoiceItems];
// //                       newInvoiceItems[index].price = parseFloat(e.target.value) || 0;
// //                       setInvoiceItems(newInvoiceItems);
// //                     }}
// //                   />
// //                 </td>
// //                 <td className="border border-gray-300 px-2 py-1">
// //                   <button
// //                     className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-md"
// //                     onClick={() => removeInvoiceItem(index)}
// //                   >
// //                     Remove
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>

// //         <button
// //           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded-md"
// //           onClick={addInvoiceItem}
// //         >
// //           Add Item
// //         </button>
// //       </div>

// //       {showPreview && (
// //         <div className="mt-8">
// //           {/* Replace with a component to preview the invoice */}
// //         </div>
// //       )}

// //       <div className="flex justify-between mt-8">
// //         <button
// //           className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
// //           onClick={togglePreview}
// //         >
// //           {showPreview ? 'Hide Preview' : 'Show Preview'}
// //         </button>

// //         <button
// //           className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md"
// //           onClick={generatePDF}
// //         >
// //           Generate PDF
// //         </button>
// //       </div>
// //     </main>
// //   );
// // };

// // export default InvoiceGenerator;

 









// import { useState } from 'react';
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// export default function DeliveryForm() {
//     const [to, setTo] = useState('');
//     const [orderNumber, setOrderNumber] = useState('');
//     const [address, setAddress] = useState('');
//     const [dateSent, setDateSent] = useState('');
//     const [invoiceNumber, setInvoiceNumber] = useState('');
//     const [ourContactPerson, setOurContactPerson] = useState('');
//     const [attention, setAttention] = useState('');
//     const [telephone, setTelephone] = useState('');
//     const [description, setDescription] = useState('');
//     const [quantityDelivered, setQuantityDelivered] = useState('');
//     const [officerName, setOfficerName] = useState('');
//     const [officerSignature, setOfficerSignature] = useState('');
//     const [officerDate, setOfficerDate] = useState('');
//     const [clientName, setClientName] = useState('');
//     const [clientSignature, setClientSignature] = useState('');
//     const [clientDate, setClientDate] = useState('');
//     const [clientName2, setClientName2] = useState('');
//     const [clientSignature2, setClientSignature2] = useState('');
//     const [clientDate2, setClientDate2] = useState('');

//     // const handleSubmit = (event) => {
//     //     event.preventDefault();

//     //     let docDefinition = {
//     //         content: [
//     //             {text: 'Delivery Form', style: 'header'},
//     //             {text: `To: ${to}`, style: 'subheader'},
//     //             {text: `Order Number: ${orderNumber}`, style: 'subheader'},
//     //             {text: `Address: ${address}`, style: 'subheader'},
//     //             {text: `Date Sent: ${dateSent}`, style: 'subheader'},
//     //             {text: `Invoice Number: ${invoiceNumber}`, style: 'subheader'},
//     //             {text: `Our Contact Person: ${ourContactPerson}`, style: 'subheader'},
//     //             {text: `Attention: ${attention}`, style: 'subheader'},
//     //             {text: `Telephone: ${telephone}`, style: 'subheader'},
//     //             {text: `Description: ${description}`, style: 'subheader'},
//     //             {text: `Quantity Delivered: ${quantityDelivered}`, style: 'subheader'},
//     //             {text: `Officer Name: ${officerName}`, style: 'subheader'},
//     //             {text: `Officer Signature: ${officerSignature}`, style: 'subheader'},
//     //             {text: `Officer Date: ${officerDate}`, style: 'subheader'},
//     //             {text: `Client Name: ${clientName}`, style: 'subheader'},
//     //             {text: `Client Signature: ${clientSignature}`, style: 'subheader'},
//     //             {text: `Client Date: ${clientDate}`, style: 'subheader'},
//     //             {text: `Client Name 2: ${clientName2}`, style: 'subheader'},
//     //             {text: `Client Signature 2: ${clientSignature2}`, style: 'subheader'},
//     //             {text: `Client Date 2: ${clientDate2}`, style: 'subheader'},
//     //         ],
//     //         styles: {
//     //             header: {
//     //                 fontSize: 22,
//     //                 bold: true,
//     //                 alignment: 'center',
//     //                 margin: [0, 0, 0, 20]
//     //             },
//     //             subheader: {
//     //                 fontSize: 16,
//     //                 bold: true,
//     //                 margin: [0, 10, 0, 5]
//     //             }
//     //         }
//     //     }

//     //     pdfMake.createPdf(docDefinition).download();
//     // };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const customLayout = {
//             hLineWidth: function (i, node) {
//                 return 0.5;
//             },
//             vLineWidth: function (i, node) {
//                 return 0.5;
//             },
//             hLineColor: function (i, node) {
//                 return '#aaa';
//             },
//             vLineColor: function (i, node) {
//                 return '#aaa';
//             },
//             paddingLeft: function (i, node) { return 4; },
//             paddingRight: function (i, node) { return 4; },
//             paddingTop: function (i, node) { return 2; },
//             paddingBottom: function (i, node) { return 2; },
//             fillColor: function (i, node) { return (i === 0) ? '#ddd' : null; },  // Modify as needed for darker shade
//         };

//         const docDefinition = {
//             content: [
//                 {
//                     text: 'Delivery Form',
//                     style: 'header',
//                     margin: [0, 20, 0, 20]
//                 },

//                 {
//                     stack: [
//                         {
//                             text: `To: ${to}`, 
//                             // style: 'subheader',
//                             margin: [0, 10, 0, 5]
//                         },

//                         {
//                             text: `Address: ${address}`, 
//                             // style: 'subheader',
//                             margin: [0, 10, 0, 5]
//                         },

//                         {
//                             text: `Telephone: ${telephone}`, 
//                             // style: 'subheader',
//                             margin: [0, 10, 0, 5]
//                         },
//                         {
//                             text: `Date Sent: ${dateSent}`, 
//                             // style: 'subheader',
//                             margin: [0, 10, 0, 5]
//                         },
//                         {
//                             text: `Our Contact Person: ${ourContactPerson}`, 
//                             // style: 'subheader',
//                             margin: [0, 10, 0, 5]
//                         },
//                         {
//                             text: `Attention: ${attention}`, 
//                             // style: 'subheader',
//                             margin: [0, 10, 0, 5]
//                         },
//                     ]
//                 },

//                 {
//                     layout: customLayout,
//                     table: {
//                         widths: ['*', '*'],
//                         body: [
//                             ['Order Number', 'Invoice Number'],
//                             [orderNumber, invoiceNumber]

//                         ]
//                     }
//                 },

//                 // {
//                 //     layout: customLayout,
//                 //     table: {
//                 //         widths: ['*', '*', '*'],
//                 //         body: [
//                 //             ['To', 'Order Number', 'Address'],
//                 //             [to, orderNumber, address],
//                 //             ['Date Sent', 'Invoice Number', 'Our Contact Person'],
//                 //             [dateSent, invoiceNumber, ourContactPerson],
//                 //             ['Attention', 'Telephone', 'Description'],
//                 //             [attention, telephone, description]

//                 //         ]
//                 //     }
//                 // },
                

//                 {
//                     text: 'Description & Quantity',
//                     style: 'subheader',
//                 },

//                 {
//                     layout: customLayout,
//                     table: {
//                         widths: ['*', '*'],
//                         body: [
//                             ['Description', 'Quantity Delivered'],
//                             [description, quantityDelivered]
                            
//                         ]
//                     }
//                 },

//                 {
//                     text: 'Delivery Officer Details',
//                     style: 'subheader',
//                 },

//                 {
//                     layout: customLayout,
//                     table: {
//                         widths: ['*', '*', '*'],
//                         body: [
//                             ['Officer Name', 'Officer Signature', 'Officer Date'],
//                             [officerName, officerSignature, officerDate]
//                         ]
//                     }
//                 },

//                 {
//                     text: 'Client Representative(s) Details',
//                     style: 'subheader',
//                 },

//                 {
//                     layout: customLayout,
//                     table: {
//                         widths: ['*', '*', '*'],
//                         body: [
//                             ['Client Name', 'Client Signature', 'Client Date'],
//                             [clientName, clientSignature, clientDate],
//                             ['Client Name 2', 'Client Signature 2', 'Client Date 2'],
//                             [clientName2, clientSignature2, clientDate2],   
//                         ]
//                     }
//                 },


//             ],
//             styles: {
//                 header: {
//                     fontSize: 22,
//                     bold: true,
//                     alignment: 'center'
//                 },
//                 subheader: {
//                     fontSize: 16,
//                     bold: true,
//                     margin: [0, 10, 0, 5]
//                 }
//             }
//         }

//         pdfMake.createPdf(docDefinition).download();
//     };


//     return (
//         <main className="flex min-h-screen flex-col items-center justify-between p-24">
//             <h1 className="text-4xl font-bold mb-8">Delivery</h1>

//             <form className="w-1/2 flex flex-col justify-center" onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-2 gap-x-5">
//                     <div className="flex, flex-col">
//                         <div className="mb-4">
//                             <label className="text-sm font-semibold" htmlFor="to">
//                                 To:
//                             </label>
//                             <input
//                                 className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                                 id="to"
//                                 value={to}
//                                 onChange={(e) => setTo(e.target.value)}
//                             />
//                         </div>

//                         <div className="mb-4">
//                             <label className="text-sm font-semibold" htmlFor="address">
//                                 Address:
//                             </label>
//                             <input
//                                 className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                                 id="address"
//                                 value={address}
//                                 onChange={(e) => setAddress(e.target.value)}
//                             />
//                         </div>

//                         <div className="mb-4">
//                             <label className="text-sm font-semibold" htmlFor="attention">
//                                 Attention:
//                             </label>
//                             <input
//                                 className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                                 id="attention"
//                                 value={attention}
//                                 onChange={(e) => setAttention(e.target.value)}
//                             />
//                         </div>

//                         <div className="mb-4">
//                             <label className="text-sm font-semibold" htmlFor="orderNumber">
//                                 Your Order Number:
//                             </label>
//                             <input
//                                 className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                                 id="orderNumber"
//                                 value={orderNumber}
//                                 onChange={(e) => setOrderNumber(e.target.value)}
//                             />
//                         </div>
//                     </div>

//                     <div className="flex, flex-col">
//                         <div className="mb-4">
//                             <label className="text-sm font-semibold" htmlFor="dateSent">
//                                 Date Sent:
//                             </label>
//                             <input
//                                 className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                                 id="dateSent"
//                                 type="date"
//                                 value={dateSent}
//                                 onChange={(e) => setDateSent(e.target.value)}
//                             />
//                         </div>

//                         <div className="mb-4">
//                             <label className="text-sm font-semibold" htmlFor="invoiceNumber">
//                                 Per Invoice Number:
//                             </label>
//                             <input
//                                 className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                                 id="invoiceNumber"
//                                 value={invoiceNumber}
//                                 onChange={(e) => setInvoiceNumber(e.target.value)}
//                             />
//                         </div>

//                         <div className="mb-4">
//                             <label className="text-sm font-semibold" htmlFor="ourContactPerson">
//                                 Our Contact Person:
//                             </label>
//                             <input
//                                 className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                                 id="ourContactPerson"
//                                 value={ourContactPerson}
//                                 onChange={(e) => setOurContactPerson(e.target.value)}
//                             />
//                         </div>

//                         <div className="mb-4">
//                             <label className="text-sm font-semibold" htmlFor="telephone">
//                                 Telephone:
//                             </label>
//                             <input
//                                 className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                                 id="telephone"
//                                 value={telephone}
//                                 onChange={(e) => setTelephone(e.target.value)}
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-x-5">
//                     <div className="mb-4">
//                         <label className="text-sm font-semibold" htmlFor="description">
//                             Description:
//                         </label>
//                         <input
//                             className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                             id="description"
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="text-sm font-semibold" htmlFor="quantityDelivered">
//                             Quantity Delivered:
//                         </label>
//                         <input
//                             className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                             id="quantityDelivered"
//                             value={quantityDelivered}
//                             onChange={(e) => setQuantityDelivered(e.target.value)}
//                         />
//                     </div>
//                 </div>

//                 <h3 className="mb-4 font-semibold">Delivery Officer Details:</h3>
//                 <div className="grid grid-cols-3 gap-x-5">
//                     <div className="mb-4">
//                         <label className="text-sm font-semibold" htmlFor="officerName">
//                             Name:
//                         </label>
//                         <input
//                             className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                             id="officerName"
//                             value={officerName}
//                             onChange={(e) => setOfficerName(e.target.value)}
//                         />
//                     </div>
//                     {/* <div className="mb-4">
//                         <label className="text-sm font-semibold" htmlFor="officerSignature">
//                             Signature:
//                         </label>
//                         <input
//                             className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                             id="officerSignature"
//                             value={officerSignature}
//                             onChange={(e) => setOfficerSignature(e.target.value)}
//                         />
//                     </div> */}
//                     <div className="mb-4">
//                         <label className="text-sm font-semibold" htmlFor="officerDate">
//                             Date:
//                         </label>
//                         <input
//                             className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                             id="officerDate"
//                             type="date"
//                             value={officerDate}
//                             onChange={(e) => setOfficerDate(e.target.value)}
//                         />
//                     </div>
//                 </div>

//                 <h3 className="mb-4 font-semibold">Client’s Representative Details:</h3>
//                 <div className="grid grid-cols-2 gap-x-5">
//                     <div className="mb-4">
//                         <label className="text-sm font-semibold" htmlFor="clientName">
//                             Name:
//                         </label>
//                         <input
//                             className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                             id="clientName"
//                             value={clientName}
//                             onChange={(e) => setClientName(e.target.value)}
//                         />
//                     </div>
//                     {/* <div className="mb-4">
//                         <label className="text-sm font-semibold" htmlFor="clientSignature">
//                             Signature:
//                         </label>
//                         <input
//                             className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                             id="clientSignature"
//                             value={clientSignature}
//                             onChange={(e) => setClientSignature(e.target.value)}
//                         />
//                     </div> */}
//                     <div className="mb-4">
//                         <label className="text-sm font-semibold" htmlFor="clientDate">
//                             Date:
//                         </label>
//                         <input
//                             className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                             id="clientDate"
//                             type="date"
//                             value={clientDate}
//                             onChange={(e) => setClientDate(e.target.value)}
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="text-sm font-semibold" htmlFor="clientName2">
//                             Name 2:
//                         </label>
//                         <input
//                             className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                             id="clientName2"
//                             value={clientName2}
//                             onChange={(e) => setClientName2(e.target.value)}
//                         />
//                     </div>
//                     {/* <div className="mb-4">
//                         <label className="text-sm font-semibold" htmlFor="clientSignature2">
//                             Signature 2:
//                         </label>
//                         <input
//                             className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                             id="clientSignature2"
//                             value={clientSignature2}
//                             onChange={(e) => setClientSignature2(e.target.value)}
//                         />
//                     </div> */}
//                     <div className="mb-4">
//                         <label className="text-sm font-semibold" htmlFor="clientDate2">
//                             Date 2:
//                         </label>
//                         <input
//                             className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                             id="clientDate2"
//                             type="date"
//                             value={clientDate2}
//                             onChange={(e) => setClientDate2(e.target.value)}
//                         />
//                     </div>
//                 </div>

//                 <div className="flex justify-between mt-8">
//                     <button
//                         type="button"
//                         className="py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
//                         onClick={() => { setTo(''); setOrderNumber(''); setAddress(''); setDateSent(''); setInvoiceNumber(''); setOurContactPerson(''); setAttention(''); setTelephone(''); setDescription(''); setQuantityDelivered(''); setOfficerName(''); setOfficerSignature(''); setOfficerDate(''); setClientName(''); setClientSignature(''); setClientDate(''); setClientName2(''); setClientSignature2(''); setClientDate2(''); }}
//                     >
//                         Reset
//                     </button>
//                     <button
//                         type="submit"
//                         className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         </main>
//     );
// }



// import React, { useState } from 'react';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// import Navbar from '@/components/Navbar';
// import { useRequireAuth } from '../config/useRequireAuth';
// import LoadingSpinner from '@/components/Loader';

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// const VAT_RATE = 0.075;

// const calculateVAT = (invoiceItems) => {
//   let total = 0;
//   invoiceItems.forEach(item => {
//     total += item.quantity * item.price;
//   });
//   return total * VAT_RATE;
// };

// const calculateTotal = (invoiceItems) => {
//   let total = 0;
//   invoiceItems.forEach(item => {
//     total += item.quantity * item.price;
//   });
//   return total + (total * VAT_RATE);
// };

// const InvoiceGenerator = () => {
//   const [address, setAddress] = useState('');
//   const [date, setDate] = useState('');
//   const [projectTitle, setProjectTitle] = useState('');
//   const [projectDescription, setProjectDescription] = useState('');
//   const [poNumber, setPoNumber] = useState('');
//   const [performaInvoice, setPerformaInvoice] = useState('');
//   const [invoiceItems, setInvoiceItems] = useState([]);
//   const [showPreview, setShowPreview] = useState(false);

//   const addInvoiceItem = () => {
//     const newItem = { description: '', quantity: 0, price: 0, cost: 0 };
//     const loading = useRequireAuth();
//     setInvoiceItems([...invoiceItems, newItem]);
//   };

//   const removeInvoiceItem = (index) => {
//     const updatedItems = [...invoiceItems];
//     updatedItems.splice(index, 1);
//     setInvoiceItems(updatedItems);
//   };

//   const togglePreview = () => {
//     setShowPreview(!showPreview);
//   };

//   const generatePDF = async () => {
//     const imageResponse = await fetch('/logo.png');
//     const imageData = await imageResponse.blob();

//     const reader = new FileReader();
//     reader.readAsDataURL(imageData);

//     reader.onloadend = () => {
//       const vat = calculateVAT(invoiceItems);
//       const total = calculateTotal(invoiceItems);

//       const customLayout = {
//         hLineWidth: function (i, node) {
//           return 0.5;
//         },
//         vLineWidth: function (i, node) {
//           return 0.5;
//         },
//         hLineColor: function (i, node) {
//           return '#aaa';
//         },
//         vLineColor: function (i, node) {
//           return '#aaa';
//         },
//         paddingLeft: function (i, node) { return 4; },
//         paddingRight: function (i, node) { return 4; },
//         paddingTop: function (i, node) { return 2; },
//         paddingBottom: function (i, node) { return 2; },
//         fillColor: function (i, node) { return (i === 0) ? '#ddd' : null; },  // Modify as needed for darker shade
//         drawCell: function (cell, dataIndex, rowIndex, point, node) {
//           var doc = node.table.body[rowIndex][dataIndex]._pdf.cell.pdf;
//           var text = cell.text;
//           if (text) {
//             doc.text(text, point.x, point.y, {
//               width: cell.width,
//               text: doc.splitTextToSize(text, cell.width)
//             });
//           }
//         }
//       };

//       const data = {
//         content: [
//           {
//             image: reader.result,
//             width: 350,
//             alignment: 'left',
//           },
//           {
//             text: 'Sample Corp',
//             style: 'header',
//           },
//           {
//             text: 'Sample Street 123',
//             style: 'subheader',
//           },
//           {
//             text: '1234 AB Sampletown, Samplecountry',
//             style: 'subheader',
//             margin: [0, 0, 0, 20],
//           },
//           {
//             text: 'Invoice',
//             style: 'invoiceTitle',
//           },
//           {
//             text: 'Invoice Number: 2021.0001',
//             style: 'subheader',
//             margin: [0, 0, 0, 10],
//           },
//           {
//             text: 'Invoice Date: 12-12-2021',
//             style: 'subheader',
//             margin: [0, 0, 0, 10],
//           },
//           {
//             text: 'Due Date: 31-12-2021',
//             style: 'subheader',
//             margin: [0, 0, 0, 20],
//           },
//           {
//             layout: customLayout,
//             table: {
//               headerRows: 1,
//               widths: ['*', 'auto', 'auto', 'auto'],
//               body: [
//                 ['Description', 'Quantity', 'Unit Price', 'Cost'],
//                 ...invoiceItems.map((item) => [
//                   item.description,
//                   item.quantity,
//                   item.price,
//                   item.quantity * item.price,
//                 ]),
//               ],
//             },
//           },

//           {
//             text: `VAT (7.5%): ${vat.toFixed(2)}`,
//             style: 'subheader',
//             margin: [0, 10, 0, 10],
//           },
//           {
//             text: `Total: ${total.toFixed(2)}`,
//             style: 'header',
//             margin: [0, 0, 0, 20],
//           },
//           {
//             text: 'Kindly pay into Account Name: \n Account Number:',
//             margin: [0, 20, 0, 0],
//           },
//         ],
//       };
//       pdfMake.createPdf(data).download();
//     };
//   };