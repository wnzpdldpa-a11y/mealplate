import React, { useEffect, useState } from 'react'
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react'

/* 
1. 슬라이드에 들어갈 사진 3장+alt로 이미지 제목
2. 지금 몇 번째 이미지인지 순서를 기억
   -> slideIndex(변수) / setSlideIndex(index번호를 업데이트해주는 함수) => useState
3. 3초마다 다음 사진으로 바뀜 -> timer
4. < > 인디케이터를 클릭해도 사진이 바뀜 
*/

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1470",
    alt: "그릴드 연어 헬시 플레이트"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?q=80&w=1470",
    alt: "프레쉬 그린 샐러드"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1539735776517-befcae86494d?q=80&w=1479",
    alt: "아보카도 에그 토스트"
  }
]
/* console.log(slides)
slides.map((img) => {
  console.log('img', img)
})
 */
function HeroSlider() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      //초기변수 slideIndex = 0이 저장
      //setSlideIndex라는 함수를 실행하면 매개변수명 currentIndex에 0이 전달되서 실행
      setSlideIndex((currentIndex) => {
        //console.log("현재 currentIndex:", currentIndex);
        return (currentIndex + 1) % slides.length;
      });
    }, 3000);


    return () => clearInterval(timer);
  }, []);

  const prevSlider = () =>{
    setSlideIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length)
  }
    
  const nextSlider = () => {
    setSlideIndex((currentIndex) => (currentIndex + 1) % slides.length);    
  }

  return (
    <div className="hero-slide">
      <img
        src={slides[slideIndex].image}
        alt={slides[slideIndex].alt} />

      <button
        className='slide-btn prev'
        onClick={prevSlider}
        aria-label='이전 이미지'
      ><CircleChevronLeft size={44} color="rgba(255,255,255,0.8)"/></button>
      <button
        className='slide-btn next'
        onClick={nextSlider}
        aria-label='다음 이미지'
      ><CircleChevronRight size={44} color="rgba(255,255,255,0.8)"/></button>

      <div className="slide-dots">
        {
          slides.map((slide, index) => (
            <button
              key={index}
              className={index === slideIndex ? 'on' : ''}
              onClick={() => setSlideIndex(index)}
              aria-label={`${index + 1}번 이미지`}
            />
          ))
        }
      </div>
    </div>
  )

}

export default HeroSlider