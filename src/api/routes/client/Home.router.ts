import {Router} from "express";
import {HomeController} from "../../../app/controllers";

const router = Router();
const homeController = new HomeController();

router.get('/', homeController.home)
router.post('/users', homeController.create)

export default router;