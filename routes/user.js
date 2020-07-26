var express = require('express');
var router = express.Router();


// About page route.
router.post('/loginUser', function (req, res) {
	console.log("herrrrrrrree");
	var UserName = req.body.UserName;
	var password = req.body.password;
	if(typeof UserName == 'undefined' || UserName == "")
	{
		res.send('Please provide username.');
		return;
	}
	if(typeof password == 'undefined' || password == "")
	{
		res.send('Please provide password.');
		return;
	}
	var checkSql = "SELECT * from UserProfile where UserName ='"+UserName+"' AND password = '"+password+"'";	
	global.db.query(checkSql, function (err, result) {
		if (err) throw err;
		console.log(result);
		if(result.length>0)
		{
			res.send({error : 0,"message" : "credential match","data" : result});
		}
		else
		{
			res.send({error : 1,"message" : "credential did not match"});
		}
	});
})

router.post('/registerUser', function (req, res) {
	console.log("inside register user");
	var UserName = req.body.UserName;
	if(typeof UserName == 'undefined' || UserName == "")
	{
		res.send('Please provide username.');
		return;
	}
	var Email = req.body.Email;
	if(typeof Email == 'undefined' || Email == "")
	{
		res.send('Please provide Email.');
		return;
	}
	var Password = req.body.Password;
	if(typeof Password == 'undefined' || Password == "")
	{
		res.send('Please provide Password.');
		return;
	}
	//var DateOfBirth = req.body.DateOfBirth;
	var DateOfBirth = new Date();
	if(typeof DateOfBirth == 'undefined' || DateOfBirth == "")
	{
		res.send('Please provide DateOfBirth.');
		return;
	}
	var PrimaryInterest = req.body.PrimaryInterest;
	var AboutMe = req.body.AboutMe;
	var Name     = req.body.Name;
	if(typeof Name == 'undefined' || Name == "")
	{
		res.send('Please provide Name.');
		return;
	}
	var Gender = req.body.Gender;
	var Location = req.body.Location;
	var ContactNumber = req.body.ContactNumber;
	var PaidServices = req.body.PaidServices;
	var Association     = req.body.Association;
		
	var checkSql = "SELECT * from UserProfile where UserName ='"+UserName+"'";
	
	global.db.query(checkSql, function (err, result) {
		if (err) throw err;
		console.log(result);
		if(result.length>0)
		{
			res.send('User with same UserName already exist,Please login');
		}
		else
		{
			var checkSql = "SELECT * from UserProfile where Email ='"+Email+"'";
			
			global.db.query(checkSql, function (err, result) {
				if (err) throw err;
				console.log(result);
				if(result.length>0)
				{
					res.send('User with same UserName already exist,Please login');
				}
				else
				{
					
					var sql ="INSERT into UserProfile (UserName, Email,Password,DateOfBirth,PrimaryInterest,AboutMe,Name,Gender,Location,ContactNumber,PaidServices,Association,CreatedAt,UpdatedAt) VALUES ('"+UserName+"', '"+Email+"','"+Password+"','"+DateOfBirth+"','"+PrimaryInterest+"','"+AboutMe+"','"+Name+"','"+Gender+"','"+Location+"','"+ContactNumber+"','"+PaidServices+"','"+Association+"',NOW(),NOW()); "
					global.db.query(sql, function (err, result) {
						if (err) throw err;
						console.log("1 record inserted");
					});
					res.send('User Inserted successfully');
				}
			});
		}
	});
	
})


