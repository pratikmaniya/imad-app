var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
    
var articles = {
    'article-one' : {
        title: 'Article one | Pratik Maniya',
        heading: 'Article one',
        date: 'February 22, 2018',
        content: `<p>This is content for my first article.</p>`
    },
    'article-two' : {
        title: 'Article two | Pratik Maniya',
        heading: 'Article two',
        date: 'February 28, 2018',
        content: `<p>This is content for my second article.</p>`
    },
    'article-three' : {
        title: 'Article three | Pratik Maniya',
        heading: 'Article three',
        date: 'March 5, 2018',
        content: `<p>This is content for my third article.</p>`
    }
};

function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
    <html>
    	<head>
    		<title>${title}</title>
    		<meta name="viewport" content="width=device-width,initial-scale=1"/>
    		<link href="/ui/style.css" rel="stylesheet" />
    	</head>
    	<body>    
    		<a href="/">Home</a>
    		<hr/>
    		<h3>
    			${heading}
    		</h3>
    		<div>
    			${date}
    		</div>
    		<div>
    			${content}
    		</div>
    	</body>
    </html> 
    `;
    return htmlTemplate;
}

function create(data){
    var s = data.toString();
    return s;
}

app.get('/ui/*', function(req,res) {
    var url = req.originalUrl;
  res.sendFile(path.join(__dirname, create(url)));
});

app.get('/:articleName', function(req,res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/hometree1.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hometree','hometree1.html'));
});

app.get('/ui/contactus.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hometree','contactus.html'));
});

app.get('/ui/signin.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hometree','signin.html'));
});

app.get('/ui/phoneverification.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hometree' ,'phoneverification.html'));
});

app.get('/ui/newuser.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hometree','newuser.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/hometree1.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hometree' ,'style','hometree1.css'));
});

app.get('/ui/contactus.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hometree' ,'style','contactus.css'));
});

app.get('/ui/signin.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hometree' ,'style','signin.css'));
});

app.get('/ui/newuser.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hometree' ,'style','newuser.css'));
});

app.get('/ui/phoneverification.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hometree' ,'style','phoneverification.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/jumbotron.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hometree', 'jumbotron.jpg'));
});

app.get('/ui/plant.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hometree', 'plant.jpg'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
