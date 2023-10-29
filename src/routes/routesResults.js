import { Router } from "express";
import { getResults } from "../controllers/controllersChoices.js";

const routerResult = Router()

routerResult.get('poll/:id/result', getResults)

export default routerResult