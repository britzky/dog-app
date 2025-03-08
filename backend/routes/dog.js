import express from 'express';
import axios from 'axios';

const router = express.Router();

const getDog = async (req, res) => {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/images/search', {
            headers: { 'x-api-key': process.env.DOG_API_KEY }
        });
        const data = response.data;
        console.log(data[0]);
        res.json(data[0]);
    } catch (error) {
        console.log(error);
    }
}

router.get('/', getDog)
export default router;

/*
    data object structure
{
  breeds: [
    {
      weight: [Object],
      height: [Object],
      id: 259,
      name: 'Wire Fox Terrier',
      bred_for: 'Vermin hunting, fox bolting',
      life_span: '13 – 14 years',
      history: ' England',
      temperament: 'Fearless, Friendly, Bold, Keen, Alert, Quick',
      reference_image_id: 'SJ6f2g9EQ'
    }
  ],
  id: 'SJ6f2g9EQ',
  url: 'https://cdn2.thedogapi.com/images/SJ6f2g9EQ_1280.jpg',
  width: 1000,
  height: 795
}
*/