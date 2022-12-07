const { Router } = require("express");
const router = Router();
const multer = require("multer")
const Technologys = require("../../models/Technologys")

router.get("/technologys", async (req, res) => {
    const technologys = await Technologys.find({});
    res.render("admin/technology", {title: "Technology", technologys})
})

router.get("/addEditTechnology", (req, res) => {
    res.render("admin/addEdit-technology", {title: "New instrument", technology: "Создать новый"})
})

const image_storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images/technologys/")
    },

    filename: function (req, file, cb) {
        const image_filename = Date.now() + file.originalname.split(" ").join("-");
        cb(null, image_filename)
    }
})

const upload = multer({storage: image_storage})

router.post("/addTechnology", upload.single("technologyImg"), (req, res) => {
    
    if(!req.file) {
        req.flash("danger", "Не удалось загрузить изображение");
        res.render("admin/addEdit-technology", {title: "Произошла ошибка при вводе ваших данных", technology: "Создать новый"})
    } else {
        const technology = new Technologys({
            technologyImg: req.file
        })

        technology.save((err) => {
            if(err) console.log(err);
            else {
                req.flash("success", "Ваши данные успешно созданы")
                res.redirect("/admin/technologys")
            }
        })
    }
})

module.exports = router;