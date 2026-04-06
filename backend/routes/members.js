const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

// GET all members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find({});
    res.json(members);
  } catch (error) {
    console.log('Falling back to mock seed data due to database error.');
    res.json([
      {
        _id: '1',
        name: 'Sarah Jenkins',
        ieltsScore: 8.5,
        certificates: [
          'https://images.unsplash.com/photo-1546410531-bea5aad104ea?q=80&w=400&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1621808605792-5ebcd48b9976?q=80&w=400&auto=format&fit=crop'
        ],
        achievements: [
          '10+ Years ESL Teaching Experience',
          'Certified IELTS Examiner',
          'MA in Applied Linguistics'
        ]
      },
      {
        _id: '2',
        name: 'David Chen',
        ieltsScore: 8.0,
        certificates: [
          'https://images.unsplash.com/photo-1550503112-9c32cd77c1d7?q=80&w=400&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=400&auto=format&fit=crop'
        ],
        achievements: [
          'Authored 3 Top-selling Test Prep Books',
          'Specialist in Academic Writing',
          'Former Test Center Coordinator'
        ]
      },
      {
        _id: '3',
        name: 'Elena Rostova',
        ieltsScore: 9.0,
        certificates: [
          'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=400&auto=format&fit=crop'
        ],
        achievements: [
          'Perfect Band 9 Scorer',
          'Speaking Module Expert Consultant',
          'Cambridge CELTA Qualified'
        ]
      }
    ]);
  }
});

// POST a new member
router.post('/', async (req, res) => {
  try {
    const newMember = new Member(req.body);
    const savedMember = await newMember.save();
    res.status(201).json(savedMember);
  } catch (error) {
    console.error('Error saving member:', error);
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
});

module.exports = router;
