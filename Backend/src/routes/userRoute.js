import express from 'express'
import { User } from '../models/user.models.js';
const router = express.Router();

// router.get('/signup', async (req ,res)=>{
//     const data = await User.find();
//     res.send(data);
// })

// router.get('/signup/:id', async (req ,res)=>{
//     const data = await User.findById(req.params.id);
//     res.send(data);
// })

// router.post('/signup', async (req ,res)=>{
//     const data = await User.create(req.body);
//     res.send(data);
// })

// router.patch('/signup/:id', async (req ,res)=>{
//     const data = await User.findByIdAndUpdate(req.params.id);
//     res.send(data);
// })

// router.delete('/signup/:id', async (req ,res)=>{
//     const data = await User.findByIdAndDelete(req.params.id);
//     res.send(data);
// })

router.get('/signup', async (req ,res)=>{
    const data = await User.find();
    res.send(data);
})

router.get('/signup/:id', async (req ,res)=>{
    const data = await User.findById(req.params.id);
    res.send(data);
})

router.post('/signup', async (req ,res)=>{
    const data = await User.create(req.body);
    res.send(data);
})

router.patch('/signup/:id', async (req ,res)=>{
    const data = await User.findByIdAndUpdate(req.params.id);
    res.send(data);
})

router.delete('/signup/:id', async (req ,res)=>{
    const data = await User.findByIdAndDelete(req.params.id);
    res.send(data);
})


export default router