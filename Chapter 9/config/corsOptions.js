// custom middleware logger
const whitelist = [
    'http://localhost:3500', 
    'https://www.yoursite.com'
];

// Al momento de tener un host, no se debe usar !origin, ya que se puede tener un problema de seguridad, por lo que se recomienda usar el host
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true); // null = no error, true = allow access
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

exports.corsOptions = corsOptions; // export corsOptions