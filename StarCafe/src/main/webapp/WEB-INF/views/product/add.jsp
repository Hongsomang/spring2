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
				<label>제품명</label>
				<input class="form-control"  type="text" name="name">
			</div>
			<div class="mb-3">
				<label>가격:</label>
				<input class="form-control" type="number" name="price">
			</div>
			<div class="mb-3">
				<label>구분</label>
				<select class="form-control" name="category">
					<option value="1">음료</option>
					<option value="2">푸드</option>
					<option value="3">상품</option>
					<option value="4">카드</option>
				</select>
				
			</div>
			<div class="mb-3">
				<label>판매여부</label>
				<select class="form-control" name="status">
					<option value="0">판매중지</option>
					<option value="1">판매중</option>
				</select>
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