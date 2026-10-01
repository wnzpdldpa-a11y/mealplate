import React, { useState } from 'react'

const tipData = [
  {
    id: 'meal',
    button: '🍱 식사',
    title: '건강한 식사습관',
    desc: '무조건 적게 먹기보다 규칙적인 식사와 다양한 식품을 고르게 선택하는 습관이 중요합니다.',
    tips: ['천천히 먹기', '식사 전 물 한 컵', '접시의 절반을 채소로 구성하기', '가공식품 섭취 줄이기']
  },
  {
    id: 'exercise',
    button: '🚵 운동',
    title: '일상 속 움직임 늘리기',
    desc: '거창한 운동 계획보다 걷기, 계단 이용처럼 매일 반복할 수 있는 활동부터 시작해보세요.',
    tips: ['하루 30분 걷기', '아침과 자기 전 스트레칭', '가까운 거리는 걸어가기', '주 2~3회 가벼운 근력 운동']
  },
  {
    d: 'rest',
    button: '🍂 휴식',
    title: '규칙적인 휴식',
    desc: '충분한 수면과 짧은 휴식은 하루의 집중력과 컨디션을 관리하는 데 중요합니다.', tips: ['비슷한 시간에 자고 일어나기', '잠들기 전 전자기기 줄이기', '5분 정도 조용히 호흡하기', '피곤할 때 짧게 쉬기']
  },
]


function Tips() {
  const [activeTab, setActiveTab] = useState('meal');
  const activeTip = tipData.find((item) => item.id === activeTab)

  return (
    <div className="contents">
      <section>
        <h2>생활 속 건강 팁</h2>
        <div className="tab-buttons">
          {
            tipData.map((item) =>
              <button key={item.id}
                className={activeTab === item.id ? 'on' : ''}
                onClick={() => setActiveTab(item.id)}>
                {item.button}
              </button>
            )
          }
        </div>

        <div className="tab-panel">
          <h3>{activeTip.title}</h3>
          <p className="text">{activeTip.desc}</p>
          <h4>실천 팁</h4>
          <ul className="tip-list">
            {
              activeTip.tips.map((tip, index) => <li key={index}>{tip}</li>)
            }
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Tips