var regionData = {
  "서울특별시": {
    "강남구": 11680,
    "강동구": 11740,
    "강북구": 11305,
    "강서구": 11500,
    "관악구": 11620,
    "광진구": 11215,
    "구로구": 11530,
    "금천구": 11545,
    "노원구": 11350,
    "도봉구": 11320,
    "동대문구": 11230,
    "동작구": 11590,
    "마포구": 11440,
    "서대문구": 11410,
    "서초구": 11650,
    "성동구": 11200,
    "성북구": 11290,
    "송파구": 11710,
    "양천구": 11470,
    "영등포구": 11560,
    "용산구": 11170,
    "은평구": 11380,
    "종로구": 11110,
    "중구": 11140,
    "중랑구": 11260
  },
  "부산광역시": {
    "강서구": 26440,
    "금정구": 26410,
    "기장군": 26710,
    "남구": 26290,
    "동구": 26170,
    "동래구": 26260,
    "부산진구": 26230,
    "북구": 26320,
    "사상구": 26530,
    "사하구": 26380,
    "서구": 26140,
    "수영구": 26500,
    "연제구": 26470,
    "영도구": 26200,
    "중구": 26110,
    "해운대구": 26350
  },
  "대구광역시": {
    "남구": 27200,
    "달서구": 27290,
    "달성군": 27710,
    "동구": 27140,
    "북구": 27230,
    "서구": 27170,
    "수성구": 27260,
    "중구": 27110
  },
  "인천광역시": {
    "강화군": 28710,
    "계양구": 28245,
    "남동구": 28200,
    "동구": 28140,
    "미추홀구": 28177,
    "부평구": 28237,
    "서구": 28260,
    "연수구": 28185,
    "옹진군": 28720,
    "중구": 28110
  },
  "광주광역시": {
    "광산구": 29200,
    "남구": 29155,
    "동구": 29110,
    "북구": 29170,
    "서구": 29140
  },
  "대전광역시": {
    "대덕구": 30230,
    "동구": 30110,
    "서구": 30170,
    "유성구": 30200,
    "중구": 30140
  },
  "울산광역시": {
    "남구": 31140,
    "동구": 31170,
    "북구": 31200,
    "울주군": 31710,
    "중구": 31110
  },
  "세종특별자치시": {
    "세종특별자치시": 36110
  },
  "경기도": {
    "가평군": 41820,
    "고양시 덕양구": 41281,
    "고양시 일산동구": 41285,
    "고양시 일산서구": 41287,
    "과천시": 41290,
    "광명시": 41210,
    "광주시": 41610,
    "구리시": 41310,
    "군포시": 41410,
    "김포시": 41570,
    "남양주시": 41360,
    "동두천시": 41250,
    "부천시": 41190,
    "성남시 분당구": 41135,
    "성남시 수정구": 41131,
    "성남시 중원구": 41133,
    "수원시 권선구": 41113,
    "수원시 영통구": 41117,
    "수원시 장안구": 41111,
    "수원시 팔달구": 41115,
    "시흥시": 41390,
    "안산시 단원구": 41273,
    "안산시 상록구": 41271,
    "안성시": 41550,
    "안양시 동안구": 41173,
    "안양시 만안구": 41171,
    "양주시": 41630,
    "양평군": 41830,
    "여주시": 41670,
    "연천군": 41800,
    "오산시": 41370,
    "용인시 기흥구": 41463,
    "용인시 수지구": 41465,
    "용인시 처인구": 41461,
    "의왕시": 41430,
    "의정부시": 41150,
    "이천시": 41500,
    "파주시": 41480,
    "평택시": 41220,
    "포천시": 41650,
    "하남시": 41450,
    "화성시": 41590
  },
  "강원도": {
    "강릉시": 42150,
    "고성군": 42820,
    "동해시": 42170,
    "삼척시": 42230,
    "속초시": 42210,
    "양구군": 42800,
    "양양군": 42830,
    "영월군": 42750,
    "원주시": 42130,
    "인제군": 42810,
    "정선군": 42770,
    "철원군": 42780,
    "춘천시": 42110,
    "태백시": 42190,
    "평창군": 42760,
    "홍천군": 42720,
    "화천군": 42790,
    "횡성군": 42730
  },
  "충청북도": {
    "괴산군": 43760,
    "단양군": 43800,
    "보은군": 43720,
    "영동군": 43740,
    "옥천군": 43730,
    "음성군": 43770,
    "제천시": 43150,
    "증평군": 43745,
    "진천군": 43750,
    "청주시 상당구": 43111,
    "청주시 서원구": 43112,
    "청주시 청원구": 43114,
    "청주시 흥덕구": 43113,
    "충주시": 43130
  },
  "충청남도": {
    "계룡시": 44250,
    "공주시": 44150,
    "금산군": 44710,
    "논산시": 44230,
    "당진시": 44270,
    "보령시": 44180,
    "부여군": 44760,
    "서산시": 44210,
    "서천군": 44770,
    "아산시": 44200,
    "예산군": 44810,
    "천안시 동남구": 44131,
    "천안시 서북구": 44133,
    "청양군": 44790,
    "태안군": 44825,
    "홍성군": 44800
  },
  "전라북도": {
    "고창군": 45790,
    "군산시": 45130,
    "김제시": 45210,
    "남원시": 45190,
    "무주군": 45730,
    "부안군": 45800,
    "순창군": 45770,
    "완주군": 45710,
    "익산시": 45140,
    "임실군": 45750,
    "장수군": 45740,
    "전주시 덕진구": 45113,
    "전주시 완산구": 45111,
    "정읍시": 45180,
    "진안군": 45720
  },
  "전라남도": {
    "강진군": 46810,
    "고흥군": 46770,
    "곡성군": 46720,
    "광양시": 46230,
    "구례군": 46730,
    "나주시": 46170,
    "담양군": 46710,
    "목포시": 46110,
    "무안군": 46840,
    "보성군": 46780,
    "순천시": 46150,
    "신안군": 46910,
    "여수시": 46130,
    "영광군": 46870,
    "영암군": 46830,
    "완도군": 46890,
    "장성군": 46880,
    "장흥군": 46800,
    "진도군": 46900,
    "함평군": 46860,
    "해남군": 46820,
    "화순군": 46790
  },
  "경상북도": {
    "경산시": 47290,
    "경주시": 47130,
    "고령군": 47830,
    "구미시": 47190,
    "군위군": 47720,
    "김천시": 47150,
    "문경시": 47280,
    "봉화군": 47920,
    "상주시": 47250,
    "성주군": 47840,
    "안동시": 47170,
    "영덕군": 47770,
    "영양군": 47760,
    "영주시": 47210,
    "영천시": 47230,
    "예천군": 47900,
    "울릉군": 47940,
    "울진군": 47930,
    "의성군": 47730,
    "청도군": 47820,
    "청송군": 47750,
    "칠곡군": 47850,
    "포항시 남구": 47111,
    "포항시 북구": 47113
  },
  "경상남도": {
    "거제시": 48310,
    "거창군": 48880,
    "고성군": 48820,
    "김해시": 48250,
    "남해군": 48840,
    "밀양시": 48270,
    "사천시": 48240,
    "산청군": 48860,
    "양산시": 48330,
    "의령군": 48720,
    "진주시": 48170,
    "창녕군": 48740,
    "창원시 마산합포구": 48125,
    "창원시 마산회원구": 48127,
    "창원시 성산구": 48123,
    "창원시 의창구": 48121,
    "창원시 진해구": 48129,
    "통영시": 48220,
    "하동군": 48850,
    "함안군": 48730,
    "함양군": 48870,
    "합천군": 48890
  },
  "제주특별자치도": {
    "서귀포시": 50130,
    "제주시": 50110
  }
};
var month = [
            { value: '01', text: '1월' },
            { value: '02', text: '2월' },
            { value: '03', text: '3월' },
            { value: '04', text: '4월' },
            { value: '05', text: '5월' },
            { value: '06', text: '6월' },
            { value: '07', text: '7월' },
            { value: '08', text: '8월' },
            { value: '09', text: '9월' },
            { value: '10', text: '10월' },
            { value: '11', text: '11월' },
            { value: '12', text: '12월' }
        ];
