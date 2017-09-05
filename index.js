

var WEATHER_CODES_CSS_LOOKUP = JSON.stringify([
	{"code": 200,"pod": "d", "icon": "wi-owm-day-200"},
	{"code": 200,"pod": "n", "icon": "wi-owm-night-200"},

	{"code": 201, "pod":"d", "icon": "wi-owm-day-201"},
	{"code": 201, "pod":"n", "icon": "wi-owm-night-201"},

	{"code": 202, "pod":"d", "icon": "wi-owm-day-202"},
	{"code": 202, "pod":"n", "icon": "wi-owm-night-202"},

	{"code": 230, "pod":"d", "icon": "wi-owm-day-230"},
	{"code": 230, "pod":"n", "icon": "wi-owm-night-230"},

	{"code": 231, "pod":"d", "icon": "wi-owm-day-231"},
	{"code": 231, "pod":"n", "icon": "wi-owm-night-231"},

	{"code": 232, "pod":"d", "icon": "wi-owm-day-232"},
	{"code": 232, "pod":"n", "icon": "wi-owm-night-232"},
	
	{"code": 701,"pod":"d", "icon": "wi-owm-day-701"},
	{"code": 701,"pod":"n", "icon": "wi-owm-night-701"},
	{"code": 711,"pod":"d", "icon": "wi-owm-day-711"},
	{"code": 711,"pod":"n", "icon": "wi-owm-night-711"},
	{"code": 721,"pod":"d", "icon": "wi-owm-day-721"},
	{"code": 721,"pod":"n", "icon": "wi-owm-night-721"},
	{"code": 731,"pod":"d", "icon": "wi-owm-day-731"},
	{"code": 731,"pod":"n", "icon": "wi-owm-night-731"},
	{"code": 741,"pod":"d", "icon": "wi-owm-day-741"},
	{"code": 741,"pod":"n", "icon": "wi-owm-night-741"},
	{"code": 751,"pod":"d", "icon": "wi-owm-day-751"},
	{"code": 751,"pod":"n", "icon": "wi-owm-night-751"},

	{"code": 800,"pod":"d", "icon": "wi-owm-day-800"},
	{"code": 800,"pod":"n", "icon": "wi-owm-night-800"},
	{"code": 801,"pod":"d", "icon": "wi-owm-day-801"},
	{"code": 801,"pod":"n", "icon": "wi-owm-night-801"},
	{"code": 802,"pod":"d", "icon": "wi-owm-day-802"},
	{"code": 802,"pod":"n", "icon": "wi-owm-night-802"},
	{"code": 803,"pod":"d", "icon": "wi-owm-day-803"},
	{"code": 803,"pod":"n", "icon": "wi-owm-night-803"},
	{"code": 804,"pod":"d", "icon": "wi-owm-day-804"},
	{"code": 804,"pod":"n", "icon": "wi-owm-night-804"},
	
	
	
	{"code": 300, "pod":"d", "icon": "wi-owm-day-300"},
	{"code": 300, "pod":"n", "icon": "wi-owm-night-300"},
	{"code": 301,"pod":"d", "icon": "wi-owm-day-301"},
	{"code": 301,"pod":"n", "icon": "wi-owm-night-301"},
	{"code": 302,"pod":"d", "icon": "wi-owm-day-302"},
	{"code": 302,"pod":"n", "icon": "wi-owm-night-302"},
	{"code": 500,"pod":"d", "icon": "wi-owm-day-500"},
	{"code": 500,"pod":"n", "icon": "wi-owm-night-500"},
	{"code": 501,"pod":"d", "icon": "wi-owm-day-501"},
	{"code": 501,"pod":"n", "icon": "wi-owm-night-501"},
	{"code": 502,"pod":"d", "icon": "wi-owm-day-502"},
	{"code": 502,"pod":"n", "icon": "wi-owm-night-502"},
	{"code": 511,"pod":"d", "icon": "wi-owm-day-511"},
	{"code": 511,"pod":"n", "icon": "wi-owm-night-511"},
	{"code": 520,"pod":"d", "icon": "wi-owm-day-520"},
	{"code": 520,"pod":"n", "icon": "wi-owm-night-520"},
	{"code": 521,"pod":"d", "icon": "wi-owm-day-521"},
	{"code": 521,"pod":"n", "icon": "wi-owm-night-521"},
	{"code": 522,"pod":"d", "icon": "wi-owm-day-522"},
	{"code": 522,"pod":"n", "icon": "wi-owm-night-522"},

	{"code": 600,"pod":"d", "icon": "wi-owm-day-600"},
	{"code": 600,"pod":"n", "icon": "wi-owm-night-600"},
	{"code": 601,"pod":"d", "icon": "wi-owm-day-601"},
	{"code": 601,"pod":"n", "icon": "wi-owm-night-601"},
	{"code": 602,"pod":"d", "icon": "wi-owm-day-602"},
	{"code": 602,"pod":"n", "icon": "wi-owm-night-602"},
	{"code": 610,"pod":"d", "icon": "wi-owm-day-610"},
	{"code": 610,"pod":"n", "icon": "wi-owm-night-610"},
	{"code": 611,"pod":"d", "icon": "wi-owm-day-611"},
	{"code": 611,"pod":"n", "icon": "wi-owm-night-611"},
	{"code": 612,"pod":"d", "icon": "wi-owm-day-612"},
	{"code": 612,"pod":"n", "icon": "wi-owm-night-612"},
	{"code": 621,"pod":"d", "icon": "wi-owm-day-621"},
	{"code": 621,"pod":"n", "icon": "wi-owm-night-621"},
	{"code": 622,"pod":"d", "icon": "wi-owm-day-622"},
	{"code": 622,"pod":"n", "icon": "wi-owm-night-622"},
	{"code": 623,"pod":"d", "icon": "wi-owm-day-623"},
	{"code": 623,"pod":"n", "icon": "wi-owm-night-623"},


	]);
