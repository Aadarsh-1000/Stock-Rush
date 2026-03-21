# Stock Rush

- **Stock Rush** is a website turned game which helps you to predict somewhat of the market movement and mainly to give you something to play with. The main goal of      the game is to help you learn and play.

-----
<img width="1919" height="901" alt="image" src="https://github.com/user-attachments/assets/93b9d2d4-bde7-4a3a-a3c4-bbcc3ecadc5c" />
<img width="1919" height="907" alt="image" src="https://github.com/user-attachments/assets/5c71dbe5-5f38-4ac3-8481-aae8fd032411" />

------

  
  > It is equipped with several levels and achievements to help you engage in the game play and alos whaving an unique style embedded into the website.
    
  > Below you can see the various file structures and images of the website. As the levels get harder the pattern becomes less recognisable.
------------

## Working and Overview

- The game is designed for you to experience the thrill of investing and earning profits as wee as losses without facing any actual damages. In the firt few levels      the market is mostly calm but as you go through the restof them you really have to use your instincts more than logic.

- If you have seen the demo before you have read the readme you would've seen the ***3D model*** in the homepage of the website. This specific 3D model was made by me and was displayed by the use of ***ThreeJS.***

- I made the 3D models i made in blender i have the proff in fianl devlog as well..

 ---
 <img width="1625" height="997" alt="image" src="https://github.com/user-attachments/assets/d948570e-0f43-479b-b6bf-5c50d37ead89" />
 
---
- I Made the chart using Chart JS and a random number function which plots numbers and then is plotted by the chart. And if you are wondering how I could complete it I have expirience with it with stock it up which is one of my older projects

- Anyway i really enjoyed making this project. I made this project to learn JS. Overall I really loved how it turned out.

  ## Inspiration Taken

  - As for the Home Page the inspiration used was - [Video](https://youtu.be/oskiEydAaok)
  - As for the Main website the website used for inspiration was [Dribbble](https://dribbble.com)
 
  ## JS Template 

  - The ChartJS js BoilerPlate is written by Chatgpt however the template was sourced from their offical website as I could not get it.
 
  - The boiler Plate used is written Below

-----
     let chart = new Chart(canvas, {
                type: 'candlestick',
                data: {
                    datasets: [{
                        data: candles,
                        barThickness: 12,
                        maxBarThickness: 18,
                    }]
                },
                options: {
                    animation: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { type: 'time' }
                    }
                }
            })
-----
