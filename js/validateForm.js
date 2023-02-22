function validateFormLogin()
{
	var username = $("#txtUserName").val();
	var password = $("#txtPassword").val();
	$.ajax({
		type: "POST",
		url: "/user/ajax_login.php",
		data: {
			username: username,
			password: password
		},
		dataType: "json",
		success: function(response) {
			if (response.status) {
				window.location.reload();
			}
			else {
				alert(response.msg);
			}
		},
		/*error: function() {
			alert("Đăng nhập thất bại - Đã có lỗi xảy ra, vui lòng thử lại sau!");
		}*/
	});
}

function validateFormRegister()
{
	var username = $("#txtUsernameReg").val();
	var password = $("#txtPasswordReg").val();
	var phone = $("#txtPhone").val();
	var email = $("#txtEmailReg").val();
	$.ajax({
		type: "POST",
		url: "/user/ajax_register.php",
		data: {
			username: username,
			password: password,
			email: email,
			phone: phone,
			bypassphone: 1
		},
		dataType: "json",
		success: function(response) {
			if (response.status) {
				window.location.reload();
			}
			else {
				alert(response.msg);
				return false;
			}
		},
		/*error: function(response) {
			alert("Đăng ký thất bại - Đã có lỗi xảy ra, vui lòng thử lại sau!");
		}*/
	});
}
