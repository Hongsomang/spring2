<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<jsp:include page="../header.jsp"></jsp:include>
  
  
  <!-- ${pageContext.request.contextPath} -->
</head>
<body>
	<div>
		<div>
			<h3>고객목록</h3>
		</div>
		<div>
			<form>
				<div class="row mb-2">
					<div class="col-1">
						<select name="search" class=" form-select-sm form-select">
							<option value="0">검색항목</option>
							<option value="1">고객번호</option>
							<option value="2">고객명</option>
							<option value="3">전호번호</option>
							<option value="4">포인트</option>
					
						</select>
					</div>
					<div class="col-2" >
						<input name="keyword" type="text" class="form-control  form-control-sm keyword-all keyword-1 keyword-2">
					</div>
					
					
				
					<div class="col-1">
						<button class="btn btn-sm btn-primary">검색</button>
					</div>
				</div>
			</form>
		</div>
		<div>
			<table border="1" class="table">
				<thead>
					<tr>
						<th scope="col">고객명번호</th>
						<th scope="col">고객명</th>
						<th scope="col">전호번호</th>
						<th scope="col">포인트</th>
						<th scope="col">관리</th>
					</tr>
				</thead>

				<tbody class="table-group-divider">
					<c:if test="${list.size() < 1 }">
						<tr scope="row">
							<td colspan="6">등록 된 제품이 없습니다.</td>
						</tr>
					</c:if>
					<c:forEach items="${list}" var="item">
						<tr scope="row">
							<td>${item.id }</td>
							<td>${item.name }</td>
							<td>${item.tel }</td>
							<td>${item.point }</td>
						
							<td><a class="btn btn-warning" href="update/${item.id}">변경</a><a
								class="btn btn-danger" href="delete/${item.id }">삭제</a></td>
						</tr>
					</c:forEach>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="6">
							<ol style="margin: 0"
								class="pagination pagination-sm justify-content-center">
								<li class="page-item"><a class="page-link" href="?page=1${pager.query}">
										처음</a></li>
								<li class="page-item"><a class="page-link"
									href="?page=${pager.prev} ${pager.query}"> 이전</a></li>
								<c:forEach items="${pager.list }" var="page">
									<li class="page-item ${page eq pager.page  ? 'active' : '' }"><a
										class="page-link" href="?page=${page}${pager.query}"> ${page}</a></li>
								</c:forEach>

								<li class="page-item"><a class="page-link"
									href="?page=${pager.next}${pager.query}"> 다음</a></li>
								<li class="page-item"><a class="page-link"
									href="?page=${pager.last}${pager.query}"> 마지막</a></li>
							</ol>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
		<div>
		 <a class="btn btn-success" href="init">전체 삭제</a>
		</div>
		<div>
			<a class="btn btn-primary" href="add">고객 추가</a> <a class="btn btn-light"
				href="../">이전</a>
		</div>
	</div>
</body>
</html>