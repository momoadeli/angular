const fakeUser = require('./shared/user.fake');
const express = require('express');
// Create a new express application instance
const app = express();
app.use('/api/login', (req, res, next) => {
    // res.send('hello from express');
    // let user = { uid, userName: ENUM_LOGIN_FAKE.UID, timeLoggedIn: ENUM_LOGIN_FAKE.PWD }
    return res.status(201).json(fakeUser);
    // return res.status(201).json({
    //   data: {
    //     uid: '5das9as75aR5QW ',
    //     userName: 'moadeli',
    //     timeLoggedIn: '1586460969108' // Date.now()
    //   }
    // });
});
module.exports = app;
//# sourceMappingURL=app.js.map