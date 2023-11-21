import React from 'react'
import CountsContent from '../../components/Counts/CountsContent'

const CountsData = [
  {
    icon: "bi bi-emoji-smile",
    number: "232",
    text: "Happy Clients"
  },
  {
    icon: "bi bi-journal-richtext",
    number: "521",
    text: "Projects"
  },
  {
    icon: "bi bi-headset",
    number: "1463",
    text: "Hours Of Support"
  },
  {
    icon: "bi bi-people",
    number: "15",
    text: "Projects"
  },
]


function Counts() {
  return (
    <div>
      <section className="Counts">
        <div className="container">
          <div className="row gy-4">
            <CountsContent Data={CountsData} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Counts
