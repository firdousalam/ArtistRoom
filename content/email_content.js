module.exports.forget_password = function(data)                     
{
  	var email_content   = 	'Hi '+data.name+',<br/><br/> below are the details of your login credential<br/><br/>'+
                            "User Name :  "+data.userName+"<br> <br/>"+
                            "Password : "+data.userPwd+"<br><br><br><br><br "+
							'Thanks <br><br>Team Artist Room ';
    var body	= email_content;      
    var subject = "Forgot Password. ";             
    var email_data    = {body: body,subject:subject};                 
    return email_data;                                       
}