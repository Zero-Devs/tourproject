
import express from 'express';
import { 
    createTour,
    deleteTour,
    getAllTour, 
    getFeaturedTour, 
    getSingleTour,
    getTourBySearch,
    getTourCount,
    updateTour,
     } from '../controllers/tourController.js';

const router = express.Router();

// create New Tour
router.post("/", createTour);

// update Tour
router.put("/:id", updateTour);

// delete Tour
router.delete("/:id", deleteTour);

// getSingle Tour
router.get("/:id", getSingleTour);

// getAll Tours
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch",getTourBySearch);
router.get("/search/getFeaturedTours",getFeaturedTour);
router.get("/search/getTourCount",getTourCount);

export default router ; 

