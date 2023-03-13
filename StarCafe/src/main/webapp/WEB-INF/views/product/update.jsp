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
			<div>
				<label>제품명</label>
				<input type="text" name="name" value="${item.name }">
			</div>
			<div>
				<label>가격:</label>
				<input type="number" name="price" value="${item.price }">
			</div>
			<div>
				<label>구분</label>
				<select name="category" >
					<option value="1" ${item.category ==1 ? 'selected':''  }>음료</option>
					<option value="2" ${item.category ==2 ? 'selected':''  } >푸드</option>
					<option value="3" ${item.category ==3 ? 'selected':''  }>상품</option>
					<option value="4" ${item.category ==4 ? 'selected':''  }>카드</option>
				</select>
				
			</div>
			<div>
				<label>판매여부</label>
				<select name="status">
					<option value="0" ${item.status ==0 ? 'selected':''  }>판매중지</option>
					<option value="1" ${item.status ==1 ? 'selected':''  }>판매중</option>
				</select>
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