//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=UsUg2cwFkyO9OMUazj0zpuzM4qikqU8vNCfLO9Ku&date=${choice}`
  console.log(choice)

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
          document.querySelector('iframe').style.display = 'none'
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
          document.querySelector('img').style.display = 'none'
        }
         
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}