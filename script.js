let input = document.querySelector("#input")
let output = document.querySelector("#output")
let selectFrom = document.querySelector("#selectFrom").options
let selectTo = document.querySelector("#selectTo").options

let conversion = {
    meter : [1, 1000, 0.01, 0.001, 1609.34, 0.9144, 0.3048, 0.0256, 0.000539957],
    kilo : [1000, 1, 100000, 1e+6, 0.621, 1093.61, 3280.84, 39370.1, 0.539],
    centi : [0.01, 1e-5, 1, 10, 6.2137e-6, 0.0109, 0.0328, 0.393, 5.3996e-6],
    milli : [0.001, 1e-6, 0.1, 1, 6.2137e-7, 0.00109361, 0.00328084, 0.0393701, 5.39957095032e-7],
    mile : [1609.34, 1.60934, 160934, 1.609e+6, 1, 1760, 5280, 5280, 0.868976],
    yard : [0.9144, 0.0009144, 91.44, 914.4, 0.000568182, 1, 3, 36, 0.000493737],
    foot : [0.3048, 0.0003048, 30.48, 304.8, 0.000189394, 0.33333344, 1, 12, 0.0001645788863585],
    inch : [0.0254, 2.54e-5, 2.54, 25.4, 1.5783e-5, 0.02777808, 0.08333424, 1, 1.3715e-5],
    nauticalMile : [1852, 1.852, 185200, 1.852e+6, 1.15078, 2025.37, 6076.12, 72913.4, 1],
}

function chooseFrom(){
    for (optionFrom of selectFrom) {
        if (optionFrom.selected==true) {
            let selectedVal = optionFrom.text
            switch(selectedVal){
                case "meter":
                    updateOptionTo(conversion.meter)
                    break;
                case "kilometer":
                    updateOptionTo(conversion.kilo)
                    break;
                case "centimeter":
                    updateOptionTo(conversion.centi)
                    break;
                case "millimeter":
                    updateOptionTo(conversion.milli)
                    break;
                case "mile":
                    updateOptionTo(conversion.mile)
                    break;
                case "yard":
                    updateOptionTo(conversion.yard)
                    break;
                case "foot":
                    updateOptionTo(conversion.foot)
                    break;
                case "inch":
                    updateOptionTo(conversion.inch)
                    break;
                case "nauticalMile":
                    updateOptionTo(conversion.nauticalMile)
                    break;
                default:
                    alert('invalid input')
            }
        }
    }
}


function updateOptionTo(val) {

        for (i in val) {
            selectTo[i].text = selectFrom[i].text+": " + input.value * val[i]
    }
}

function showOutput(){
    for (optionTo of selectTo) {
        if (optionTo.selected==true) {
            output.value = optionTo.text
        }
    }
    
}