import React, { createRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  const btn:any = createRef();
  const check:any = createRef();
  useEffect(
    () => {
      window.onscroll = handleScroll;
    }
    ,[]
  )

  const handleScroll = (scrollObject:any) => {
    const checkBox = check.current;
    const checktop = check.current.getBoundingClientRect().top;
    const checkright = check.current.getBoundingClientRect().right;
    const elem = btn.current;


    if (checktop < 50){
      elem.style.position = "fixed";
      elem.style.top = (window.innerHeight - 60) + 'px';
      elem.style.right = (20) + 'px';
      elem.innerText = ">"
      elem.style.width = "40px";
    }
    else if (checktop > 50){
      elem.style.top = checktop + 'px';
      elem.style.right = (checkright - 120) + 'px';
      elem.innerText = "Touch";
      elem.style.width = "120px";
      // setTimeout(() => {elem.style.position = "static"},500)
    }
    else {
      return
    }
  }
  return (
    <div className="App">
      <div className="header">
        <h2>Lorem, ipsum.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum totam dolorem fugiat aperiam error ipsa adipisci voluptatum praesentium odio accusamus possimus, vel nam repudiandae provident pariatur quos at molestiae incidunt perferendis. Sed hic assumenda quaerat tenetur dolorem quia omnis fuga fugit magnam qui, ratione ut, modi repellendus voluptatibus cumque? Dolore cumque amet libero necessitatibus dolor minima quidem nam! Sed, fugit iste. Ut nihil ipsam ea repudiandae voluptates! Ea quidem eos est labore ducimus, illum eveniet hic, animi, tempore adipisci ad ut culpa iste exercitationem cumque voluptate. Officiis incidunt voluptatem magnam quaerat tempora voluptate, debitis eius aut, iste repudiandae cum quisquam tempore voluptatibus ullam, sapiente velit dignissimos eum consequatur quae. Dolore aliquid, quam suscipit veniam ullam necessitatibus numquam ducimus quas, aperiam in laborum quis dolor voluptate ipsa possimus natus reprehenderit tenetur provident obcaecati impedit doloremque veritatis deleniti. Quia, sequi! Culpa voluptatum, non labore officia iste quas incidunt cum accusamus dolores, fugit autem repellendus possimus nemo illum rerum dolore! Provident perferendis laudantium sint a. Placeat exercitationem magnam iste explicabo a vero qui. Inventore minus omnis architecto! Minima ea ipsa, doloribus obcaecati corporis possimus ab maxime dignissimos. Sunt, suscipit. Distinctio sint, qui soluta nisi explicabo vero ex, fugit commodi quod, molestiae eveniet.
        
        </p>
        <div className="check" ref={check}>

          <button ref={btn}>
            Touch
          </button>
        </div>
      </div>
      <div className="long"></div>
    </div>
  );
}

export default App;
