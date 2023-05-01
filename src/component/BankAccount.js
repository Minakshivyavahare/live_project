import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';

const BankAccount = () => {
    const [bankDetail, setBankDetails] = useState([])

    const bankData = () => {
        setBankDetails(json);
    }

    useEffect(() => {
        bankData()

    }, [])
    const json = [
        {
            id: 1,
            accountHolder: "abcx test 1",
            phoneNumber: "1231231231",

            transactionHistory: [
                {
                    transactionType: "credit",
                    amount: "800$",
                },
                {
                    transactionType: "debit",
                    amount: "10$",
                },
                {
                    transactionType: "credit",
                    amount: "100$",
                },
            ],
        },
        {
            id: 1,
            accountHolder: "abcx test 2",
            phoneNumber: "1231231231",

            transactionHistory: [
                {
                    transactionType: "credit",
                    amount: "100$",
                },
                {
                    transactionType: "debit",
                    amount: "40$",
                },
                {
                    transactionType: "credit",
                    amount: "10$",
                },
            ],
        },
        {
            id: 1,
            accountHolder: "abcx test 3",
            phoneNumber: "1231231231",

            transactionHistory: [
                {
                    transactionType: "credit",
                    amount: "500$",
                },
                {
                    transactionType: "debit",
                    amount: "40$",
                },
                {
                    transactionType: "credit",
                    amount: "50$",
                },
            ],
        },
        {
            id: 1,
            accountHolder: "abcx test 4",
            phoneNumber: "1231231231",

            transactionHistory: [
                {
                    transactionType: "credit",
                    amount: "500$",
                },
                {
                    transactionType: "debit",
                    amount: "40$",
                },
                {
                    transactionType: "credit",
                    amount: "50$",
                },
            ],
        },
    ];

    return (
        <>

     
    <h1 style={{ textAlign: 'center', color: 'Blue', margin: '30px,20px', fontFamily: 'fantasy' }}><u>Bank Details<Button variant="success" style={{marginLeft:'20px'}}>+</Button></u></h1>
    
            <Table table table-striped variant="light" style={{ height: '20px', border: "2px solid black"
         }}>
                
                <thead>
                    <tr>
                        <th scope="col" style={{ color: 'red' }}>Id</th>
                        <th scope="col" style={{ color: 'red' }}>Account Holder</th>
                        <th scope="col" style={{ color: 'red' }}>Phone Number</th>
                        <th scope="col" style={{ color: 'red' }}>Transaction Type</th>
                        <th scope="col" style={{ color: 'red' }}>Amount</th>
                        <th scope="col" style={{ color: 'red' }}>Transaction Type</th>
                        <th scope="col" style={{ color: 'red' }}>Amount</th>
                        <th scope="col" style={{ color: 'red' }}>Transaction Type</th>
                        <th scope="col" style={{ color: 'red' }}>Amount</th>

                    </tr>
                </thead>
                <tbody>
                    {

                        bankDetail.map((value, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{value.id}</td>
                                        <td>{value.accountHolder}</td>
                                        <td>{value.phoneNumber}</td>

                                        {
                                            value.transactionHistory.map((c, i) => {
                                                return (
                                                    <>
                                                        <td>{c.transactionType}</td>
                                                        <td>{c.amount}</td>
                                                    </>

                                                )
                                            })
                                        }

                                    </tr>

                                </>

                            )

                        })
                    }
                </tbody>
            </Table>

        </>
    )
}

export default BankAccount;