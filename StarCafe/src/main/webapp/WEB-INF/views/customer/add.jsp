<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<jsp:include  page="../header.jsp"></jsp:include>
</head>
<body>
<div>
	<div> 
		<h3>제품 등록</h3>
	</div>
	<div>
		<form action="" method="post">
		
			<div class="mb-3" >
				<label>고객명</label>
				<input class="form-control"  type="text" name="name">
			</div>
			<div class="mb-3">
				<label>전호번호:</label>
				<input class="form-control"  type="text" name="tel">
			</div>

	
			<div>
				<button class="btn btn-primary" >등록</button>
				<a class="btn btn-light" href="../list">취소</a>
			</div>
		</form>
	</div>
</div>
</body>
</html>