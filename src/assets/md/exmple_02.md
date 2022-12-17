## How to get the index of an element in a HTML collection when that element is clicked, using javascript

You can get the desired output with this solution
```
function execute() {
    var btns = document.querySelectorAll('.item');
    btns.forEach(btnClicked);
    
}
function btnClicked(btn,index) {
    btn.addEventListener('click',()=>{
        console.log(index)
    });
}
```
This is a cleaner way of achieving that.
 
## Express middleware lose res.locals after I post form

As your form is sending the post or put request, which it should be, your `app.get()` is not executing in the form submission. 

Just change your code to this
```
app.use( (req, res, next) => {
    req.session.theme = req.query.theme || req.session.theme || 'light';
    res.locals.theme = req.session.theme;
    next();
});
```
I hope that will fix the issue, if it doesn't please let me know.

## Errors when try to render a Section List

It looks like you are trying to pass an array of data in this line 

    const dataEmbaralhada = embaralhar(data);

Which expects an array, but in `SectionList`

`const {data, esporte, quantidadeTimes} = route.params;`

you have destructured `data` that may not be present in `route.params`,which gets passed in the `embaralhar` function as an `undefined`, then you are trying to loop through that `undefined` in the `embaralhar` function which I assume is throwing `Cannot read property 'length' of undefined`. Also another reason could be nothing is returned from `embaralhar`. As `separarTimes` is also dependent on `data` it will also break for same reason. Furthermore according to my knowledge it's not possible to pass an array in the `route.params` nor is a good idea to do so. Try to extract data in other means. Like as `props` or using `context API`. Hopefully that helps. Try this.     

## Multer req.file is undefined - using with Node/Express for image upload to s3

In your `index.js` you can bring 
```
    const upload = require("../services/imageUpload");
```
at the top and then initialize the multer middleware here 
```
    //Middleware
    app.use(cors());
    app.use(express.json());
    app.use(upload.single("image"))
```
then in `routes.imageUpload.js` you can read the uploaded file like this 
```
    router.post("/", function (req, res) {
        let fileDetails = req.files
        console.log(fileDetails )
        .
        .
        .
    });
```
Or if you only need the uploader in your `routes.imageUpload.js` you can just use the middleware like this ,

```
    const express = require("express");
    const router = express.Router();
    const upload = require("../services/imageUpload");

    const singleUpload = upload.single("image");

    router.post("/",[singleUpload],function (req, res) {
        let fileDetails = req.files
        console.log(fileDetails )
        .
        .
        .
    });
```