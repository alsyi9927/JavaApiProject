$(function () {
    // 로그인 입력 정보 체크
	$("#loginCheck").click(function () {

		$.ajax({
			type: "POST",
			url: "/login/signin",
			data: {
				"ID": $("#ID").val(),
				"Password": $("#Password").val()
			},
			success: function (result) {

				if (result == 0) {
					$("#message").html("<p style='color:red'>아이디 또는 비밀번호가 잘못되었습니다.</p>");
				}
				else {
					$("#message").html("<p style='color:blue'>로그인 성공.</p>");
					location.href = "/";
				    }
				}
			})
		})
	})