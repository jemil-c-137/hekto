export default (req, res, next) => {
    // Add CORS headers
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  
    // Handle OPTIONS method
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    
    // Add artificial delay to simulate real-world conditions
    setTimeout(() => {
      next();
    }, 200);
  };