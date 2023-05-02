import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import Login from "./Login";
//import Form from "./Form";
import { Link } from "react-router-dom";


const BankAccount = () => {

    const [bankDetail, setBankDetails] = useState([])
   
    var total = 0;
    var totalDebit = 0;
    var totalCredit = 0;
    
    
    const bankData = () => {
        setBankDetails(json);
    }

    const calculate = (data) => {
           
     
         data.forEach((item) => {
            
           
            totalCredit += item.transactionType === "credit" && item?.amount;
            totalDebit += item.transactionType === "debit" && item?.amount;
            total = totalCredit - totalDebit;
            console.log(total);
          });  

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
              amount: 800,
            },
            {
              transactionType: "debit",
              amount: 10,
            },
            {
              transactionType: "credit",
              amount: 100,
            },
          ],
        },
        {
          id: 2,
          accountHolder: "abcx test 2",
          phoneNumber: "1231231231",
      
          transactionHistory: [
            {
              transactionType: "credit",
              amount: 100,
            },
            {
              transactionType: "debit",
              amount: 40,
            },
            {
              transactionType: "credit",
              amount: 10,
            },
          ],
        },
        {
          id: 3,
          accountHolder: "abcx test 3",
          phoneNumber: "1231231231",
      
          transactionHistory: [
            {
              transactionType: "credit",
              amount: 500,
            },
            {
              transactionType: "debit",
              amount: 40,
            },
            {
              transactionType: "credit",
              amount: 50,
            },
          ],
        },
        {
          id: 4,
          accountHolder: "abcx test 4",
          phoneNumber: "1231231231",
      
          transactionHistory: [
            {
              transactionType: "credit",
              amount: 500,
            },
            {
              transactionType: "debit",
              amount: 40,
            },
            {
              transactionType: "credit",
              amount: 50,
            },
          ],
        },
      ];
    
    return (
        <>
         

            <h1 style={{ textAlign: 'center', color: 'Blue', margin: '30px,20px', fontFamily: 'fantasy' }}>Bank Details
               
                </h1>
               
                <Link to="/form">Add</Link>{' '}
                <Button variant="warning">Delete</Button>{' '}

            <Table table table-striped variant="light" style={{
                height: '20px', border: "2px solid black"
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
                        <th scope="col" style={{ color: 'red' }}>Total</th>

                    </tr>
                </thead>
                <tbody>
                    {

                        bankDetail.map((value, index) => {
                            return (
                                <>
                                    <tr key={value.id}>
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
                                    <td>{ calculate(value.transactionHistory) } {total}</td>
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