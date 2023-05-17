import React, { useState } from 'react';
import axios from 'axios';

function SteakMealInput() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [item, setItem] = useState('');
    const [subtotal, setSubtotal] = useState('');
    const [tax, setTax] = useState('');
    const [total, setTotal] = useState('');
    const [transactionNumber, setTransactionNumber] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        firstName,
        lastName,
        item,
        subtotal,
        tax,
        total,
        transactionNumber,
    };

    try {
        const response = await axios.post('/api/meal', data); // Replace '/api/submit' with your actual server endpoint
        setSubmittedData(response.data);
    } catch (error) {
        console.error(error);
    }
    };

    return (
    <div>
        <h2>Submit Form</h2>
        <form onSubmit={handleSubmit}>
        <label>
            First Name:
            <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
        </label>
        <br />
        <label>
            Last Name:
            <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
        </label>
        <br />
        <label>
            Item:
            <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            />
        </label>
        <br />
        <label>
            Subtotal:
            <input
            type="number"
            value={subtotal}
            onChange={(e) => setSubtotal(e.target.value)}
            />
        </label>
        <br />
        <label>
            Tax:
            <input
            type="number"
            value={tax}
            onChange={(e) => setTax(e.target.value)}
            />
        </label>
        <br />
        <label>
            Total:
            <input
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            />
        </label>
        <br />
        <label>
            Transaction Number:
            <input
            type="number"
            value={transactionNumber}
            onChange={(e) => setTransactionNumber(e.target.value)}
            />
        </label>
        <br />
        <button type="submit">Submit</button>
        </form>

        {submittedData && (
        <div>
            <h2>Submitted Data</h2>
            <p>First Name: {submittedData.firstName}</p>
            <p>Last Name: {submittedData.lastName}</p>
            <p>Item: {submittedData.item}</p>
            <p>Subtotal: {submittedData.subtotal}</p>
            <p>Tax: {submittedData.tax}</p>
            <p>Total: {submittedData.total}</p>
            <p>Transaction Number: {submittedData.transactionNumber}</p>
        </div>
        )}
    </div>
    );
}

export default SteakMealInput;