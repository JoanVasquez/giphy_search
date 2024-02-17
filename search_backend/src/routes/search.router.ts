import express, { Router } from "express";
import { container } from "tsyringe";
import SearchController from "../controllers/search.controller";
import SearchService from "../services/search.service";

const router: Router = express.Router();
container.register("IService", { useClass: SearchService });
const searchController = container.resolve(SearchController);

router.get("/search", searchController.findAll);
router.post("/search", searchController.save);


export default router;
