const multer = require("multer");
const path = require("path");
const ErrorHandler = require("../utils/ErrorHandler");

const storage = multer.diskStorage({
    destination: function (req,res,cb){
        cb(null, "./uploads/");
    },
    filename: function (req,file,cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        var stringWithoutSpaces = file.originalname.replace(/\s/g, '');
        const filename = stringWithoutSpaces.split(".")[0];
        cb(null,filename + "-" + uniqueSuffix + ".png");
    },
});

// Define a function to filter only image files
const imageFilter = (req, file, cb) => {
    const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    const fileExtension = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(fileExtension)) {
      return cb(null, true); // Accept the file
    }
    return cb(new ErrorHandler("Only image files are allowed",500));
  };

exports.upload = multer({storage: storage, fileFilter: imageFilter,});