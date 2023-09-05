const button=document.getElementById("search-button")
const input=document.getElementById("city-input")

const cityName=document.getElementById("city-name")
const cityTime=document.getElementById("city-time")
const cityTemp=document.getElementById("city-temp")

async function getData(cityname){
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=494616487e574f54aff210453230509&q=${cityname}&aqi=yes`)
    return await promise.json()
}

button.addEventListener("click", async () => {
    const value=input.value
    const result=await getData(value)
    console.log(result)
    cityName.innerText= `${result.location.name}, ${result.location.region} - ${result.location.country}`
    cityTime.innerText=result.location.localtime
    cityTemp.innerText=result.current.temp_c
})

//http://api.weatherapi.com/v1/current.json?key=494616487e574f54aff210453230509&q=London&aqi=yes