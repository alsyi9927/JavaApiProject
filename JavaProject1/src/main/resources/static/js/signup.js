$(function () {
			// 로그인 입력 정보 체크
			$("#SignupCheck").click(function () {

				$.ajax({
					type: "POST",
					url: "/login/signup",
					data: {
						"ID": $("#ID").val(),
						"userName": $("#userName").val(),
						"Password": $("#Password").val(),
						"Password1": $("#Password1").val()
					},
					success: function (result) {

						if (result == 0) {
							$("#message").html("<p style='color:red'>회원가입 실패.</p>");
						}
						else {
							$("#message").html("<p style='color:blue'>회원가입 성공.</p>");
							location.href = "/login/signin";
					    }
					}
				})
			})
		})