$(function () {
    $("#dealYear").dxTextBox({
        placeholder: "거래 기준 연도를 입력하세요",
        showClearButton: true,
        width: 500,
    });

    $("#dealMonth").dxSelectBox({
		dataSource: month,
        placeholder: "거래 기준 달을 입력하세요",
        displayExpr: 'text',
        valueExpr: 'value',
        width: 500,
    });

    $("#regionSelect").dxSelectBox({
        dataSource: Object.keys(regionData),
        placeholder: "지역(도/광역시)을 선택하세요",
        searchEnabled: true,
        width: 500,
        onValueChanged: function (data) {
            updateSubregionSelect(data.value);
        }
    });

	$("#subRegionSelect").dxSelectBox({
        dataSource: [],
        placeholder: "지역(시/군/구)을 선택하세요",
        searchEnabled: true,
        width: 500,
        onValueChanged: function (data) {
            data.value;
        }
    });

    function updateSubregionSelect(region) {
        var subregionData = regionData[region] || [];
        var dataRows = Object.keys(subregionData);
        
        $("#subRegionSelect").dxSelectBox("instance").option("dataSource", dataRows );
        $("#subRegionSelect").css("display", "");
    }
    $("#dong").dxTextBox({
        placeholder: "읍/면/동을 입력하세요(예: 구갈동)",
        showClearButton: true,
        searchEnabled: true,
        width: 500,
    });
    $("#AptName").dxTextBox({
        placeholder: "아파트 이름을 입력하세요(예: 힐스테이트기흥)",
        showClearButton: true,
        searchEnabled: true,
        width: 500,
    });

    $("#submitButton").dxButton({
        text: "조회",
        onClick: function () {
			clickSubmitBtn();
        }
    });
});


