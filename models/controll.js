const axios = require("axios");

async function translateString(userInput) {

    let { sourceLang, destLang, sourceText } = userInput;

    try {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", `${sourceText}`);
        encodedParams.append("target", `${destLang}`);
        encodedParams.append("source", `${sourceLang}`);

        const options = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'cf8b553badmsh4629376cfc2c37bp1792c2jsn2fdc1cdd85d9',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            data: encodedParams
        };

        console.log(sourceText);
        if (sourceText == "") {
            let statusData = { msg: "Please Enter the Text", translatedText: "null" };
            return statusData;
        } else {
            let data = await axios.request(options)
                // console.log(data)
            let statusData = data.data.data.translations[0];
            // console.log(statusData)

            return statusData;
        }


    } catch (e) {
        let statusData = { msg: "Please Select Valid Language", translatedText: "null" };
        console.log(e);
        return statusData;
    }


}

module.exports = { translateString };