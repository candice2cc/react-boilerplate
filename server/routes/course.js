/**
 * Created by candice on 17/3/1.
 */
import express from 'express'
let router = express.Router();


router.get('/list', (req, res, next)=> {
    return res.json({
        "errNum": 0,
        "errMsg": "",
        "retData": [
            {
                id:0,
                name:'高等数学'
            },
            {
                id:1,
                name:'大学英语'
            },
            {
                id:2,
                name:'计算机组成原理'
            }
        ]
    })
});
export default router;