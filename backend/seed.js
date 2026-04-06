require('dotenv').config();
const mongoose = require('mongoose');
const Member = require('./models/Member');

const membersData = [
  {
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
];

const mongoURI = process.env.MONGO_URI || 'mongodb://admin:password@localhost:27017/team_showcase?authSource=admin';

mongoose
  .connect(mongoURI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await Member.deleteMany({});
    console.log('Cleared existing members');
    await Member.insertMany(membersData);
    console.log('Added seeded members');
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('Error seeding data:', err);
    mongoose.disconnect();
  });
