const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    }
    , filename: (req, file, cb) => {
        // split('.') devuelve un array con los elementos separados por el separador indicado. 
        //pop() devuelve el ultimo elemento del array.
        const extensionFile = file.originalname.split('.').pop(); 

        // Se define el nombre del archivo
        const filename = `file-${Date.now()}.${extensionFile}`; 
        cb(null, filename);
    }
})

const uploadMidleware = multer({ storage });

module.exports = uploadMidleware;