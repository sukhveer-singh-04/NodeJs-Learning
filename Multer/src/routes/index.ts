import  Express  from "express";
import { multipleFiles, uploadFile} from "../controller";
import { upload } from "../middleware/multer";
const router = Express.Router();

router.post('/upload-single', upload.single('file') , uploadFile);

router.post('/upload-multiple', upload.array('files', 3) , multipleFiles);

export {router}; 