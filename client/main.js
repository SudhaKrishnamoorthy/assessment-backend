const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4001/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
}
const fortuneBtn = document.getElementById("fortuneButton")
const getFortune = () => {
    axios.get("http://localhost:4001/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
}
const inspirationBtn = document.getElementById("inspirationButton")
const getInspiration = () => {
    axios.get("http://localhost:4001/api/inspiration/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
}

  
  
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
inspirationBtn.addEventListener('mouseover', getInspiration)