router.post('/updateUser', function (req, res) {
	console.log("inside register user");
	var UserName = req.body.UserName;
	if(typeof UserName == 'undefined' || UserName == "")
	{
		res.send('Please provide username.');
		return;
	}
	var Email = req.body.Email;
	if(typeof Email == 'undefined' || Email == "")
	{
		res.send('Please provide Email.');
		return;
	}
	var Password = req.body.Password;
	if(typeof Password == 'undefined' || Password == "")
	{
		res.send('Please provide Password.');
		return;
	}
	//var DateOfBirth = req.body.DateOfBirth;
	var DateOfBirth = new Date();
	if(typeof DateOfBirth == 'undefined' || DateOfBirth == "")
	{
		res.send('Please provide DateOfBirth.');
		return;
	}
	var PrimaryInterest = req.body.PrimaryInterest;
	var AboutMe = req.body.AboutMe;
	var Name     = req.body.Name;
	if(typeof Name == 'undefined' || Name == "")
	{
		res.send('Please provide Name.');
		return;
	}
	var Gender = req.body.Gender;
	var Location = req.body.Location;
	var ContactNumber = req.body.ContactNumber;
	var PaidServices = req.body.PaidServices;
	var Association     = req.body.Association;
	
	var CreatedAt = new Date();
	var UpdatedAt     = new Date();
	
	
			
					
	var sql ="update UserProfile SET Password = '"+Password+"',DateOfBirth = '"+DateOfBirth+"',PrimaryInterest = '"+PrimaryInterest+"',AboutMe = '"+AboutMe+"',Name = '"+Name+"',Gender = '"+Gender+"',Location = '"+Location+"',ContactNumber = '"+ContactNumber+"',PaidServices= '"+PaidServices+"',Association = '"+Association+"',UpdatedAt = NOW() ; ";
	console.log(sql);
	global.db.query(sql, function (err, result) {
		if (err) throw err;
		console.log("1 record inserted");
	});
	res.send('User Updated successfully');
				
})


router.post('/registerAdmin', function (req, res) {
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var mobNo = req.body.mobNo;
	var emailId = req.body.emailId;
	var password = req.body.password;
	
	var checkSql = "SELECT * from admin where email_id ='"+emailId+"'";
	
	global.db.query(checkSql, function (err, result) {
		if (err) throw err;
		console.log(result);
		if(result.length>0)
		{
			res.send('User already exist');
		}
		else
		{
			var sql ="INSERT into admin (first_name, last_name, mob_no,email_id,password) VALUES ('"+firstName+"','"+lastName+"','"+mobNo+"','"+emailId+"','"+password+"'); "
			global.db.query(sql, function (err, result) {
				if (err) throw err;
				console.log("1 record inserted");
			});
			res.send('Admin Inserted successfully');
		}
	});
})



// About page route.
router.post('/loginAdmin', function (req, res) {
	var emailId = req.body.emailId;
	var password = req.body.password;
	
	var checkSql = "SELECT * from admin where email_id ='"+emailId+"' AND password = '"+password+"'";
	global.db.query(checkSql, function (err, result) {
		if (err) throw err;
		console.log(result);
		if(result.length>0)
		{
			res.send({error : 0,"message" : "credential match","data" : result});
		}
		else
		{
			res.send({error : 1,"message" : "credential did not match"});
		}
	});
})

router.route('/forget_password')
.post(function (req, res) {
	// was post method
	//req.body 		= req.query;
	var async 		= require('async');
	var utils   	= require('utility/utils'),
	 	db_query 	= require('db_query/query'),
		constant 	= require("config/constant");
	var response_data = {};
	try{
		async.series([
		function(callback) {
			var validate = require('utility/validate');
			validate.validateForgetPassword(req,res,function(){
				callback();
			})
		},
		function(callback){
			var userName 	= req.body.email;
			var	selection 	= '*',
				table    	= constant.USER_MASTER_TABLE;
			var condition   = [{
								"name" 	: "userEMailId",
								"type"	: constant.VARCHAR100,
								"value"	: userName
							}];
			db_query.selectFromDb(req,res,condition,selection,table,response_data,function(){
				if(response_data.details.length>0)
				{
					if(response_data.details[0].UserActiveStatus == constant.ACTIVE_STATUS)
					{
						response_data.user_details =  response_data.details;
						callback();
					}
					else
					{
						response_data.success = false;
						response_data.message = "Please Enter active User Email Id.";
						res.status(203).send({response_data});
					}
				}
				else
				{
					response_data.success = false;
					response_data.message = "Please Enter valid Email Id.";
					res.status(203).send({response_data});
				}
			})
		},
		function(callback)
		{
			var content = require('content/email_content');
			var email_contains = content.forget_password(response_data.details[0]);
			var send_email = require('utility/email');
			send_email.send_mail(req.body.email,email_contains.subject,email_contains.body);
			callback();
		}

		],function(err) {
			response_data.success = true;
			response_data.message = "Your email and password had being send to you register email account.!";
			res.status(200).send({response_data});
		});
	}catch(err)
    {
        res.status(502).send({err});
    }
});

module.exports = router;