import { useState } from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import Navbar from '@/components/Navbar';
import { useRequireAuth } from '../config/useRequireAuth';
import LoadingSpinner from '@/components/Loader';
import { auth, db } from '@/config/firebase';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function DeliveryForm() {
    const [to, setTo] = useState('');
    const [orderNumber, setOrderNumber] = useState('');
    const [address, setAddress] = useState('');
    const [dateSent, setDateSent] = useState('');
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [ourContactPerson, setOurContactPerson] = useState('');
    const [attention, setAttention] = useState('');
    const [telephone, setTelephone] = useState('');
    const [description, setDescription] = useState('');
    const [quantityDelivered, setQuantityDelivered] = useState('');
    const [officerName, setOfficerName] = useState('');
    const [officerSignature, setOfficerSignature] = useState('');
    const [officerDate, setOfficerDate] = useState('');
    const [clientName, setClientName] = useState('');
    const [clientSignature, setClientSignature] = useState('');
    const [clientDate, setClientDate] = useState('');
    const [clientName2, setClientName2] = useState('');
    const [clientSignature2, setClientSignature2] = useState('');
    const [clientDate2, setClientDate2] = useState('');
    const loading = useRequireAuth();

    if (loading) {
        return <LoadingSpinner/>;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const imageResponse = await fetch('/logo.png');
        const imageData = await imageResponse.blob();
        const reader = new FileReader();

        reader.onloadend = async () => {
            const customLayout = {
                hLineWidth: function (i, node) {
                    return 0.5;
                },
                vLineWidth: function (i, node) {
                    return 0.5;
                },
                hLineColor: function (i, node) {
                    return '#aaa';
                },
                vLineColor: function (i, node) {
                    return '#aaa';
                },
                paddingLeft: function (i, node) { return 4; },
                paddingRight: function (i, node) { return 4; },
                paddingTop: function (i, node) { return 2; },
                paddingBottom: function (i, node) { return 2; },
                fillColor: function (i, node) { return (i === 0) ? '#ddd' : null; },
            };


            const docDefinition = {
                content: [
    
                    {
                        image: reader.result,
                        width: 350,
                        alignment: 'center',
                    },
                    {
                        text: 'Delivery Form',
                        style: 'header',
                        margin: [0, 20, 0, 20]
                    },
    
                    {
                        stack: [
                            {
                                text: [
                                    { text: 'To: ', bold: true },
                                    { text: `${to}` }
                                ],
                                margin: [0, 10, 0, 5]
                            },
                            {
                                text: [
                                    { text: 'Address: ', bold: true },
                                    { text: `${address}` }
                                ],
                                margin: [0, 10, 0, 5]
                            },
                            {
                                text: [
                                    { text: 'Telephone: ', bold: true },
                                    { text: `${telephone}` }
                                ],
                                margin: [0, 10, 0, 5]
                            },
                            {
                                text: [
                                    { text: 'Date Sent: ', bold: true },
                                    { text: `${dateSent}` }
                                ],
                                margin: [0, 10, 0, 5]
                            },
                            {
                                text: [
                                    { text: 'Our Contact Person: ', bold: true },
                                    { text: `${ourContactPerson}` }
                                ],
                                margin: [0, 10, 0, 5]
                            },
                            {
                                text: [
                                    { text: 'Attention: ', bold: true },
                                    { text: `${attention}` }
                                ],
                                margin: [0, 10, 0, 5]
                            },
                        ]
                        
                    },
    
                    {
                        text: '',
                        style: 'subheader',
                    },
    
                    {
                        layout: customLayout,
                        table: {
                            widths: ['*', '*'],
                            body: [
                                ['Order Number', 'Invoice Number'],
                                [orderNumber, invoiceNumber]
    
                            ]
                        }
                    },
                    
                    {
                        text: 'Description & Quantity',
                        style: 'subheader',
                    },
    
                    {
                        layout: customLayout,
                        table: {
                            widths: ['*', '*'],
                            body: [
                                ['Description', 'Quantity Delivered'],
                                [description, quantityDelivered]
                                
                            ]
                        }
                    },
    
                    {
                        text: 'Delivery Officer Details',
                        style: 'subheader',
                    },
    
                    {
                        layout: customLayout,
                        table: {
                            widths: ['*', '*', '*'],
                            body: [
                                ['Officer Name', 'Officer Signature', 'Officer Date'],
                                [officerName, officerSignature, officerDate]
                            ]
                        }
                    },
    
                    {
                        text: 'Client Representative(s) Details',
                        style: 'subheader',
                    },
    
                    {
                        layout: customLayout,
                        table: {
                            widths: ['*', '*', '*'],
                            body: [
                                ['Client Name', 'Client Signature', 'Client Date'],
                                [clientName, clientSignature, clientDate],   
                            ]
                        }
                    },
    
                    {
                        layout: customLayout,
                        table: {
                            widths: ['*', '*', '*'],
                            body: [
                                ['Client Name 2', 'Client Signature 2', 'Client Date 2'],
                                [clientName2, clientSignature2, clientDate2],   
                            ]
                        }
                    },
    
    
                ],
                styles: {
                    header: {
                        fontSize: 22,
                        bold: true,
                        alignment: 'center'
                    },
                    subheader: {
                        fontSize: 16,
                        bold: true,
                        margin: [0, 10, 0, 5]
                    }
                }
            }


            const deliveryData = {
                to,
                address,
                telephone,
                dateSent,
                ourContactPerson,
                attention,
                orderNumber,
                invoiceNumber,
                description,
                quantityDelivered,
                officerName,
                officerSignature,
                officerDate,
                clientName,
                clientSignature,
                clientDate,
                clientName2,
                clientSignature2,
                clientDate2
            };
        
            // add to firestore
            const user = auth.currentUser;
            if (user) {
                const deliveriesRef = db.collection('deliveries').doc();
                await deliveriesRef.set(deliveryData, { merge:false });
            } else {
                alert("No user is currently logged in");
            }
    

            pdfMake.createPdf(docDefinition).download();
        };

        reader.readAsDataURL(imageData);
    };


    return (
        <>
        <Navbar/>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Delivery</h1>

            <form className="w-1/2 flex flex-col justify-center bg-white p-16 shadow-lg rounded" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-x-5">
                    <div className="flex, flex-col">
                        <div className="mb-4">
                            <label className="text-sm font-semibold" htmlFor="to">
                                To:
                            </label>
                            <input
                                className="border border-gray-300 rounded-md px-2 py-1 w-full"
                                id="to"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-sm font-semibold" htmlFor="address">
                                Address:
                            </label>
                            <input
                                className="border border-gray-300 rounded-md px-2 py-1 w-full"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-sm font-semibold" htmlFor="attention">
                                Attention:
                            </label>
                            <input
                                className="border border-gray-300 rounded-md px-2 py-1 w-full"
                                id="attention"
                                value={attention}
                                onChange={(e) => setAttention(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-sm font-semibold" htmlFor="orderNumber">
                                Your Order Number:
                            </label>
                            <input
                                className="border border-gray-300 rounded-md px-2 py-1 w-full"
                                id="orderNumber"
                                value={orderNumber}
                                onChange={(e) => setOrderNumber(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex, flex-col">
                        <div className="mb-4">
                            <label className="text-sm font-semibold" htmlFor="dateSent">
                                Date Sent:
                            </label>
                            <input
                                className="border border-gray-300 rounded-md px-2 py-1 w-full"
                                id="dateSent"
                                type="date"
                                value={dateSent}
                                onChange={(e) => setDateSent(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-sm font-semibold" htmlFor="invoiceNumber">
                                Per Invoice Number:
                            </label>
                            <input
                                className="border border-gray-300 rounded-md px-2 py-1 w-full"
                                id="invoiceNumber"
                                value={invoiceNumber}
                                onChange={(e) => setInvoiceNumber(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-sm font-semibold" htmlFor="ourContactPerson">
                                Our Contact Person:
                            </label>
                            <input
                                className="border border-gray-300 rounded-md px-2 py-1 w-full"
                                id="ourContactPerson"
                                value={ourContactPerson}
                                onChange={(e) => setOurContactPerson(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-sm font-semibold" htmlFor="telephone">
                                Telephone:
                            </label>
                            <input
                                className="border border-gray-300 rounded-md px-2 py-1 w-full"
                                id="telephone"
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-5">
                    <div className="mb-4">
                        <label className="text-sm font-semibold" htmlFor="description">
                            Description:
                        </label>
                        <input
                            className="border border-gray-300 rounded-md px-2 py-1 w-full"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm font-semibold" htmlFor="quantityDelivered">
                            Quantity Delivered:
                        </label>
                        <input
                            className="border border-gray-300 rounded-md px-2 py-1 w-full"
                            id="quantityDelivered"
                            value={quantityDelivered}
                            onChange={(e) => setQuantityDelivered(e.target.value)}
                        />
                    </div>
                </div>

                <h3 className="mb-4 font-semibold">Delivery Officer Details:</h3>
                <div className="grid grid-cols-3 gap-x-5">
                    <div className="mb-4">
                        <label className="text-sm font-semibold" htmlFor="officerName">
                            Name:
                        </label>
                        <input
                            className="border border-gray-300 rounded-md px-2 py-1 w-full"
                            id="officerName"
                            value={officerName}
                            onChange={(e) => setOfficerName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-sm font-semibold" htmlFor="officerDate">
                            Date:
                        </label>
                        <input
                            className="border border-gray-300 rounded-md px-2 py-1 w-full"
                            id="officerDate"
                            type="date"
                            value={officerDate}
                            onChange={(e) => setOfficerDate(e.target.value)}
                        />
                    </div>
                </div>

                <h3 className="mb-4 font-semibold">Client’s Representative Details:</h3>
                <div className="grid grid-cols-2 gap-x-5">
                    <div className="mb-4">
                        <label className="text-sm font-semibold" htmlFor="clientName">
                            Name:
                        </label>
                        <input
                            className="border border-gray-300 rounded-md px-2 py-1 w-full"
                            id="clientName"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-sm font-semibold" htmlFor="clientDate">
                            Date:
                        </label>
                        <input
                            className="border border-gray-300 rounded-md px-2 py-1 w-full"
                            id="clientDate"
                            type="date"
                            value={clientDate}
                            onChange={(e) => setClientDate(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm font-semibold" htmlFor="clientName2">
                            Name 2:
                        </label>
                        <input
                            className="border border-gray-300 rounded-md px-2 py-1 w-full"
                            id="clientName2"
                            value={clientName2}
                            onChange={(e) => setClientName2(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-sm font-semibold" htmlFor="clientDate2">
                            Date 2:
                        </label>
                        <input
                            className="border border-gray-300 rounded-md px-2 py-1 w-full"
                            id="clientDate2"
                            type="date"
                            value={clientDate2}
                            onChange={(e) => setClientDate2(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-end mt-8">
                    <button
                        type="button"
                        className="py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none mr-5"
                        onClick={() => { setTo(''); setOrderNumber(''); setAddress(''); setDateSent(''); setInvoiceNumber(''); setOurContactPerson(''); setAttention(''); setTelephone(''); setDescription(''); setQuantityDelivered(''); setOfficerName(''); setOfficerSignature(''); setOfficerDate(''); setClientName(''); setClientSignature(''); setClientDate(''); setClientName2(''); setClientSignature2(''); setClientDate2(''); }}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </main>
        </>
    );
}
