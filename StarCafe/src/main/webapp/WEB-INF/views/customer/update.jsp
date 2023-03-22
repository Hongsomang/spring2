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
		<h3>제품 수정</h3>
	</div>
	<div>
		<form action="" method="post">
			<div class="mb-3" >
				<label>아이디</label>
				<input class="form-control"  type="number" name="id" value="${item.id }" readonly="readonly">
			</div>
			<div class="mb-3" >
				<label>제품명</label>
				<input class="form-control"  type="text" name="name" value="${item.name}">
			</div>
			<div class="mb-3">
				<label>전화번호:</label>
				<input class="form-control"  type="text" name="tel" value="${item.tel }">
			</div>
			<div class="mb-3">
				<label>포인트</label>
				<input class="form-control"  type="number" name="point" value="${item.point }">
				
			</div>
			<div>
				<button class="btn btn-primary" >수정</button>
				<a class="btn btn-light" href="../list">취소</a>
			</div>
		</form>
	</div>
</div>
</body>
</html>