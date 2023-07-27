var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'leelaprasanna67@gmail.com',
        pass:'ytpi sccc hczr akxl'
    }
});
var mailOptions={
    from:'leelaprasanna67@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'sending mail from Node-JS Assignment',
    text:'20A21A1201'
}; 
transporter.sendMail(mailOptions,function(error,info){
    if(error) {
        console.log(error);
    }else{
        console.log('Email sent:'+info.response);
    }
});
