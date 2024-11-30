import React, { useState } from 'react';
import { Box, TextField, Container, Paper, Button } from '@mui/material';
import axios from 'axios';

function Donation() {
  // Inline style for the paper container
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };

  // State variables for form fields
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [donations, setDonations] = useState([]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Post donation details to backend
    try {
      await axios.post('http://localhost:8080/Donation/add', {
        donorName,
        donorEmail,
        amount,
      });
      setDonorName('');
      setDonorEmail('');
      setAmount('');
      alert('Donation added successfully!');
    } catch (error) {
      console.error('There was an error adding the donation!', error);
    }
  };

  // Fetch donations from the backend
  const fetchDonations = async () => {
    try {
      const response = await axios.get('http://localhost:8080/Donation/donation/getAll');
      setDonations(response.data);
    } catch (error) {
      console.error('There was an error fetching the donations!', error);
    }
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1>Add Donation</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="donation-id"
            label="Donation ID"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="donor-name"
            label="Donor Name"
            variant="outlined"
            fullWidth
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
          />
          <TextField
            id="amount"
            label="Amount"
            variant="outlined"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <TextField
            id="donor-email"
            label="Donor Email"
            variant="outlined"
            fullWidth
            value={donorEmail}
            onChange={(e) => setDonorEmail(e.target.value)}
          />
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </Box>
      </Paper>

      <div>
        <Button onClick={fetchDonations} variant="contained" color="primary">
          Fetch Donations
        </Button>
        <ul>
          {donations.map((donation) => (
            <li key={donation.id}>
              {donation.donorName} - {donation.amount}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default Donation;