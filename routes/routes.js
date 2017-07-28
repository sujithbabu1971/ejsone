// Outside world refers this as homeFn though the function name is cityInternalFn
module.exports.homeFn = function cityInternalFn(req,res)
{
	res.render("home.ejs", {"title": "I love my city",
	"headLine":"Every city has its own personality"});
}

// Outside world refers this as cityFn though the function name is cityInternalFn
module.exports.cityFn = function cityInternalFn(req,res)
{
	var cityName = req.params.city;
	var headLineValue;
	if(cityName==="london")
	{
		headLineValue=cityName+ " is the city of queen";
	}
	else if (cityName==="newyork")
	{
		headLineValue=cityName+ " is the business capital  of the world";
	}
	else if (cityName==="newdelhi")
	{
		headLineValue=cityName+ " is the capital of India";
	}
	else if (cityName==="havana")
	{
		headLineValue=cityName+ " is the tourist capital  of the world";
	}
	else if (cityName==="paris")
	{
		headLineValue=cityName+ " is the fashion capital  of the world";
	}
	res.render("city.ejs", {"title": cityName,
	"headLine":headLineValue});
}

