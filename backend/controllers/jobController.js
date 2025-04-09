import axios from 'axios';

export const fetchJobs = async (req, res) => {
  const { query = 'developer', page = 1 } = req.query;

  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {
      query,
      page,
      num_pages: 1,
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data.data);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Failed to fetch jobs from API' });
  }
};