function clickSubmitBtn(){
			//$( '.box1' ).hide();
    var selectedRegion = $("#regionSelect").dxSelectBox("instance").option("value");
    var selectedSubregion = $("#subRegionSelect").dxSelectBox("instance").option("value");
    var dealYear = $("#dealYear").dxTextBox("instance").option("value");
    var dealMonth = $("#dealMonth").dxSelectBox("instance").option("value");
    var dong = $("#dong").dxTextBox("instance").option("value");
    var AptName = $("#AptName").dxTextBox("instance").option("value");

    if (selectedRegion && selectedSubregion && dealYear && dealMonth && dong) {
        var subregionCode = regionData[selectedRegion][selectedSubregion];
        var dealYmd = dealYear + dealMonth;
        if (dealYear>2023){alert("숫자가 너무 큽니다.");} 
        else{
	        $.ajax({
			    url: "/api/data",
			    method: "GET",
			    data: { lawdCd: subregionCode, dealYmd: dealYmd, dong: dong, aptName: AptName },
			    success: function (response) {
			        alert("요청 성공");
			        //console.log(response);
	
			        var data = [];
			        $(response).find('tbody tr').each(function () {
			            var aptName = $(this).find('td:eq(0)').text().trim();
			            var dealAmount = $(this).find('td:eq(1)').text().trim();
			            var floor = $(this).find('td:eq(2)').text().trim();
			            var legalDong = $(this).find('td:eq(3)').text().trim();
			            var date = $(this).find('td:eq(4)').text().trim();
			
			            data.push({
			                아파트: aptName,
			                거래연월일: date,
			                거래금액: dealAmount,
			                층: floor,
			                법정동: legalDong
			            });
			        });
			
			        $("#gridContainer").dxDataGrid({
			            dataSource: data,
			            columns: [
			                { dataField: '아파트', caption: '아파트 이름' },
			                { dataField: '거래연월일', caption: '거래연월일' },
			                { dataField: '거래금액', caption: '거래금액' },
			                { dataField: '층', caption: '아파트 층' },
			                { dataField: '법정동', caption: '법정동' }
			            ],
			            showBorders: true,
			            showRowLines: true,
			            width: 1000,
			            noDataText: '데이터가 없습니다.'
			        });
			        document.getElementById("generatePdfButton").style.display = "";
			        //$("#generatePdfButton").css("display", "");
			    	document.getElementById("generatePdfButton").addEventListener("click", function savePDF(){
				    //저장 영역 div id
				    html2canvas($("#gridContainer")[0]).then(function(canvas) {  
				      // 캔버스를 이미지로 변환
				      var imgData = canvas.toDataURL('image/png');
				 
				      var imgWidth = 170; // 이미지 가로 길이(mm) / A4 기준 210mm
				      var pageHeight = imgWidth * 1.414;  // 출력 페이지 세로 길이 계산 A4 기준
				      var imgHeight = canvas.height * imgWidth / canvas.width;
				      var heightLeft = imgHeight;
				      var margin = 20; // 출력 페이지 여백설정
				      var doc = new jsPDF('p', 'mm');
				      var position = 0;
				      // 첫 페이지 출력
				      doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
				      heightLeft -= pageHeight;
				 
				      // 한 페이지 이상일 경우 루프 돌면서 출력
				      while (heightLeft >= 20) {     // 35
				        position = heightLeft - imgHeight;
				        position = position - 20 ;    // -25
				 
				        doc.addPage();
				        doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
				        heightLeft -= pageHeight;
				      }
				 
				      const confirmSave = window.confirm("PDF로 저장하시겠습니까?");
			          if (confirmSave) {
			                doc.save("report.pdf");
			            }
				    });
				  });
			    },
				    error: function () {
				        alert("API 에러");
				    }
				});
			}
        } else {
            alert("아파트 이름 제외 모든 칸을 채워야합니다!");
    }
}
	