$(document).ready(function(){

	var cityToSearch = "Reading";

	var weather_apikey = 'f9788b32cebc4fd79821bb11a1b30ec4';

	
	var imgLookup = JSON.parse(WEATHER_CODES_CSS_LOOKUP);

	function findIconfromMatchingCode(arr,ajaxcode){
		var res = arr.filter(function(o){ 
			if((o.code == ajaxcode.weather.code)&& (o.pod === ajaxcode.pod))
				return o;  
			}
		);
		return res? res[0].icon : null;
	}


	function ajaxCalltogetIcon(iconCode, idPassed){
		
    var icon = document.createElement("i");
    icon.setAttribute("class","wi " + iconCode);
	
	$("."+idPassed)[0].append(icon);

	}// end of function to get png icon for weather

	var temp_format = 'default';

	$('small[name="temp_format"]').on('click',function(){
		if($(this).data('value') == "fahrenheit"){
			temp_format = "I";
		}else{
			temp_format = 'default';
		}

		$(this).parent().children().each(function(){

			$(this).removeClass("celc_tag");
		});

		$(this).addClass("celc_tag");
		if(temp_format == "I"){
			urlapi = "https://api.weatherbit.io/v2.0/current?city="+cityToSearch+"&units="+temp_format+"&key=f9788b32cebc4fd79821bb11a1b30ec4";
		}else{
			urlapi = "https://api.weatherbit.io/v2.0/current?city="+cityToSearch+"&key=f9788b32cebc4fd79821bb11a1b30ec4";
		}

		var encurl = encodeURI(urlapi);
		$.ajax({
		type: "GET",
		url: encurl,
		dataType: "json",
		success:function(weatherdata,  textStatus, jqXHR ){
			console.log("successful",weatherdata,jqXHR.status);

			if(jqXHR.status === 200){

				if(temp_format == "I"){
				$(".today_Act_temp").text("Actual Temp " + weatherdata.data[0].app_temp + " \xB0F" );

				$(".today_Feels_likeTemp").text("Feels Like " + weatherdata.data[0].temp +" \xB0F" );

				$(".today_wind").text(" Wind " + weatherdata.data[0].wind_spd + "\xA0mph");

			}else{
				$(".today_Act_temp").text("Actual Temp " + weatherdata.data[0].app_temp +" \xB0C" );

				$(".today_Feels_likeTemp").text("Feels Like " + weatherdata.data[0].temp +" \xB0C" );
				$(".today_wind").text(" Wind " + weatherdata.data[0].wind_spd + "\xA0m/s");
			}
				
			
			}// only if status is 200

		}

	});
		
	})

	
	callWeatherApi();
	
	function processToGetIcon(ajaxData, pngImgId){

		//call function to get the icon from the array of objects by passing weather code returned
			var icontoFetch = findIconfromMatchingCode(imgLookup, ajaxData);
			
			
			 ajaxCalltogetIcon(icontoFetch, pngImgId);
			

		
	}

	function callWeatherApi(){

		var urlapi = "https://api.weatherbit.io/v2.0/current?city="+cityToSearch+"&key=f9788b32cebc4fd79821bb11a1b30ec4";


	var encurl = encodeURI(urlapi);

		$.ajax({
		type: "GET",
		url: encurl,
		dataType: "json",
		success:function(weatherdata,  textStatus, jqXHR ){
			console.log("successful",weatherdata,jqXHR.status);

			if(jqXHR.status === 200){
				$(".today_txt_desc").text(weatherdata.data[0].weather.description);

			$(".cityName").text(weatherdata.data[0].city_name + ", " + weatherdata.data[0].country_code);
			//var temp = "wea_img";
			var temp = "today_wea_img_sp";
			processToGetIcon(weatherdata.data[0],temp );

			$(".today_Act_temp").text("Actual Temp " + weatherdata.data[0].app_temp +" \xB0C" );

			$(".today_Feels_likeTemp").text("Feels Like " + weatherdata.data[0].temp +" \xB0C" );
			$(".today_wind").text(" Wind " + weatherdata.data[0].wind_spd + "\xA0m/s");
			
			var date = new Date();
			$(".today_dateTime").text(date.toDateString());
			
			if(!weatherdata.data[0].precip)
				$(".today_precip").text(" Precipitation 0 %");
			else
				$(".today_precip").text(" Precipitation " + weatherdata.data[0].precip  + "%");
			
			$(".today_humid").text(" Humidity " + weatherdata.data[0].rh + "%");
			}

			

		},
		error: function(e){
			console.log("not right",e);
		}

	});

	}//end of function to get current weather

	

	//given a number, returns an array in [year, month ,day] format which is the current date - number
	function calcLastDates(nofDaysBack){

		var days  = nofDaysBack; // Days you want to subtract
		var date = new Date();
		var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
		console.log(last.toDateString());
		var resDate = [];
		var day =last.getDate();
		
		var month=last.getMonth()+1;
		
		var year=last.getFullYear();
		resDate.push(year);
		resDate.push(month);
		resDate.push(day);
		return resDate;

	}

	
	function callHistoricalWeatherAPi(stDate,endDate,iter){

		
		var histUrl = "https://api.weatherbit.io/v2.0/history/hourly?key=f9788b32cebc4fd79821bb11a1b30ec4&city="+cityToSearch+"&start_date="+stDate+"&end_date="+endDate;

		var encodeHist = encodeURI(histUrl);
		$.ajax({
		type: "GET",
		url: encodeHist,
		dataType: "json",
		success:function(histday,textStatus, jqXHR){
				console.log(histday);
				//only go ahead with reloading if the status of AJAX call is 200
				if(jqXHR.status === 200){

					var table = document.getElementById("history_weather_table").getElementsByTagName('tbody')[0];



				var row  = document.createElement("tr");
				table.appendChild(row);
				//insert 6 columnds for each row
				var cellArr = [];
				for(var j=0;j<6;j++){
					cellArr[j] = row.insertCell(j);
				}

				var histDatesArr = [];
				histDatesArr = calcLastDates(iter); 
				var getThatDate = getDates(histDatesArr);

				cellArr[0].innerHTML = getThatDate;
				var iconSpanElem = document.createElement("span");
				iconSpanElem.setAttribute("class","hist_img_id"+iter);

				
				cellArr[0].appendChild(iconSpanElem);

				var historicalAjax; //the API returns hourly historical weather data 
				//but for some cities, the data might be missing for some hours of the day
				//by default selecting a random hour with available data to show in the table
				if(histday.data.length > 0){
					historicalAjax = histday.data[histday.data.length  -1];
				}
				processToGetIcon(historicalAjax,"hist_img_id"+iter);
				cellArr[1].innerHTML = historicalAjax.weather.description;// column2

				cellArr[2].innerHTML = historicalAjax.temp + " \xB0C" ;

				if(historicalAjax.precip )
					cellArr[3].innerHTML = historicalAjax.precip + " %";
				else
					cellArr[3].innerHTML = " 0";

				cellArr[4].innerHTML = historicalAjax.wind_spd + "\xA0mph";

				cellArr[5].innerHTML = historicalAjax.rh + " %";

				}

			}
		});


	}

	function getDates(arr){
		//using the array with stored date passed , 
		//date object calculated month from 0 to 11 but month used here is from 1 to 12
		var gd = new Date(arr[0], arr[1]-1, arr[2]);

		return (gd.toISOString().slice(0,gd.toISOString().indexOf('T')));// ISO format of date 2017-10-02T04:00:00.000Z, so truncating the time

	}

	//call the function to update the history weather table
	calcAndPopulateHistWeatherTable();

	function calcAndPopulateHistWeatherTable(){

		var datesArr = [];
		//index starting with 1 so that the number passed to calcLastDates function is calculting the date from previous day or before
		for(var i=1;i<=7;i++){

			// get back an array in the format[year, month, day] all numbers

			datesArr = calcLastDates(i); 
			var getStartDate = getDates(datesArr);// has the start date in yyyy-mm-dd format as required
			datesArr = null;

			//to get end date, add 1 to start date, end date and start date cannot be same for the API used
			//since we start with index 1 we supply index -1 for previous value
			//reusing datesArr to calculate end date by setting it to null
			datesArr= calcLastDates(i-1); 

			var getEndDate = getDates(datesArr);// has the end date in yyyy-mm-dd format as required

			callHistoricalWeatherAPi(getStartDate, getEndDate,i-1)

		}//for loop to loop through last 7 days and get the weather

		

	}
	
	$( "#cityNameSubmit" ).submit(function( event ) {
  		
  		if($("#history_weather_table tbody tr").length > 0){
			$("#history_weather_table tbody").empty();
		}
  		event.preventDefault();

  		cityToSearch = this.children[0].value;

  		//replace history table
  		calcAndPopulateHistWeatherTable();
  		callWeatherApi();
  		this.children[0].value = "";

  		$("td>span").each(function(){
			$(this).style.paddingLeft = "10px";
		})
});
	

})