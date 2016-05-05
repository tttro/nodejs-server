/**
 * Routers
 */
import express from 'express';

var createRouter = function() {

    const router = express.Router();

    router.get('/stuff', function (req, res) {
        res.send('hello');
    });


    return router;

}

export default createRouter;