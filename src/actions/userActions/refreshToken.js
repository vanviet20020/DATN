require('dotenv').config();

module.exports = (args) => {
    const { cookies } = args;

    if (!cookies?.jwt) ({ message: 'Unauthorized' });

    // Destructuring refreshToken from cookie
    const refreshToken = cookies.jwt;

    // Verifying refresh token
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err) ({ message: 'Unauthorized' });

            // Correct token we send a new access token
            const accessToken = jwt.sign(
                {
                    username: userCredentials.username,
                    email: userCredentials.email,
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: '15m',
                },
            );
            return { accessToken };
        },
    );
};
