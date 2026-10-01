import React from 'react'


function About() {
  return (
    <div>
      <section className="about-page">
        <p className="eyebrow">ABOUT MEALLIGHT</p>
        <h2>건강한 식사의 빛을 비추다</h2>
        <p className="text">MealLight는 어렵고 복잡한 식단보다 일상에서 꾸준히 실천할 수 있는 가벼운 식사 아이디어를 제안하는 가상의 건강 라이프 브랜드입니다.</p>
        <div className="about-grid">
          <article>
            <strong>01</strong>
            <h3>LIGHT MEAL</h3>
            <p>부담 없이 시작할 수 있는 한 끼 아이디어</p>
          </article>
          <article>
            <strong>02</strong>
            <h3>DAILY TIP</h3>
            <p>식사·운동·휴식을 연결한 생활 습관</p>
          </article>
          <article>
            <strong>03</strong>
            <h3>MY ROUTINE</h3>
            <p>나에게 맞는 건강 루틴을 찾아가는 과정</p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default About