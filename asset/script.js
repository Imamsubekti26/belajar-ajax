// printData ----------------------------------------------------------------------------------------------
function getData(){
	$("#load-data-here").html("");
	$.ajax({
		type : "GET",
		url : "controller/getData.php",
		data : "",
		success : function(result){
			var resultObj = JSON.parse(result);
			var no = 1;
			$.each(resultObj, function(key,val){
				var data = $("<tr>");
				data.html("<td>"+no+"</td><td>"+val.nama+"</td><td>"+val.kondisi+"</td><td><button class='btn btn-sm btn-primary edit-data' id='"+val.id+"'>edit</button> <button class='btn btn-sm btn-danger hapus-data' id='"+val.id+"'>hapus</button></td>");
				$("#load-data-here").append(data);
				no++;
			})
		}
	})
}
getData();

// tambahData ---------------------------------------------------------------------------------------------
function addData(){
	var namaBarang = $("[name='nama']").val();
	var konBarang = $("[name='kondisi']").val();
	$.ajax({
		type : "POST",
		url : "controller/addData.php",
		data : "nama="+namaBarang+"&kon="+konBarang,
		success : function(result){
			$("#nama").val("");
			$("#kondisi").val("");
			$("#close-modal").click();
			alert(result);
			getData();
		}
	})
}

// hapusData ----------------------------------------------------------------------------------------------
$(document).on("click", ".hapus-data", function(){
	var hapusID = $(this).attr("id");
	var confirmasi = confirm("Yakin menghapus data?");
	if (confirmasi == true) {
		$.ajax({
			type : "POST",
			url : "controller/delData.php",
			data : "id="+hapusID,
			success : function(result){
				alert(result);
				getData();
			}
		})
	}
})

// tombol tambah onclick ----------------------------------------------------------------------------------
	$("#tambah-data").on("click", function(){
		$("#nama").val("");
		$("#kondisi").val("");
		$("#submit-edit").hide();
		$("#submit").show();
	});

// updateData ---------------------------------------------------------------------------------------------
$(document).on("click", ".edit-data", function(){
	var sendID = $(this).attr("id");
	$.ajax({
		type : "POST",
		url : "controller/getDataUpdate.php",
		data : "id="+sendID,
		success : function(result){
			var resultObj = JSON.parse(result);
			$.each(resultObj, function(key,val){
				$("#tambah-data").click();
				$("#nama").val(val.nama);
				$("#kondisi").val(val.kondisi);
				$("#idBarangHere").val(val.id);
				$("#submit").hide();
				$("#submit-edit").show();
			})
		}
	})
})
function upData(){
	var idBarang = $("#idBarangHere").val();
	var namaBarang = $("[name='nama']").val();
	var konBarang = $("[name='kondisi']").val();
	$.ajax({
		type : "POST",
		url : "controller/upData.php",
		data : "id="+idBarang+"&nama="+namaBarang+"&kon="+konBarang,
		success : function(result){
			$("#nama").val("");
			$("#kondisi").val("");
			$("#close-modal").click();
			alert(result);
			getData();
		}
	})
}