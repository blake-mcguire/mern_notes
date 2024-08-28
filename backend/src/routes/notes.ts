import express from "express";
import * as NotesController from  "../controllers/nodes";

const router = express.Router();

// THis is a get route for all of our notemodels that were imported from models
router.get("/", NotesController.getNotes);

router.get("/:noteId", NotesController.getNote);

router.post("/", NotesController.createNote)

router.patch("/:noteId", NotesController.updateNote)

router.delete("/:noteId", NotesController.deleteNote);



export default router;