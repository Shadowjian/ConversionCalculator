let input = document.querySelector("#input")
let output = document.querySelector("#output")
let selectFrom = document.querySelector("#selectFrom").options
let selectTo = document.querySelector("#selectTo").options

let conversion = {
    meter : 1,
    kilo : 1000,
    centi : 0.01,
    milli : 0.001,
    mile : 1609.34,
    yard : 0.9144,
    foot : 0.3048,
    inch : 0.0254,
    nauticalMile : 1852
}

function chooseFrom(){
    

    for (optionFrom of selectFrom) {
        if (optionFrom.selected==true) {
            let selectedVal = optionFrom.text
            switch(selectedVal){
                case "meter":
                    updateOptionTo(conversion)
                    break;
                case "kilometer":
                    updateOptionTo(conversion)
                    break;
                case "centimeter":
                    updateOptionTo(conversion)
                    break;
                case "millimeter":
                    updateOptionTo(conversion)
                    break;
                case "mile":
                    updateOptionTo(conversion)
                    break;
                case "yard":
                    updateOptionTo(conversion)
                    break;
                case "foot":
                    updateOptionTo(conversion)
                    break;
                case "inch":
                    updateOptionTo(conversion)
                    break;
                case "nauticalMile":
                    updateOptionTo(conversion)
                    break;
            }
        }
    }
}


function updateOptionTo(val) {

    for (i in selectTo) {
        for (j in val) {
            selectTo[i].text = selectFrom[i].text+": " + input.value * val[j]
            // console.log(val[j])
        }
    }
}

function showOutput(){
    for (optionTo of selectTo) {
        if (optionTo.selected==true) {
            output.value = optionTo.text
        }
    }
    
}