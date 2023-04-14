console.log("first");

const baseUrl = `http://localhost:8000`;

window.onload = async function() {
    try {
        let params = await (await fetch(`${baseUrl}/getParam`)).json();
        // console.log(params);

        for (let i in params) {
            // let a = Object.values(params[is]);
            let a = params[i]
                // console.log(a)
            let sourceLang = document.createElement("option");
            let destLang = document.createElement("option");
            sourceLang.value = a.code;
            sourceLang.text = a.name;

            destLang.value = a.code;
            destLang.text = a.name;

            document.getElementById("sourceLang").add(sourceLang);
            document.getElementById("destLang").add(destLang);
            // console.log(a);

            // console.log(params[is]);
        }
    } catch (e) {
        console.log(e);
    }
};



async function translateText() {
    console.log("Hello Translate")
    let sourceLang = document.getElementById("sourceLang").value;
    let destLang = document.getElementById("destLang").value;
    let sourceText = document.getElementById("sourceText").value;


    let mainData = {
        sourceLang,
        destLang,
        sourceText
    }

    let d = await (await fetch("http://localhost:8000/translate", {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(mainData),

    })).json()

    // console.log(d)
    if (d.translatedText == "null") {
        alert(`${d.msg}`);
    } else {
        document.getElementById("destText").value = d.translatedText;
    }

}