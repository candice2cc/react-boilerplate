/**
 * Created by candice on 17/3/1.
 */
import express from 'express'
let router = express.Router();


router.get('/list', (req, res, next)=> {
    return res.json({
        "errNo": 0,
        "errMsg": "",
        "retData": [
            {
                id:0,
                name: '红楼梦'
            },
            {
                id:1,
                name: '三国演义'
            },
            {
                id:2,
                name: '西游记'
            }
        ]
    })
});
export default router;