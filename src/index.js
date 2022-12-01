let express = require("express")
let path = require("path")
let hbs = require("hbs")
let app = express()

app.set("view engine", "hbs")
const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath));

const Signup = require("./model/user")
const e = require("express")

let viewsPath = path.join(__dirname, "../templates/views")
app.set("views", viewsPath)

app.use(express.json())
app.use(express.urlencoded({ encoded: false }))


let partialspath = path.join(__dirname, "../templates/partials")
hbs.registerPartials(partialspath)

let connectdb = require("./db/conn.js")
connectdb()


app.get('/', function (req, res) {
    res.render('main', {});
});
app.get('/aboutus', function (req, res) {
    res.render('aboutUs', {});
});
app.get('/articlelist', function (req, res) {
    res.render('article_list', {});
});
app.get('/article', function (req, res) {
    res.render('article', {});
});
app.get('/cart', function (req, res) {
    res.render('cart', {});
});
app.get('/buy', function (req, res) {
    res.render('buyPage', {});
});
app.get('/articleadd', function (req, res) {
    res.render('article_addition', {});
});
app.get('/dash', function (req, res) {
    res.render('dashboard', {});
});
app.get('/ham', function (req, res) {
    res.render('ham', {});
});
app.get('/doc', function (req, res) {
    res.render('know_your_doc', {});
});
app.get('/labtesttype', function (req, res) {
    res.render('lab_test_type', {});
});
app.get('/login', function (req, res) {
    res.render('login', {});
});
app.get('/medicine', function (req, res) {
    res.render('medicine', {});
});
app.get('/testdetails', function (req, res) {
    res.render('testDetails', {});
});
app.get('/writearticle', function (req, res) {
    res.render('write_article', {});
});
app.get('/sign', function (req, res) {
    res.render('signup', {});
});



app.post('/sign', async (req, res) => {
    try {
        const password = req.body.pass_1;
        const cpassword = req.body.pass_2;
        if (password === cpassword) {
            const user = new Signup({
                email: req.body.mail,
                password: req.body.pass_1,
                confirmpassword: req.body.pass_2
            })
            const use = await user.save()
            res.status(201).render("login")
        }
        else {
            res.send("<h1>password are not matching</h1>")
        }
    }
    catch (error) {
        console.log(error)
    }
});

app.post('/login', async (req, res) => {
    try {
        const mail = req.body.mail
        const password = req.body.pass_1

        const user_email = await Signup.findOne({ email: mail });
        if (user_email.password === password) {
            res.status(201).render("dashboard")
        }
        else {
            res.send("password is not matching with database")
        }
    }
    catch (err) {
        res.status(400).send("invalid email")
    }
});

app.use((req, res) => {
    res.status(404).send("<h1>Page not found</h1>");
});



app.listen("3000", (req, res) => {
    console.log('connected to server...')
})