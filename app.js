
let url = "http://universities.hipolabs.com/search?name=";

async function getCollege(country) {
  try {
    let res = await axios.get(url + country);
    let data = res.data;
    console.log(res)
    console.log(data);
  
    
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}


let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let input = document.querySelector("input").value.trim();
  if (!input) {
    alert("Please enter a valid search term!");
    return;
  }

  let collegeArray = await getCollege(input);



  // Append the new data
  for (let val of collegeArray) {
    showData(val.name);
  }
});










function showData(data) {
    let ul = document.querySelector("#list");
    let li = document.createElement("li");
    li.innerText = data;
    ul.appendChild(li);
  }







